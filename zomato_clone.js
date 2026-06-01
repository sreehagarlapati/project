// ========= RESTAURANT DATA =========
const RESTAURANTS = [
  {
    id: 1,
    name: "Paradise Biryani",
    cuisine: "Biryani, Hyderabadi",
    price: 250,
    rating: 4.7,
    time: 22,
    veg: false,
    offer: "Free delivery above ₹199",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
    tags: ["biryani", "hyderabadi", "rice", "spicy", "delivery"]
  },
  {
    id: 2,
    name: "Burger House",
    cuisine: "Burgers, Fast Food",
    price: 300,
    rating: 4.3,
    time: 28,
    veg: false,
    offer: "30% OFF up to ₹100",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    tags: ["burger", "fries", "fast food", "delivery"]
  },
  {
    id: 3,
    name: "Fresh Bowl Cafe",
    cuisine: "Healthy, Salads",
    price: 220,
    rating: 4.2,
    time: 35,
    veg: true,
    offer: "Buy 1 get 1 on bowls",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    tags: ["healthy", "salad", "veg", "cafe", "dining"]
  },
  {
    id: 4,
    name: "La Pino'z Pizza",
    cuisine: "Pizza, Italian",
    price: 280,
    rating: 4.5,
    time: 31,
    veg: false,
    offer: "Flat ₹125 OFF",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
    tags: ["pizza", "italian", "cheese", "delivery"]
  },
  {
    id: 5,
    name: "Chutneys",
    cuisine: "South Indian, Pure Veg",
    price: 180,
    rating: 4.6,
    time: 24,
    veg: true,
    offer: "10% OFF on dosas",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=80",
    tags: ["dosa", "idli", "south indian", "veg", "breakfast"]
  },
  {
    id: 6,
    name: "Cream Stone",
    cuisine: "Ice Cream, Desserts",
    price: 160,
    rating: 4.4,
    time: 18,
    veg: true,
    offer: "Dessert combo at ₹149",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
    tags: ["ice cream", "dessert", "sweet", "veg"]
  },
  {
    id: 7,
    name: "Barbeque Nation",
    cuisine: "BBQ, North Indian",
    price: 450,
    rating: 4.8,
    time: 42,
    veg: false,
    offer: "Family feast deals",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    tags: ["bbq", "north indian", "grill", "dining"]
  },
  {
    id: 8,
    name: "The Coffee Cup",
    cuisine: "Cafe, Beverages",
    price: 190,
    rating: 4.1,
    time: 26,
    veg: true,
    offer: "Coffee + snack combo",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    tags: ["coffee", "cafe", "beverage", "snack", "dining"]
  },
  {
    id: 9,
    name: "Club Rogue",
    cuisine: "Nightlife, Continental",
    price: 520,
    rating: 4.5,
    time: 38,
    veg: false,
    offer: "Happy hours till 8 PM",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=900&q=80",
    tags: ["nightlife", "drinks", "continental", "dining"]
  },
  {
    id: 10,
    name: "Mehfil Shawarma Hub",
    cuisine: "Shawarma, Arabian",
    price: 140,
    rating: 4.2,
    time: 21,
    veg: false,
    offer: "Roll combo at ₹199",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
    tags: ["shawarma", "arabian", "roll", "chicken", "delivery"]
  },
  {
    id: 11,
    name: "Punjabi Tadka",
    cuisine: "North Indian, Punjabi",
    price: 260,
    rating: 4.4,
    time: 32,
    veg: false,
    offer: "₹100 OFF above ₹499",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
    tags: ["north indian", "paneer", "butter chicken", "naan", "dining"]
  },
  {
    id: 12,
    name: "Taco Fiesta",
    cuisine: "Mexican, Wraps",
    price: 240,
    rating: 4.1,
    time: 29,
    veg: false,
    offer: "Free nachos on orders above ₹299",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
    tags: ["taco", "mexican", "wrap", "nachos", "delivery"]
  },
  {
    id: 13,
    name: "Ramen Street",
    cuisine: "Asian, Japanese",
    price: 340,
    rating: 4.6,
    time: 36,
    veg: false,
    offer: "Soup bowl combo",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    tags: ["ramen", "noodles", "asian", "japanese", "soup"]
  },
  {
    id: 14,
    name: "Green Leaf Meals",
    cuisine: "Andhra Meals, Pure Veg",
    price: 170,
    rating: 4.5,
    time: 20,
    veg: true,
    offer: "Unlimited meals from ₹149",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",
    tags: ["meals", "andhra", "veg", "rice", "lunch", "delivery"]
  },
  {
    id: 15,
    name: "Waffle Works",
    cuisine: "Waffles, Desserts",
    price: 150,
    rating: 4.3,
    time: 23,
    veg: true,
    offer: "Buy 2 waffles get 1 free",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=80",
    tags: ["waffle", "dessert", "chocolate", "sweet", "veg"]
  },
  {
    id: 16,
    name: "Subway Fresh",
    cuisine: "Sandwiches, Healthy",
    price: 210,
    rating: 4.0,
    time: 19,
    veg: true,
    offer: "Footlong meal deal",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=80",
    tags: ["sandwich", "sub", "healthy", "salad", "veg", "fast"]
  },
  {
    id: 17,
    name: "KFC Express",
    cuisine: "Fried Chicken, Fast Food",
    price: 320,
    rating: 4.2,
    time: 27,
    veg: false,
    offer: "Chicken bucket savings",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80",
    tags: ["chicken", "fried chicken", "wings", "fast food", "delivery"]
  },
  {
    id: 18,
    name: "Dumpling Den",
    cuisine: "Momos, Chinese",
    price: 130,
    rating: 4.4,
    time: 25,
    veg: false,
    offer: "Steamed momos at ₹99",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80",
    tags: ["momos", "dumplings", "chinese", "snack", "delivery"]
  },
  {
    id: 19,
    name: "The Breakfast Club",
    cuisine: "Breakfast, Cafe",
    price: 200,
    rating: 4.6,
    time: 17,
    veg: true,
    offer: "Morning combo at ₹179",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    tags: ["breakfast", "pancake", "coffee", "toast", "cafe", "veg"]
  },
  {
    id: 20,
    name: "Coastal Curry House",
    cuisine: "Seafood, South Indian",
    price: 380,
    rating: 4.7,
    time: 34,
    veg: false,
    offer: "Fish curry meals",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
    tags: ["seafood", "fish", "curry", "south indian", "rice", "dining"]
  }
];

