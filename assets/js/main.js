import { products, categories } from "./products.js";

const SHOP_CONFIG = {
  name: "Anil Hardware",
  address: "J7PG+547, New Market, Patratu, Jharkhand 829119",
  whatsappNumber: "910000000000"
};

const STORAGE_KEY = "anil-hardware-quote-items";
const DEFAULT_PRODUCT_IMAGE = "assets/images/products/generic-hardware.svg";

const state = {
  activeCategory: "All",
  searchTerm: "",
  sortBy: "featured",
  quoteItems: loadQuoteItems()
};

const refs = {
  categoryChips: document.getElementById("category-chips"),
  productGrid: document.getElementById("product-grid"),
  productEmpty: document.getElementById("product-empty"),
  productSearch: document.getElementById("product-search"),
  sortProducts: document.getElementById("sort-products"),
  quoteToggle: document.getElementById("quote-toggle"),
  quoteClose: document.getElementById("quote-close"),
  quoteDrawer: document.getElementById("quote-drawer"),
  drawerOverlay: document.getElementById("drawer-overlay"),
  quoteList: document.getElementById("quote-list"),
  quoteEmpty: document.getElementById("quote-empty"),
  quoteCount: document.getElementById("quote-count"),
  clearQuote: document.getElementById("clear-quote"),
  quoteForm: document.getElementById("quote-form"),
  quoteStatus: document.getElementById("quote-status"),
  quoteItemsField: document.getElementById("quote-items-field"),
  contactForm: document.getElementById("contact-form"),
  contactStatus: document.getElementById("contact-status"),
  mobileNavToggle: document.getElementById("mobile-nav-toggle"),
  siteNav: document.getElementById("site-nav"),
  yearEl: document.getElementById("current-year")
};

init();

function init() {
  if (refs.yearEl) {
    refs.yearEl.textContent = new Date().getFullYear();
  }

  if (refs.categoryChips && refs.productGrid && refs.productEmpty) {
    renderCategoryChips();
    renderProducts();
  }

  if (refs.quoteList && refs.quoteEmpty && refs.quoteItemsField && refs.quoteCount) {
    renderQuoteList();
  }

  attachEventListeners();
  setupFaqAccordion();
  setupRevealAnimation();
  setupHeroCardTilt();
  setupCurrentNavHighlight();
}

function attachEventListeners() {
  if (refs.productSearch) {
    refs.productSearch.addEventListener("input", (event) => {
      state.searchTerm = event.target.value.trim().toLowerCase();
      renderProducts();
    });
  }

  if (refs.sortProducts) {
    refs.sortProducts.addEventListener("change", (event) => {
      state.sortBy = event.target.value;
      renderProducts();
    });
  }

  if (refs.productGrid) {
    refs.productGrid.addEventListener("click", handleProductGridClick);
  }

  if (refs.quoteList) {
    refs.quoteList.addEventListener("click", handleQuoteListClick);
  }

  if (refs.quoteToggle) {
    refs.quoteToggle.addEventListener("click", openQuoteDrawer);
  }

  if (refs.quoteClose) {
    refs.quoteClose.addEventListener("click", closeQuoteDrawer);
  }

  if (refs.drawerOverlay) {
    refs.drawerOverlay.addEventListener("click", closeQuoteDrawer);
  }

  if (refs.clearQuote) {
    refs.clearQuote.addEventListener("click", () => {
      state.quoteItems = [];
      persistQuoteItems();
      renderQuoteList();
    });
  }

  if (refs.quoteForm) {
    refs.quoteForm.addEventListener("submit", handleQuoteSubmit);
  }

  if (refs.contactForm) {
    refs.contactForm.addEventListener("submit", handleContactSubmit);
  }

  if (refs.mobileNavToggle && refs.siteNav) {
    refs.mobileNavToggle.addEventListener("click", () => {
      const isExpanded = refs.mobileNavToggle.getAttribute("aria-expanded") === "true";
      refs.mobileNavToggle.setAttribute("aria-expanded", String(!isExpanded));
      refs.siteNav.classList.toggle("is-open");
    });
  }

  if (refs.siteNav) {
    refs.siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        refs.siteNav.classList.remove("is-open");
        if (refs.mobileNavToggle) {
          refs.mobileNavToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && refs.quoteDrawer && refs.quoteDrawer.classList.contains("is-open")) {
      closeQuoteDrawer();
    }
  });
}

