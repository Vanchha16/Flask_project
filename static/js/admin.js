/* ══════════════════════════════════════════
   VC SHOP ADMIN — UI ACTIONS ONLY
   Data lives in HTML templates (Jinja2).
   JS handles: dark mode, sidebar, dropdowns,
               modal, toast, delete confirm.
══════════════════════════════════════════ */

/* ── Dark mode ── */
var SUN_ICON  = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg><span>Light</span>';
var MOON_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg><span>Dark</span>';

function applyTheme(dark) {
  if (dark) {
    document.documentElement.classList.add('dark');
    document.getElementById('theme-toggle').innerHTML = SUN_ICON;
  } else {
    document.documentElement.classList.remove('dark');
    document.getElementById('theme-toggle').innerHTML = MOON_ICON;
  }
  try { localStorage.setItem('vc-theme', dark ? 'dark' : 'light'); } catch (e) {}
}

/* ── Sidebar toggle ── */
function toggleSidebar() {
  document.getElementById('dashboard-root').classList.toggle('sidebar-collapsed');
}

/* ── Notification dropdown ── */
function toggleNotifDropdown() {
  var dd = document.getElementById('notif-dropdown');
  dd.classList.toggle('hidden');
  document.getElementById('profile-dropdown').classList.add('hidden');
  document.getElementById('profile-chevron').style.transform = 'rotate(0deg)';
}

function markAllRead() {
  document.querySelector('.notif-dot').style.display = 'none';
  showToast('All notifications marked as read');
  document.getElementById('notif-dropdown').classList.add('hidden');
}

/* ── Profile dropdown ── */
function toggleProfileDropdown() {
  var dd = document.getElementById('profile-dropdown');
  var isHidden = dd.classList.contains('hidden');
  dd.classList.toggle('hidden');
  document.getElementById('notif-dropdown').classList.add('hidden');
  document.getElementById('profile-chevron').style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
}

/* ── Modal ── */
function openModal(title, body) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = body;
  document.getElementById('modal-overlay').classList.add('show');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('show');
}

/* ── Toast ── */
function showToast(msg, type) {
  type = type || 'success';
  var container = document.getElementById('toast-container');
  var toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  var icon = type === 'success'
    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  toast.innerHTML = icon + ' ' + msg;
  container.appendChild(toast);
  setTimeout(function () { toast.classList.add('show'); }, 10);
  setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(function () { toast.remove(); }, 300);
  }, 3000);
}

/* ── Delete confirm ── */
function confirmDelete(label, onConfirm) {
  var body = '<p style="color:var(--text);margin-bottom:20px">Are you sure you want to delete <strong>' + label + '</strong>? This action cannot be undone.</p>'
    + '<div class="modal-actions">'
    + '<button class="btn-secondary" onclick="closeModal()">Cancel</button>'
    + '<button class="btn-primary" style="background:#E8553D" onclick="closeModal();(' + onConfirm + ')()">Delete</button>'
    + '</div>';
  openModal('Confirm Delete', body);
}

/* ── Table search filter ── */
function filterTable(inputId, tableId) {
  var q = document.getElementById(inputId).value.toLowerCase();
  var rows = document.querySelectorAll('#' + tableId + ' tbody tr');
  rows.forEach(function (row) {
    row.style.display = row.textContent.toLowerCase().indexOf(q) >= 0 ? '' : 'none';
  });
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
(function () {
  /* Apply saved theme */
  var saved = 'light';
  try { saved = localStorage.getItem('vc-theme') || 'light'; } catch (e) {}
  applyTheme(saved === 'dark');

  /* Sidebar toggle button */
  var sidebarBtn = document.getElementById('sidebar-toggle');
  if (sidebarBtn) {
    sidebarBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    sidebarBtn.addEventListener('click', toggleSidebar);
  }

  /* Theme toggle */
  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      applyTheme(!document.documentElement.classList.contains('dark'));
    });
  }

  /* Modal close */
  var closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  var overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.addEventListener('click', function (e) { if (e.target === this) closeModal(); });

  /* Close dropdowns on outside click */
  document.addEventListener('click', function (e) {
    var nw = document.getElementById('notif-wrap');
    var pw = document.getElementById('profile-wrap');
    if (nw && !nw.contains(e.target)) document.getElementById('notif-dropdown').classList.add('hidden');
    if (pw && !pw.contains(e.target)) {
      document.getElementById('profile-dropdown').classList.add('hidden');
      document.getElementById('profile-chevron').style.transform = 'rotate(0deg)';
    }
  });

  /* Keyboard shortcut: / focuses search */
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      var s = document.getElementById('global-search');
      if (s) s.focus();
    }
    if (e.key === 'Escape') closeModal();
  });

  /* Global search — filter page table if present */
  var gs = document.getElementById('global-search');
  if (gs) {
    gs.addEventListener('input', function () {
      var q = this.value.toLowerCase();
      var rows = document.querySelectorAll('.data-table tbody tr');
      rows.forEach(function (row) {
        row.style.display = row.textContent.toLowerCase().indexOf(q) >= 0 ? '' : 'none';
      });
    });
  }
})();
