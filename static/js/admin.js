/* ══════════════════════════════════════════
   ICONS
══════════════════════════════════════════ */
function dIcon(name, size) {
  size = size || 18;
  var icons = {
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    package: '<path d="M16.5 9.4l-9-5.19"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    orders: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
    users: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
    box: '<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    bell: '<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    edit: '<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    download: '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
    dollar: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    person: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  };
  var inner = icons[name] || '';
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>';
}

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
var CHART_DATA = {
  revenueMonthly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [6200, 7800, 8400, 9100, 10920, 12847, 11200, 13500, 14200, 12800, 15600, 16900],
    prevYear: [4800, 5200, 5900, 6400, 7200, 8100, 8600, 9400, 10200, 10800, 11500, 12300],
  },
  ordersWeekly: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [18, 24, 22, 28, 34, 42, 31],
    prev: [14, 18, 20, 22, 28, 35, 26],
  },
  categorySales: {
    labels: ["Men's", "Women's", "Jewelry", "Electronics"],
    values: [3420, 2890, 4180, 2357],
    colors: ['#5046E5', '#7B61FF', '#F5A623', '#0D9668'],
  },
  trafficSources: {
    labels: ['Direct', 'Organic', 'Social', 'Referral', 'Email'],
    values: [35, 28, 18, 12, 7],
    colors: ['#5046E5', '#0D9668', '#F5A623', '#E8553D', '#7B61FF'],
  },
  topProducts: {
    labels: ['Diamond Ring', 'Petite Pendant', 'Canvas Backpack', 'Smart Watch', 'Leather Crossbody'],
    values: [24, 19, 17, 15, 12],
  },
  conversionFunnel: {
    labels: ['Visitors', 'Product Views', 'Add to Cart', 'Checkout', 'Purchase'],
    values: [4200, 2100, 840, 420, 312],
  },
  dailyRevenue: {
    labels: Array.from({ length: 30 }, function (_, i) { return (i + 1).toString(); }),
    values: [380, 420, 510, 460, 390, 520, 580, 440, 610, 520, 480, 390, 450, 560, 620, 580, 490, 540, 610, 680, 720, 640, 590, 710, 680, 750, 810, 720, 690, 780],
  },
};

var DASH_PRODUCTS = [
  { id: 1, name: "Canvas Backpack", cat: "Men's", price: 109.95, stock: 45, status: "active", sku: "VC-MN-001", created: "2026-03-15" },
  { id: 2, name: "Slim Fit Henley", cat: "Men's", price: 22.30, stock: 120, status: "active", sku: "VC-MN-002", created: "2026-03-18" },
  { id: 3, name: "Cotton Jacket", cat: "Men's", price: 55.99, stock: 67, status: "active", sku: "VC-MN-003", created: "2026-03-20" },
  { id: 4, name: "Casual Slim Shirt", cat: "Men's", price: 15.99, stock: 0, status: "out", sku: "VC-MN-004", created: "2026-03-22" },
  { id: 5, name: "Petite Pendant", cat: "Jewelry", price: 168.00, stock: 23, status: "active", sku: "VC-JW-001", created: "2026-04-01" },
  { id: 6, name: "Diamond Ring", cat: "Jewelry", price: 695.00, stock: 8, status: "active", sku: "VC-JW-002", created: "2026-04-05" },
  { id: 7, name: "Wireless Earbuds", cat: "Electronics", price: 89.99, stock: 200, status: "active", sku: "VC-EL-001", created: "2026-04-10" },
  { id: 8, name: "Smart Watch", cat: "Electronics", price: 299.99, stock: 34, status: "active", sku: "VC-EL-002", created: "2026-04-12" },
  { id: 9, name: "Wrap Dress", cat: "Women's", price: 74.50, stock: 56, status: "active", sku: "VC-WM-001", created: "2026-04-15" },
  { id: 10, name: "Knit Cardigan", cat: "Women's", price: 49.99, stock: 3, status: "low", sku: "VC-WM-002", created: "2026-04-18" },
  { id: 11, name: "Leather Crossbody", cat: "Women's", price: 128.00, stock: 41, status: "active", sku: "VC-WM-003", created: "2026-04-20" },
  { id: 12, name: "USB-C Hub", cat: "Electronics", price: 39.99, stock: 89, status: "active", sku: "VC-EL-003", created: "2026-04-22" },
];

var DASH_ORDERS = [
  { id: "VC-10421", customer: "Sarah Chen", email: "sarah@example.com", items: 3, total: 445.94, status: "delivered", date: "2026-05-20", payment: "Credit Card" },
  { id: "VC-10420", customer: "James Wilson", email: "james@example.com", items: 1, total: 695.00, status: "shipped", date: "2026-05-20", payment: "PayPal" },
  { id: "VC-10419", customer: "Maria Garcia", email: "maria@example.com", items: 2, total: 164.49, status: "processing", date: "2026-05-19", payment: "Credit Card" },
  { id: "VC-10418", customer: "Alex Thompson", email: "alex@example.com", items: 4, total: 312.27, status: "processing", date: "2026-05-19", payment: "Apple Pay" },
  { id: "VC-10417", customer: "Emily Brown", email: "emily@example.com", items: 1, total: 299.99, status: "shipped", date: "2026-05-18", payment: "Credit Card" },
  { id: "VC-10416", customer: "David Lee", email: "david@example.com", items: 2, total: 178.49, status: "delivered", date: "2026-05-18", payment: "Google Pay" },
  { id: "VC-10415", customer: "Lisa Park", email: "lisa@example.com", items: 5, total: 523.93, status: "delivered", date: "2026-05-17", payment: "Credit Card" },
  { id: "VC-10414", customer: "Tom Harris", email: "tom@example.com", items: 1, total: 89.99, status: "cancelled", date: "2026-05-17", payment: "PayPal" },
  { id: "VC-10413", customer: "Nina Patel", email: "nina@example.com", items: 3, total: 267.98, status: "delivered", date: "2026-05-16", payment: "Credit Card" },
  { id: "VC-10412", customer: "Chris Moore", email: "chris@example.com", items: 2, total: 145.98, status: "refunded", date: "2026-05-16", payment: "Apple Pay" },
];

var DASH_CUSTOMERS = [
  { id: 1, name: "Sarah Chen", email: "sarah@example.com", orders: 12, spent: 2340.50, joined: "2025-11-05", status: "active" },
  { id: 2, name: "James Wilson", email: "james@example.com", orders: 8, spent: 1890.00, joined: "2025-12-10", status: "active" },
  { id: 3, name: "Maria Garcia", email: "maria@example.com", orders: 15, spent: 3120.75, joined: "2025-09-22", status: "active" },
  { id: 4, name: "Alex Thompson", email: "alex@example.com", orders: 3, spent: 445.50, joined: "2026-02-14", status: "active" },
  { id: 5, name: "Emily Brown", email: "emily@example.com", orders: 6, spent: 1250.00, joined: "2026-01-08", status: "active" },
  { id: 6, name: "David Lee", email: "david@example.com", orders: 2, spent: 289.98, joined: "2026-03-20", status: "inactive" },
  { id: 7, name: "Lisa Park", email: "lisa@example.com", orders: 9, spent: 1780.25, joined: "2025-10-15", status: "active" },
  { id: 8, name: "Tom Harris", email: "tom@example.com", orders: 1, spent: 89.99, joined: "2026-04-30", status: "inactive" },
];

var DASH_COUPONS = [
  { id: 1, code: "SUMMER20", type: "Percentage", value: 20, minOrder: 50, uses: 142, maxUses: 500, status: "active", expires: "2026-08-31" },
  { id: 2, code: "WELCOME10", type: "Percentage", value: 10, minOrder: 0, uses: 891, maxUses: null, status: "active", expires: null },
  { id: 3, code: "FREESHIP", type: "Free Shipping", value: 0, minOrder: 30, uses: 234, maxUses: 1000, status: "active", expires: "2026-06-30" },
  { id: 4, code: "FLASH50", type: "Fixed", value: 50, minOrder: 200, uses: 50, maxUses: 50, status: "expired", expires: "2026-05-01" },
  { id: 5, code: "VIP25", type: "Percentage", value: 25, minOrder: 100, uses: 18, maxUses: 100, status: "active", expires: "2026-12-31" },
];

var DASH_REVIEWS = [
  { id: 1, product: "Canvas Backpack", customer: "Sarah Chen", rating: 5, text: "Absolutely love this backpack! Great quality and very spacious.", date: "2026-05-18", status: "approved" },
  { id: 2, product: "Diamond Ring", customer: "James Wilson", rating: 5, text: "Stunning ring, my partner was thrilled. Worth every penny.", date: "2026-05-17", status: "approved" },
  { id: 3, product: "Wireless Earbuds", customer: "Alex Thompson", rating: 4, text: "Great sound quality. Battery life could be a bit better.", date: "2026-05-16", status: "approved" },
  { id: 4, product: "Smart Watch", customer: "Emily Brown", rating: 3, text: "Decent watch but the app is buggy. Interface needs work.", date: "2026-05-15", status: "pending" },
  { id: 5, product: "Wrap Dress", customer: "Lisa Park", rating: 5, text: "Beautiful dress, fits perfectly. Got so many compliments!", date: "2026-05-14", status: "approved" },
  { id: 6, product: "Cotton Jacket", customer: "Maria Garcia", rating: 2, text: "Received wrong size. Returning for exchange.", date: "2026-05-13", status: "pending" },
  { id: 7, product: "Petite Pendant", customer: "Nina Patel", rating: 4, text: "Lovely pendant but the chain is a bit thin.", date: "2026-05-12", status: "approved" },
  { id: 8, product: "USB-C Hub", customer: "Tom Harris", rating: 1, text: "Stopped working after 2 days. Very disappointing.", date: "2026-05-11", status: "flagged" },
];

var DASH_STATS = {
  revenue: 12847.50, revenuePrev: 10920.00,
  orders: 156, ordersPrev: 132,
  customers: 89, customersPrev: 72,
  avgOrder: 82.35, avgOrderPrev: 82.73,
};

/* ══════════════════════════════════════════
   CHARTS
══════════════════════════════════════════ */
Chart.defaults.font.family = "'DM Sans', sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.padding = 16;
Chart.defaults.plugins.legend.labels.pointStyleWidth = 8;
Chart.defaults.elements.line.tension = 0.35;
Chart.defaults.elements.bar.borderRadius = 6;

function getChartTheme() {
  var dark = document.documentElement.classList.contains('dark');
  return {
    color: dark ? '#6B6B80' : '#888',
    gridColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
  };
}
function applyChartDefaults() {
  var t = getChartTheme();
  Chart.defaults.color = t.color;
  Chart.defaults.scale.grid = { color: t.gridColor, drawBorder: false };
}

var chartInstances = {};
function destroyCharts() {
  Object.keys(chartInstances).forEach(function (k) {
    if (chartInstances[k]) { chartInstances[k].destroy(); delete chartInstances[k]; }
  });
}
function createChart(id, config) {
  var el = document.getElementById(id);
  if (!el) return;
  if (chartInstances[id]) chartInstances[id].destroy();
  chartInstances[id] = new Chart(el.getContext('2d'), config);
}
function renderRevenueChart(canvasId) {
  var d = CHART_DATA.revenueMonthly;
  createChart(canvasId, {
    type: 'line', data: {
      labels: d.labels, datasets: [
        { label: '2026', data: d.values, borderColor: '#5046E5', backgroundColor: 'rgba(80,70,229,0.08)', fill: true, pointBackgroundColor: '#5046E5', pointRadius: 3, pointHoverRadius: 5, borderWidth: 2.5 },
        { label: '2025', data: d.prevYear, borderColor: '#D0CDF5', backgroundColor: 'transparent', borderDash: [5, 5], pointRadius: 0, borderWidth: 1.5 },
      ]
    }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', align: 'end' }, tooltip: { mode: 'index', intersect: false, backgroundColor: '#111', titleFont: { weight: '600' }, padding: 12, cornerRadius: 8, callbacks: { label: function (ctx) { return ctx.dataset.label + ': $' + ctx.parsed.y.toLocaleString(); } } } }, scales: { y: { beginAtZero: true, ticks: { callback: function (v) { return '$' + (v / 1000) + 'k'; } } } }, interaction: { mode: 'nearest', axis: 'x', intersect: false } }
  });
}
function renderOrdersChart(canvasId) {
  var d = CHART_DATA.ordersWeekly;
  createChart(canvasId, {
    type: 'bar', data: {
      labels: d.labels, datasets: [
        { label: 'This week', data: d.values, backgroundColor: '#5046E5', borderRadius: 6, barPercentage: 0.6 },
        { label: 'Last week', data: d.prev, backgroundColor: '#EEEDFD', borderRadius: 6, barPercentage: 0.6 },
      ]
    }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', align: 'end' } }, scales: { y: { beginAtZero: true } } }
  });
}
function renderCategoryChart(canvasId) {
  var d = CHART_DATA.categorySales;
  createChart(canvasId, { type: 'doughnut', data: { labels: d.labels, datasets: [{ data: d.values, backgroundColor: d.colors, borderWidth: 0, hoverOffset: 6 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '68%', plugins: { legend: { position: 'bottom' } } } });
}
function renderTrafficChart(canvasId) {
  var d = CHART_DATA.trafficSources;
  createChart(canvasId, { type: 'doughnut', data: { labels: d.labels, datasets: [{ data: d.values, backgroundColor: d.colors, borderWidth: 0, hoverOffset: 6 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '68%', plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: function (ctx) { return ctx.label + ': ' + ctx.parsed + '%'; } } } } } });
}
function renderTopProductsChart(canvasId) {
  var d = CHART_DATA.topProducts;
  createChart(canvasId, { type: 'bar', data: { labels: d.labels, datasets: [{ data: d.values, backgroundColor: ['#5046E5', '#7B61FF', '#0D9668', '#F5A623', '#E8553D'], borderRadius: 6, barPercentage: 0.5 }] }, options: { responsive: true, maintainAspectRatio: false, indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, ticks: { callback: function (v) { return v + ' sold'; } } } } } });
}
function renderFunnelChart(canvasId) {
  var d = CHART_DATA.conversionFunnel;
  var maxVal = d.values[0];
  createChart(canvasId, { type: 'bar', data: { labels: d.labels, datasets: [{ data: d.values, backgroundColor: function (ctx) { var colors = ['#5046E5', '#6C63F0', '#8B85F2', '#ACA8F5', '#D0CDF5']; return colors[ctx.dataIndex] || '#5046E5'; }, borderRadius: 6, barPercentage: 0.7 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (ctx) { var pct = (ctx.parsed.y / maxVal * 100).toFixed(1); return ctx.parsed.y.toLocaleString() + ' (' + pct + '%)'; } } } }, scales: { y: { beginAtZero: true } } } });
}
function renderDailyRevenueChart(canvasId) {
  var d = CHART_DATA.dailyRevenue;
  createChart(canvasId, { type: 'line', data: { labels: d.labels, datasets: [{ data: d.values, borderColor: '#5046E5', backgroundColor: 'rgba(80,70,229,0.06)', fill: true, pointRadius: 0, borderWidth: 2, pointHoverRadius: 4, pointHoverBackgroundColor: '#5046E5' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { title: function (items) { return 'Day ' + items[0].label; }, label: function (ctx) { return '$' + ctx.parsed.y; } } } }, scales: { x: { display: false }, y: { display: false } }, interaction: { mode: 'nearest', axis: 'x', intersect: false } } });
}

