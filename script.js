// Enhanced product data with better descriptions and features
const products = [
    {
        id: 1,
        name: "Classic Leather Sneakers",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.8,
        reviews: 342,
        color: "white",
        sizes: [7, 8, 9, 10, 11, 12],
        description: "Handcrafted premium leather sneakers that blend timeless elegance with modern comfort. Features genuine Italian leather upper, cushioned insole, and durable rubber outsole. Perfect for both casual and semi-formal occasions.",
        features: ["Genuine Italian Leather", "Memory Foam Insole", "Anti-Slip Sole", "Breathable Lining"],
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Athletic Running Shoes",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.9,
        reviews: 567,
        color: "black",
        sizes: [7, 8, 9, 10, 11, 12],
        description: "Professional-grade running shoes engineered for peak performance. Advanced cushioning technology and lightweight design provide maximum comfort during intense workouts and daily runs.",
        features: ["Advanced Cushioning", "Lightweight Design", "Moisture-Wicking", "Shock Absorption"],
        badge: "Top Rated"
    },
    {
        id: 3,
        name: "Oxford Dress Shoes",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.7,
        reviews: 189,
        color: "brown",
        sizes: [7, 8, 9, 10, 11, 12],
        description: "Sophisticated Oxford dress shoes crafted from premium full-grain leather. Traditional Goodyear welt construction ensures durability and elegance for business meetings and formal events.",
        features: ["Full-Grain Leather", "Goodyear Welt", "Leather Sole", "Classic Design"],
        badge: "Premium"
    },
    {
        id: 4,
        name: "Casual Canvas Shoes",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.5,
        reviews: 234,
        color: "blue",
        sizes: [7, 8, 9, 10, 11, 12],
        description: "Comfortable canvas shoes perfect for everyday adventures. Lightweight construction with breathable fabric upper and flexible rubber sole. Ideal for casual outings and weekend activities.",
        features: ["Breathable Canvas", "Flexible Sole", "Lightweight", "Easy Care"],
        badge: "Eco-Friendly"
    },
    {
        id: 5,
        name: "High-Top Basketball Shoes",
        price: 149.99,
        originalPrice: 179.99,
        image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.8,
        reviews: 423,
        color: "red",
        sizes: [7, 8, 9, 10, 11, 12],
        description: "Professional basketball shoes designed for superior court performance. High-top design provides excellent ankle support while advanced grip technology ensures optimal traction on any surface.",
        features: ["Ankle Support", "Superior Grip", "Impact Protection", "Durable Construction"],
        badge: "Pro Series"
    },
    {
        id: 6,
        name: "Minimalist Slip-On Shoes",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4.6,
        reviews: 298,
        color: "black",
        sizes: [7, 8, 9, 10, 11, 12],
        description: "Sleek minimalist slip-on shoes with contemporary design. Premium materials and ergonomic construction provide all-day comfort for the modern lifestyle. Perfect for busy professionals.",
        features: ["Easy Slip-On", "Ergonomic Design", "Premium Materials", "All-Day Comfort"],
        badge: "New Arrival"
    }
];