function renderCategoryChips() {
  if (!refs.categoryChips) {
    return;
  }

  refs.categoryChips.innerHTML = categories
    .map((category) => {
      const isActive = category === state.activeCategory;
      return `<button class="chip" data-category="${escapeHtml(category)}" aria-pressed="${isActive}">${escapeHtml(category)}</button>`;
    })
    .join("");

  refs.categoryChips.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.activeCategory = chip.dataset.category;
      renderCategoryChips();
      renderProducts();
    });
  });
}

function renderProducts() {
  if (!refs.productGrid || !refs.productEmpty) {
    return;
  }

  const filtered = getVisibleProducts();

  refs.productEmpty.hidden = filtered.length > 0;

  refs.productGrid.innerHTML = filtered
    .map((product, index) => {
      const imageSrc = escapeHtml(product.image || DEFAULT_PRODUCT_IMAGE);
      const imageAlt = escapeHtml(product.imageAlt || product.name);
      const tags = product.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
      const offer = product.offer
        ? `<p class="product-offer">Offer: ${escapeHtml(product.offer)}</p>`
        : "";
      return `
        <article class="product-card" style="--card-index:${index}">
          <figure class="product-media">
            <img src="${imageSrc}" alt="${imageAlt}" loading="lazy" decoding="async" data-fallback="${DEFAULT_PRODUCT_IMAGE}">
          </figure>
          <div class="product-body">
            <div class="product-top">
              <div>
                <h3 class="product-title">${escapeHtml(product.name)}</h3>
                <p class="product-meta">${escapeHtml(product.brand)} | ${escapeHtml(product.unit)}</p>
              </div>
              <span class="product-badge">${escapeHtml(product.category)}</span>
            </div>
            <p class="product-tags">${tags}</p>
            ${offer}
            <div class="product-footer">
              <div>
                <strong class="product-price">${formatPrice(product.price)}</strong>
                <p class="product-rating">Rating: ${product.rating.toFixed(1)} / 5</p>
              </div>
              <div class="product-actions">
                <button class="btn btn--outline btn--small" data-add-product="${product.id}" type="button">Add to Quote</button>
                <button class="btn btn--small btn--wa" data-wa-order="${product.id}" type="button">Order on WhatsApp</button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  bindImageFallbacks(refs.productGrid);
}

function getVisibleProducts() {
  const search = state.searchTerm;

  const filtered = products.filter((product) => {
    const matchesCategory = state.activeCategory === "All" || product.category === state.activeCategory;
    const searchableText = `${product.name} ${product.brand} ${product.category} ${product.tags.join(" ")}`.toLowerCase();
    const matchesSearch = search.length === 0 || searchableText.includes(search);
    return matchesCategory && matchesSearch;
  });

  const sorted = [...filtered];

  if (state.sortBy === "price-low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }

  return sorted;
}

function handleProductGridClick(event) {
  const waButton = event.target.closest("button[data-wa-order]");
  if (waButton) {
    const productId = waButton.dataset.waOrder;
    const selected = products.find((product) => product.id === productId);
    if (!selected) {
      return;
    }

    const text = [
      `Hello ${SHOP_CONFIG.name},`,
      "I want to order this product:",
      `Product: ${selected.name}`,
      `Brand: ${selected.brand}`,
      `Unit: ${selected.unit}`,
      `Price: ${formatPrice(selected.price)}`,
      `Address Reference: ${SHOP_CONFIG.address}`
    ].join("\n");

    openWhatsAppMessage(text);
    return;
  }

  const button = event.target.closest("button[data-add-product]");
  if (!button) {
    return;
  }

  const productId = button.dataset.addProduct;
  const existing = state.quoteItems.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    const selected = products.find((product) => product.id === productId);
    if (!selected) {
      return;
    }

    state.quoteItems.push({
      id: selected.id,
      name: selected.name,
      category: selected.category,
      unit: selected.unit,
      price: selected.price,
      image: selected.image || DEFAULT_PRODUCT_IMAGE,
      quantity: 1
    });
  }

  persistQuoteItems();
  renderQuoteList();
  openQuoteDrawer();
}

function handleQuoteListClick(event) {
  const actionButton = event.target.closest("button[data-quote-action]");
  if (!actionButton) {
    return;
  }

  const { quoteAction, quoteId } = actionButton.dataset;
  const item = state.quoteItems.find((entry) => entry.id === quoteId);

  if (!item) {
    return;
  }

  if (quoteAction === "increase") {
    item.quantity += 1;
  }

  if (quoteAction === "decrease") {
    item.quantity = Math.max(1, item.quantity - 1);
  }

  if (quoteAction === "remove") {
    state.quoteItems = state.quoteItems.filter((entry) => entry.id !== quoteId);
  }

  persistQuoteItems();
  renderQuoteList();
}

function renderQuoteList() {
  if (!refs.quoteCount || !refs.quoteList || !refs.quoteEmpty || !refs.quoteItemsField) {
    return;
  }

  refs.quoteCount.textContent = String(getTotalQuoteQuantity());

  if (state.quoteItems.length === 0) {
    refs.quoteList.innerHTML = "";
    refs.quoteEmpty.hidden = false;
    refs.quoteItemsField.value = "";
    return;
  }

  refs.quoteEmpty.hidden = true;

  refs.quoteList.innerHTML = state.quoteItems
    .map((item) => {
      const lineTotal = item.quantity * item.price;
      return `
        <li class="quote-item">
          <div class="quote-item__top">
            <div class="quote-item__head">
              <img class="quote-thumb" src="${escapeHtml(item.image || DEFAULT_PRODUCT_IMAGE)}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async" data-fallback="${DEFAULT_PRODUCT_IMAGE}">
              <strong>${escapeHtml(item.name)}</strong>
            </div>
            <button class="icon-btn" data-quote-action="remove" data-quote-id="${item.id}" type="button" aria-label="Remove ${escapeHtml(item.name)}">x</button>
          </div>
          <p class="quote-item__meta">${escapeHtml(item.category)} | ${escapeHtml(item.unit)}</p>
          <div class="product-footer">
            <div>
              <strong>${formatPrice(lineTotal)}</strong>
              <p class="product-rating">Qty: ${item.quantity}</p>
            </div>
            <div>
              <button class="icon-btn" data-quote-action="decrease" data-quote-id="${item.id}" type="button" aria-label="Decrease quantity">-</button>
              <button class="icon-btn" data-quote-action="increase" data-quote-id="${item.id}" type="button" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </li>
      `;
    })
    .join("");

  const quoteSummary = state.quoteItems
    .map((item) => `${item.name} x${item.quantity}`)
    .join("; ");

  refs.quoteItemsField.value = quoteSummary;
  bindImageFallbacks(refs.quoteList);
}

function getTotalQuoteQuantity() {
  return state.quoteItems.reduce((sum, item) => sum + item.quantity, 0);
}

function openQuoteDrawer() {
  if (!refs.quoteDrawer || !refs.drawerOverlay) {
    return;
  }

  refs.quoteDrawer.classList.add("is-open");
  refs.quoteDrawer.setAttribute("aria-hidden", "false");
  refs.drawerOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeQuoteDrawer() {
  if (!refs.quoteDrawer || !refs.drawerOverlay) {
    return;
  }

  refs.quoteDrawer.classList.remove("is-open");
  refs.quoteDrawer.setAttribute("aria-hidden", "true");
  refs.drawerOverlay.hidden = true;
  document.body.style.overflow = "";
}

function handleQuoteSubmit(event) {
  event.preventDefault();
  refs.quoteStatus.textContent = "";

  const formData = new FormData(refs.quoteForm);
  const name = String(formData.get("quoteName") || "").trim();
  const phone = String(formData.get("quotePhone") || "").trim();
  const location = String(formData.get("quoteLocation") || "").trim();
  const notes = String(formData.get("quoteNotes") || "").trim();

  if (state.quoteItems.length === 0) {
    refs.quoteStatus.textContent = "Please add at least one product before submitting.";
    return;
  }

  const validationError = validateLeadFields({ name, phone, message: location });
  if (validationError) {
    refs.quoteStatus.textContent = validationError;
    return;
  }

  const itemLines = state.quoteItems
    .map((item, index) => `${index + 1}. ${item.name} (${item.unit}) - Qty ${item.quantity}`)
    .join("\n");

  const text = [
    `Hello ${SHOP_CONFIG.name},`,
    "I need a quote for the following materials:",
    itemLines,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Delivery Area: ${location}`,
    notes ? `Project Notes: ${notes}` : "",
    `Address Reference: ${SHOP_CONFIG.address}`
  ]
    .filter(Boolean)
    .join("\n");

  openWhatsAppMessage(text);

  refs.quoteStatus.textContent = "WhatsApp draft opened. Please send it to complete your request.";
  refs.quoteForm.reset();
}

function handleContactSubmit(event) {
  event.preventDefault();
  refs.contactStatus.textContent = "";

  const formData = new FormData(refs.contactForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const topic = String(formData.get("topic") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!topic) {
    refs.contactStatus.textContent = "Please select your requirement type.";
    return;
  }

  const validationError = validateLeadFields({ name, phone, message });
  if (validationError) {
    refs.contactStatus.textContent = validationError;
    return;
  }

  const text = [
    `Hello ${SHOP_CONFIG.name},`,
    "I want to enquire about materials.",
    `Requirement: ${topic}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Message: ${message}`,
    `Store Address: ${SHOP_CONFIG.address}`
  ].join("\n");

  openWhatsAppMessage(text);

  refs.contactStatus.textContent = "WhatsApp draft opened. Please send the message to receive a callback.";
  refs.contactForm.reset();
}

function openWhatsAppMessage(text) {
  const url = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener");
}

function validateLeadFields({ name, phone, message }) {
  if (name.length < 2) {
    return "Please enter a valid name.";
  }

  if (!/^\d{10}$/.test(phone.replace(/\s+/g, ""))) {
    return "Enter a valid 10-digit mobile number.";
  }

  if (message.length < 5) {
    return "Please provide a little more detail so we can help better.";
  }

  return "";
}

function setupFaqAccordion() {
  document.querySelectorAll(".faq-question").forEach((questionButton) => {
    questionButton.addEventListener("click", () => {
      const item = questionButton.closest(".faq-item");
      const isOpen = item.classList.contains("is-open");

      document.querySelectorAll(".faq-item").forEach((entry) => {
        entry.classList.remove("is-open");
        entry.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        questionButton.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function setupRevealAnimation() {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  document.querySelectorAll(".reveal").forEach((section) => {
    observer.observe(section);
  });
}

function setupCurrentNavHighlight() {
  if (!refs.siteNav) {
    return;
  }

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  refs.siteNav.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) {
      return;
    }

    const targetPath = href.split("#")[0];
    if (targetPath === currentPath) {
      link.classList.add("is-current");
    }
  });
}

function setupHeroCardTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.querySelectorAll(".hero-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = (0.5 - (y / rect.height)) * 8;
      card.style.transform = `perspective(700px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function persistQuoteItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.quoteItems));
}

function loadQuoteItems() {
  try {
    const fromStorage = localStorage.getItem(STORAGE_KEY);
    if (!fromStorage) {
      return [];
    }

    const parsed = JSON.parse(fromStorage);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function bindImageFallbacks(rootElement) {
  if (!rootElement) {
    return;
  }

  rootElement.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        img.src = img.dataset.fallback;
      },
      { once: true }
    );
  });
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