/* ══════════════════════════════════════════
   PAGES
══════════════════════════════════════════ */
function renderOverview() {
  var s = DASH_STATS;
  var revChange = ((s.revenue - s.revenuePrev) / s.revenuePrev * 100).toFixed(1);
  var ordChange = ((s.orders - s.ordersPrev) / s.ordersPrev * 100).toFixed(1);
  var custChange = ((s.customers - s.customersPrev) / s.customersPrev * 100).toFixed(1);
  var avgChange = ((s.avgOrder - s.avgOrderPrev) / s.avgOrderPrev * 100).toFixed(1);
  function statCard(label, value, change, icon) {
    var up = parseFloat(change) >= 0;
    return '<div class="stat-card"><div class="stat-icon">' + dIcon(icon, 20) + '</div><div class="stat-info"><span class="stat-label">' + label + '</span><span class="stat-value">' + value + '</span><span class="stat-change ' + (up ? 'up' : 'down') + '">' + (up ? '↑' : '↓') + ' ' + Math.abs(change) + '% vs last month</span></div></div>';
  }
  var recentOrders = DASH_ORDERS.slice(0, 5).map(function (o) {
    return '<tr><td class="fw500">' + o.id + '</td><td>' + o.customer + '</td><td>' + o.items + ' items</td><td class="fw600">$' + o.total.toFixed(2) + '</td><td><span class="badge badge-' + o.status + '">' + o.status + '</span></td><td class="text-muted">' + o.date + '</td></tr>';
  }).join('');
  var lowStock = DASH_PRODUCTS.filter(function (p) { return p.stock <= 10; }).map(function (p) {
    return '<tr><td class="fw500">' + p.name + '</td><td>' + p.cat + '</td><td><span class="stock-' + (p.stock === 0 ? 'out' : 'low') + '">' + p.stock + '</span></td><td>' + p.sku + '</td></tr>';
  }).join('');
  return '<div class="page-header"><div><h1>Overview</h1><p>Welcome back! Here\'s what\'s happening with your store.</p></div></div>'
    + '<div class="stats-grid">'
    + statCard('Revenue', '$' + s.revenue.toLocaleString(), revChange, 'dollar')
    + statCard('Orders', s.orders, ordChange, 'orders')
    + statCard('Customers', s.customers, custChange, 'users')
    + statCard('Avg. Order', '$' + s.avgOrder.toFixed(2), avgChange, 'tag')
    + '</div>'
    + '<div class="grid grid-cols-3 gap-4 mb-6">'
    + '<div class="col-span-2 rounded-xl p-5" style="background:var(--card-bg);border:1px solid var(--border)"><div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-sm" style="font-family:var(--heading);color:var(--text)">Revenue Overview</h3><select style="font-size:12px;border:1px solid var(--border);border-radius:8px;padding:4px 8px;color:var(--text-muted);background:var(--card-bg);cursor:pointer;outline:none"><option>This Year</option><option>Last Year</option></select></div><div style="height:260px"><canvas id="chart-overview-revenue"></canvas></div></div>'
    + '<div class="rounded-xl p-5" style="background:var(--card-bg);border:1px solid var(--border)"><div class="mb-4"><h3 class="font-semibold text-sm" style="font-family:var(--heading);color:var(--text)">Sales by Category</h3></div><div style="height:260px"><canvas id="chart-overview-category"></canvas></div></div>'
    + '</div>'
    + '<div class="grid grid-cols-3 gap-4 mb-6">'
    + '<div class="rounded-xl p-5" style="background:var(--card-bg);border:1px solid var(--border)"><div class="mb-3"><h3 class="font-semibold text-sm" style="font-family:var(--heading);color:var(--text)">Daily Revenue</h3><p class="text-xs mt-1" style="color:var(--text-muted)">Last 30 days</p></div><div style="height:100px"><canvas id="chart-overview-daily"></canvas></div></div>'
    + '<div class="col-span-2 rounded-xl p-5" style="background:var(--card-bg);border:1px solid var(--border)"><div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-sm" style="font-family:var(--heading);color:var(--text)">Orders This Week</h3></div><div style="height:140px"><canvas id="chart-overview-orders"></canvas></div></div>'
    + '</div>'
    + '<div class="tables-grid">'
    + '<div class="table-card"><div class="table-header"><h3>Recent Orders</h3><button class="btn-text" onclick="navigateTo(\'orders\')">View all →</button></div>'
    + '<table><thead><tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Date</th></tr></thead><tbody>' + recentOrders + '</tbody></table></div>'
    + '<div class="table-card"><div class="table-header"><h3>Low Stock Alert</h3><button class="btn-text" onclick="navigateTo(\'inventory\')">View all →</button></div>'
    + '<table><thead><tr><th>Product</th><th>Category</th><th>Stock</th><th>SKU</th></tr></thead><tbody>' + (lowStock || '<tr><td colspan="4" class="text-muted" style="text-align:center;padding:24px">All products well stocked</td></tr>') + '</tbody></table></div>'
    + '</div>';
}

/* ─── Product filter state ─── */
var prodFilters = { search: '', cat: '', status: '', stock: '', price: '' };

/* ─── Product filter + sort state ─── */
var prodFilters = { search: '', cat: '', status: '', price: '' };
var prodSort = { col: '', dir: 'asc' };
var filterPanelOpen = false;

function renderProducts() {
  return '<div class="page-header"><h1>Products</h1><div class="page-actions"><button class="btn-secondary" onclick="exportTable(\'products\')">' + dIcon('download', 15) + ' Export</button><button class="btn-primary" onclick="openAddProduct()">' + dIcon('plus', 15) + ' Add Product</button></div></div>'
    + '<div class="table-card">'
    + renderProductToolbar()
    + renderProductTableBody()
    + '</div>';
}

function renderProductToolbar() {
  var activeCount = (prodFilters.cat ? 1 : 0) + (prodFilters.status ? 1 : 0) + (prodFilters.price ? 1 : 0);
  var hasActive = activeCount > 0 || prodFilters.search;

  var filterBtn = '<div class="filter-panel-wrap">'
    + '<button class="filter-toggle-btn' + (activeCount > 0 ? ' active' : '') + '" id="filter-toggle-btn" onclick="toggleFilterPanel()">'
    + '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>'
    + ' Filter'
    + (activeCount > 0 ? '<span class="filter-badge">' + activeCount + '</span>' : '')
    + '</button>'
    + renderFilterPanel()
    + '</div>';

  return '<div class="table-toolbar">'
    + '<div class="prod-search-box">'
    + '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
    + '<input type="text" id="prod-search" placeholder="Search..." oninput="setProdFilter(\'search\',this.value)" value="' + prodFilters.search + '">'
    + (prodFilters.search ? '<button onclick="setProdFilter(\'search\',\'\')" style="background:none;border:none;color:var(--text-muted);cursor:pointer;padding:0;font-size:16px;line-height:1">×</button>' : '')
    + '</div>'
    + filterBtn
    + '</div>';
}

function renderFilterPanel() {
  function chip(label, key, value) {
    var active = prodFilters[key] === value;
    return '<button class="filter-chip' + (active ? ' active' : '') + '" onclick="toggleProdFilter(\'' + key + '\',\'' + value + '\')">'
      + label + (active ? ' <span class="chip-x">×</span>' : '') + '</button>';
  }
  var activeCount = (prodFilters.cat ? 1 : 0) + (prodFilters.status ? 1 : 0) + (prodFilters.price ? 1 : 0);
  return '<div class="filter-panel' + (filterPanelOpen ? ' open' : '') + '" id="filter-panel" onclick="event.stopPropagation()">'
    + '<div class="filter-panel-head"><h4>Filters</h4>'
    + (activeCount > 0 ? '<button class="filter-clear-btn" onclick="clearProdFilters()">Clear all</button>' : '')
    + '</div>'
    + '<div class="filter-panel-section"><div class="filter-panel-label">Category</div><div class="filter-chips">'
    + chip("Men's", 'cat', "Men's") + chip("Women's", 'cat', "Women's") + chip('Jewelry', 'cat', 'Jewelry') + chip('Electronics', 'cat', 'Electronics')
    + '</div></div>'
    + '<div class="filter-panel-section"><div class="filter-panel-label">Price</div><div class="filter-chips">'
    + chip('Under $30', 'price', 'under30') + chip('$30 – $100', 'price', '30to100') + chip('Over $100', 'price', 'over100')
    + '</div></div>'
    + '<div class="filter-panel-section"><div class="filter-panel-label">Stock</div><div class="filter-chips">'
    + chip('In Stock', 'status', 'active') + chip('Low Stock', 'status', 'low') + chip('Out of Stock', 'status', 'out')
    + '</div></div>'
    + '</div>';
}

function sortIcon(col) {
  var cls = prodSort.col === col ? (prodSort.dir === 'asc' ? ' asc' : ' desc') : '';
  return '<span class="sort-icon">'
    + '<svg class="sort-up" width="8" height="5" viewBox="0 0 8 5"><path d="M4 0L8 5H0z" fill="currentColor"/></svg>'
    + '<svg class="sort-dn" width="8" height="5" viewBox="0 0 8 5"><path d="M4 5L0 0h8z" fill="currentColor"/></svg>'
    + '</span>';
}

function renderProductTableBody() {
  var f = prodFilters;
  var filtered = DASH_PRODUCTS.filter(function (p) {
    if (f.search && p.name.toLowerCase().indexOf(f.search.toLowerCase()) < 0
      && p.sku.toLowerCase().indexOf(f.search.toLowerCase()) < 0) return false;
    if (f.cat && p.cat !== f.cat) return false;
    if (f.status) {
      var s = p.stock === 0 ? 'out' : p.stock <= 10 ? 'low' : 'active';
      if (s !== f.status) return false;
    }
    if (f.price === 'under30' && p.price >= 30) return false;
    if (f.price === '30to100' && (p.price < 30 || p.price > 100)) return false;
    if (f.price === 'over100' && p.price <= 100) return false;
    return true;
  });

  /* Sort */
  if (prodSort.col) {
    filtered = filtered.slice().sort(function (a, b) {
      var av = prodSort.col === 'price' ? a.price : prodSort.col === 'stock' ? a.stock : (a[prodSort.col] || '').toString().toLowerCase();
      var bv = prodSort.col === 'price' ? b.price : prodSort.col === 'stock' ? b.stock : (b[prodSort.col] || '').toString().toLowerCase();
      if (av < bv) return prodSort.dir === 'asc' ? -1 : 1;
      if (av > bv) return prodSort.dir === 'asc' ? 1 : -1;
      return 0;
    });
  }

  var catColors = { "Men's": '#2563EB', "Women's": '#BE185D', 'Jewelry': '#B8860B', 'Electronics': '#0891B2' };
  var catBg = { "Men's": '#DBEAFE', "Women's": '#FCE7F3', 'Jewelry': '#FEF9C3', 'Electronics': '#E0F2FE' };

  var rows = filtered.map(function (p) {
    var stockLevel = p.stock === 0 ? 'out' : p.stock <= 10 ? 'low' : 'high';
    var statusCls = stockLevel === 'high' ? 'active' : stockLevel === 'low' ? 'processing' : 'cancelled';
    var cc = catColors[p.cat] || 'var(--text-muted)';
    var cb = catBg[p.cat] || 'var(--hover-bg2)';
    var avatar = '<div style="width:36px;height:36px;border-radius:9px;background:' + cb + ';color:' + cc + ';display:flex;align-items:center;justify-content:center;flex-shrink:0">' + dIcon('package', 17) + '</div>';
    return '<tr style="cursor:pointer" onclick="viewProduct(' + p.id + ')">'
      + '<td onclick="event.stopPropagation()"><input type="checkbox" class="row-check" data-id="' + p.id + '"></td>'
      + '<td><div style="display:flex;align-items:center;gap:10px">' + avatar + '<div><div class="fw600" style="font-size:13.5px">' + p.name + '</div><div class="text-muted text-sm">' + p.sku + '</div></div></div></td>'
      + '<td><span style="font-size:11.5px;font-weight:600;padding:2px 9px;border-radius:100px;background:' + cb + ';color:' + cc + '">' + p.cat + '</span></td>'
      + '<td class="fw600">$' + p.price.toFixed(2) + '</td>'
      + '<td><span class="stock-' + stockLevel + '">' + p.stock + '</span></td>'
      + '<td><span class="badge badge-' + statusCls + '">' + p.status + '</span></td>'
      + '<td class="actions-cell" onclick="event.stopPropagation()">'
      + '<button class="btn-icon" onclick="viewProduct(' + p.id + ')" title="View">' + dIcon('eye', 15) + '</button>'
      + '<button class="btn-icon" onclick="openEditProduct(' + p.id + ')" title="Edit">' + dIcon('edit', 15) + '</button>'
      + '<button class="btn-icon btn-danger" onclick="deleteProduct(' + p.id + ')" title="Delete">' + dIcon('trash', 15) + '</button>'
      + '</td></tr>';
  }).join('');

  var emptyRow = filtered.length === 0
    ? '<tr><td colspan="7"><div class="empty-state"><div class="empty-state-icon">' + dIcon('search', 24) + '</div><h4>No products found</h4><p>Try adjusting your search or filters.</p></div></td></tr>'
    : '';

  var activeCount = (f.cat ? 1 : 0) + (f.status ? 1 : 0) + (f.price ? 1 : 0);
  var summary = filtered.length + ' of ' + DASH_PRODUCTS.length + ' products'
    + (activeCount ? ' &nbsp;·&nbsp; <strong>' + activeCount + ' filter' + (activeCount > 1 ? 's' : '') + ' active</strong>' : '');

  function thSort(label, col) {
    var cls = prodSort.col === col ? (prodSort.dir === 'asc' ? ' asc' : ' desc') : '';
    return '<th><span class="th-sort' + cls + '" onclick="setSortCol(\'' + col + '\')">'
      + label + '<span class="sort-icon">'
      + '<svg class="sort-up" width="8" height="5" viewBox="0 0 8 5"><path d="M4 0L8 5H0z" fill="currentColor"/></svg>'
      + '<svg class="sort-dn" width="8" height="5" viewBox="0 0 8 5"><path d="M4 5L0 0h8z" fill="currentColor"/></svg>'
      + '</span></span></th>';
  }

  var thead = '<thead><tr>'
    + '<th style="width:32px"><input type="checkbox" onclick="toggleAll(this)"></th>'
    + thSort('Products', 'name')
    + thSort('Category', 'cat')
    + thSort('Price', 'price')
    + thSort('Stock', 'stock')
    + '<th>Status</th>'
    + '<th style="width:100px">Actions</th>'
    + '</tr></thead>';

  return '<table id="products-table">' + thead + '<tbody>' + (rows || emptyRow) + '</tbody></table>'
    + '<div class="table-footer"><span class="text-muted">' + summary + ' &nbsp;·&nbsp; Click any row to view details</span></div>';
}

function toggleProdFilter(key, value) {
  prodFilters[key] = prodFilters[key] === value ? '' : value;
  refreshProductPage();
}
function setProdFilter(key, value) {
  prodFilters[key] = value;
  refreshProductPage();
}
function clearProdFilters() {
  prodFilters = { search: '', cat: '', status: '', price: '' };
  refreshProductPage();
}
function setSortCol(col) {
  if (prodSort.col === col) { prodSort.dir = prodSort.dir === 'asc' ? 'desc' : 'asc'; }
  else { prodSort.col = col; prodSort.dir = 'asc'; }
  refreshProductPage();
}
function positionPanel(panelId, btnId) {
  var btn = document.getElementById(btnId);
  var panel = document.getElementById(panelId);
  if (!btn || !panel) return;
  var r = btn.getBoundingClientRect();
  panel.style.top = (r.bottom + 8) + 'px';
  panel.style.left = Math.max(8, r.right - 380) + 'px';
}
function toggleFilterPanel() {
  filterPanelOpen = !filterPanelOpen;
  refreshProductPage();
  if (filterPanelOpen) requestAnimationFrame(function () { positionPanel('filter-panel', 'filter-toggle-btn'); });
}
function refreshProductPage() {
  var card = document.querySelector('.table-card');
  if (!card) return;
  card.innerHTML = renderProductToolbar() + renderProductTableBody();
  var si = document.getElementById('prod-search');
  if (si && document.activeElement !== si) { /* don't steal focus if user is typing elsewhere */ }
  if (si && prodFilters.search) { si.focus(); si.setSelectionRange(si.value.length, si.value.length); }
  if (filterPanelOpen) requestAnimationFrame(function () { positionPanel('filter-panel', 'filter-toggle-btn'); });
}
/* Close filter panel on outside click */
document.addEventListener('click', function (e) {
  if (!filterPanelOpen) return;
  var btn = document.getElementById('filter-toggle-btn');
  var panel = document.getElementById('filter-panel');
  if (btn && !btn.contains(e.target) && panel && !panel.contains(e.target)) {
    filterPanelOpen = false;
    var p2 = document.getElementById('filter-panel');
    if (p2) p2.classList.remove('open');
    var b2 = document.getElementById('filter-toggle-btn');
    var ac = (prodFilters.cat ? 1 : 0) + (prodFilters.status ? 1 : 0) + (prodFilters.price ? 1 : 0);
    if (b2 && ac === 0) b2.classList.remove('active');
  }
});

function viewProduct(id) {
  currentProductId = id;
  navigateTo('product-detail');
}

var currentProductId = null;