// Enhanced reviews data
const reviews = {
    1: [
        { author: "John D.", rating: 5, text: "Absolutely love these sneakers! The leather quality is exceptional and they're incredibly comfortable for all-day wear. Worth every penny!", date: "2 weeks ago" },
        { author: "Sarah M.", rating: 5, text: "Perfect blend of style and comfort. I get compliments every time I wear them. The craftsmanship is outstanding.", date: "1 month ago" },
        { author: "Mike R.", rating: 4, text: "Great shoes with premium feel. Sizing runs slightly large, so consider ordering half a size down. Overall very satisfied.", date: "3 weeks ago" }
    ],
    2: [
        { author: "Emily L.", rating: 5, text: "Best running shoes I've ever owned! The cushioning is amazing and they provide excellent support during long runs.", date: "1 week ago" },
        { author: "David K.", rating: 5, text: "Incredible performance shoes. Lightweight yet durable, perfect for both gym workouts and outdoor running.", date: "2 weeks ago" },
        { author: "Lisa P.", rating: 5, text: "These shoes have transformed my running experience. No more foot fatigue after long distances. Highly recommend!", date: "1 month ago" }
    ],
    3: [
        { author: "Robert H.", rating: 5, text: "Elegant and professional. These Oxfords are perfect for business meetings and formal events. Classic style that never goes out of fashion.", date: "2 weeks ago" },
        { author: "James W.", rating: 4, text: "High quality leather and excellent construction. They do require a break-in period, but worth the wait for the perfect fit.", date: "3 weeks ago" },
        { author: "Thomas B.", rating: 5, text: "Outstanding craftsmanship. The Goodyear welt construction ensures these will last for years. A true investment piece.", date: "1 month ago" }
    ],
    4: [
        { author: "Anna K.", rating: 4, text: "Love the casual vibe and comfort. Perfect for weekend outings and everyday wear. Great value for money.", date: "1 week ago" },
        { author: "Chris P.", rating: 5, text: "Super comfortable and stylish. The canvas material is high quality and the shoes are very well made.", date: "2 weeks ago" }
    ],
    5: [
        { author: "Marcus J.", rating: 5, text: "Excellent basketball shoes! Great ankle support and traction on the court. My game has definitely improved.", date: "1 week ago" },
        { author: "Tyler S.", rating: 5, text: "Professional quality shoes that can handle intense games. Comfortable and durable construction.", date: "2 weeks ago" }
    ],
    6: [
        { author: "Rachel M.", rating: 5, text: "Perfect for my busy lifestyle. Easy to slip on and incredibly comfortable for long days at the office.", date: "1 week ago" },
        { author: "Kevin L.", rating: 4, text: "Great minimalist design and very comfortable. Quality materials and construction. Highly recommend.", date: "3 weeks ago" }
    ]
};

// Global variables
let cart = [];
let filteredProducts = [...products];
let currentSlide = 0;
let isAuthMode = 'login';

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartModal = document.getElementById('cartModal');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartSubtotal = document.getElementById('cartSubtotal');
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const productModal = document.getElementById('productModal');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    initializeCarousel();
    initializeEventListeners();
    initializeTheme();
    updateCartUI();
    addScrollEffects();
});

// Product rendering with enhanced design
function renderProducts() {
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3 style="color: var(--text-secondary); margin-bottom: 1rem;">No products found</h3>
                <p style="color: var(--text-muted);">Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(product);
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            ${discount > 0 ? `<div class="discount-badge">-${discount}%</div>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <span class="stars">${stars}</span>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="product-pricing">
                <span class="product-price">$${product.price}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
            </div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                Add to Cart
                <span class="btn-arrow">→</span>
            </button>
        </div>
    `;
    
    return card;
}

// Enhanced carousel functionality
function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }
    
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-slide every 6 seconds
    setInterval(nextSlide, 6000);
}

// Enhanced event listeners
function initializeEventListeners() {
    // Cart modal
    cartBtn.addEventListener('click', () => openModal(cartModal));
    document.getElementById('closeCart').addEventListener('click', () => closeModal(cartModal));
    document.getElementById('clearCart').addEventListener('click', clearCart);
    document.getElementById('checkout').addEventListener('click', checkout);
    
    // Login modal
    loginBtn.addEventListener('click', () => openModal(loginModal));
    document.getElementById('closeLogin').addEventListener('click', () => closeModal(loginModal));
    document.getElementById('authSwitchBtn').addEventListener('click', toggleAuthMode);
    document.getElementById('authForm').addEventListener('submit', handleAuth);
    
    // Product modal
    document.getElementById('closeProduct').addEventListener('click', () => closeModal(productModal));
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Search with debounce
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(handleSearch, 300);
    });
    document.querySelector('.search-btn').addEventListener('click', handleSearch);
    
    // Filters
    document.getElementById('sizeFilter').addEventListener('change', applyFilters);
    document.getElementById('priceFilter').addEventListener('change', applyFilters);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    
    // Color filters
    document.querySelectorAll('.color-filter').forEach(filter => {
        filter.addEventListener('click', (e) => {
            document.querySelectorAll('.color-filter').forEach(f => f.classList.remove('active'));
            e.target.classList.add('active');
            applyFilters();
        });
    });
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleContactForm);
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Mobile menu toggle
    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced modal functions
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    const content = modal.querySelector('.modal-content');
    content.style.transform = 'translateY(20px)';
    content.style.opacity = '0';
    
    setTimeout(() => {
        content.style.transform = 'translateY(0)';
        content.style.opacity = '1';
    }, 10);
}

