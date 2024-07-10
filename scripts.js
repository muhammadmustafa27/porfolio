document.addEventListener('DOMContentLoaded', function() {
    const experienceData = [
        {
            date: 'Mar 2023 - Present',
            title: 'Cloud Engineer',
            company: '160 Driving Academy',
            description: 'Leading the design and implementation of scalable cloud infrastructure solutions.',
            highlights: [
                'Architected a multi-cloud solution reducing operational costs by 30%',
                'Implemented serverless architectures for 5 enterprise clients',
                'Led a team of 10 engineers in migrating legacy systems to cloud-native solutions',
                'Developed CI/CD pipelines reducing deployment time from days to hours',
                'Conducted cloud security audits and implemented best practices across projects'
            ]
        },
        {
            date: 'Feb 2022 - Mar 2023',
            title: 'Senior IT Engineer',
            company: '160 Driving Academy',
            description: 'Streamlined development processes and enhanced system reliability.',
            highlights: [
                'Reduced deployment time by 40% through optimized CI/CD pipelines',
                'Implemented infrastructure-as-code using Terraform, increasing provisioning efficiency by 50%',
                'Containerized 15 applications using Docker, improving scalability and portability',
                'Set up comprehensive monitoring and alerting systems, reducing system downtime by 25%',
                'Mentored junior developers in DevOps practices and tools'
            ]
        },
        {
            date: 'Feb 2021 - Jan 2022',
            title: 'IT Help Desk Support',
            company: 'Great Computer Solutions, Inc.',
            description: 'Managed and optimized on-premises and cloud-based systems.',
            highlights: [
                'Maintained 99.99% uptime for critical systems serving over 1000 users',
                'Implemented robust backup and disaster recovery solutions, reducing data loss risk by 80%',
                'Automated routine tasks, saving 20 hours of manual work per week',
                'Migrated 5 on-premises applications to AWS, improving performance and reducing costs',
                'Conducted regular security audits and patch management, enhancing overall system security'
            ]
        },
        {
            date: 'Oct 2021 - Feb 2021',
            title: 'Customer Specialist',
            company: 'Apple, Inc.',
            description: 'Provided exceptional customer service and technical support for Apple products.',
            highlights: [
                'Achieved a 95% customer satisfaction rating through effective problem-solving',
                'Trained and mentored 5 new team members on product knowledge and customer service best practices',
                'Recognized as "Employee of the Month" for consistently exceeding performance metrics',
                'Contributed to the development of a new troubleshooting guide, improving first-call resolution rates',
                'Participated in beta testing of new support tools, providing valuable feedback for improvements'
            ]
        }
    ];

    function renderExperience() {
        const experienceContainer = document.querySelector('.experience-container');
        if (!experienceContainer) return;

        experienceData.forEach((item) => {
            const experienceItem = document.createElement('div');
            experienceItem.classList.add('experience-item');
            experienceItem.innerHTML = `
                <h3>${item.title}</h3>
                <h4>${item.company}</h4>
                <p class="date">${item.date}</p>
                <p>${item.description}</p>
                <ul>
                    ${item.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            `;
            experienceContainer.appendChild(experienceItem);
        });
    }

    renderExperience();

    // Journey navigation functionality
    const journeySteps = document.querySelectorAll('.journey-step');
    const sections = document.querySelectorAll('section');

    function activateStep(step) {
        journeySteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
    }

    function handleScroll() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        journeySteps.forEach(step => {
            step.classList.remove('active');
            if (step.getAttribute('data-section') === current) {
                step.classList.add('active');
            }
        });
    }

    journeySteps.forEach(step => {
        step.addEventListener('click', function() {
            const targetSection = document.getElementById(this.getAttribute('data-section'));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Skills progress bar animation
    const skillLevels = document.querySelectorAll('.skill-level');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fillWidth = entry.target.getAttribute('data-level');
                entry.target.style.width = fillWidth;
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillLevels.forEach(skill => {
        skillsObserver.observe(skill);
    });

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleIcon = themeToggle.querySelector('i');

    function switchTheme() {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggleIcon.classList.remove('fa-sun');
            themeToggleIcon.classList.add('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleIcon.classList.remove('fa-moon');
            themeToggleIcon.classList.add('fa-sun');
        }    
    }

    themeToggle.addEventListener('click', switchTheme);

    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleIcon.classList.remove('fa-moon');
        themeToggleIcon.classList.add('fa-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Parallax effect
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax');
        if (parallax) {
            let scrollPosition = window.pageYOffset;
            parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to certification badges
    const certificationBadges = document.querySelectorAll('.certification-badge');
    certificationBadges.forEach(badge => {
        badge.addEventListener('mouseover', () => {
            badge.style.transform = 'scale(1.1) rotate(5deg)';
        });
        badge.addEventListener('mouseout', () => {
            badge.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});