function renderProductDetail() {
  var p = DASH_PRODUCTS.find(function (x) { return x.id === currentProductId; });
  if (!p) return '<div class="page-header"><h1>Product not found</h1></div>';

  var catColors = { "Men's": '#2563EB', "Women's": '#BE185D', 'Jewelry': '#B8860B', 'Electronics': '#0891B2' };
  var catBg = { "Men's": '#DBEAFE', "Women's": '#FCE7F3', 'Jewelry': '#FEF9C3', 'Electronics': '#E0F2FE' };
  var cc = catColors[p.cat] || 'var(--text-muted)', cb = catBg[p.cat] || 'var(--hover-bg2)';

  var statusCls = p.status === 'active' ? 'active' : p.status === 'low' ? 'processing' : 'cancelled';
  var stockLevel = p.stock === 0 ? 'out' : p.stock <= 10 ? 'low' : p.stock <= 50 ? 'medium' : 'high';
  var stockLabel = p.stock === 0 ? 'Out of Stock' : p.stock <= 10 ? 'Low Stock' : p.stock <= 50 ? 'Medium Stock' : 'Well Stocked';
  var stockBarColor = p.stock === 0 ? '#D32F2F' : p.stock <= 10 ? '#E5A100' : p.stock <= 50 ? 'var(--accent)' : '#0D9668';

  // Related orders for this product (by name match in description)
  var relOrders = DASH_ORDERS.slice(0, 4);

  // Related reviews for this product
  var relReviews = DASH_REVIEWS.filter(function (r) { return r.product === p.name; });

  // Simulated sales data per month
  var salesHistory = [12, 18, 9, 24, 15, 20, 17, 28, 22, 31, 19, 25];
  var monthLabels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];

  function stars(n) {
    var s = '';
    for (var i = 1; i <= 5; i++) s += '<span style="color:' + (i <= n ? '#F5A623' : 'var(--border)') + '">★</span>';
    return s;
  }

  var reviewsHTML = relReviews.length > 0
    ? relReviews.map(function (r) {
      return '<div style="padding:16px 0;border-bottom:1px solid var(--border)">'
        + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">'
        + '<div style="display:flex;align-items:center;gap:10px">'
        + '<div style="width:30px;height:30px;border-radius:50%;background:var(--accent-light);color:var(--accent);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">' + r.customer.charAt(0) + '</div>'
        + '<div><div style="font-size:13px;font-weight:600;color:var(--text)">' + r.customer + '</div><div style="font-size:11.5px;color:var(--text-muted)">' + r.date + '</div></div>'
        + '</div>'
        + '<div style="display:flex;align-items:center;gap:8px">' + stars(r.rating) + '<span class="badge badge-' + (r.status === 'approved' ? 'active' : r.status === 'pending' ? 'processing' : 'flagged') + '">' + r.status + '</span></div>'
        + '</div>'
        + '<p style="font-size:13px;color:var(--text-muted);line-height:1.6;margin:0">' + r.text + '</p>'
        + '</div>';
    }).join('')
    : '<div class="empty-state"><div class="empty-state-icon">' + dIcon('star', 22) + '</div><h4>No reviews yet</h4><p>This product has not received any reviews.</p></div>';

  var avgRating = relReviews.length ? (relReviews.reduce(function (s, r) { return s + r.rating; }, 0) / relReviews.length).toFixed(1) : '—';

  return ''
    // Header
    + '<div class="page-header">'
    + '<div style="display:flex;align-items:center;gap:14px">'
    + '<div style="width:52px;height:52px;border-radius:14px;background:' + cb + ';color:' + cc + ';display:flex;align-items:center;justify-content:center;flex-shrink:0">' + dIcon('package', 26) + '</div>'
    + '<div><h1 style="font-size:22px">' + p.name + '</h1>'
    + '<div style="display:flex;align-items:center;gap:8px;margin-top:4px">'
    + '<span style="font-size:11.5px;font-weight:600;padding:2px 9px;border-radius:100px;background:' + cb + ';color:' + cc + '">' + p.cat + '</span>'
    + '<span class="badge badge-' + statusCls + '">' + p.status + '</span>'
    + '<span style="font-size:12px;color:var(--text-muted)">SKU: ' + p.sku + '</span>'
    + '</div></div>'
    + '</div>'
    + '<div class="page-actions">'
    + '<button class="btn-secondary" onclick="navigateTo(\'products\')">' + dIcon('x', 14) + ' Back to Products</button>'
    + '<button class="btn-secondary" onclick="openEditProduct(' + p.id + ')">' + dIcon('edit', 14) + ' Edit Product</button>'
    + '<button class="btn-danger-solid" onclick="deleteProduct(' + p.id + ')">' + dIcon('trash', 14) + ' Delete</button>'
    + '</div>'
    + '</div>'

    // Top stats row
    + '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:20px">'
    + '<div class="stat-card"><div class="stat-icon">' + dIcon('dollar', 20) + '</div><div class="stat-info"><span class="stat-label">Price</span><span class="stat-value">$' + p.price.toFixed(2) + '</span><span class="stat-change up">↑ 5.2% this month</span></div></div>'
    + '<div class="stat-card"><div class="stat-icon" style="background:#E8F8F1;color:#0D9668">' + dIcon('box', 20) + '</div><div class="stat-info"><span class="stat-label">In Stock</span><span class="stat-value" style="color:' + (p.stock === 0 ? '#D32F2F' : p.stock <= 10 ? '#B8860B' : 'var(--text)') + '">' + p.stock + '</span><span class="stat-change ' + (p.stock > 10 ? 'up' : 'down') + '">' + (p.stock > 10 ? '↑ Healthy' : '↓ ' + stockLabel) + '</span></div></div>'
    + '<div class="stat-card"><div class="stat-icon" style="background:#FFF6E5;color:#B8860B">' + dIcon('star', 20) + '</div><div class="stat-info"><span class="stat-label">Avg. Rating</span><span class="stat-value">' + avgRating + '<span style="font-size:14px;font-weight:500;color:var(--text-muted)">/5</span></span><span class="stat-change up">' + relReviews.length + ' review' + (relReviews.length !== 1 ? 's' : '') + '</span></div></div>'
    + '<div class="stat-card"><div class="stat-icon" style="background:#E8F0FE;color:#2563EB">' + dIcon('download', 20) + '</div><div class="stat-info"><span class="stat-label">Units Sold</span><span class="stat-value">247</span><span class="stat-change up">↑ 12% vs last month</span></div></div>'
    + '</div>'

    // Main 2-col layout
    + '<div style="display:grid;grid-template-columns:1.6fr 1fr;gap:18px;margin-bottom:18px">'

    // Left col: sales chart + orders
    + '<div style="display:flex;flex-direction:column;gap:18px">'

    // Sales chart
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:22px">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px">'
    + '<div><div style="font-family:var(--heading);font-size:15px;font-weight:600;color:var(--text)">Sales History</div><div style="font-size:12px;color:var(--text-muted);margin-top:2px">Units sold per month — last 12 months</div></div>'
    + '<div style="font-family:var(--heading);font-size:20px;font-weight:700;color:var(--accent)">247 <span style="font-size:13px;color:var(--text-muted);font-weight:500">units</span></div>'
    + '</div>'
    + '<div style="height:180px"><canvas id="chart-product-sales"></canvas></div>'
    + '</div>'

    // Recent orders
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;overflow:hidden">'
    + '<div class="table-header"><h3>Recent Orders</h3><button class="btn-text" onclick="navigateTo(\'orders\')">View all →</button></div>'
    + '<table><thead><tr><th>Order</th><th>Customer</th><th>Total</th><th>Status</th><th>Date</th></tr></thead><tbody>'
    + relOrders.map(function (o) {
      return '<tr><td class="fw500">' + o.id + '</td><td>' + o.customer + '</td><td class="fw600">$' + o.total.toFixed(2) + '</td><td><span class="badge badge-' + o.status + '">' + o.status + '</span></td><td style="color:var(--text-muted)">' + o.date + '</td></tr>';
    }).join('')
    + '</tbody></table>'
    + '</div>'
    + '</div>'

    // Right col: product info + stock + reviews
    + '<div style="display:flex;flex-direction:column;gap:18px">'

    // Product details card
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:22px">'
    + '<div style="font-family:var(--heading);font-size:15px;font-weight:600;color:var(--text);margin-bottom:18px">Product Details</div>'
    + '<div style="display:flex;flex-direction:column;gap:0">'
    + detailRow('SKU', p.sku)
    + detailRow('Category', '<span style="font-size:11.5px;font-weight:600;padding:2px 9px;border-radius:100px;background:' + cb + ';color:' + cc + '">' + p.cat + '</span>')
    + detailRow('Price', '<span style="font-weight:700;color:var(--accent);font-size:15px">$' + p.price.toFixed(2) + '</span>')
    + detailRow('Status', '<span class="badge badge-' + statusCls + '">' + p.status + '</span>')
    + detailRow('Created', p.created)
    + detailRow('Last Updated', '2026-05-20')
    + detailRow('Weight', '0.8 kg')
    + detailRow('Dimensions', '30 × 15 × 10 cm')
    + '</div>'
    + '<div style="border-top:1px solid var(--border);margin-top:16px;padding-top:16px">'
    + '<div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:8px">TAGS</div>'
    + '<div style="display:flex;flex-wrap:wrap;gap:6px">'
    + [p.cat, 'New Arrival', 'Free Shipping', 'Trending'].map(function (t) {
      return '<span style="font-size:11.5px;padding:3px 10px;border-radius:100px;background:var(--hover-bg2);color:var(--text-muted);font-weight:500">' + t + '</span>';
    }).join('')
    + '</div></div>'
    + '</div>'

    // Stock card
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:22px">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">'
    + '<div style="font-family:var(--heading);font-size:15px;font-weight:600;color:var(--text)">Stock Level</div>'
    + '<button class="btn-secondary" style="font-size:12px;padding:5px 10px" onclick="promptStock(' + p.id + ')">' + dIcon('edit', 13) + ' Update</button>'
    + '</div>'
    + '<div style="display:flex;align-items:center;gap:16px;margin-bottom:12px">'
    + '<div style="font-family:var(--heading);font-size:36px;font-weight:800;color:' + (p.stock === 0 ? '#D32F2F' : p.stock <= 10 ? '#B8860B' : '#0D9668') + '">' + p.stock + '</div>'
    + '<div><div style="font-size:13px;font-weight:600;color:var(--text)">' + stockLabel + '</div><div style="font-size:12px;color:var(--text-muted)">units remaining</div></div>'
    + '</div>'
    + '<div class="stock-bar" style="height:10px;border-radius:5px"><div class="stock-fill" style="width:' + Math.min(100, p.stock / 2) + '%;background:' + stockBarColor + ';height:100%;border-radius:5px"></div></div>'
    + '<div style="display:flex;justify-content:space-between;font-size:11.5px;color:var(--text-muted);margin-top:6px"><span>0</span><span>50</span><span>100+</span></div>'
    + (p.stock <= 10 ? '<div style="margin-top:14px;padding:10px 12px;border-radius:8px;background:#FFF6E5;border:1px solid #F5A623;font-size:12.5px;color:#B8860B;display:flex;align-items:center;gap:8px">' + dIcon('bell', 14) + ' <strong>Low stock alert</strong> — consider restocking soon.</div>' : '')
    + '</div>'

    // Reviews
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;overflow:hidden">'
    + '<div class="table-header"><h3>Customer Reviews</h3>'
    + (relReviews.length ? '<div style="display:flex;align-items:center;gap:4px">' + stars(Math.round(parseFloat(avgRating))) + '<span style="font-size:12px;color:var(--text-muted);margin-left:4px">' + avgRating + '</span></div>' : '')
    + '</div>'
    + '<div style="padding:0 20px">' + reviewsHTML + '</div>'
    + '</div>'

    + '</div>' // end right col
    + '</div>'; // end grid
}

function detailRow(label, value) {
  return '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px">'
    + '<span style="color:var(--text-muted);font-weight:500">' + label + '</span>'
    + '<span style="color:var(--text);font-weight:500;text-align:right">' + value + '</span>'
    + '</div>';
}
/* ─── Orders filter state ─── */
var ordFilters = { search: '', status: '', payment: '' };
var ordFilterPanelOpen = false;

function renderOrders() {
  return '<div class="page-header"><h1>Orders</h1><div class="page-actions"><button class="btn-secondary" onclick="exportTable(\'orders\')">' + dIcon('download', 15) + ' Export</button></div></div>'
    + '<div class="table-card">'
    + renderOrdersToolbar()
    + renderOrdersTableBody()
    + '</div>';
}

function renderOrdersToolbar() {
  var activeCount = (ordFilters.status ? 1 : 0) + (ordFilters.payment ? 1 : 0);

  var filterPanel = '<div class="filter-panel' + (ordFilterPanelOpen ? ' open' : '') + '" id="ord-filter-panel" onclick="event.stopPropagation()">'
    + '<div class="filter-panel-head"><h4>Filters</h4>'
    + (activeCount > 0 ? '<button class="filter-clear-btn" onclick="clearOrdFilters()">Clear all</button>' : '')
    + '</div>'
    /* Status */
    + '<div class="filter-panel-section"><div class="filter-panel-label">Status</div><div class="filter-chips">'
    + ordChip('Processing', 'status', 'processing')
    + ordChip('Shipped', 'status', 'shipped')
    + ordChip('Delivered', 'status', 'delivered')
    + ordChip('Cancelled', 'status', 'cancelled')
    + ordChip('Refunded', 'status', 'refunded')
    + '</div></div>'
    /* Payment */
    + '<div class="filter-panel-section"><div class="filter-panel-label">Payment</div><div class="filter-chips">'
    + ordChip('Credit Card', 'payment', 'Credit Card')
    + ordChip('PayPal', 'payment', 'PayPal')
    + ordChip('Apple Pay', 'payment', 'Apple Pay')
    + ordChip('Google Pay', 'payment', 'Google Pay')
    + '</div></div>'
    + '</div>';

  return '<div class="table-toolbar">'
    + '<div class="prod-search-box">'
    + '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
    + '<input type="text" id="ord-search" placeholder="Search orders..." oninput="setOrdFilter(\'search\',this.value)" value="' + ordFilters.search + '">'
    + (ordFilters.search ? '<button onclick="setOrdFilter(\'search\',\'\')" style="background:none;border:none;color:var(--text-muted);cursor:pointer;padding:0;font-size:16px;line-height:1">×</button>' : '')
    + '</div>'
    + '<div class="filter-panel-wrap">'
    + '<button class="filter-toggle-btn' + (activeCount > 0 ? ' active' : '') + '" id="ord-filter-toggle-btn" onclick="toggleOrdFilterPanel()">'
    + '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>'
    + ' Filter'
    + (activeCount > 0 ? '<span class="filter-badge">' + activeCount + '</span>' : '')
    + '</button>'
    + filterPanel
    + '</div>'
    + '</div>';
}

function renderOrdersTableBody() {
  var f = ordFilters;
  var filtered = DASH_ORDERS.filter(function (o) {
    if (f.search && o.id.toLowerCase().indexOf(f.search.toLowerCase()) < 0
      && o.customer.toLowerCase().indexOf(f.search.toLowerCase()) < 0
      && o.email.toLowerCase().indexOf(f.search.toLowerCase()) < 0) return false;
    if (f.status && o.status !== f.status) return false;
    if (f.payment && o.payment !== f.payment) return false;
    return true;
  });

  var rows = filtered.map(function (o) {
    return '<tr>'
      + '<td><input type="checkbox" class="row-check"></td>'
      + '<td class="fw500">' + o.id + '</td>'
      + '<td>' + o.customer + '</td>'
      + '<td class="text-muted">' + o.email + '</td>'
      + '<td>' + o.items + '</td>'
      + '<td class="fw600">$' + o.total.toFixed(2) + '</td>'
      + '<td><span class="badge badge-' + o.status + '">' + o.status + '</span></td>'
      + '<td>' + o.payment + '</td>'
      + '<td class="text-muted">' + o.date + '</td>'
      + '<td class="actions-cell"><button class="btn-icon" title="View">' + dIcon('eye', 15) + '</button></td>'
      + '</tr>';
  }).join('');

  var emptyRow = filtered.length === 0
    ? '<tr><td colspan="10"><div class="empty-state"><div class="empty-state-icon">' + dIcon('search', 24) + '</div><h4>No orders found</h4><p>Try adjusting your search or filters.</p></div></td></tr>'
    : '';

  var activeCount = (f.status ? 1 : 0) + (f.payment ? 1 : 0);
  var summary = filtered.length + ' of ' + DASH_ORDERS.length + ' orders'
    + (activeCount ? ' &nbsp;·&nbsp; <strong>' + activeCount + ' filter' + (activeCount > 1 ? 's' : '') + ' active</strong>' : '');

  return '<table id="orders-table"><thead><tr>'
    + '<th style="width:32px"><input type="checkbox" onclick="toggleAll(this)"></th>'
    + '<th>Order</th><th>Customer</th><th>Email</th><th>Items</th><th>Total</th><th>Status</th><th>Payment</th><th>Date</th><th style="width:48px"></th>'
    + '</tr></thead><tbody>' + (rows || emptyRow) + '</tbody></table>'
    + '<div class="table-footer"><span class="text-muted">' + summary + '</span></div>';
}