// ========= APP STATE =========
let cart = {};
let activeFilter = "all";
let searchValue = "";
let orderTimer = null;

// ========= CART HELPERS =========
function getRestaurant(id) {
  return RESTAURANTS.find(item => item.id === Number(id));
}

function getCartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function getCartSubtotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = getRestaurant(id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
}

function getDeliveryFee(subtotal) {
  return subtotal >= 399 || subtotal === 0 ? 0 : 35;
}

function updateCartBadge() {
  document.getElementById("cartCount").textContent = getCartCount();
}

// ========= RENDER RESTAURANTS =========
function renderRestaurants(list) {
  const grid = document.getElementById("restaurantsGrid");

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No restaurants found</h3>
        <p>Try another search term or reset filters.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(item => `
    <article class="restaurant-card">
      <div class="restaurant-media">
        <img src="${item.image}" alt="${item.name}" />
        ${item.offer ? `<span class="badge">${item.offer.split(" ")[0]} ${item.offer.split(" ")[1] || ""}</span>` : ""}
        <span class="time">${item.time} min</span>
      </div>
      <div class="restaurant-info">
        <div class="restaurant-head">
          <h3>${item.name}</h3>
          <span class="rating">${item.rating} ★</span>
        </div>
        <div class="restaurant-meta">
          <span>${item.cuisine}</span>
          <span>${item.veg ? "Pure Veg" : "Non Veg"}</span>
        </div>
        <p class="offer-line">${item.offer}</p>
        <div class="restaurant-footer">
          <span class="price">₹${item.price} for one</span>
          <div id="ctrl_${item.id}">${renderCartControl(item.id)}</div>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCartControl(id) {
  const qty = cart[id] || 0;

  if (qty === 0) {
    return `<button class="add-btn" type="button" onclick="addToCart(${id})">Add +</button>`;
  }

  return `
    <div class="qty-control">
      <button class="qty-btn" type="button" onclick="changeCart(${id}, -1)">−</button>
      <span class="qty-num">${qty}</span>
      <button class="qty-btn" type="button" onclick="changeCart(${id}, 1)">+</button>
    </div>`;
}

function refreshCartControl(id) {
  const el = document.getElementById(`ctrl_${id}`);
  if (el) el.innerHTML = renderCartControl(id);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  refreshCartControl(id);
  updateCartBadge();

  const item = getRestaurant(id);
  showToast(`${item.name} added to cart`);
}

function changeCart(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];

  refreshCartControl(id);
  updateCartBadge();

  if (document.getElementById("cartModal").classList.contains("active")) {
    renderCartModal();
  }
}

// ========= FILTERS AND SEARCH =========
function getFilteredRestaurants() {
  let list = [...RESTAURANTS];

  if (activeFilter === "rating") {
    list = list.filter(item => item.rating >= 4.4);
  }
  if (activeFilter === "veg") {
    list = list.filter(item => item.veg);
  }
  if (activeFilter === "offers") {
    list = list.filter(item => Boolean(item.offer));
  }
  if (activeFilter === "fast") {
    list = list.filter(item => item.time <= 30);
  }

  if (searchValue.trim()) {
    const q = searchValue.toLowerCase();
    list = list.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.cuisine.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.includes(q))
    );
  }

  const sortBy = document.getElementById("sortSelect").value;
  if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
  if (sortBy === "time") list.sort((a, b) => a.time - b.time);
  if (sortBy === "cost") list.sort((a, b) => a.price - b.price);

  return list;
}

function applyFilters() {
  const list = getFilteredRestaurants();
  renderRestaurants(list);
  document.getElementById("resultText").textContent =
    `Showing ${list.length} restaurant${list.length === 1 ? "" : "s"} matching your choice.`;
}

function resetFilters() {
  activeFilter = "all";
  searchValue = "";
  document.getElementById("searchInput").value = "";
  document.getElementById("clearSearchBtn").style.display = "none";
  document.getElementById("searchDropdown").classList.remove("open");
  document.getElementById("sortSelect").value = "recommended";
  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.filter === "all");
  });
  applyFilters();
}

function filterByCategory(category) {
  searchValue = category;
  document.getElementById("searchInput").value = category;
  document.getElementById("clearSearchBtn").style.display = "grid";
  document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" });
  applyFilters();
}

function handleSearch(value) {
  searchValue = value;
  const clearBtn = document.getElementById("clearSearchBtn");
  const dropdown = document.getElementById("searchDropdown");

  clearBtn.style.display = value ? "grid" : "none";
  applyFilters();

  if (!value.trim()) {
    dropdown.classList.remove("open");
    dropdown.innerHTML = "";
    return;
  }

  const q = value.toLowerCase();
  const results = RESTAURANTS.filter(item =>
    item.name.toLowerCase().includes(q) ||
    item.cuisine.toLowerCase().includes(q) ||
    item.tags.some(tag => tag.includes(q))
  ).slice(0, 5);

  if (!results.length) {
    dropdown.innerHTML = `<div class="search-empty">No results found for "<strong>${value}</strong>"</div>`;
  } else {
    dropdown.innerHTML = results.map(item => `
      <div class="search-result" onclick="selectSearchResult(${item.id})">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <strong>${item.name}</strong>
          <span>${item.cuisine} • ${item.time} min</span>
        </div>
        <button class="quick-add" type="button" onclick="event.stopPropagation(); addToCart(${item.id})">Add</button>
      </div>
    `).join("");
  }

  dropdown.classList.add("open");
}

function selectSearchResult(id) {
  const item = getRestaurant(id);
  searchValue = item.name;
  document.getElementById("searchInput").value = item.name;
  document.getElementById("searchDropdown").classList.remove("open");
  applyFilters();
  document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" });
}

function clearSearch() {
  searchValue = "";
  const input = document.getElementById("searchInput");
  input.value = "";
  input.focus();
  document.getElementById("clearSearchBtn").style.display = "none";
  document.getElementById("searchDropdown").classList.remove("open");
  applyFilters();
}

// ========= MODALS =========
function openModal(id) {
  if (id === "cartModal") renderCartModal();
  if (id === "checkoutModal") {
    goStep(1);
    renderOrderSummary();
  }

  document.getElementById(id).classList.add("active");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");

  if (!document.querySelector(".modal-overlay.active")) {
    document.body.classList.remove("modal-open");
  }
}

function switchModal(from, to) {
  closeModal(from);
  openModal(to);
}

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", event => {
    if (event.target === overlay) closeModal(overlay.id);
  });
});

// ========= LOGIN / SIGNUP =========
function doLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    shakeModal("loginModal");
    showToast("Please enter email and password");
    return;
  }

  closeModal("loginModal");
  showToast("Welcome back to Zomato");
}

function doSignup() {
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    shakeModal("signupModal");
    showToast("Please complete all signup fields");
    return;
  }

  closeModal("signupModal");
  showToast(`Account created for ${name}`);
}

function shakeModal(id) {
  const modal = document.querySelector(`#${id} .modal`);
  modal.animate(
    [{ transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }],
    { duration: 280 }
  );
}

// ========= CART MODAL =========
function renderCartModal() {
  const body = document.getElementById("cartBody");
  const subtitle = document.getElementById("cartSubtitle");
  const count = getCartCount();

  if (count === 0) {
    subtitle.textContent = "Your cart is empty.";
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>No food added yet</h3>
        <p>Pick a restaurant and add something tasty.</p>
        <button class="primary-btn" type="button" onclick="closeModal('cartModal')">Start ordering</button>
      </div>`;
    return;
  }

  subtitle.textContent = `${count} item${count > 1 ? "s" : ""} in your cart`;

  const items = Object.entries(cart).map(([id, qty]) => {
    const item = getRestaurant(id);
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <div class="ci-name">${item.name}</div>
          <div class="ci-cuisine">${item.cuisine}</div>
        </div>
        <div class="qty-control">
          <button class="qty-btn" type="button" onclick="changeCart(${id}, -1)">−</button>
          <span class="qty-num">${qty}</span>
          <button class="qty-btn" type="button" onclick="changeCart(${id}, 1)">+</button>
        </div>
        <div class="ci-price">₹${item.price * qty}</div>
        <button class="ci-remove" type="button" onclick="changeCart(${id}, -${qty})">Remove</button>
      </div>`;
  }).join("");

  const subtotal = getCartSubtotal();
  const delivery = getDeliveryFee(subtotal);
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + taxes;

  body.innerHTML = `
    <div class="cart-items">${items}</div>
    <div class="cart-summary">
      <div class="cart-row"><span>Subtotal</span><span>₹${subtotal}</span></div>
      <div class="cart-row"><span>Delivery fee</span><span>${delivery ? `₹${delivery}` : "FREE"}</span></div>
      <div class="cart-row"><span>Taxes and charges</span><span>₹${taxes}</span></div>
      <div class="cart-row total"><span>Total</span><span>₹${total}</span></div>
    </div>
    <button class="checkout-btn" type="button" onclick="closeModal('cartModal'); openModal('checkoutModal')">
      Proceed to checkout
    </button>`;
}

