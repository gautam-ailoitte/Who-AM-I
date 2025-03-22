// Main JavaScript for Portfolio Website

// Check if portfolioData exists
if (typeof portfolioData === 'undefined') {
    console.error('ERROR: portfolioData is not defined. Make sure data.js is loaded before main.js');
    // Create an error alert at the top of the page
    const errorAlert = document.createElement('div');
    errorAlert.style.background = '#ff453a';
    errorAlert.style.color = 'white';
    errorAlert.style.padding = '1rem';
    errorAlert.style.textAlign = 'center';
    errorAlert.innerHTML = '<strong>Error:</strong> Portfolio data could not be loaded. Check console for details.';
    document.body.prepend(errorAlert);
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    try {
        // Log data to check if it's available
        console.log('Portfolio data available:', portfolioData !== undefined);
        if (portfolioData) {
            console.log('Basic info available:', portfolioData.basics !== undefined);
        }
        
        // Initialize all sections from data
        initPortfolio();
        
        // Setup interactive elements
        setupMobileMenu();
        setupSmoothScrolling();
        setupModals();
        setupThemeToggle();
        // setupClipboardCopy();
        
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        console.log('Portfolio initialization complete');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
        const errorMessage = document.createElement('div');
        errorMessage.style.background = '#ff453a';
        errorMessage.style.color = 'white';
        errorMessage.style.padding = '1rem';
        errorMessage.style.textAlign = 'center';
        errorMessage.innerHTML = '<strong>Error:</strong> ' + error.message;
        document.body.prepend(errorMessage);
    }
});

// Initialize all portfolio sections from data
function initPortfolio() {
    try {
        // Load basic information
        document.title = `${portfolioData.basics.name} | ${portfolioData.basics.title}`;
        document.querySelector('.intro-title h1').innerHTML = `Hello, I'm <span class="highlight">${portfolioData.basics.name}</span>`;
        document.querySelector('.gradient-text').textContent = portfolioData.basics.tagline;
        document.querySelector('.intro-description').textContent = portfolioData.basics.description;
        document.querySelector('.github-link').href = portfolioData.basics.github;
        
        console.log('Basic info loaded');
        
        // Load Experience section
        loadExperience();
        
        // Load Projects section
        loadProjects();
        
        // Load Skills section
        loadSkills();
        
        // Load Background section
        loadBackground();
        
        // Load Contact section
        loadContact();
    } catch (error) {
        console.error('Error in initPortfolio:', error);
        throw new Error('Failed to initialize portfolio: ' + error.message);
    }
}

// Load Experience section
function loadExperience() {
    try {
        const timelineContainer = document.getElementById('experience-timeline');
        if (!timelineContainer) {
            console.error('Experience timeline container not found');
            return;
        }
        
        timelineContainer.innerHTML = '';
        
        if (!portfolioData.experience || !Array.isArray(portfolioData.experience)) {
            console.error('Experience data is missing or not an array');
            return;
        }
        
        portfolioData.experience.forEach((job, index) => {
            const experienceEl = document.createElement('div');
            experienceEl.className = 'timeline-item';
            
            let jobItemsHTML = '';
            job.items.forEach(item => {
                jobItemsHTML += `
                    <div class="timeline-item-content">
                        <div class="timeline-item-title">${item.title}</div>
                        <div class="timeline-item-period">${item.period}</div>
                        <div class="timeline-item-description">${item.description}</div>
                    </div>
                `;
            });
            
            let techTagsHTML = '';
            job.technologies.forEach(tech => {
                techTagsHTML += `<span>${tech}</span>`;
            });
            
            experienceEl.innerHTML = `
                <div class="timeline-date">
                    <span>${job.date}</span>
                </div>
                <div class="timeline-content">
                    <h3>${job.title}</h3>
                    <div class="company-header">
                        <h4>${job.company}${job.department ? ' / ' + job.department : ''}</h4>
                        ${job.website ? `<a href="${job.website}" target="_blank" class="company-website-link">
                            <i class="fas fa-external-link-alt"></i>
                        </a>` : ''}
                    </div>
                    ${jobItemsHTML}
                    <div class="tech-tags">
                        ${techTagsHTML}
                    </div>
                </div>
            `;
            
            timelineContainer.appendChild(experienceEl);
        });
        
        console.log('Experience section loaded');
    } catch (error) {
        console.error('Error loading experience section:', error);
    }
}