function ordChip(label, key, value) {
  var active = ordFilters[key] === value;
  return '<button class="filter-chip' + (active ? ' active' : '') + '" onclick="toggleOrdFilter(\'' + key + '\',\'' + value + '\')">'
    + label + (active ? ' <span class="chip-x">×</span>' : '') + '</button>';
}
function toggleOrdFilter(key, value) {
  ordFilters[key] = ordFilters[key] === value ? '' : value;
  refreshOrdersPage();
}
function setOrdFilter(key, value) {
  ordFilters[key] = value;
  refreshOrdersPage();
}
function clearOrdFilters() {
  ordFilters = { search: '', status: '', payment: '' };
  refreshOrdersPage();
}
function toggleOrdFilterPanel() {
  ordFilterPanelOpen = !ordFilterPanelOpen;
  refreshOrdersPage();
  if (ordFilterPanelOpen) requestAnimationFrame(function () { positionPanel('ord-filter-panel', 'ord-filter-toggle-btn'); });
}
function refreshOrdersPage() {
  var card = document.querySelector('.table-card');
  if (!card || currentPage !== 'orders') return;
  card.innerHTML = renderOrdersToolbar() + renderOrdersTableBody();
  var si = document.getElementById('ord-search');
  if (si && ordFilters.search) { si.focus(); si.setSelectionRange(si.value.length, si.value.length); }
  if (ordFilterPanelOpen) requestAnimationFrame(function () { positionPanel('ord-filter-panel', 'ord-filter-toggle-btn'); });
}
document.addEventListener('click', function (e) {
  if (!ordFilterPanelOpen) return;
  var btn = document.getElementById('ord-filter-toggle-btn');
  var panel = document.getElementById('ord-filter-panel');
  if (btn && !btn.contains(e.target) && panel && !panel.contains(e.target)) {
    ordFilterPanelOpen = false;
    refreshOrdersPage();
  }
});

function renderCustomers() {
  var rows = DASH_CUSTOMERS.map(function (c) {
    return '<tr><td><div class="customer-avatar">' + c.name.charAt(0) + '</div></td><td><div class="fw500">' + c.name + '</div><div class="text-muted text-sm">' + c.email + '</div></td><td>' + c.orders + '</td><td class="fw600">$' + c.spent.toFixed(2) + '</td><td><span class="badge badge-' + (c.status === 'active' ? 'active' : 'cancelled') + '">' + c.status + '</span></td><td class="text-muted">' + c.joined + '</td><td class="actions-cell"><button class="btn-icon" title="View">' + dIcon('eye', 15) + '</button></td></tr>';
  }).join('');
  return '<div class="page-header"><h1>Customers</h1><div class="page-actions"><button class="btn-secondary">' + dIcon('download', 15) + ' Export</button></div></div>'
    + '<div class="table-card"><div class="table-toolbar"><div class="search-box">' + dIcon('search', 16) + '<input type="text" placeholder="Search customers..." oninput="filterTable(this,\'customers\')"></div></div>'
    + '<table id="customers-table"><thead><tr><th style="width:48px"></th><th>Customer</th><th>Orders</th><th>Spent</th><th>Status</th><th>Joined</th><th style="width:48px"></th></tr></thead><tbody>' + rows + '</tbody></table>'
    + '<div class="table-footer"><span class="text-muted">' + DASH_CUSTOMERS.length + ' customers</span></div></div>';
}

function renderInventory() {
  var sorted = DASH_PRODUCTS.slice().sort(function (a, b) { return a.stock - b.stock; });
  var rows = sorted.map(function (p) {
    var level = p.stock === 0 ? 'out' : p.stock <= 10 ? 'low' : p.stock <= 50 ? 'medium' : 'high';
    var bar = '<div class="stock-bar"><div class="stock-fill stock-fill-' + level + '" style="width:' + Math.min(100, p.stock / 2) + '%"></div></div>';
    return '<tr><td class="fw500">' + p.name + '</td><td>' + p.sku + '</td><td>' + p.cat + '</td><td><span class="stock-' + level + '">' + p.stock + '</span></td><td style="width:120px">' + bar + '</td><td><span class="badge badge-' + (p.stock === 0 ? 'cancelled' : p.stock <= 10 ? 'processing' : 'active') + '">' + (p.stock === 0 ? 'Out of stock' : p.stock <= 10 ? 'Low stock' : 'In stock') + '</span></td><td class="actions-cell"><button class="btn-icon" title="Update stock" onclick="promptStock(' + p.id + ')">' + dIcon('edit', 15) + '</button></td></tr>';
  }).join('');
  return '<div class="page-header"><h1>Inventory</h1><div class="page-actions"><button class="btn-secondary">' + dIcon('download', 15) + ' Export</button></div></div>'
    + '<div class="stats-grid stats-sm">'
    + '<div class="stat-card-sm"><span class="stat-label">Total Products</span><span class="stat-value-sm">' + DASH_PRODUCTS.length + '</span></div>'
    + '<div class="stat-card-sm"><span class="stat-label">In Stock</span><span class="stat-value-sm">' + DASH_PRODUCTS.filter(function (p) { return p.stock > 10; }).length + '</span></div>'
    + '<div class="stat-card-sm"><span class="stat-label">Low Stock</span><span class="stat-value-sm text-warning">' + DASH_PRODUCTS.filter(function (p) { return p.stock > 0 && p.stock <= 10; }).length + '</span></div>'
    + '<div class="stat-card-sm"><span class="stat-label">Out of Stock</span><span class="stat-value-sm text-danger">' + DASH_PRODUCTS.filter(function (p) { return p.stock === 0; }).length + '</span></div>'
    + '</div>'
    + '<div class="table-card"><table id="inventory-table"><thead><tr><th>Product</th><th>SKU</th><th>Category</th><th>Qty</th><th>Level</th><th>Status</th><th style="width:48px"></th></tr></thead><tbody>' + rows + '</tbody></table></div>';
}

function renderCoupons() {
  var rows = DASH_COUPONS.map(function (c) {
    var val = c.type === 'Percentage' ? c.value + '%' : c.type === 'Fixed' ? '$' + c.value : '—';
    return '<tr><td><code class="coupon-code">' + c.code + '</code></td><td>' + c.type + '</td><td class="fw600">' + val + '</td><td>' + (c.minOrder ? '$' + c.minOrder : '—') + '</td><td>' + c.uses + (c.maxUses ? '/' + c.maxUses : '') + '</td><td><span class="badge badge-' + (c.status === 'active' ? 'active' : 'cancelled') + '">' + c.status + '</span></td><td class="text-muted">' + (c.expires || 'Never') + '</td><td class="actions-cell"><button class="btn-icon" title="Copy code" onclick="copyCode(\'' + c.code + '\')">' + dIcon('copy', 15) + '</button><button class="btn-icon btn-danger" title="Delete">' + dIcon('trash', 15) + '</button></td></tr>';
  }).join('');
  return '<div class="page-header"><h1>Coupons</h1><div class="page-actions"><button class="btn-primary" onclick="openAddCoupon()">' + dIcon('plus', 15) + ' Add Coupon</button></div></div>'
    + '<div class="table-card"><table id="coupons-table"><thead><tr><th>Code</th><th>Type</th><th>Value</th><th>Min Order</th><th>Uses</th><th>Status</th><th>Expires</th><th style="width:80px">Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
}

function renderReviews() {
  function stars(n) {
    var s = '';
    for (var i = 0; i < 5; i++) s += '<svg width="13" height="13" viewBox="0 0 24 24" fill="' + (i < n ? '#F5A623' : 'none') + '" stroke="#F5A623" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    return s;
  }
  var rows = DASH_REVIEWS.map(function (r) {
    var statusCls = r.status === 'approved' ? 'active' : r.status === 'pending' ? 'processing' : 'cancelled';
    return '<tr><td class="fw500">' + r.product + '</td><td>' + r.customer + '</td><td>' + stars(r.rating) + '</td><td class="review-text">' + r.text + '</td><td><span class="badge badge-' + statusCls + '">' + r.status + '</span></td><td class="text-muted">' + r.date + '</td><td class="actions-cell">' + (r.status === 'pending' ? '<button class="btn-icon" title="Approve" onclick="approveReview(' + r.id + ')">' + dIcon('check', 15) + '</button>' : '') + '<button class="btn-icon btn-danger" title="Delete">' + dIcon('trash', 15) + '</button></td></tr>';
  }).join('');
  return '<div class="page-header"><h1>Reviews</h1></div>'
    + '<div class="stats-grid stats-sm">'
    + '<div class="stat-card-sm"><span class="stat-label">Total Reviews</span><span class="stat-value-sm">' + DASH_REVIEWS.length + '</span></div>'
    + '<div class="stat-card-sm"><span class="stat-label">Avg Rating</span><span class="stat-value-sm">' + (DASH_REVIEWS.reduce(function (s, r) { return s + r.rating; }, 0) / DASH_REVIEWS.length).toFixed(1) + ' ★</span></div>'
    + '<div class="stat-card-sm"><span class="stat-label">Pending</span><span class="stat-value-sm text-warning">' + DASH_REVIEWS.filter(function (r) { return r.status === 'pending'; }).length + '</span></div>'
    + '<div class="stat-card-sm"><span class="stat-label">Flagged</span><span class="stat-value-sm text-danger">' + DASH_REVIEWS.filter(function (r) { return r.status === 'flagged'; }).length + '</span></div>'
    + '</div>'
    + '<div class="table-card"><table id="reviews-table"><thead><tr><th>Product</th><th>Customer</th><th>Rating</th><th>Review</th><th>Status</th><th>Date</th><th style="width:80px">Actions</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
}

function renderSettings() {
  return '<div class="page-header"><h1>Settings</h1></div>'
    + '<div class="settings-grid">'
    + '<div class="settings-card"><h3>Store Information</h3>'
    + '<div class="form-group"><label>Store Name</label><input type="text" class="form-input" value="VC Shop"></div>'
    + '<div class="form-group"><label>Store Email</label><input type="email" class="form-input" value="admin@vcshop.com"></div>'
    + '<div class="form-group"><label>Store Phone</label><input type="tel" class="form-input" value="+1 (555) 123-4567"></div>'
    + '<div class="form-group"><label>Currency</label><select class="form-input"><option>USD ($)</option><option>EUR (€)</option><option>GBP (£)</option></select></div>'
    + '<button class="btn-primary" style="margin-top:8px" onclick="showToast(\'Changes saved\')">Save Changes</button></div>'
    + '<div class="settings-card"><h3>Shipping</h3>'
    + '<div class="form-group"><label>Free Shipping Threshold</label><div class="input-addon"><span>$</span><input type="number" class="form-input" value="50"></div></div>'
    + '<div class="form-group"><label>Standard Shipping Rate</label><div class="input-addon"><span>$</span><input type="number" class="form-input" value="5.99"></div></div>'
    + '<div class="form-group"><label>Express Shipping Rate</label><div class="input-addon"><span>$</span><input type="number" class="form-input" value="12.99"></div></div>'
    + '<button class="btn-primary" style="margin-top:8px" onclick="showToast(\'Changes saved\')">Save Changes</button></div>'
    + '<div class="settings-card"><h3>Notifications</h3>'
    + '<div class="toggle-row"><span>New order alerts</span><label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>'
    + '<div class="toggle-row"><span>Low stock alerts</span><label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>'
    + '<div class="toggle-row"><span>New review alerts</span><label class="toggle"><input type="checkbox"><span class="toggle-slider"></span></label></div>'
    + '<div class="toggle-row"><span>Daily summary email</span><label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>'
    + '</div>'
    + '<div class="settings-card"><h3>Security</h3>'
    + '<div class="form-group"><label>Current Password</label><input type="password" class="form-input" placeholder="••••••••"></div>'
    + '<div class="form-group"><label>New Password</label><input type="password" class="form-input" placeholder="Min 8 characters"></div>'
    + '<div class="form-group"><label>Confirm Password</label><input type="password" class="form-input" placeholder="••••••••"></div>'
    + '<button class="btn-primary" style="margin-top:8px" onclick="showToast(\'Password updated\')">Update Password</button></div>'
    + '</div>';
}

function renderAnalytics() {
  var cd = CHART_DATA;
  var totalRev = cd.revenueMonthly.values.reduce(function (a, b) { return a + b; }, 0);
  var totalOrd = cd.ordersWeekly.values.reduce(function (a, b) { return a + b; }, 0);
  var convRate = (cd.conversionFunnel.values[4] / cd.conversionFunnel.values[0] * 100).toFixed(1);
  return '<div class="page-header"><h1>Analytics</h1><div class="page-actions">'
    + '<select class="filter-select"><option>Last 12 Months</option><option>Last 6 Months</option><option>Last 30 Days</option><option>Last 7 Days</option></select>'
    + '<button class="btn-secondary">' + dIcon('download', 15) + ' Export Report</button></div></div>'
    + '<div class="grid grid-cols-4 gap-4 mb-6">'
    + '<div class="rounded-xl p-4" style="background:var(--card-bg);border:1px solid var(--border)"><p class="text-xs font-medium mb-1" style="color:var(--text-muted)">Total Revenue (YTD)</p><p class="text-xl font-bold" style="font-family:var(--heading);color:var(--text)">$' + totalRev.toLocaleString() + '</p></div>'
    + '<div class="rounded-xl p-4" style="background:var(--card-bg);border:1px solid var(--border)"><p class="text-xs font-medium mb-1" style="color:var(--text-muted)">Orders This Week</p><p class="text-xl font-bold" style="font-family:var(--heading);color:var(--text)">' + totalOrd + '</p></div>'
    + '<div class="rounded-xl p-4" style="background:var(--card-bg);border:1px solid var(--border)"><p class="text-xs font-medium mb-1" style="color:var(--text-muted)">Conversion Rate</p><p class="text-xl font-bold" style="font-family:var(--heading);color:var(--text)">' + convRate + '%</p></div>'
    + '<div class="rounded-xl p-4" style="background:var(--card-bg);border:1px solid var(--border)"><p class="text-xs font-medium mb-1" style="color:var(--text-muted)">Avg. Order Value</p><p class="text-xl font-bold" style="font-family:var(--heading);color:var(--text)">$' + DASH_STATS.avgOrder.toFixed(2) + '</p></div>'
    + '</div>'
    + '<div class="rounded-xl p-5 mb-6" style="background:var(--card-bg);border:1px solid var(--border)">'
    + '<div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-sm" style="font-family:var(--heading);color:var(--text)">Revenue Trend</h3>'
    + '<div class="flex gap-2"><button class="text-xs px-3 py-1 rounded-lg font-medium border-0 cursor-pointer" style="background:var(--accent-light);color:var(--accent)">Monthly</button><button class="text-xs px-3 py-1 rounded-lg font-medium cursor-pointer" style="color:var(--text-muted);border:1px solid var(--border);background:var(--card-bg)">Weekly</button></div></div>'
    + '<div style="height:300px"><canvas id="chart-analytics-revenue"></canvas></div></div>'
    + '<div class="grid grid-cols-2 gap-4 mb-6">'
    + '<div class="rounded-xl p-5" style="background:var(--card-bg);border:1px solid var(--border)"><div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-sm" style="font-family:var(--heading);color:var(--text)">Weekly Orders</h3></div><div style="height:240px"><canvas id="chart-analytics-orders"></canvas></div></div>'
    + '<div class="rounded-xl p-5" style="background:var(--card-bg);border:1px solid var(--border)"><div class="flex items-center justify-between mb-4"><h3 class="font-semibold text-sm" style="font-family:var(--heading);color:var(--text)">Conversion Funnel</h3></div><div style="height:240px"><canvas id="chart-analytics-funnel"></canvas></div></div>'
    + '</div>'
    + '<div class="grid grid-cols-3 gap-4 mb-6">'
    + '<div class="rounded-xl p-5" style="background:var(--card-bg);border:1px solid var(--border)"><div class="mb-4"><h3 class="font-semibold text-sm" style="font-family:var(--heading);color:var(--text)">Sales by Category</h3></div><div style="height:240px"><canvas id="chart-analytics-category"></canvas></div></div>'
    + '<div class="rounded-xl p-5" style="background:var(--card-bg);border:1px solid var(--border)"><div class="mb-4"><h3 class="font-semibold text-sm" style="font-family:var(--heading);color:var(--text)">Traffic Sources</h3></div><div style="height:240px"><canvas id="chart-analytics-traffic"></canvas></div></div>'
    + '<div class="rounded-xl p-5" style="background:var(--card-bg);border:1px solid var(--border)"><div class="mb-4"><h3 class="font-semibold text-sm" style="font-family:var(--heading);color:var(--text)">Top Products</h3></div><div style="height:240px"><canvas id="chart-analytics-top"></canvas></div></div>'
    + '</div>';
}

