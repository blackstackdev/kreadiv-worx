'use strict';

const projects = {
  nestkeeper: {
    title: 'NestKeeper', status: 'Windows · Founding release · v1.0.4',
    image: 'assets/nestkeeper.png', alt: 'Actual NestKeeper interface with read-only scanning choices and duplicate review controls.',
    description: 'Find byte-for-byte duplicate files on your Windows PC. Choose the scan scope, review exact matches, protect the files you want to keep and decide which copies to recycle or move to a review folder.',
    note: 'Files stay on your computer. A one-time purchase; no subscription. Finds identical file contents, not visually similar photos.',
    url: 'https://blackstackdev.github.io/kreadiv-worx/nestkeeper/', action: 'Explore NestKeeper'
  },
  oshiro: {
    title: 'ōshiro', status: 'Game in development · Private playable v0.42.0',
    image: 'assets/oshiro-home.png', alt: 'ōshiro tea room and earned castle buildings shown with synthetic demonstration progress.',
    description: 'Complete Sudoku puzzles, earn permanent progress and watch your castle grow automatically. Chapter, Practice and Daily play keep the puzzle board focused, with your growing castle waiting afterward.',
    note: 'Windows and Android development builds. These screenshots show demonstration progress. A public release and download are still to come.'
  },
  jobbook: {
    title: 'Jobbook', status: 'Windows · Early access · v0.1.0',
    image: 'assets/jobbook.png', alt: 'Actual Jobbook overview using sample job and payment records.',
    description: 'Offline quotes, invoices and manual payment records for independent trades. Reuse customer and item details, turn accepted quotes into invoices, record deposits and payments, and export PDF documents.',
    note: 'A one-time purchase. Payments are recorded manually; Jobbook does not collect money or automatically file taxes.',
    url: 'https://blackstackdev.github.io/kreadiv-worx/jobbook/', action: 'Explore Jobbook'
  },
  portaldrop: {
    title: 'PortalDrop', status: 'Free direct release · Windows 0.9.1 · Android beta.33',
    image: 'assets/portaldrop.png', alt: 'Actual PortalDrop sender and outbox with a sample project-handoff transfer.',
    description: 'Hand files between trusted Windows PCs and Android devices through a running Windows host you control. Use your trusted local network, with an optional private Tailscale route when away.',
    note: 'No PortalDrop cloud uploads. Requires a running Windows host. Free proprietary software. Screenshot shows the transfer interface with sample files.',
    url: 'https://blackstackdev.github.io/kreadiv-worx/portaldrop/', action: 'Explore PortalDrop'
  },
  actalume: {
    title: 'Actalume', status: 'Public interactive demo · Local browser ledger',
    image: 'assets/actalume.png', alt: 'Actalume demo interface with fictional Fieldnote proposal, evidence receipts and human decision controls.',
    description: 'Review AI agent work through a contract, proposal, evidence and a named human decision. Only a human decision creates canonical history. Explore the workflow with a fictional sample project in your browser.',
    note: 'Demo imagery uses fictional data. No accounts, telemetry or publishing in the public demo.',
    url: 'https://blackstackdev.github.io/actalume/', action: 'Try the Actalume demo'
  }
};

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const entries = [...document.querySelectorAll('[data-project]')];
const featured = document.getElementById('featured-grid');
const collection = document.getElementById('collection');
const collectionGrid = collection.querySelector('.collection-grid');

function applyFilter(value) {
  let count = 0;
  entries.forEach(entry => {
    const visible = value === 'all' || entry.dataset.category === value;
    entry.hidden = !visible;
    if (visible) count++;
  });
  filterButtons.forEach(button => {
    const active = button.dataset.filter === value;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const featuredCount = [...featured.children].filter(entry => !entry.hidden).length;
  featured.hidden = featuredCount === 0;
  featured.classList.toggle('single', featuredCount === 1);
  collection.hidden = [...collectionGrid.children].every(entry => entry.hidden);
  collectionGrid.classList.toggle('filtered', value !== 'all');
  document.getElementById('filter-status').textContent = `Showing ${count} ${count === 1 ? 'project' : 'projects'}.`;
}
filterButtons.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));

const dialog = document.getElementById('project-dialog');
const dialogImage = document.getElementById('dialog-image');
const dialogLink = document.getElementById('dialog-link');
const gallery = document.querySelector('.gallery-switch');
const galleryButtons = [...gallery.querySelectorAll('button')];
let opener;

function setOshiroView(view) {
  const puzzle = view === 'puzzle';
  dialogImage.src = puzzle ? 'assets/oshiro-puzzle.png' : 'assets/oshiro-home.png';
  dialogImage.alt = puzzle ? 'ōshiro Novice Sudoku board with pencil notes and input controls, using synthetic test progress.' : projects.oshiro.alt;
  galleryButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
}

function openPreview(key, trigger) {
  const project = projects[key];
  if (!project) return;
  opener = trigger;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-status').textContent = project.status;
  document.getElementById('dialog-description').textContent = project.description;
  document.getElementById('dialog-note').textContent = project.note;
  gallery.hidden = key !== 'oshiro';
  if (key === 'oshiro') setOshiroView('castle');
  else { dialogImage.src = project.image; dialogImage.alt = project.alt; }
  dialogLink.hidden = !project.url;
  if (project.url) {
    dialogLink.href = project.url;
    dialogLink.firstChild.textContent = `${project.action} `;
  } else dialogLink.removeAttribute('href');
  dialog.showModal();
  dialog.scrollTop = 0;
}

document.querySelectorAll('[data-preview]').forEach(button => button.addEventListener('click', () => openPreview(button.dataset.preview, button)));
galleryButtons.forEach(button => button.addEventListener('click', () => setOshiroView(button.dataset.view)));
dialog.querySelector('.close-button').addEventListener('click', () => dialog.close());
dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...dialog.querySelectorAll('button:not([disabled]),a[href]')]
    .filter(control => !control.closest('[hidden]') && control.getClientRects().length > 0);
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => { if (opener?.isConnected) opener.focus({preventScroll:true}); });