// Load Projects section
function loadProjects() {
    try {
        const projectsContainer = document.getElementById('projects-grid');
        if (!projectsContainer) {
            console.error('Projects grid container not found');
            return;
        }
        
        projectsContainer.innerHTML = '';
        
        if (!portfolioData.projects || !Array.isArray(portfolioData.projects)) {
            console.error('Projects data is missing or not an array');
            return;
        }
        
        portfolioData.projects.forEach(project => {
            let bulletPoints = '';
            if (project.bullets && Array.isArray(project.bullets)) {
                project.bullets.forEach(bullet => {
                    bulletPoints += `<p>• ${bullet}</p>`;
                });
            }
            
            let techTagsHTML = '';
            if (project.technologies && Array.isArray(project.technologies)) {
                project.technologies.forEach(tech => {
                    techTagsHTML += `<span>${tech}</span>`;
                });
            }
            
            const projectEl = document.createElement('article');
            projectEl.className = 'project-card';
            projectEl.innerHTML = `
                <div class="project-content">
                    <div class="project-header">
                        <div class="project-title">
                            <h3>${project.title}</h3>
                            <span class="project-period">${project.period}</span>
                        </div>
                        <div class="project-links">
                            ${project.readme ? `
                                <button class="readme-btn" data-repo="${project.readme}">
                                    <i class="fas fa-file-lines"></i>
                                </button>` : ''}
                            ${project.github ? `
                                <a href="${project.github}" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>` : ''}
                            ${project.live ? `
                                <a href="${project.live}" target="_blank">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>` : ''}
                        </div>
                    </div>
                    <p>${project.description}</p>
                    ${bulletPoints}
                    <div class="project-tags">
                        ${techTagsHTML}
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectEl);
        });
        
        console.log('Projects section loaded');
        
        // Setup README buttons after projects are loaded
        setupReadmeButtons();
    } catch (error) {
        console.error('Error loading projects section:', error);
    }
}

// Load Skills section
function loadSkills() {
    try {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer) {
            console.error('Skills container not found');
            return;
        }
        
        skillsContainer.innerHTML = '';
        
        if (!portfolioData.skills || !Array.isArray(portfolioData.skills)) {
            console.error('Skills data is missing or not an array');
            return;
        }
        
        portfolioData.skills.forEach(category => {
            let skillItemsHTML = '';
            
            if (category.items && Array.isArray(category.items)) {
                category.items.forEach(skill => {
                    // Convert level number to filled circles (1-3 scale)
                    let levelHTML = '';
                    for (let i = 1; i <= 3; i++) {
                        if (i <= skill.level) {
                            levelHTML += '<i class="fas fa-circle"></i>';
                        } else {
                            levelHTML += '<i class="far fa-circle"></i>';
                        }
                    }
                    
                    skillItemsHTML += `
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">${skill.name}</span>
                                <span class="skill-level">
                                    ${levelHTML}
                                </span>
                            </div>
                        </div>
                    `;
                });
            }
            
            const categoryEl = document.createElement('div');
            categoryEl.className = 'skills-category';
            categoryEl.innerHTML = `
                <h3><i class="fas ${category.icon}"></i> ${category.category}</h3>
                <div class="skills-grid">
                    ${skillItemsHTML}
                </div>
            `;
            
            skillsContainer.appendChild(categoryEl);
        });
        
        console.log('Skills section loaded');
    } catch (error) {
        console.error('Error loading skills section:', error);
    }
}

// Load Background section
function loadBackground() {
    try {
        const backgroundContainer = document.getElementById('background-grid');
        if (!backgroundContainer) {
            console.error('Background container not found');
            return;
        }
        
        backgroundContainer.innerHTML = '';
        
        if (!portfolioData.background || !Array.isArray(portfolioData.background)) {
            console.error('Background data is missing or not an array');
            return;
        }
        
        portfolioData.background.forEach(section => {
            let itemsHTML = '';
            
            if (section.items && Array.isArray(section.items)) {
                section.items.forEach(item => {
                    itemsHTML += `
                        <div class="background-item">
                            <h4>${item.title}</h4>
                            <p class="item-detail">${item.detail}</p>
                            <p class="item-description">${item.description}</p>
                            <span class="item-period">${item.period}</span>
                        </div>
                    `;
                });
            }
            
            const sectionEl = document.createElement('div');
            sectionEl.className = 'background-card';
            sectionEl.innerHTML = `
                <div class="category-header">
                    <i class="fas ${section.icon}"></i>
                    <h3>${section.category}</h3>
                </div>
                <div class="background-items">
                    ${itemsHTML}
                </div>
            `;
            
            backgroundContainer.appendChild(sectionEl);
        });
        
        console.log('Background section loaded');
    } catch (error) {
        console.error('Error loading background section:', error);
    }
}

// Load Contact section
function loadContact() {
    try {
        // Note: The contact section is now directly in the HTML with a better design
        // This function can be used if you want to dynamically load contact info from the data
        console.log('Contact section is using the direct HTML approach');
    } catch (error) {
        console.error('Error loading contact section:', error);
    }
}

// Setup clipboard copy functionality
function setupClipboardCopy() {
    try {
        // Setup email copy
        const emailContact = document.getElementById('email-contact');
        if (emailContact) {
            emailContact.addEventListener('click', function(e) {
                e.preventDefault();
                const email = portfolioData.basics.email || 'gk24feb@gmail.com';
                navigator.clipboard.writeText(email)
                    .then(() => {
                        showNotification('Email copied to clipboard!');
                    })
                    .catch(err => {
                        console.error('Failed to copy email:', err);
                    });
            });
        }
        
        // Setup phone copy
        const phoneContact = document.getElementById('phone-contact');
        if (phoneContact) {
            phoneContact.addEventListener('click', function(e) {
                e.preventDefault();
                const phone = portfolioData.basics.phone || '+91 7542036307';
                navigator.clipboard.writeText(phone)
                    .then(() => {
                        showNotification('Phone number copied to clipboard!');
                    })
                    .catch(err => {
                        console.error('Failed to copy phone number:', err);
                    });
            });
        }
        
        console.log('Clipboard copy functionality setup');
    } catch (error) {
        console.error('Error setting up clipboard copy:', error);
    }
}

// Setup mobile menu
function setupMobileMenu() {
    try {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (!mobileMenuBtn || !nav) {
            console.error('Mobile menu elements not found');
            return;
        }
        
        // Toggle menu function
        function toggleMenu() {
            nav.classList.toggle('active');
        }
        
        // Close menu function
        function closeMenu() {
            nav.classList.remove('active');
        }
        
        // Mobile menu button click
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMenu();
            }
        });
        
        // Close menu on scroll
        window.addEventListener('scroll', closeMenu);
        
        console.log('Mobile menu setup complete');
    } catch (error) {
        console.error('Error setting up mobile menu:', error);
    }
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    try {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        console.log('Smooth scrolling setup complete');
    } catch (error) {
        console.error('Error setting up smooth scrolling:', error);
    }
}

// Setup README modal functionality
function setupModals() {
    try {
        const modal = document.getElementById('project-modal');
        const modalClose = modal.querySelector('.modal-close');
        
        if (!modal || !modalClose) {
            console.error('Modal elements not found');
            return;
        }
        
        // Close modal when clicking the close button
        modalClose.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close modal when clicking outside the content
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close modal on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        console.log('Modal setup complete');
    } catch (error) {
        console.error('Error setting up modals:', error);
    }
}

// Setup README buttons
function setupReadmeButtons() {
    try {
        const readmeBtns = document.querySelectorAll('.readme-btn');
        
        if (!readmeBtns.length) {
            console.log('No README buttons found');
            return;
        }
        
        readmeBtns.forEach(btn => {
            btn.addEventListener('click', async function(e) {
                const repo = e.currentTarget.dataset.repo;
                const modal = document.getElementById('project-modal');
                const modalTitle = document.getElementById('modal-title');
                const modalContent = document.getElementById('modal-content');
                
                if (!modalTitle || !modalContent) {
                    console.error('Modal elements not found');
                    return;
                }
                
                modalTitle.textContent = 'Loading README...';
                modalContent.innerHTML = '<p>Loading content...</p>';
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                try {
                    // Log the GitHub API URL we're trying to access
                    const apiUrl = `https://api.github.com/repos/${repo}/readme`;
                    console.log('Fetching README from:', apiUrl);
                    
                    // Fetch README from GitHub
                    const response = await fetch(apiUrl);
                    if (!response.ok) {
                        throw new Error(`Could not fetch README (Status: ${response.status})`);
                    }
                    
                    const data = await response.json();
                    
                    // Base64 decode
                    const content = atob(data.content);
                    
                    // Set modal content
                    modalTitle.textContent = repo.split('/')[1];
                    
                    // If you have a markdown parser like marked.js
                    if (window.marked) {
                        modalContent.innerHTML = marked.parse(content);
                    } else {
                        // Simple formatting if no markdown parser
                        modalContent.innerHTML = `<pre>${content}</pre>`;
                    }
                } catch (error) {
                    console.error('Error loading README:', error);
                    modalTitle.textContent = 'Error';
                    modalContent.innerHTML = `<p>Could not load README: ${error.message}</p>
                    <p>Make sure the repository is public and contains a README.md file.</p>`;
                }
            });
        });
        
        console.log('README buttons setup complete');
    } catch (error) {
        console.error('Error setting up README buttons:', error);
    }
}