function renderUsers() {
  var roleColors = {
    super_admin: { bg: '#3D1A4A', text: '#C084FC', label: 'Super Admin' },
    manager: { bg: '#1A2A4A', text: '#60A5FA', label: 'Manager' },
    staff: { bg: '#0D3D28', text: '#34D399', label: 'Staff' },
    customer: { bg: 'var(--hover-bg2)', text: 'var(--text-muted)', label: 'Customer' },
  };
  var roleColorsLight = {
    super_admin: { bg: '#F3E8FF', text: '#7C3AED', label: 'Super Admin' },
    manager: { bg: '#DBEAFE', text: '#1D4ED8', label: 'Manager' },
    staff: { bg: '#D1FAE5', text: '#065F46', label: 'Staff' },
    customer: { bg: 'var(--hover-bg2)', text: 'var(--text-muted)', label: 'Customer' },
  };

  var total = DASH_USERS.length;
  var active = DASH_USERS.filter(function (u) { return u.status === 'active'; }).length;
  var admins = DASH_USERS.filter(function (u) { return u.role === 'super_admin' || u.role === 'manager'; }).length;
  var suspended = DASH_USERS.filter(function (u) { return u.status === 'suspended'; }).length;

  function roleBadge(role) {
    var dark = document.documentElement.classList.contains('dark');
    var c = dark ? roleColors[role] : roleColorsLight[role];
    return '<span style="display:inline-block;padding:2px 9px;border-radius:100px;font-size:11px;font-weight:600;background:' + c.bg + ';color:' + c.text + '">' + c.label + '</span>';
  }
  function statusBadge(status) {
    var map = { active: 'badge-active', inactive: 'badge-cancelled', suspended: 'badge-flagged' };
    return '<span class="badge ' + (map[status] || 'badge-cancelled') + '">' + status + '</span>';
  }
  function avatarColor(idx) {
    var colors = ['#5046E5', '#0D9668', '#E8553D', '#F5A623', '#7B61FF', '#2563EB', '#0891B2', '#BE185D'];
    return colors[idx % colors.length];
  }

  var rows = DASH_USERS.map(function (u, i) {
    var avatar = '<div style="width:34px;height:34px;border-radius:50%;background:' + avatarColor(i) + ';color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--heading);font-weight:700;font-size:13px;flex-shrink:0">' + u.avatar + '</div>';
    return '<tr>'
      + '<td><input type="checkbox" class="row-check"></td>'
      + '<td><div class="flex items-center gap-3">' + avatar + '<div><div class="fw500" style="font-size:13.5px">' + u.name + '</div><div class="text-muted text-sm">' + u.email + '</div></div></div></td>'
      + '<td>' + roleBadge(u.role) + '</td>'
      + '<td>' + statusBadge(u.status) + '</td>'
      + '<td class="text-muted">' + u.joined + '</td>'
      + '<td class="text-muted">' + u.lastLogin + '</td>'
      + '<td class="fw600">' + (u.orders > 0 ? u.orders : '<span class="text-muted">—</span>') + '</td>'
      + '<td class="fw600">' + (u.spent > 0 ? '$' + u.spent.toFixed(2) : '<span class="text-muted">—</span>') + '</td>'
      + '<td><div class="actions-cell">'
      + '<button class="btn-icon" title="Edit user" onclick="openEditUser(' + u.id + ')">' + dIcon('edit', 15) + '</button>'
      + '<button class="btn-icon btn-danger" title="Delete user" onclick="deleteUser(' + u.id + ')">' + dIcon('trash', 15) + '</button>'
      + '</div></td>'
      + '</tr>';
  }).join('');

  return '<div class="page-header">'
    + '<div><h1>Users</h1><p style="color:var(--text-muted);font-size:14px;margin-top:4px">Manage user accounts and permissions.</p></div>'
    + '<div class="page-actions"><button class="btn-secondary" onclick="exportTable(\'users\')">' + dIcon('download', 15) + ' Export</button><button class="btn-primary" onclick="openAddUser()">' + dIcon('plus', 15) + ' Add User</button></div>'
    + '</div>'

    // Stat cards
    + '<div class="stats-grid stats-sm">'
    + '<div class="stat-card-sm"><span class="stat-label">Total Users</span><span class="stat-value-sm">' + total + '</span></div>'
    + '<div class="stat-card-sm"><span class="stat-label">Active</span><span class="stat-value-sm" style="color:#0D9668">' + active + '</span></div>'
    + '<div class="stat-card-sm"><span class="stat-label">Admins & Managers</span><span class="stat-value-sm" style="color:var(--accent)">' + admins + '</span></div>'
    + '<div class="stat-card-sm"><span class="stat-label">Suspended</span><span class="stat-value-sm text-danger">' + suspended + '</span></div>'
    + '</div>'

    // Table
    + '<div class="table-card">'
    + '<div class="table-toolbar">'
    + '<div class="search-box">' + dIcon('search', 16) + '<input type="text" placeholder="Search users..." oninput="filterTable(this,\'users\')"></div>'
    + '<div class="flex items-center gap-2">'
    + '<select class="filter-select" onchange="filterUserRole(this)"><option value="">All Roles</option><option value="super_admin">Super Admin</option><option value="manager">Manager</option><option value="staff">Staff</option><option value="customer">Customer</option></select>'
    + '<select class="filter-select" onchange="filterUserStatus(this)"><option value="">All Statuses</option><option value="active">Active</option><option value="inactive">Inactive</option><option value="suspended">Suspended</option></select>'
    + '</div>'
    + '</div>'
    + '<table id="users-table"><thead><tr>'
    + '<th style="width:32px"><input type="checkbox" onclick="toggleAll(this)"></th>'
    + '<th>User</th><th>Role</th><th>Status</th><th>Joined</th><th>Last Login</th><th>Orders</th><th>Spent</th><th style="width:80px">Actions</th>'
    + '</tr></thead><tbody>' + rows + '</tbody></table>'
    + '<div class="table-footer"><span class="text-muted">' + total + ' users</span></div>'
    + '</div>';
}

function openAddUser() {
  var body = '<div class="form-row"><div class="form-group"><label>Full Name</label><input type="text" class="form-input" id="m-uname" placeholder="e.g. John Doe"></div>'
    + '<div class="form-group"><label>Email</label><input type="email" class="form-input" id="m-uemail" placeholder="john@example.com"></div></div>'
    + '<div class="form-row"><div class="form-group"><label>Role</label><select class="form-input" id="m-urole"><option value="customer">Customer</option><option value="staff">Staff</option><option value="manager">Manager</option><option value="super_admin">Super Admin</option></select></div>'
    + '<div class="form-group"><label>Status</label><select class="form-input" id="m-ustatus"><option value="active">Active</option><option value="inactive">Inactive</option><option value="suspended">Suspended</option></select></div></div>'
    + '<div class="form-row"><div class="form-group"><label>Password</label><input type="password" class="form-input" id="m-upwd" placeholder="Min 8 characters"></div>'
    + '<div class="form-group"><label>Confirm Password</label><input type="password" class="form-input" id="m-upwd2" placeholder="Repeat password"></div></div>'
    + '<div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="addUser()">Add User</button></div>';
  openModal('Add User', body);
}

function addUser() {
  var name = document.getElementById('m-uname').value.trim();
  if (!name) { showToast('Name is required', 'error'); return; }
  var email = document.getElementById('m-uemail').value.trim();
  if (!email) { showToast('Email is required', 'error'); return; }
  DASH_USERS.push({
    id: DASH_USERS.length + 1,
    name: name, email: email,
    role: document.getElementById('m-urole').value,
    status: document.getElementById('m-ustatus').value,
    joined: new Date().toISOString().split('T')[0],
    lastLogin: '—', avatar: name.charAt(0).toUpperCase(),
    orders: 0, spent: 0,
  });
  closeModal(); navigateTo('users'); showToast('User "' + name + '" added');
}

function openEditUser(id) {
  var u = DASH_USERS.find(function (x) { return x.id === id; });
  if (!u) return;
  var roleOpts = ['customer', 'staff', 'manager', 'super_admin'].map(function (r) {
    return '<option value="' + r + '"' + (u.role === r ? ' selected' : '') + '>' + r.replace('_', ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); }) + '</option>';
  }).join('');
  var statusOpts = ['active', 'inactive', 'suspended'].map(function (s) {
    return '<option value="' + s + '"' + (u.status === s ? ' selected' : '') + '>' + s.charAt(0).toUpperCase() + s.slice(1) + '</option>';
  }).join('');
  var body = '<div class="form-row"><div class="form-group"><label>Full Name</label><input type="text" class="form-input" id="m-uname" value="' + u.name + '"></div>'
    + '<div class="form-group"><label>Email</label><input type="email" class="form-input" id="m-uemail" value="' + u.email + '"></div></div>'
    + '<div class="form-row"><div class="form-group"><label>Role</label><select class="form-input" id="m-urole">' + roleOpts + '</select></div>'
    + '<div class="form-group"><label>Status</label><select class="form-input" id="m-ustatus">' + statusOpts + '</select></div></div>'
    + '<div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveUser(' + id + ')">Save Changes</button></div>';
  openModal('Edit User', body);
}

function saveUser(id) {
  var u = DASH_USERS.find(function (x) { return x.id === id; });
  if (!u) return;
  u.name = document.getElementById('m-uname').value;
  u.email = document.getElementById('m-uemail').value;
  u.role = document.getElementById('m-urole').value;
  u.status = document.getElementById('m-ustatus').value;
  u.avatar = u.name.charAt(0).toUpperCase();
  closeModal(); navigateTo('users'); showToast('User updated');
}

function deleteUser(id) {
  var u = DASH_USERS.find(function (x) { return x.id === id; });
  if (!u) return;
  var body = '<p style="margin-bottom:20px;color:var(--text)">Are you sure you want to delete <strong>"' + u.name + '"</strong>? This cannot be undone.</p>'
    + '<div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-danger-solid" onclick="confirmDeleteUser(' + id + ')">Delete User</button></div>';
  openModal('Delete User', body);
}

function confirmDeleteUser(id) {
  var idx = DASH_USERS.findIndex(function (x) { return x.id === id; });
  if (idx >= 0) DASH_USERS.splice(idx, 1);
  closeModal(); navigateTo('users'); showToast('User deleted', 'error');
}

function filterUserRole(sel) {
  var v = sel.value.toLowerCase();
  document.querySelectorAll('#users-table tbody tr').forEach(function (row) {
    if (!v) { row.style.display = ''; return; }
    row.style.display = row.cells[2].textContent.trim().toLowerCase().replace(' ', '_').indexOf(v) >= 0 ? '' : 'none';
  });
}

function filterUserStatus(sel) {
  var v = sel.value.toLowerCase();
  document.querySelectorAll('#users-table tbody tr').forEach(function (row) {
    if (!v) { row.style.display = ''; return; }
    row.style.display = row.cells[3].textContent.trim().toLowerCase().indexOf(v) >= 0 ? '' : 'none';
  });
}


function renderProductSalesChart() {
  var labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  var values = [12, 18, 9, 24, 15, 20, 17, 28, 22, 31, 19, 25];
  createChart('chart-product-sales', {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: function (ctx) {
          var max = Math.max.apply(null, values);
          return ctx.parsed.y === max ? '#5046E5' : 'rgba(80,70,229,0.2)';
        },
        borderRadius: 6,
        barPercentage: 0.65
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (ctx) { return ctx.parsed.y + ' units sold'; } } } },
      scales: { y: { beginAtZero: true, ticks: { callback: function (v) { return v + ' u'; } } } }
    }
  });
}

function renderAnalyticsCharts() {
  renderRevenueChart('chart-analytics-revenue');
  renderOrdersChart('chart-analytics-orders');
  renderFunnelChart('chart-analytics-funnel');
  renderCategoryChart('chart-analytics-category');
  renderTrafficChart('chart-analytics-traffic');
  renderTopProductsChart('chart-analytics-top');
}

function renderOverviewCharts() {
  renderRevenueChart('chart-overview-revenue');
  renderCategoryChart('chart-overview-category');
  renderDailyRevenueChart('chart-overview-daily');
  renderOrdersChart('chart-overview-orders');
}/* ══════════════════════════════════════════
   MY PROFILE PAGE
══════════════════════════════════════════ */
function renderProfile() {
  var u = DASH_USERS[0];
  var avatarColors = ['#5046E5', '#0D9668', '#E8553D', '#F5A623', '#7B61FF'];
  var ac = avatarColors[0];
  return '<div class="page-header"><div><h1>My Profile</h1><p style="color:var(--text-muted);font-size:14px;margin-top:4px">Manage your personal information and account preferences.</p></div>'
    + '<div class="page-actions"><button class="btn-primary" onclick="saveProfileChanges()">' + dIcon('check', 15) + ' Save Changes</button></div>'
    + '</div>'

    // Profile card + activity
    + '<div style="display:grid;grid-template-columns:1fr 2fr;gap:18px;margin-bottom:18px">'

    // Left: Avatar card
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:28px;display:flex;flex-direction:column;align-items:center;gap:16px;text-align:center">'
    + '<div style="width:80px;height:80px;border-radius:50%;background:' + ac + ';color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--heading);font-weight:700;font-size:28px;flex-shrink:0">A</div>'
    + '<div><div style="font-family:var(--heading);font-size:17px;font-weight:700;color:var(--text)">Admin User</div>'
    + '<div style="font-size:13px;color:var(--text-muted);margin-top:2px">admin@vcshop.com</div>'
    + '<span style="display:inline-block;margin-top:8px;padding:3px 12px;border-radius:100px;font-size:11.5px;font-weight:600;background:var(--accent-light);color:var(--accent)">Super Admin</span></div>'
    + '<div style="width:100%;border-top:1px solid var(--border);padding-top:16px">'
    + '<div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:8px"><span style="color:var(--text-muted)">Member since</span><span style="color:var(--text);font-weight:500">Jan 2024</span></div>'
    + '<div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:8px"><span style="color:var(--text-muted)">Last login</span><span style="color:var(--text);font-weight:500">May 22, 2026</span></div>'
    + '<div style="display:flex;justify-content:space-between;font-size:12.5px"><span style="color:var(--text-muted)">2FA</span><span style="color:#0D9668;font-weight:600">Enabled</span></div>'
    + '</div>'
    + '<button class="btn-secondary" style="width:100%;justify-content:center" onclick="showToast(\'Photo upload coming soon\')">' + dIcon('edit', 15) + ' Change Photo</button>'
    + '</div>'

    // Right: Edit form
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:28px">'
    + '<h3 style="font-family:var(--heading);font-size:15px;font-weight:600;margin-bottom:20px;color:var(--text)">Personal Information</h3>'
    + '<div class="form-row"><div class="form-group"><label>First Name</label><input type="text" class="form-input" id="p-fname" value="Admin"></div>'
    + '<div class="form-group"><label>Last Name</label><input type="text" class="form-input" id="p-lname" value="User"></div></div>'
    + '<div class="form-group"><label>Email Address</label><input type="email" class="form-input" id="p-email" value="admin@vcshop.com"></div>'
    + '<div class="form-row"><div class="form-group"><label>Phone</label><input type="tel" class="form-input" id="p-phone" placeholder="+1 (555) 000-0000"></div>'
    + '<div class="form-group"><label>Timezone</label><select class="form-input"><option selected>UTC+7 (Indochina Time)</option><option>UTC-5 (Eastern)</option><option>UTC+0 (GMT)</option><option>UTC+8 (China Standard)</option></select></div></div>'
    + '<div class="form-group"><label>Bio</label><textarea class="form-input" rows="3" style="resize:vertical" placeholder="Write a short bio..."></textarea></div>'

    + '<h3 style="font-family:var(--heading);font-size:15px;font-weight:600;margin:24px 0 16px;color:var(--text)">Change Password</h3>'
    + '<div class="form-row"><div class="form-group"><label>Current Password</label><input type="password" class="form-input" placeholder="••••••••"></div>'
    + '<div class="form-group"><label>New Password</label><input type="password" class="form-input" placeholder="Min 8 characters"></div></div>'
    + '<div class="form-group" style="max-width:50%;padding-right:9px"><label>Confirm New Password</label><input type="password" class="form-input" placeholder="Repeat new password"></div>'
    + '</div>'
    + '</div>'

    // Activity log
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;overflow:hidden">'
    + '<div class="table-header"><h3>Recent Activity</h3><span style="font-size:12px;color:var(--text-muted)">Last 30 days</span></div>'
    + '<table><thead><tr><th>Action</th><th>Details</th><th>Date</th><th>IP Address</th></tr></thead><tbody>'
    + '<tr><td><span class="badge badge-active">Login</span></td><td>Successful login via browser</td><td style="color:var(--text-muted)">2026-05-22 09:14</td><td style="color:var(--text-muted);font-size:12px">203.189.x.x</td></tr>'
    + '<tr><td><span class="badge badge-shipped">Update</span></td><td>Updated product "Canvas Backpack" price</td><td style="color:var(--text-muted)">2026-05-21 14:22</td><td style="color:var(--text-muted);font-size:12px">203.189.x.x</td></tr>'
    + '<tr><td><span class="badge badge-processing">Create</span></td><td>Created coupon code VIP25</td><td style="color:var(--text-muted)">2026-05-20 11:05</td><td style="color:var(--text-muted);font-size:12px">203.189.x.x</td></tr>'
    + '<tr><td><span class="badge badge-active">Login</span></td><td>Successful login via browser</td><td style="color:var(--text-muted)">2026-05-20 08:47</td><td style="color:var(--text-muted);font-size:12px">203.189.x.x</td></tr>'
    + '<tr><td><span class="badge badge-cancelled">Delete</span></td><td>Deleted review #8 (flagged content)</td><td style="color:var(--text-muted)">2026-05-19 16:30</td><td style="color:var(--text-muted);font-size:12px">203.189.x.x</td></tr>'
    + '</tbody></table>'
    + '</div>';
}

function saveProfileChanges() {
  unsavedChanges = false;
  showToast('Profile changes saved');
}