// ========= CHECKOUT =========
function goStep(step) {
  [1, 2, 3, 4].forEach(i => {
    document.getElementById(`checkoutStep${i}`).classList.toggle("active", i === step);
    const tab = document.getElementById(`step${i}tab`);
    tab.classList.toggle("active", i === step);
    tab.classList.toggle("done", i < step);
  });

  if (step === 4) animateTracking();
}

function selectAddress(el) {
  document.querySelectorAll(".address-option").forEach(item => item.classList.remove("selected"));
  el.classList.add("selected");
}

function selectPayment(el) {
  document.querySelectorAll(".payment-option").forEach(item => item.classList.remove("selected"));
  el.classList.add("selected");
}

function renderOrderSummary() {
  const el = document.getElementById("orderSummaryList");
  if (!el) return;

  const items = Object.entries(cart).map(([id, qty]) => {
    const item = getRestaurant(id);
    return `<div class="os-item"><span>${item.name} × ${qty}</span><span>₹${item.price * qty}</span></div>`;
  }).join("");

  const subtotal = getCartSubtotal();
  const delivery = getDeliveryFee(subtotal);
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + taxes;

  el.innerHTML = items + `
    <div class="os-item"><span>Delivery</span><span>${delivery ? `₹${delivery}` : "FREE"}</span></div>
    <div class="os-item"><span>Taxes</span><span>₹${taxes}</span></div>
    <div class="os-item total"><span>Total</span><span>₹${total}</span></div>`;
}