// Theme toggle functionality
function setupThemeToggle() {
    try {
        const themeBtn = document.getElementById('theme-toggle');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        if (!themeBtn) {
            console.error('Theme toggle button not found');
            return;
        }
        
        // Check for saved theme preference or use the system preference
        const currentTheme = localStorage.getItem('theme') || 
                             (prefersDarkScheme.matches ? 'dark' : 'light');
        
        // Set initial theme
        document.body.classList.toggle('light-theme', currentTheme === 'light');
        updateThemeIcon(currentTheme);
        
        // Toggle theme on button click
        themeBtn.addEventListener('click', function() {
            const isCurrentlyLight = document.body.classList.contains('light-theme');
            const newTheme = isCurrentlyLight ? 'dark' : 'light';
            
            document.body.classList.toggle('light-theme', newTheme === 'light');
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
        
        // Update the theme button icon
        function updateThemeIcon(theme) {
            const icon = themeBtn.querySelector('i');
            if (icon) {
                icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            }
        }
        
        console.log('Theme toggle setup complete');
    } catch (error) {
        console.error('Error setting up theme toggle:', error);
    }
}

// Show notification
function showNotification(message, duration = 3000) {
    try {
        // Remove any existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create new notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Add to body
        document.body.appendChild(notification);
        
        // Remove after duration
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, duration);
        
        console.log('Notification shown:', message);
    } catch (error) {
        console.error('Error showing notification:', error);
    }
}