/* ══════════════════════════════════════════
   BILLING PAGE
══════════════════════════════════════════ */
function renderBilling() {
  var invoices = [
    { id: 'INV-2026-005', date: '2026-05-01', desc: 'VC Shop Pro — May 2026', amount: 79.00, status: 'paid' },
    { id: 'INV-2026-004', date: '2026-04-01', desc: 'VC Shop Pro — Apr 2026', amount: 79.00, status: 'paid' },
    { id: 'INV-2026-003', date: '2026-03-01', desc: 'VC Shop Pro — Mar 2026', amount: 79.00, status: 'paid' },
    { id: 'INV-2026-002', date: '2026-02-01', desc: 'VC Shop Pro — Feb 2026', amount: 59.00, status: 'paid' },
    { id: 'INV-2026-001', date: '2026-01-01', desc: 'VC Shop Starter — Jan 2026', amount: 29.00, status: 'paid' },
  ];
  var plans = [
    { name: 'Starter', price: 29, features: ['Up to 100 products', '2 staff accounts', 'Basic analytics', 'Email support'], current: false },
    { name: 'Pro', price: 79, features: ['Unlimited products', '10 staff accounts', 'Advanced analytics', 'Priority support', 'Custom domain'], current: true },
    { name: 'Enterprise', price: 199, features: ['Everything in Pro', 'Unlimited staff', 'Dedicated manager', 'SLA guarantee', 'Custom integrations'], current: false },
  ];
  var planCards = plans.map(function (p) {
    var isActive = p.current;
    return '<div style="border:2px solid ' + (isActive ? 'var(--accent)' : 'var(--border)') + ';border-radius:12px;padding:24px;position:relative;background:' + (isActive ? 'var(--accent-light)' : 'var(--card-bg)') + ';">'
      + (isActive ? '<span style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;font-size:11px;font-weight:700;padding:2px 12px;border-radius:100px">CURRENT PLAN</span>' : '')
      + '<div style="font-family:var(--heading);font-size:16px;font-weight:700;color:var(--text);margin-bottom:4px">' + p.name + '</div>'
      + '<div style="font-size:26px;font-weight:800;font-family:var(--heading);color:' + (isActive ? 'var(--accent)' : 'var(--text)') + '">$' + p.price + '<span style="font-size:13px;font-weight:500;color:var(--text-muted)">/mo</span></div>'
      + '<ul style="margin:16px 0;display:flex;flex-direction:column;gap:8px;list-style:none;padding:0">' + p.features.map(function (f) { return '<li style="font-size:13px;display:flex;align-items:center;gap:8px;color:var(--text)"><span style="color:#0D9668">' + dIcon('check', 14) + '</span>' + f + '</li>'; }).join('') + '</ul>'
      + (isActive
        ? '<button class="btn-secondary" style="width:100%;justify-content:center" onclick="showToast(\'You are already on this plan\')">Current Plan</button>'
        : '<button class="btn-primary" style="width:100%;justify-content:center" onclick="showToast(\'Switching to ' + p.name + ' plan...\')">Switch to ' + p.name + '</button>')
      + '</div>';
  }).join('');

  var invRows = invoices.map(function (inv) {
    return '<tr><td class="fw500">' + inv.id + '</td><td style="color:var(--text-muted)">' + inv.date + '</td><td>' + inv.desc + '</td><td class="fw600">$' + inv.amount.toFixed(2) + '</td><td><span class="badge badge-active">' + inv.status + '</span></td>'
      + '<td><button class="btn-icon" title="Download" onclick="showToast(\'Downloading ' + inv.id + '...\')">' + dIcon('download', 15) + '</button></td></tr>';
  }).join('');

  return '<div class="page-header"><div><h1>Billing</h1><p style="color:var(--text-muted);font-size:14px;margin-top:4px">Manage your subscription, payment methods, and invoices.</p></div></div>'

    // Current plan summary bar
    + '<div style="background:var(--accent);border-radius:12px;padding:24px 28px;margin-bottom:18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px">'
    + '<div><div style="color:rgba(255,255,255,.7);font-size:12px;font-weight:500;margin-bottom:4px">ACTIVE PLAN</div><div style="font-family:var(--heading);font-size:22px;font-weight:700;color:#fff">VC Shop Pro</div><div style="color:rgba(255,255,255,.75);font-size:13px;margin-top:4px">Renews on June 1, 2026 &nbsp;·&nbsp; $79.00/month</div></div>'
    + '<div style="display:flex;gap:10px"><button class="btn-secondary" style="background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.25);color:#fff" onclick="openModal(\'Cancel Subscription\',\'<p style=&quot;color:var(--text);margin-bottom:20px&quot;>Are you sure you want to cancel your Pro subscription? You will lose access to Pro features at the end of your billing cycle.</p><div class=&quot;modal-actions&quot;><button class=&quot;btn-secondary&quot; onclick=&quot;closeModal()&quot;>Keep Subscription</button><button class=&quot;btn-danger-solid&quot; onclick=&quot;closeModal();showToast(\\\'Subscription cancelled\\\',\\\'error\\\')&quot;>Cancel Plan</button></div>\')">Cancel Plan</button>'
    + '<button class="btn-primary" style="background:#fff;color:var(--accent)" onclick="showToast(\'Redirecting to billing portal...\')">Manage Plan</button></div>'
    + '</div>'

    // Plans grid
    + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:18px">' + planCards + '</div>'

    // Payment method + Next invoice
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px">'
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px">'
    + '<h3 style="font-family:var(--heading);font-size:15px;font-weight:600;margin-bottom:16px">Payment Method</h3>'
    + '<div style="display:flex;align-items:center;gap:14px;padding:14px;border:1.5px solid var(--border);border-radius:10px;margin-bottom:14px">'
    + '<div style="width:44px;height:28px;background:#1A1F71;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff">VISA</div>'
    + '<div style="flex:1"><div style="font-size:13.5px;font-weight:600;color:var(--text)">•••• •••• •••• 4242</div><div style="font-size:12px;color:var(--text-muted)">Expires 09/2028</div></div>'
    + '<span class="badge badge-active">Default</span>'
    + '</div>'
    + '<button class="btn-secondary" style="font-size:13px" onclick="showToast(\'Add payment method...\')">' + dIcon('plus', 14) + ' Add Payment Method</button>'
    + '</div>'

    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:24px">'
    + '<h3 style="font-family:var(--heading);font-size:15px;font-weight:600;margin-bottom:16px">Billing Summary</h3>'
    + '<div style="display:flex;flex-direction:column;gap:10px">'
    + '<div style="display:flex;justify-content:space-between;font-size:13.5px"><span style="color:var(--text-muted)">Current plan</span><span style="font-weight:600;color:var(--text)">Pro — $79.00/mo</span></div>'
    + '<div style="display:flex;justify-content:space-between;font-size:13.5px"><span style="color:var(--text-muted)">Next billing date</span><span style="font-weight:600;color:var(--text)">June 1, 2026</span></div>'
    + '<div style="display:flex;justify-content:space-between;font-size:13.5px"><span style="color:var(--text-muted)">Billing cycle</span><span style="font-weight:600;color:var(--text)">Monthly</span></div>'
    + '<div style="border-top:1px solid var(--border);margin-top:4px;padding-top:12px;display:flex;justify-content:space-between;font-size:14px"><span style="font-weight:600;color:var(--text)">Amount due Jun 1</span><span style="font-family:var(--heading);font-weight:700;font-size:18px;color:var(--accent)">$79.00</span></div>'
    + '</div>'
    + '</div>'
    + '</div>'

    // Invoice table
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;overflow:hidden">'
    + '<div class="table-header"><h3>Invoice History</h3><button class="btn-secondary" style="font-size:12px" onclick="showToast(\'Downloading all invoices...\')">' + dIcon('download', 14) + ' Download All</button></div>'
    + '<table><thead><tr><th>Invoice</th><th>Date</th><th>Description</th><th>Amount</th><th>Status</th><th style="width:48px"></th></tr></thead><tbody>' + invRows + '</tbody></table>'
    + '</div>';
}

/* ══════════════════════════════════════════
   HELP & SUPPORT PAGE
══════════════════════════════════════════ */
function renderHelp() {
  var faqs = [
    { q: 'How do I add a new product?', a: 'Go to Products in the sidebar and click "Add Product". Fill in the product name, price, category, SKU, and stock quantity then click save.' },
    { q: 'How do I process a refund?', a: 'Navigate to Orders, find the order you want to refund, click the edit icon, and change the status to "Refunded". The customer will be notified automatically.' },
    { q: 'How do I create a discount coupon?', a: 'Go to Coupons in the sidebar and click "Add Coupon". You can create percentage, fixed amount, or free shipping coupons with optional expiry dates and usage limits.' },
    { q: 'How do I export my data?', a: 'Each table page (Products, Orders, Customers, etc.) has an Export button in the top right. Click it to download the data as a CSV file.' },
    { q: 'How do I invite a team member?', a: 'Navigate to Users, click "Add User", fill in their details, assign a role (Staff or Manager), and they will receive an invitation email.' },
    { q: 'How do I enable two-factor authentication?', a: 'Go to Settings → Security and toggle on Two-Factor Authentication. You\'ll be guided through the setup with an authenticator app.' },
  ];
  var tickets = [
    { id: '#8841', subject: 'CSV export not working on Firefox', date: '2026-05-18', status: 'resolved' },
    { id: '#8720', subject: 'Need help setting up custom domain', date: '2026-05-10', status: 'resolved' },
    { id: '#8614', subject: 'Question about tax configuration', date: '2026-04-28', status: 'resolved' },
  ];
  var faqItems = faqs.map(function (f, i) {
    return '<div style="border-bottom:1px solid var(--border);last-child:border-none">'
      + '<button onclick="toggleFaq(' + i + ')" style="width:100%;text-align:left;padding:16px 20px;background:none;border:none;color:var(--text);font-size:13.5px;font-weight:600;display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer" id="faq-btn-' + i + '">'
      + f.q
      + '<svg id="faq-icon-' + i + '" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;transition:transform .2s"><path d="M6 9l6 6 6-6"/></svg>'
      + '</button>'
      + '<div id="faq-body-' + i + '" style="max-height:0;overflow:hidden;transition:max-height .25s ease"><p style="padding:0 20px 16px;font-size:13px;color:var(--text-muted);line-height:1.65">' + f.a + '</p></div>'
      + '</div>';
  }).join('');

  var ticketRows = tickets.map(function (t) {
    return '<tr><td class="fw500">' + t.id + '</td><td>' + t.subject + '</td><td style="color:var(--text-muted)">' + t.date + '</td><td><span class="badge badge-active">' + t.status + '</span></td>'
      + '<td><button class="btn-text" onclick="showToast(\'Opening ticket ' + t.id + '...\')">View</button></td></tr>';
  }).join('');

  return '<div class="page-header"><div><h1>Help & Support</h1><p style="color:var(--text-muted);font-size:14px;margin-top:4px">Find answers, contact support, or browse our documentation.</p></div></div>'

    // Quick links
    + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:18px">'
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:22px;cursor:pointer;transition:box-shadow .15s" onmouseenter="this.style.boxShadow=\'0 4px 20px rgba(0,0,0,.08)\'" onmouseleave="this.style.boxShadow=\'none\'" onclick="showToast(\'Opening documentation...\')">'
    + '<div style="width:40px;height:40px;border-radius:10px;background:var(--accent-light);color:var(--accent);display:flex;align-items:center;justify-content:center;margin-bottom:14px">' + dIcon('orders', 20) + '</div>'
    + '<div style="font-family:var(--heading);font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px">Documentation</div>'
    + '<div style="font-size:12.5px;color:var(--text-muted)">Browse full guides, API docs, and tutorials.</div>'
    + '</div>'
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:22px;cursor:pointer;transition:box-shadow .15s" onmouseenter="this.style.boxShadow=\'0 4px 20px rgba(0,0,0,.08)\'" onmouseleave="this.style.boxShadow=\'none\'" onclick="openNewTicket()">'
    + '<div style="width:40px;height:40px;border-radius:10px;background:#E8F8F1;color:#0D9668;display:flex;align-items:center;justify-content:center;margin-bottom:14px">' + dIcon('edit', 20) + '</div>'
    + '<div style="font-family:var(--heading);font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px">Submit a Ticket</div>'
    + '<div style="font-size:12.5px;color:var(--text-muted)">Get help from our support team.</div>'
    + '</div>'
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:22px;cursor:pointer;transition:box-shadow .15s" onmouseenter="this.style.boxShadow=\'0 4px 20px rgba(0,0,0,.08)\'" onmouseleave="this.style.boxShadow=\'none\'" onclick="showToast(\'Starting live chat...\')">'
    + '<div style="width:40px;height:40px;border-radius:10px;background:#FFF6E5;color:#B8860B;display:flex;align-items:center;justify-content:center;margin-bottom:14px">' + dIcon('bell', 20) + '</div>'
    + '<div style="font-family:var(--heading);font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px">Live Chat</div>'
    + '<div style="font-size:12.5px;color:var(--text-muted)">Chat with support Mon–Fri, 9am–6pm UTC.</div>'
    + '</div>'
    + '</div>'

    // FAQ + Tickets
    + '<div style="display:grid;grid-template-columns:1.4fr 1fr;gap:18px;margin-bottom:18px">'

    // FAQ accordion
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;overflow:hidden">'
    + '<div class="table-header"><h3>Frequently Asked Questions</h3></div>'
    + '<div>' + faqItems + '</div>'
    + '</div>'

    // Contact info
    + '<div style="display:flex;flex-direction:column;gap:16px">'
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:22px">'
    + '<h3 style="font-family:var(--heading);font-size:15px;font-weight:600;margin-bottom:16px">Contact Support</h3>'
    + '<div style="display:flex;flex-direction:column;gap:12px">'
    + '<div style="display:flex;align-items:center;gap:12px"><div style="width:36px;height:36px;border-radius:9px;background:var(--accent-light);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0">' + dIcon('bell', 16) + '</div><div><div style="font-size:13px;font-weight:600;color:var(--text)">Email Support</div><div style="font-size:12px;color:var(--text-muted)">support@vcshop.com</div></div></div>'
    + '<div style="display:flex;align-items:center;gap:12px"><div style="width:36px;height:36px;border-radius:9px;background:#E8F8F1;color:#0D9668;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + dIcon('check', 16) + '</div><div><div style="font-size:13px;font-weight:600;color:var(--text)">Response Time</div><div style="font-size:12px;color:var(--text-muted)">Typically under 4 hours (Pro)</div></div></div>'
    + '<div style="display:flex;align-items:center;gap:12px"><div style="width:36px;height:36px;border-radius:9px;background:#FFF6E5;color:#B8860B;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + dIcon('star', 16) + '</div><div><div style="font-size:13px;font-weight:600;color:var(--text)">Support Hours</div><div style="font-size:12px;color:var(--text-muted)">Monday–Friday, 9am–6pm UTC</div></div></div>'
    + '</div>'
    + '<button class="btn-primary" style="margin-top:18px;width:100%;justify-content:center" onclick="openNewTicket()">' + dIcon('edit', 14) + ' New Support Ticket</button>'
    + '</div>'

    // System status
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:22px">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px"><h3 style="font-family:var(--heading);font-size:15px;font-weight:600">System Status</h3><span style="font-size:11.5px;font-weight:600;color:#0D9668;background:#E8F8F1;padding:3px 10px;border-radius:100px">All Systems Operational</span></div>'
    + ['Dashboard', 'API', 'Checkout', 'Email Notifications', 'File Storage'].map(function (s) {
      return '<div style="display:flex;align-items:center;justify-content:space-between;font-size:13px;padding:7px 0;border-bottom:1px solid var(--border)"><span style="color:var(--text)">' + s + '</span><span style="color:#0D9668;font-size:11px;font-weight:600">● Operational</span></div>';
    }).join('')
    + '</div>'
    + '</div>'
    + '</div>'

    // Past tickets
    + '<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;overflow:hidden">'
    + '<div class="table-header"><h3>Your Support Tickets</h3><button class="btn-primary" onclick="openNewTicket()">' + dIcon('plus', 14) + ' New Ticket</button></div>'
    + '<table><thead><tr><th>Ticket ID</th><th>Subject</th><th>Opened</th><th>Status</th><th style="width:60px"></th></tr></thead><tbody>' + ticketRows + '</tbody></table>'
    + '</div>';
}

function toggleFaq(i) {
  var body = document.getElementById('faq-body-' + i);
  var icon = document.getElementById('faq-icon-' + i);
  var isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';
  // Close all
  document.querySelectorAll('[id^="faq-body-"]').forEach(function (b) { b.style.maxHeight = '0px'; });
  document.querySelectorAll('[id^="faq-icon-"]').forEach(function (ic) { ic.style.transform = 'rotate(0deg)'; });
  if (!isOpen) {
    body.style.maxHeight = body.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
  }
}

