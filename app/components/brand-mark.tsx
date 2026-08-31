import Image from "next/image";
import { sitePath } from "../lib/site-path";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-symbol brand-symbol--compact" : "brand-symbol"} aria-hidden="true">
      <Image className="brand-symbol__static" src={sitePath("/brand/production/kradiv-mark.png")} alt="" width={1310} height={633} priority unoptimized />
    </span>
  );
}