function placeOrder() {
  if (getCartCount() === 0) {
    showToast("Please add food before placing an order");
    return;
  }

  goStep(4);
  showToast("Order placed successfully");

  let minutes = 24;
  const eta = document.getElementById("etaChip");
  clearInterval(orderTimer);
  orderTimer = setInterval(() => {
    minutes -= 3;
    if (eta) eta.textContent = minutes > 0 ? `Arriving in ${minutes} minutes...` : "Delivered. Enjoy your food!";
    if (minutes <= 0) clearInterval(orderTimer);
  }, 3000);
}

function animateTracking() {
  const steps = ["ts2", "ts3", "ts4"];
  const widths = ["38%", "70%", "100%"];
  document.getElementById("trackProgress").style.width = "12%";
  ["ts2", "ts3", "ts4"].forEach(id => document.getElementById(id).classList.remove("done"));

  steps.forEach((id, index) => {
    setTimeout(() => {
      document.getElementById(id).classList.add("done");
      document.getElementById("trackProgress").style.width = widths[index];
    }, (index + 1) * 1300);
  });
}

function resetOrder() {
  cart = {};
  updateCartBadge();
  applyFilters();
  clearInterval(orderTimer);
  document.getElementById("etaChip").textContent = "Preparing your order...";
  showToast("Order completed. Cart cleared.");
}