function openNewTicket() {
  var body = '<div class="form-group"><label>Subject</label><input type="text" class="form-input" id="t-subj" placeholder="Brief description of your issue"></div>'
    + '<div class="form-row"><div class="form-group"><label>Category</label><select class="form-input"><option>Technical Issue</option><option>Billing Question</option><option>Feature Request</option><option>Account</option><option>Other</option></select></div>'
    + '<div class="form-group"><label>Priority</label><select class="form-input"><option>Normal</option><option>High</option><option>Urgent</option></select></div></div>'
    + '<div class="form-group"><label>Description</label><textarea class="form-input" id="t-desc" rows="5" placeholder="Please describe your issue in detail..."></textarea></div>'
    + '<div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="submitTicket()">Submit Ticket</button></div>';
  openModal('New Support Ticket', body);
}

function submitTicket() {
  var subj = document.getElementById('t-subj').value.trim();
  if (!subj) { showToast('Please enter a subject', 'error'); return; }
  closeModal(); showToast('Ticket submitted! We\'ll get back to you shortly.');
}

/* ══════════════════════════════════════════
   ACTIONS
══════════════════════════════════════════ */
var currentPage = 'overview';
var sidebarCollapsed = false;
var unsavedChanges = false;

var PAGE_LABELS = { overview: 'Overview', analytics: 'Analytics', products: 'Products', orders: 'Orders', customers: 'Customers', inventory: 'Inventory', coupons: 'Coupons', reviews: 'Reviews', users: 'Users', settings: 'Settings', profile: 'My Profile', billing: 'Billing', help: 'Help & Support', 'product-detail': 'Product Detail' };
var SIDEBAR_PAGES = ['overview', 'analytics', 'products', 'orders', 'customers', 'users', 'inventory', 'coupons', 'reviews', 'settings'];

function navigateTo(page, force) {
  if (!force && unsavedChanges && (page !== currentPage)) {
    openModal('Unsaved Changes', '<p style="color:var(--text);margin-bottom:20px">You have unsaved changes on this page. Are you sure you want to leave?</p>'
      + '<div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Stay</button><button class="btn-primary" onclick="closeModal();unsavedChanges=false;navigateTo(\'' + page + '\',true)">Leave without saving</button></div>');
    return;
  }
  unsavedChanges = false;
  currentPage = page;
  history.pushState(null, '', '#' + page);
  if (page === 'products') prodFilters = { search: '', cat: '', status: '', stock: '', price: '' };
  if (page === 'orders') ordFilters = { search: '', status: '', payment: '' };
  destroyCharts();
  var content = document.getElementById('page-content');
  var pages = { overview: renderOverview, analytics: renderAnalytics, products: renderProducts, orders: renderOrders, customers: renderCustomers, inventory: renderInventory, coupons: renderCoupons, reviews: renderReviews, users: renderUsers, settings: renderSettings, profile: renderProfile, billing: renderBilling, help: renderHelp, 'product-detail': renderProductDetail };
  content.innerHTML = (pages[page] || renderOverview)();
  requestAnimationFrame(function () {
    if (page === 'overview') { renderOverviewCharts(); }
    if (page === 'analytics') { renderAnalyticsCharts(); }
    if (page === 'product-detail') { renderProductSalesChart(); }
  });
  document.querySelectorAll('.nav-item').forEach(function (el) {
    el.classList.toggle('active', el.dataset.page === page);
  });
  // Breadcrumb: sidebar pages show simple label; dropdown/detail pages show path
  var label = PAGE_LABELS[page] || (page.charAt(0).toUpperCase() + page.slice(1));
  var bc = document.getElementById('breadcrumb-page');
  if (page === 'product-detail') {
    var pName = (DASH_PRODUCTS.find(function (x) { return x.id === currentProductId; }) || {}).name || 'Detail';
    bc.innerHTML = '<a href="#" onclick="navigateTo(\'products\');return false;" style="color:var(--text-muted);font-weight:400">Products</a> / ' + pName;
  } else if (SIDEBAR_PAGES.indexOf(page) === -1) {
    bc.innerHTML = '<a href="#" onclick="navigateTo(\'overview\');return false;" style="color:var(--text-muted);font-weight:400">Dashboard</a> / ' + label;
  } else {
    bc.textContent = label;
  }
  // Back button for non-sidebar pages
  var backBtn = document.getElementById('back-to-dash');
  if (backBtn) {
    if (page === 'product-detail') {
      backBtn.style.display = 'inline-flex';
      backBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg> Products';
      backBtn.onclick = function () { navigateTo('products'); };
    } else if (SIDEBAR_PAGES.indexOf(page) === -1) {
      backBtn.style.display = 'inline-flex';
      backBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg> Dashboard';
      backBtn.onclick = function () { navigateTo('overview'); };
    } else {
      backBtn.style.display = 'none';
    }
  }
}

function toggleSidebar() {
  sidebarCollapsed = !sidebarCollapsed;
  document.querySelector('.dashboard').classList.toggle('sidebar-collapsed', sidebarCollapsed);
}

function openModal(title, body) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = body;
  document.getElementById('modal-overlay').classList.add('show');
}
function closeModal() { document.getElementById('modal-overlay').classList.remove('show'); }

function showToast(msg, type) {
  type = type || 'success';
  var container = document.getElementById('toast-container');
  var toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.innerHTML = dIcon(type === 'success' ? 'check' : 'x', 16) + ' ' + msg;
  container.appendChild(toast);
  setTimeout(function () { toast.classList.add('show'); }, 10);
  setTimeout(function () { toast.classList.remove('show'); setTimeout(function () { toast.remove(); }, 300); }, 3000);
}

/* Products CRUD */
function openAddProduct() {
  var body = '<div class="form-group"><label>Product Name</label><input type="text" class="form-input" id="m-name" required></div>'
    + '<div class="form-row"><div class="form-group"><label>Price</label><div class="input-addon"><span>$</span><input type="number" step="0.01" class="form-input" id="m-price" required></div></div>'
    + '<div class="form-group"><label>Stock</label><input type="number" class="form-input" id="m-stock" required></div></div>'
    + '<div class="form-row"><div class="form-group"><label>Category</label><select class="form-input" id="m-cat"><option>Men\'s</option><option>Women\'s</option><option>Jewelry</option><option>Electronics</option></select></div>'
    + '<div class="form-group"><label>SKU</label><input type="text" class="form-input" id="m-sku" required></div></div>'
    + '<div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="addProduct()">Add Product</button></div>';
  openModal('Add Product', body);
}
function addProduct() {
  var name = document.getElementById('m-name').value;
  if (!name) return;
  var p = { id: DASH_PRODUCTS.length + 1, name: name, price: parseFloat(document.getElementById('m-price').value) || 0, stock: parseInt(document.getElementById('m-stock').value) || 0, cat: document.getElementById('m-cat').value, sku: document.getElementById('m-sku').value, status: 'active', created: new Date().toISOString().split('T')[0] };
  DASH_PRODUCTS.push(p);
  closeModal(); navigateTo('products'); showToast('Product "' + p.name + '" added');
}
function openEditProduct(id) {
  var p = DASH_PRODUCTS.find(function (x) { return x.id === id; });
  if (!p) return;
  var body = '<div class="form-group"><label>Product Name</label><input type="text" class="form-input" id="m-name" value="' + p.name + '"></div>'
    + '<div class="form-row"><div class="form-group"><label>Price</label><div class="input-addon"><span>$</span><input type="number" step="0.01" class="form-input" id="m-price" value="' + p.price + '"></div></div>'
    + '<div class="form-group"><label>Stock</label><input type="number" class="form-input" id="m-stock" value="' + p.stock + '"></div></div>'
    + '<div class="form-row"><div class="form-group"><label>Category</label><select class="form-input" id="m-cat"><option' + (p.cat === "Men\'s" ? ' selected' : '') + '>Men\'s</option><option' + (p.cat === "Women\'s" ? ' selected' : '') + '>Women\'s</option><option' + (p.cat === 'Jewelry' ? ' selected' : '') + '>Jewelry</option><option' + (p.cat === 'Electronics' ? ' selected' : '') + '>Electronics</option></select></div>'
    + '<div class="form-group"><label>SKU</label><input type="text" class="form-input" id="m-sku" value="' + p.sku + '"></div></div>'
    + '<div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="saveProduct(' + id + ')">Save Changes</button></div>';
  openModal('Edit Product', body);
}
function saveProduct(id) {
  var p = DASH_PRODUCTS.find(function (x) { return x.id === id; });
  if (!p) return;
  p.name = document.getElementById('m-name').value;
  p.price = parseFloat(document.getElementById('m-price').value);
  p.stock = parseInt(document.getElementById('m-stock').value);
  p.cat = document.getElementById('m-cat').value;
  p.sku = document.getElementById('m-sku').value;
  p.status = p.stock === 0 ? 'out' : p.stock <= 10 ? 'low' : 'active';
  closeModal(); navigateTo('products'); showToast('Product updated');
}
function deleteProduct(id) {
  var p = DASH_PRODUCTS.find(function (x) { return x.id === id; });
  if (!p) return;
  var body = '<p style="margin-bottom:20px">Are you sure you want to delete <strong>"' + p.name + '"</strong>? This action cannot be undone.</p>'
    + '<div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-danger-solid" onclick="confirmDelete(' + id + ')">Delete Product</button></div>';
  openModal('Delete Product', body);
}
function confirmDelete(id) {
  var idx = DASH_PRODUCTS.findIndex(function (x) { return x.id === id; });
  if (idx >= 0) DASH_PRODUCTS.splice(idx, 1);
  closeModal(); navigateTo('products'); showToast('Product deleted', 'error');
}

/* Coupons */
function openAddCoupon() {
  var body = '<div class="form-row"><div class="form-group"><label>Code</label><input type="text" class="form-input" id="m-code" placeholder="e.g. SUMMER20" style="text-transform:uppercase"></div>'
    + '<div class="form-group"><label>Type</label><select class="form-input" id="m-type"><option>Percentage</option><option>Fixed</option><option>Free Shipping</option></select></div></div>'
    + '<div class="form-row"><div class="form-group"><label>Value</label><input type="number" class="form-input" id="m-val"></div>'
    + '<div class="form-group"><label>Min Order ($)</label><input type="number" class="form-input" id="m-min" value="0"></div></div>'
    + '<div class="form-row"><div class="form-group"><label>Max Uses</label><input type="number" class="form-input" id="m-max" placeholder="Unlimited"></div>'
    + '<div class="form-group"><label>Expires</label><input type="date" class="form-input" id="m-exp"></div></div>'
    + '<div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="addCoupon()">Create Coupon</button></div>';
  openModal('Add Coupon', body);
}
function addCoupon() {
  DASH_COUPONS.push({ id: DASH_COUPONS.length + 1, code: document.getElementById('m-code').value.toUpperCase(), type: document.getElementById('m-type').value, value: parseInt(document.getElementById('m-val').value) || 0, minOrder: parseInt(document.getElementById('m-min').value) || 0, uses: 0, maxUses: parseInt(document.getElementById('m-max').value) || null, status: 'active', expires: document.getElementById('m-exp').value || null });
  closeModal(); navigateTo('coupons'); showToast('Coupon created');
}
function copyCode(code) { navigator.clipboard.writeText(code).catch(function () { }); showToast('Copied: ' + code); }

/* Reviews */
function approveReview(id) {
  var r = DASH_REVIEWS.find(function (x) { return x.id === id; });
  if (r) { r.status = 'approved'; navigateTo('reviews'); showToast('Review approved'); }
}

/* Inventory */
function promptStock(id) {
  var p = DASH_PRODUCTS.find(function (x) { return x.id === id; });
  if (!p) return;
  var body = '<p style="margin-bottom:16px">Current stock for <strong>' + p.name + '</strong>: <strong>' + p.stock + '</strong></p>'
    + '<div class="form-group"><label>New Stock Quantity</label><input type="number" class="form-input" id="m-newstock" value="' + p.stock + '" min="0"></div>'
    + '<div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-primary" onclick="updateStock(' + id + ')">Update Stock</button></div>';
  openModal('Update Stock', body);
}
function updateStock(id) {
  var p = DASH_PRODUCTS.find(function (x) { return x.id === id; });
  if (!p) return;
  p.stock = parseInt(document.getElementById('m-newstock').value);
  p.status = p.stock === 0 ? 'out' : p.stock <= 10 ? 'low' : 'active';
  closeModal(); navigateTo('inventory'); showToast('Stock updated');
}

