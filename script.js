// ===========================
// PRODUCT DATABASE
// ===========================
const products = [
    {
        id: 1,
        name: 'Sunrise Pink Silk Scrunchie',
        category: 'silk',
        price: 12.99,
        description: 'Handcrafted from premium Indian silk with a beautiful sunrise pink hue.',
        image: '🎀',
        bestSeller: true
    },
    {
        id: 2,
        name: 'Royal Teal Block Print',
        category: 'blockprint',
        price: 13.99,
        description: 'Traditional Indian block print in rich teal tones. Unique pattern on every piece.',
        image: '🎭',
        bestSeller: true
    },
    {
        id: 3,
        name: 'Gold Marigold Silk',
        category: 'silk',
        price: 12.99,
        description: 'Rich golden yellow inspired by Indian marigold traditions.',
        image: '✨',
        bestSeller: false
    },
    {
        id: 4,
        name: 'Seasonal Festive Bundle',
        category: 'seasonal',
        price: 34.99,
        description: 'Set of 3 festive scrunchies perfect for celebrations and performances.',
        image: '🎉',
        bestSeller: true
    },
    {
        id: 5,
        name: 'Theater Performer Set',
        category: 'bundles',
        price: 44.99,
        description: 'Premium 5-piece bundle for performers. Perfect for theater groups.',
        image: '🎬',
        bestSeller: false
    },
    {
        id: 6,
        name: 'Ocean Wave Pattern',
        category: 'blockprint',
        price: 13.99,
        description: 'Flowing wave pattern in teals and blues. Hand-block printed.',
        image: '🌊',
        bestSeller: false
    },
    {
        id: 7,
        name: 'Blush Pink Dream',
        category: 'seasonal',
        price: 12.99,
        description: 'Soft blush pink perfect for spring and summer events.',
        image: '🌸',
        bestSeller: false
    },
    {
        id: 8,
        name: 'Heritage Collection Set',
        category: 'bundles',
        price: 49.99,
        description: '6 premium scrunchies representing different Indian textile traditions.',
        image: '💎',
        bestSeller: true
    },
    {
        id: 9,
        name: 'Peacock Pride Collection',
        category: 'blockprint',
        price: 14.99,
        description: 'Inspired by Indian peacock motifs. Vibrant and stunning.',
        image: '🦚',
        bestSeller: false
    },
    {
        id: 10,
        name: 'Summer Breeze Multi-Pack',
        category: 'seasonal',
        price: 29.99,
        description: 'Pack of 4 light and breathable scrunchies for warm weather.',
        image: '🌞',
        bestSeller: false
    },
    {
        id: 11,
        name: 'Winter Gold Velvet',
        category: 'silk',
        price: 15.99,
        description: 'Luxurious silk velvet in warm gold. Perfect for winter performances.',
        image: '❄️',
        bestSeller: false
    },
    {
        id: 12,
        name: 'School Spirit Bundle',
        category: 'bundles',
        price: 39.99,
        description: 'Customizable with school colors. Great for fundraisers and events.',
        image: '🎓',
        bestSeller: false
    }
];

// ===========================
// CART MANAGEMENT
// ===========================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show feedback
    showCartNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
    updateCartTotals();
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCartItems();
        updateCartTotals();
    }
}

function showCartNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===========================
// CART DISPLAY FUNCTIONS
// ===========================
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const checkoutItemsContainer = document.getElementById('checkoutItems');
    
    if (cart.length === 0) {
        const emptyMessage = '<p style="text-align: center; color: #999; padding: 2rem;">Your cart is empty</p>';
        if (cartItemsContainer) cartItemsContainer.innerHTML = emptyMessage;
        if (checkoutItemsContainer) checkoutItemsContainer.innerHTML = emptyMessage;
        return;
    }

    const cartHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</p>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                    <button style="background: #f0e5d8; border: none; padding: 3px 8px; cursor: pointer; border-radius: 3px;" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span style="padding: 3px 8px;">${item.quantity}</span>
                    <button style="background: #f0e5d8; border: none; padding: 3px 8px; cursor: pointer; border-radius: 3px;" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('');

    if (cartItemsContainer) cartItemsContainer.innerHTML = cartHTML;
    if (checkoutItemsContainer) checkoutItemsContainer.innerHTML = cartHTML;
}

function updateCartTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5.99;
    const total = subtotal + shipping;

    // Update cart modal
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

    // Update checkout modal
    const checkoutSubtotalEl = document.getElementById('checkoutSubtotal');
    const checkoutShippingEl = document.getElementById('checkoutShipping');
    const checkoutTotalEl = document.getElementById('checkoutTotal');
    if (checkoutSubtotalEl) checkoutSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (checkoutShippingEl) checkoutShippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (checkoutTotalEl) checkoutTotalEl.textContent = `$${total.toFixed(2)}`;
}

// ===========================
// MODAL FUNCTIONS
// ===========================
function openCart(event) {
    event.preventDefault();
    displayCartItems();
    updateCartTotals();
    document.getElementById('cartModal').classList.add('active');
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    closeCart();
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function closeConfirmation() {
    document.getElementById('confirmationModal').classList.remove('active');
}

// ===========================
// PRODUCT RENDERING
// ===========================
function renderProducts(category = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    const productsHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <div class="product-content">
                <p class="product-category">${product.category.replace(/([A-Z])/g, ' $1').trim()}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                ${product.bestSeller ? '<p style="color: #c97d7d; font-weight: bold; margin-bottom: 0.5rem;">⭐ Best Seller</p>' : ''}
                <div class="product-quantity">
                    <button onclick="updateProductQuantity(${product.id}, -1)" id="dec-${product.id}">−</button>
                    <input type="number" value="1" min="1" id="qty-${product.id}" style="width: 50px;">
                    <button onclick="updateProductQuantity(${product.id}, 1)" id="inc-${product.id}">+</button>
                </div>
                <button class="btn btn-primary product-add-btn" onclick="addProductToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');

    if (productsGrid) productsGrid.innerHTML = productsHTML;
}

function updateProductQuantity(productId, change) {
    const input = document.getElementById(`qty-${productId}`);
    const newValue = Math.max(1, parseInt(input.value) + change);
    input.value = newValue;
}

function addProductToCart(productId) {
    const quantityInput = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(quantityInput.value);
    addToCart(productId, quantity);
    quantityInput.value = 1;
}

// ===========================
// CATEGORY FILTERING
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize products
    renderProducts('all');
    updateCartCount();

    // Category filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Animate counters
    animateCounters();

    // Custom form submission
    const customForm = document.getElementById('customForm');
    if (customForm) {
        customForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showCartNotification('Thank you! We\'ll contact you shortly to confirm your custom order.');
            customForm.reset();
        });
    }

    // Checkout form submission
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processCheckout();
        });
    }

    // Newsletter signup
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            showCartNotification('Thank you for subscribing!');
            form.reset();
        });
    });

    // Close modals on background click
    window.addEventListener('click', function(event) {
        const cartModal = document.getElementById('cartModal');
        const checkoutModal = document.getElementById('checkoutModal');
        const confirmationModal = document.getElementById('confirmationModal');
        
        if (event.target === cartModal) {
            closeCart();
        }
        if (event.target === checkoutModal) {
            closeCheckout();
        }
        if (event.target === confirmationModal) {
            closeConfirmation();
        }
    });
});

// ===========================
// COUNTER ANIMATION
// ===========================
function animateCounters() {
    const counters = document.querySelectorAll('.impact-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        let current = 0;
        const increment = target / 50;
        
        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                setTimeout(updateCount, 50);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// ===========================
// CHECKOUT PROCESSING
// ===========================
function processCheckout() {
    const shipName = document.getElementById('shipName').value;
    const shipEmail = document.getElementById('shipEmail').value;
    const cardNumber = document.getElementById('cardNumber').value;
    
    // Basic validation
    if (!shipName || !shipEmail || !cardNumber) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate payment processing
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5.99;

    // Close checkout modal
    closeCheckout();

    // Show confirmation
    const orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    document.getElementById('orderNumber').textContent = orderNumber;
    document.getElementById('orderEmail').textContent = shipEmail;
    
    document.getElementById('confirmationModal').classList.add('active');

    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// ===========================
// FORM VALIDATION
// ===========================
function handleNewsletterSignup(event) {
    event.preventDefault();
    showCartNotification('Thank you for subscribing! Check your email for updates.');
    event.target.reset();
}

// ===========================
// SMOOTH SCROLLING
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#cart') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===========================
// LOCAL STORAGE PERSISTENCE
// ===========================
window.addEventListener('beforeunload', function() {
    localStorage.setItem('cart', JSON.stringify(cart));
});
