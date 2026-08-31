param(
  [Parameter(Mandatory=$true)][string]$InputPath,
  [Parameter(Mandatory=$true)][string]$OutputDirectory
)

Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing @'
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class LogoExtractor {
  public static void Extract(string input, string outputDirectory) {
    Bitmap source = new Bitmap(input);
    var pixels = new int[source.Width * source.Height];
    var rect = new Rectangle(0, 0, source.Width, source.Height);
    var data = source.LockBits(rect, ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
    Marshal.Copy(data.Scan0, pixels, 0, pixels.Length);
    source.UnlockBits(data);

    int left = source.Width, top = source.Height, right = 0, bottom = 0;
    for (int y = 0; y < source.Height; y++) for (int x = 0; x < source.Width; x++) {
      var c = Color.FromArgb(pixels[y * source.Width + x]);
      int max = Math.Max(c.R, Math.Max(c.G, c.B));
      int min = Math.Min(c.R, Math.Min(c.G, c.B));
      bool background = min > 150 && max - min < 30;
      if (!background) { left = Math.Min(left, x); top = Math.Min(top, y); right = Math.Max(right, x); bottom = Math.Max(bottom, y); }
    }
    int pad = 12;
    left = Math.Max(0, left - pad); top = Math.Max(0, top - pad);
    right = Math.Min(source.Width - 1, right + pad); bottom = Math.Min(source.Height - 1, bottom + pad);
    int width = right - left + 1, height = bottom - top + 1;

    string[] names = { "kradiv-mark.png", "kradiv-mark-black.png", "kradiv-mark-blue.png", "kradiv-mark-coral.png" };
    for (int layer = 0; layer < names.Length; layer++) {
      Bitmap result = new Bitmap(width, height, PixelFormat.Format32bppArgb);
      var outPixels = new int[width * height];
      for (int y = 0; y < height; y++) for (int x = 0; x < width; x++) {
        var c = Color.FromArgb(pixels[(y + top) * source.Width + x + left]);
        int max = Math.Max(c.R, Math.Max(c.G, c.B));
        int min = Math.Min(c.R, Math.Min(c.G, c.B));
        bool background = min > 150 && max - min < 30;
        bool keep = !background;
        if (layer == 1) keep = keep && max < 150;
        if (layer == 2) keep = keep && c.B > c.R * 1.25 && c.B > c.G * 1.15;
        if (layer == 3) keep = keep && c.R > c.G * 1.25 && c.R > c.B * 1.15;
        outPixels[y * width + x] = keep ? Color.FromArgb(255, c.R, c.G, c.B).ToArgb() : 0;
      }
      var outRect = new Rectangle(0, 0, width, height);
      var outData = result.LockBits(outRect, ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);
      Marshal.Copy(outPixels, 0, outData.Scan0, outPixels.Length);
      result.UnlockBits(outData);
      result.Save(System.IO.Path.Combine(outputDirectory, names[layer]), ImageFormat.Png);
      result.Dispose();
    }
    source.Dispose();
  }
}
'@

New-Item -ItemType Directory -Path $OutputDirectory -Force | Out-Null
[LogoExtractor]::Extract((Resolve-Path $InputPath), (Resolve-Path $OutputDirectory))