/* Table helpers */
function emptyStateHTML(icon, title, msg) {
  return '<tr><td colspan="20"><div class="empty-state"><div class="empty-state-icon">' + dIcon(icon, 24) + '</div><h4>' + title + '</h4><p>' + msg + '</p></div></td></tr>';
}
function filterTable(input, table) {
  var q = input.value.toLowerCase();
  var rows = document.querySelectorAll('#' + table + '-table tbody tr');
  var visible = 0;
  rows.forEach(function (row) {
    if (row.classList.contains('empty-row')) return;
    var show = row.textContent.toLowerCase().indexOf(q) >= 0;
    row.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  var emptyRow = document.querySelector('#' + table + '-table tbody .empty-row');
  if (emptyRow) emptyRow.remove();
  if (visible === 0 && q) {
    var tbody = document.querySelector('#' + table + '-table tbody');
    var tr = document.createElement('tr');
    tr.className = 'empty-row';
    tr.innerHTML = '<td colspan="20"><div class="empty-state"><div class="empty-state-icon">' + dIcon('search', 24) + '</div><h4>No results found</h4><p>No matches for "' + input.value + '". Try a different search term.</p></div></td>';
    tbody.appendChild(tr);
  }
}
function filterCat(sel) {
  var v = sel.value.toLowerCase();
  document.querySelectorAll('#products-table tbody tr').forEach(function (row) {
    if (!v) { row.style.display = ''; return; }
    row.style.display = row.cells[2].textContent.toLowerCase().indexOf(v) >= 0 ? '' : 'none';
  });
}
function toggleAll(cb) {
  cb.closest('table').querySelectorAll('.row-check').forEach(function (c) { c.checked = cb.checked; });
}
function exportTable(name) { showToast('Exporting ' + name + '...'); }

/* ══════════════════════════════════════════
   NOTIFICATIONS & DROPDOWNS (global)
══════════════════════════════════════════ */
var DASH_USERS = [
  { id: 1, name: 'Admin User', email: 'admin@vcshop.com', role: 'super_admin', status: 'active', joined: '2024-01-10', lastLogin: '2026-05-22', avatar: 'A', orders: 0, spent: 0 },
  { id: 2, name: 'Sarah Chen', email: 'sarah@example.com', role: 'manager', status: 'active', joined: '2025-03-14', lastLogin: '2026-05-21', avatar: 'S', orders: 12, spent: 2340.50 },
  { id: 3, name: 'James Wilson', email: 'james@example.com', role: 'staff', status: 'active', joined: '2025-06-20', lastLogin: '2026-05-20', avatar: 'J', orders: 8, spent: 1890.00 },
  { id: 4, name: 'Maria Garcia', email: 'maria@example.com', role: 'customer', status: 'active', joined: '2025-09-22', lastLogin: '2026-05-19', avatar: 'M', orders: 15, spent: 3120.75 },
  { id: 5, name: 'Alex Thompson', email: 'alex@example.com', role: 'customer', status: 'active', joined: '2026-02-14', lastLogin: '2026-05-18', avatar: 'A', orders: 3, spent: 445.50 },
  { id: 6, name: 'Emily Brown', email: 'emily@example.com', role: 'customer', status: 'active', joined: '2026-01-08', lastLogin: '2026-05-17', avatar: 'E', orders: 6, spent: 1250.00 },
  { id: 7, name: 'David Lee', email: 'david@example.com', role: 'staff', status: 'inactive', joined: '2025-11-03', lastLogin: '2026-04-30', avatar: 'D', orders: 2, spent: 289.98 },
  { id: 8, name: 'Lisa Park', email: 'lisa@example.com', role: 'customer', status: 'active', joined: '2025-10-15', lastLogin: '2026-05-16', avatar: 'L', orders: 9, spent: 1780.25 },
  { id: 9, name: 'Tom Harris', email: 'tom@example.com', role: 'customer', status: 'inactive', joined: '2026-04-30', lastLogin: '2026-05-01', avatar: 'T', orders: 1, spent: 89.99 },
  { id: 10, name: 'Nina Patel', email: 'nina@example.com', role: 'manager', status: 'active', joined: '2025-07-18', lastLogin: '2026-05-22', avatar: 'N', orders: 3, spent: 267.98 },
  { id: 11, name: 'Chris Moore', email: 'chris@example.com', role: 'customer', status: 'suspended', joined: '2026-03-05', lastLogin: '2026-04-10', avatar: 'C', orders: 2, spent: 145.98 },
  { id: 12, name: 'Kevin Park', email: 'kevin@example.com', role: 'customer', status: 'active', joined: '2026-05-01', lastLogin: '2026-05-22', avatar: 'K', orders: 1, spent: 89.99 },
];

var NOTIFICATIONS = [
  { id: 1, type: 'order', read: false, title: 'New order received', body: 'Order #VC-10422 placed by Kevin Park', time: '2 min ago' },
  { id: 2, type: 'stock', read: false, title: 'Low stock alert', body: 'Knit Cardigan is running low (3 left)', time: '18 min ago' },
  { id: 3, type: 'review', read: false, title: 'New review pending', body: 'Smart Watch got a 3-star review', time: '1 hr ago' },
  { id: 4, type: 'order', read: true, title: 'Order delivered', body: 'Order #VC-10419 marked as delivered', time: '3 hr ago' },
  { id: 5, type: 'coupon', read: true, title: 'Coupon expired', body: 'FLASH50 coupon has expired', time: 'Yesterday' },
];

var NOTIF_ICONS = {
  order: '<div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style="background:#E8F0FE;color:#2563EB">' + dIcon('orders', 15) + '</div>',
  stock: '<div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style="background:#FFF6E5;color:#B8860B">' + dIcon('box', 15) + '</div>',
  review: '<div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style="background:#F3F0FF;color:#7B61FF">' + dIcon('star', 15) + '</div>',
  coupon: '<div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style="background:#E8F8F1;color:#0D9668">' + dIcon('tag', 15) + '</div>',
};

function renderNotifList() {
  var list = document.getElementById('notif-list');
  if (!list) return;
  list.innerHTML = NOTIFICATIONS.map(function (n) {
    return '<div class="flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors duration-100" style="' + (n.read ? '' : 'background:var(--accent-light);') + 'border-bottom:1px solid var(--border)" onmouseenter="this.style.background=\'var(--hover-bg)\'" onmouseleave="this.style.background=\'' + (n.read ? 'transparent' : 'var(--accent-light)') + '\';" onclick="readNotif(' + n.id + ')">'
      + NOTIF_ICONS[n.type]
      + '<div class="flex-1 min-w-0">'
      + '<div class="text-xs font-semibold leading-snug" style="color:var(--text)">' + n.title + (n.read ? '' : ' <span style="display:inline-block;width:6px;height:6px;background:var(--accent);border-radius:50%;vertical-align:middle;margin-left:4px"></span>') + '</div>'
      + '<div class="text-xs leading-snug mt-0.5" style="color:var(--text-muted)">' + n.body + '</div>'
      + '<div class="text-xs mt-1" style="color:var(--text-muted);opacity:.7">' + n.time + '</div>'
      + '</div></div>';
  }).join('');
}

function toggleNotifDropdown() {
  var dd = document.getElementById('notif-dropdown');
  var profileDD = document.getElementById('profile-dropdown');
  profileDD.classList.add('hidden');
  document.getElementById('profile-chevron').style.transform = 'rotate(0deg)';
  dd.classList.toggle('hidden');
  if (!dd.classList.contains('hidden')) renderNotifList();
}

function toggleProfileDropdown() {
  var dd = document.getElementById('profile-dropdown');
  document.getElementById('notif-dropdown').classList.add('hidden');
  dd.classList.toggle('hidden');
  document.getElementById('profile-chevron').style.transform = dd.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
}

function markAllRead() {
  NOTIFICATIONS.forEach(function (n) { n.read = true; });
  var dot = document.querySelector('.notif-dot');
  if (dot) dot.style.display = 'none';
  renderNotifList();
}

function readNotif(id) {
  var n = NOTIFICATIONS.find(function (x) { return x.id === id; });
  if (n) n.read = true;
  var unread = NOTIFICATIONS.filter(function (x) { return !x.read; }).length;
  var dot = document.querySelector('.notif-dot');
  if (dot) dot.style.display = unread ? '' : 'none';
  renderNotifList();
}

function profileAction(action) {
  var dd = document.getElementById('profile-dropdown');
  dd.classList.add('hidden');
  document.getElementById('profile-chevron').style.transform = 'rotate(0deg)';
  if (action === 'logout') {
    openModal('Log Out', '<p style="margin-bottom:20px;color:var(--text)">Are you sure you want to log out of your account?</p><div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-danger-solid" onclick="closeModal();showToast(\'Logged out\',\'error\')">Log Out</button></div>');
  } else if (action === 'settings') {
    navigateTo('settings');
  } else if (action === 'profile') {
    navigateTo('profile');
  } else if (action === 'billing') {
    navigateTo('billing');
  } else if (action === 'help') {
    navigateTo('help');
  }
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
(function () {
  var items = [
    { page: 'overview', icon: 'home', label: 'Overview' },
    { page: 'analytics', icon: 'dollar', label: 'Analytics' },
    { page: 'products', icon: 'package', label: 'Products' },
    { page: 'orders', icon: 'orders', label: 'Orders' },
    { page: 'customers', icon: 'users', label: 'Customers' },
    { page: 'users', icon: 'person', label: 'Users' },
    { page: 'inventory', icon: 'box', label: 'Inventory' },
    { page: 'coupons', icon: 'tag', label: 'Coupons' },
    { page: 'reviews', icon: 'star', label: 'Reviews' },
  ];
  var nav = document.getElementById('sidebar-nav');
  items.forEach(function (item) {
    var div = document.createElement('div');
    div.className = 'nav-item' + (item.page === 'overview' ? ' active' : '');
    div.dataset.page = item.page;
    div.innerHTML = dIcon(item.icon, 18) + '<span>' + item.label + '</span>';
    div.addEventListener('click', function () { navigateTo(item.page); });
    nav.appendChild(div);
  });
  var divider = document.createElement('div');
  divider.className = 'sidebar-divider';
  divider.style.marginTop = 'auto';
  nav.appendChild(divider);
  var settingsDiv = document.createElement('div');
  settingsDiv.className = 'nav-item';
  settingsDiv.dataset.page = 'settings';
  settingsDiv.innerHTML = dIcon('settings', 18) + '<span>Settings</span>';
  settingsDiv.addEventListener('click', function () { navigateTo('settings'); });
  nav.appendChild(settingsDiv);

  // Theme toggle
  var SUN_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  var MOON_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
  function applyTheme(dark) {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.getElementById('theme-toggle').innerHTML = SUN_ICON + '<span>Light</span>';
    } else {
      document.documentElement.classList.remove('dark');
      document.getElementById('theme-toggle').innerHTML = MOON_ICON + '<span>Dark</span>';
    }
    try { localStorage.setItem('vc-theme', dark ? 'dark' : 'light'); } catch (e) { }
    applyChartDefaults();
    destroyCharts();
    var content = document.getElementById('page-content');
    var pages = { overview: renderOverview, analytics: renderAnalytics, products: renderProducts, orders: renderOrders, customers: renderCustomers, inventory: renderInventory, coupons: renderCoupons, reviews: renderReviews, users: renderUsers, settings: renderSettings, profile: renderProfile, billing: renderBilling, help: renderHelp, 'product-detail': renderProductDetail };
    var fn = pages[currentPage];
    if (fn) {
      content.innerHTML = fn();
      requestAnimationFrame(function () {
        if (currentPage === 'overview') renderOverviewCharts();
        if (currentPage === 'analytics') renderAnalyticsCharts();
        if (currentPage === 'product-detail') renderProductSalesChart();
      });
    }
  }
  var savedTheme = 'light';
  try { savedTheme = localStorage.getItem('vc-theme') || 'light'; } catch (e) { }
  applyTheme(savedTheme === 'dark');
  applyChartDefaults();
  document.getElementById('theme-toggle').addEventListener('click', function () {
    applyTheme(!document.documentElement.classList.contains('dark'));
  });

  // Topbar icons
  document.getElementById('sidebar-toggle').innerHTML = dIcon('menu', 18);
  var searchWrap = document.getElementById('topbar-search-wrap');
  searchWrap.insertAdjacentHTML('afterbegin', dIcon('search', 16));
  document.getElementById('topbar-notif-btn').insertAdjacentHTML('afterbegin', dIcon('bell', 18));
  document.getElementById('modal-close-btn').innerHTML = dIcon('x', 18);

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!document.getElementById('notif-wrap').contains(e.target)) {
      document.getElementById('notif-dropdown').classList.add('hidden');
    }
    if (!document.getElementById('profile-wrap').contains(e.target)) {
      document.getElementById('profile-dropdown').classList.add('hidden');
      document.getElementById('profile-chevron').style.transform = 'rotate(0deg)';
    }
  });

  // Sidebar toggle
  document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });

  // ── Back to Dashboard button in topbar ──
  var topbarLeft = document.querySelector('.topbar-left');
  var backBtn = document.createElement('button');
  backBtn.id = 'back-to-dash';
  backBtn.className = 'btn-secondary';
  backBtn.style.cssText = 'display:none;font-size:12px;padding:5px 10px;gap:5px';
  backBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg> Dashboard';
  backBtn.onclick = function () { navigateTo('overview'); };
  topbarLeft.appendChild(backBtn);

  // ── Global Search ──
  var searchInput = document.getElementById('global-search');
  var searchDD = document.getElementById('search-dropdown');

  function runSearch(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) { searchDD.classList.add('hidden'); return; }
    var results = [];
    DASH_PRODUCTS.forEach(function (p) {
      if (p.name.toLowerCase().indexOf(q) >= 0 || p.sku.toLowerCase().indexOf(q) >= 0) {
        results.push({ type: 'Product', icon: 'package', label: p.name, sub: 'SKU: ' + p.sku + ' · $' + p.price, page: 'products' });
      }
    });
    DASH_ORDERS.forEach(function (o) {
      if (o.id.toLowerCase().indexOf(q) >= 0 || o.customer.toLowerCase().indexOf(q) >= 0) {
        results.push({ type: 'Order', icon: 'orders', label: o.id + ' — ' + o.customer, sub: '$' + o.total.toFixed(2) + ' · ' + o.status, page: 'orders' });
      }
    });
    DASH_CUSTOMERS.forEach(function (c) {
      if (c.name.toLowerCase().indexOf(q) >= 0 || c.email.toLowerCase().indexOf(q) >= 0) {
        results.push({ type: 'Customer', icon: 'users', label: c.name, sub: c.email, page: 'customers' });
      }
    });
    DASH_USERS.forEach(function (u) {
      if (u.name.toLowerCase().indexOf(q) >= 0 || u.email.toLowerCase().indexOf(q) >= 0) {
        results.push({ type: 'User', icon: 'person', label: u.name, sub: u.email + ' · ' + u.role.replace('_', ' '), page: 'users' });
      }
    });
    DASH_COUPONS.forEach(function (c) {
      if (c.code.toLowerCase().indexOf(q) >= 0) {
        results.push({ type: 'Coupon', icon: 'tag', label: c.code, sub: c.type + ' — ' + c.status, page: 'coupons' });
      }
    });
    if (results.length === 0) {
      searchDD.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted);font-size:13px">No results for "<strong style=\'color:var(--text)\'>' + q + '</strong>"</div>';
    } else {
      var typeColors = { Product: 'var(--accent)', Order: '#2563EB', Customer: '#0D9668', User: '#7B61FF', Coupon: '#E5A100' };
      searchDD.innerHTML = results.slice(0, 8).map(function (r, i) {
        return '<div class="search-result-item" data-idx="' + i + '" style="display:flex;align-items:center;gap:12px;padding:10px 14px;cursor:pointer;border-bottom:1px solid var(--border);transition:background .1s" onmouseenter="this.style.background=\'var(--hover-bg)\'" onmouseleave="this.style.background=\'transparent\'" onclick="searchGo(\'' + r.page + '\')">'
          + '<div style="width:32px;height:32px;border-radius:8px;background:var(--accent-light);color:' + typeColors[r.type] + ';display:flex;align-items:center;justify-content:center;flex-shrink:0">' + dIcon(r.icon, 15) + '</div>'
          + '<div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:600;color:var(--text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + r.label + '</div>'
          + '<div style="font-size:11.5px;color:var(--text-muted)">' + r.sub + '</div></div>'
          + '<span style="font-size:10.5px;font-weight:600;padding:2px 7px;border-radius:100px;background:var(--hover-bg2);color:var(--text-muted)">' + r.type + '</span>'
          + '</div>';
      }).join('');
      if (results.length > 8) {
        searchDD.innerHTML += '<div style="padding:10px 14px;font-size:12px;color:var(--text-muted);text-align:center">+' + (results.length - 8) + ' more results</div>';
      }
    }
    searchDD.classList.remove('hidden');
  }

  function searchGo(page) {
    searchInput.value = '';
    searchDD.classList.add('hidden');
    navigateTo(page);
  }

  var searchTimer;
  searchInput.addEventListener('input', function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () { runSearch(searchInput.value); }, 150);
  });
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { searchDD.classList.add('hidden'); searchInput.blur(); }
  });
  document.addEventListener('click', function (e) {
    if (!document.getElementById('search-wrap').contains(e.target)) {
      searchDD.classList.add('hidden');
    }
  });

  // ── Keyboard Shortcuts ──
  // Show shortcut hint toast on ?
  document.addEventListener('keydown', function (e) {
    var tag = document.activeElement.tagName;
    var isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
    // / → focus search
    if (e.key === '/' && !isInput) { e.preventDefault(); searchInput.focus(); searchInput.select(); return; }
    // Escape → blur search / close modal
    if (e.key === 'Escape') { searchDD.classList.add('hidden'); return; }
    // ? → show shortcuts
    if (e.key === '?' && !isInput) { showShortcutsModal(); return; }
    if (isInput) return;
    // G + letter combos
    if (e.key === 'g' || e.key === 'G') {
      window._gPending = true;
      setTimeout(function () { window._gPending = false; }, 1200);
      return;
    }
    if (window._gPending) {
      window._gPending = false;
      var map = { o: 'overview', a: 'analytics', p: 'products', r: 'orders', c: 'customers', u: 'users', i: 'inventory', n: 'coupons', v: 'reviews', s: 'settings' };
      var dest = map[e.key.toLowerCase()];
      if (dest) { e.preventDefault(); navigateTo(dest); showToast('Navigated to ' + PAGE_LABELS[dest]); }
      return;
    }
    // D → toggle dark mode
    if (e.key === 'd' || e.key === 'D') { document.getElementById('theme-toggle').click(); }
  });

  function showShortcutsModal() {
    var shortcuts = [
      ['/', 'Focus search bar'],
      ['G then O', 'Overview'],
      ['G then A', 'Analytics'],
      ['G then P', 'Products'],
      ['G then R', 'Orders'],
      ['G then C', 'Customers'],
      ['G then U', 'Users'],
      ['G then I', 'Inventory'],
      ['G then N', 'Coupons'],
      ['G then V', 'Reviews'],
      ['G then S', 'Settings'],
      ['D', 'Toggle dark mode'],
      ['?', 'Show this help'],
    ];
    var rows = shortcuts.map(function (s) {
      return '<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">'
        + '<span style="font-size:13px;color:var(--text-muted)">' + s[1] + '</span>'
        + '<kbd style="font-family:monospace;font-size:12px;font-weight:600;padding:3px 8px;border-radius:5px;background:var(--hover-bg2);color:var(--text);border:1px solid var(--border)">' + s[0] + '</kbd>'
        + '</div>';
    }).join('');
    openModal('Keyboard Shortcuts', '<div>' + rows + '</div><div class="modal-actions"><button class="btn-secondary" onclick="closeModal()">Close</button></div>');
  }

  // ── Unsaved changes tracking (profile/settings forms) ──
  document.getElementById('page-content').addEventListener('input', function (e) {
    if (currentPage === 'profile' || currentPage === 'settings') {
      unsavedChanges = true;
    }
  });

  // ── Mobile: close sidebar on nav click when narrow ──
  document.getElementById('sidebar-nav').addEventListener('click', function () {
    if (window.innerWidth < 768 && !sidebarCollapsed) {
      toggleSidebar();
    }
  });

  // Mobile sidebar overlay click to close
  document.querySelector('.dashboard').addEventListener('click', function (e) {
    if (window.innerWidth < 768 && sidebarCollapsed && !document.querySelector('.sidebar').contains(e.target) && !document.getElementById('sidebar-toggle').contains(e.target)) {
      toggleSidebar();
    }
  });

  // Shortcut hint in topbar (desktop only)
  var shortcutHint = document.createElement('div');
  shortcutHint.className = 'shortcut-bar';
  shortcutHint.innerHTML = 'Press <kbd>?</kbd> for shortcuts';
  shortcutHint.style.cssText = 'margin-left:4px';
  document.querySelector('.topbar-right').insertBefore(shortcutHint, document.getElementById('theme-toggle'));

  // Render initial page
  var startPage = window.location.hash.replace('#', '') || 'overview';
  navigateTo(startPage);

  window.addEventListener('popstate', function() {
    var page = window.location.hash.replace('#', '') || 'overview';
    navigateTo(page, true);
  });
  function toast(msg, type) {
  type = type || 'success';
  var c = document.getElementById('toast-container');
  var t = document.createElement('div');
  t.className = 'toast toast-' + type;
  t.innerHTML = dIcon(type === 'success' ? 'check' : 'x', 16) + ' ' + msg + '<div class="toast-bar"></div>';
  c.appendChild(t);
  setTimeout(function() { t.classList.add('show'); }, 10);
  setTimeout(function() { t.classList.remove('show'); }, 3000);
  setTimeout(function() { t.remove(); }, 3400);
}
})();