function closeModal(modal) {
    const content = modal.querySelector('.modal-content');
    content.style.transform = 'translateY(20px)';
    content.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }, 200);
}

// Enhanced product modal
function openProductModal(product) {
    document.getElementById('productImage').src = product.image;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = `$${product.price}`;
    document.getElementById('productDescription').textContent = product.description;
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    document.getElementById('productRating').innerHTML = `
        <span class="stars">${stars}</span>
        <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
    `;
    
    // Populate size options
    const sizeSelect = document.getElementById('productSize');
    sizeSelect.innerHTML = '';
    product.sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.textContent = `US ${size}`;
        sizeSelect.appendChild(option);
    });
    
    // Render enhanced reviews
    const reviewsList = document.getElementById('reviewsList');
    const productReviews = reviews[product.id] || [];
    
    if (productReviews.length > 0) {
        reviewsList.innerHTML = productReviews.map(review => `
            <div class="review">
                <div class="review-header">
                    <div>
                        <span class="review-author">${review.author}</span>
                        <span class="review-date">${review.date}</span>
                    </div>
                    <span class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                </div>
                <p class="review-text">${review.text}</p>
            </div>
        `).join('');
    } else {
        reviewsList.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">No reviews yet. Be the first to review this product!</p>';
    }
    
    // Add to cart button
    document.getElementById('productAddToCart').onclick = () => {
        addToCart(product.id, parseInt(sizeSelect.value));
        closeModal(productModal);
        showNotification(`${product.name} added to cart!`, 'success');
    };
    
    openModal(productModal);
}

// Enhanced cart functionality
function addToCart(productId, size = 9) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            size: size,
            quantity: 1
        });
    }
    
    updateCartUI();
    
    // Add animation to cart button
    cartBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
    
    showNotification(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId, size) {
    const item = cart.find(item => item.id === productId && item.size === size);
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    updateCartUI();
    showNotification(`${item.name} removed from cart`, 'info');
}

function updateQuantity(productId, size, change) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some amazing shoes to get started!</p>
            </div>
        `;
        cartSubtotal.textContent = '0.00';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-size">Size: US ${item.size}</div>
                <div class="cart-item-price">$${item.price}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.size}, -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.size}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id}, ${item.size})">Remove</button>
        </div>
    `).join('');
    
    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.textContent = subtotal.toFixed(2);
    cartTotal.textContent = subtotal.toFixed(2);
}

