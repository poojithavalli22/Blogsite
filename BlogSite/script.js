    // Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Finding Joy in Small Moments",
    excerpt: "Discover how the tiniest moments can bring the greatest happiness to your daily life...",
    content: "Life is full of small moments that we often overlook in our busy schedules. From the morning sun streaming through your window to the smile of a stranger on the street, these moments hold incredible power to transform our day.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    author: "Emma Sunshine",
    date: "July 25, 2025",
    category: "Lifestyle",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "The Art of Creative Expression",
    excerpt: "Unleash your inner artist with these inspiring tips for creative living...",
    content: "Creativity isn't just for artists – it's a vital part of human expression that everyone can tap into. Whether through writing, painting, cooking, or even problem-solving at work, we all have creative potential waiting to be unleashed.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
    author: "Alex River",
    date: "July 22, 2025",
    category: "Creativity",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Wellness Routines That Actually Work",
    excerpt: "Simple, sustainable habits that will transform your health and mindset...",
    content: "Wellness doesn't have to be complicated or expensive. Sometimes the most effective routines are the simplest ones – a morning walk, drinking more water, taking deep breaths, or spending a few minutes in gratitude.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=200&fit=crop",
    author: "Maya Wellness",
    date: "July 20, 2025",
    category: "Wellness",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Stories of Everyday Heroes",
    excerpt: "Meet the people who are making a difference in their communities...",
    content: "Heroes aren't just in movies – they're all around us. From the teacher who stays late to help struggling students to the neighbor who checks on elderly residents, everyday heroes make our world brighter.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=200&fit=crop",
    author: "Jordan Hope",
    date: "July 18, 2025",
    category: "Inspiration",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Building Meaningful Connections",
    excerpt: "How to nurture relationships in our digital age...",
    content: "In our hyper-connected yet often lonely world, building genuine relationships has become both more important and more challenging. Learn how to create lasting bonds with the people who matter most.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=200&fit=crop",
    author: "Sam Connect",
    date: "July 15, 2025",
    category: "Lifestyle",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "The Power of Positive Thinking",
    excerpt: "Transform your mindset and change your life with these proven techniques...",
    content: "Positive thinking isn't about ignoring life's challenges – it's about approaching them with optimism and resilience. Discover practical ways to rewire your brain for happiness and success.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=200&fit=crop",
    author: "Riley Bright",
    date: "July 12, 2025",
    category: "Inspiration",
    readTime: "5 min read"
  }
];

// DOM Elements
const blogCardsContainer = document.getElementById('blog-cards');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the blog
document.addEventListener('DOMContentLoaded', function() {
  renderBlogCards();
  initializeNavigation();
  initializeScrollAnimations();
});

// Render blog cards - 3 cards per row
function renderBlogCards() {
  if (!blogCardsContainer) return;
  
  const cardsHTML = blogPosts.map(post => `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
      <article class="blog-card card h-100" data-aos="fade-up">
        <img src="${post.image}" alt="${post.title}" class="blog-card-img card-img-top">
        <div class="blog-card-body card-body d-flex flex-column">
          <h3 class="blog-card-title card-title">${post.title}</h3>
          <div class="blog-card-meta mb-2">
            <i class="fas fa-user me-2"></i>${post.author}
            <i class="fas fa-calendar ms-3 me-2"></i>${post.date}
            <i class="fas fa-clock ms-3 me-2"></i>${post.readTime}
          </div>
          <p class="blog-card-text card-text flex-grow-1">${post.excerpt}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="badge bg-primary">${post.category}</span>
            <a href="#" class="read-more-btn" data-post-id="${post.id}">
              Read More <i class="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </article>
    </div>
  `).join('');
  
  blogCardsContainer.innerHTML = cardsHTML;
  
  // Add click listeners to read more buttons
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', handleReadMore);
  });
}

// Handle read more button clicks
function handleReadMore(e) {
  e.preventDefault();
  const postId = parseInt(e.currentTarget.dataset.postId);
  const post = blogPosts.find(p => p.id === postId);
  
  if (post) {
    showPostModal(post);
  }
}

// Show post in modal
function showPostModal(post) {
  // Create modal HTML
  const modalHTML = `
    <div class="modal fade" id="postModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5 class="modal-title">${post.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <img src="${post.image}" alt="${post.title}" class="img-fluid rounded mb-3">
            <div class="mb-3 text-muted">
              <i class="fas fa-user me-2"></i>${post.author}
              <i class="fas fa-calendar ms-3 me-2"></i>${post.date}
              <i class="fas fa-clock ms-3 me-2"></i>${post.readTime}
            </div>
            <p class="lead">${post.excerpt}</p>
            <p>${post.content}</p>
            <div class="mt-4">
              <span class="badge bg-primary">${post.category}</span>
            </div>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn cta-button">
              <i class="fas fa-share-alt me-2"></i>Share
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Remove existing modal if any
  const existingModal = document.getElementById('postModal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // Add modal to DOM
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Show modal
  const modal = new bootstrap.Modal(document.getElementById('postModal'));
  modal.show();
  
  // Clean up when modal is hidden
  document.getElementById('postModal').addEventListener('hidden.bs.modal', function() {
    this.remove();
  });
}

// Initialize navigation
function initializeNavigation() {
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Update active nav link on scroll
  window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = ['home', 'blog', 'about', 'contact'];
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    const navLink = document.querySelector(`a[href="#${sectionId}"]`);
    
    if (section && navLink) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
      }
    }
  });
}

// Initialize scroll animations
function initializeScrollAnimations() {
  // Add fade-in animation to elements as they come into view
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
  
  // Observe blog cards for animation
  setTimeout(() => {
    document.querySelectorAll('.blog-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.6s ease';
      observer.observe(card);
    });
  }, 100);
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effect to navbar brand
  const navbarBrand = document.querySelector('.navbar-brand');
  if (navbarBrand) {
    navbarBrand.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotate(5deg)';
    });
    
    navbarBrand.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  }
  
  // Add parallax effect to hero section
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
  
  // Add loading animation for images
  document.querySelectorAll('img').forEach(img => {
    if (!img.complete) {
      img.style.opacity = '0';
      img.addEventListener('load', function() {
        this.style.transition = 'opacity 0.3s ease';
        this.style.opacity = '1';
      });
    }
  });
});

// Utility function to debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Use debounced scroll handler for better performance
window.addEventListener('scroll', debounce(updateActiveNavLink, 10));
  