// ========= APP AND UI HELPERS =========
function sendAppLink(event) {
  event.preventDefault();
  const input = document.getElementById("appEmail");
  showToast(`App link sent to ${input.value}`);
  input.value = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.querySelector(".theme-toggle").textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

function showToast(message) {
  const host = document.getElementById("toastHost");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  host.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

document.addEventListener("click", event => {
  if (!event.target.closest(".search-wrap")) {
    document.getElementById("searchDropdown").classList.remove("open");
  }
});

document.getElementById("filterBar").addEventListener("click", event => {
  const chip = event.target.closest(".chip");
  if (!chip) return;

  activeFilter = chip.dataset.filter;
  document.querySelectorAll(".chip").forEach(item => item.classList.remove("active"));
  chip.classList.add("active");
  applyFilters();
});

const rotatingTerms = ["biryani", "pizza", "dosa", "ice cream", "burger", "coffee"];
let termIndex = 0;

setInterval(() => {
  const input = document.getElementById("searchInput");
  if (document.activeElement !== input && !input.value) {
    termIndex = (termIndex + 1) % rotatingTerms.length;
    input.placeholder = `Search for ${rotatingTerms[termIndex]}...`;
  }
}, 2500);

renderRestaurants(RESTAURANTS);
updateCartBadge();