function clearCart() {
    if (cart.length === 0) {
        showNotification('Cart is already empty!', 'info');
        return;
    }
    
    cart = [];
    updateCartUI();
    showNotification('Cart cleared successfully!', 'success');
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Proceeding to checkout with total: $${total.toFixed(2)}`, 'success');
    
    // In a real application, this would redirect to a payment gateway
    setTimeout(() => {
        showNotification('Thank you for your purchase! 🎉', 'success');
        cart = [];
        updateCartUI();
        closeModal(cartModal);
    }, 2000);
}

// Enhanced search and filter functionality
function handleSearch() {
    applyFilters();
}

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedSize = document.getElementById('sizeFilter').value;
    const selectedPriceRange = document.getElementById('priceFilter').value;
    const selectedColor = document.querySelector('.color-filter.active').dataset.color;
    
    filteredProducts = products.filter(product => {
        // Search filter
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        
        // Size filter
        const matchesSize = !selectedSize || product.sizes.includes(parseInt(selectedSize));
        
        // Price filter
        let matchesPrice = true;
        if (selectedPriceRange) {
            if (selectedPriceRange === '0-100') {
                matchesPrice = product.price < 100;
            } else if (selectedPriceRange === '100-200') {
                matchesPrice = product.price >= 100 && product.price < 200;
            } else if (selectedPriceRange === '200-300') {
                matchesPrice = product.price >= 200 && product.price < 300;
            } else if (selectedPriceRange === '300+') {
                matchesPrice = product.price >= 300;
            }
        }
        
        // Color filter
        const matchesColor = !selectedColor || product.color === selectedColor;
        
        return matchesSearch && matchesSize && matchesPrice && matchesColor;
    });
    
    renderProducts();
    
    // Show filter results count
    const resultsCount = filteredProducts.length;
    showNotification(`Found ${resultsCount} product${resultsCount !== 1 ? 's' : ''}`, 'info');
}

function clearFilters() {
    searchInput.value = '';
    document.getElementById('sizeFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.querySelectorAll('.color-filter').forEach(filter => filter.classList.remove('active'));
    document.querySelector('.color-filter[data-color=""]').classList.add('active');
    
    filteredProducts = [...products];
    renderProducts();
    showNotification('Filters cleared', 'info');
}

// Enhanced authentication
function toggleAuthMode() {
    isAuthMode = isAuthMode === 'login' ? 'register' : 'login';
    const title = document.getElementById('authTitle');
    const submitBtn = document.getElementById('authSubmit');
    const switchText = document.getElementById('authSwitchText');
    const switchBtn = document.getElementById('authSwitchBtn');
    const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
    
    if (isAuthMode === 'register') {
        title.textContent = 'Create Account';
        submitBtn.innerHTML = 'Create Account <span class="btn-arrow">→</span>';
        switchText.textContent = 'Already have an account?';
        switchBtn.textContent = 'Sign In';
        confirmPasswordGroup.style.display = 'block';
    } else {
        title.textContent = 'Welcome Back';
        submitBtn.innerHTML = 'Sign In <span class="btn-arrow">→</span>';
        switchText.textContent = "Don't have an account?";
        switchBtn.textContent = 'Create Account';
        confirmPasswordGroup.style.display = 'none';
    }
}

function handleAuth(e) {
    e.preventDefault();
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Enhanced validation
    if (!email || !password) {
        showNotification('Please fill in all required fields!', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters long!', 'error');
        return;
    }
    
    if (isAuthMode === 'register') {
        if (password !== confirmPassword) {
            showNotification('Passwords do not match!', 'error');
            return;
        }
        showNotification('Account created successfully! Welcome to StepStyle! 🎉', 'success');
        loginBtn.textContent = email.split('@')[0];
    } else {
        showNotification('Welcome back! Logged in successfully! 👋', 'success');
        loginBtn.textContent = email.split('@')[0];
    }
    
    closeModal(loginModal);
    document.getElementById('authForm').reset();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced theme functionality
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
    
    // Add smooth transition for theme change
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Enhanced contact form
function handleContactForm(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields!', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address!', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showNotification('Thank you for your message! We\'ll get back to you within 24 hours. 📧', 'success');
    }, 2000);
}

// Mobile menu functionality
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const isVisible = navMenu.style.display === 'flex';
    navMenu.style.display = isVisible ? 'none' : 'flex';
    
    if (!isVisible) {
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.backgroundColor = 'var(--bg-primary)';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '1rem';
        navMenu.style.boxShadow = 'var(--shadow-lg)';
        navMenu.style.borderRadius = '0 0 var(--border-radius) var(--border-radius)';
    }
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    notification.innerHTML = `
        <span class="notification-icon">${icons[type] || icons.info}</span>
        <span class="notification-text">${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    const colors = {
        success: 'var(--success-color)',
        error: 'var(--error-color)',
        warning: 'var(--warning-color)',
        info: 'var(--primary-color)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-xl);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Add scroll effects
function addScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Header background opacity based on scroll
        if (currentScrollY > 50) {
            header.style.backgroundColor = currentScrollY > lastScrollY ? 
                'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.product-card, .trust-item, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add CSS for enhanced animations
const enhancedStyle = document.createElement('style');
enhancedStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .product-image-container {
        position: relative;
        overflow: hidden;
    }
    
    .product-badge {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background-color: var(--primary-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 1;
    }
    
    .discount-badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background-color: var(--error-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 1;
    }
    
    .product-pricing {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .original-price {
        text-decoration: line-through;
        color: var(--text-muted);
        font-size: 1rem;
    }
    
    .notification {
        backdrop-filter: blur(10px);
    }
    
    .notification-icon {
        font-size: 1.2rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    .review-date {
        color: var(--text-muted);
        font-size: 0.8rem;
        margin-left: 0.5rem;
    }
`;
document.head.appendChild(enhancedStyle);