// Datos de los miembros
const members = [
    {
        name: "Carlos Rodríguez",
        role: "Piloto Principal",
        experience: "8 años",
        achievements: "Campeón Nacional 2023",
        location: "Madrid, España",
        color: "#3b82f6",
        initials: "CR"
    },
    {
        name: "Ana Martínez",
        role: "Piloto Elite",
        experience: "6 años",
        achievements: "Subcampeona Europea",
        location: "Barcelona, España",
        color: "#ec4899",
        initials: "AM"
    },
    {
        name: "David López",
        role: "Piloto Junior",
        experience: "3 años",
        achievements: "Revelación del Año",
        location: "Valencia, España",
        color: "#10b981",
        initials: "DL"
    },
    {
        name: "María García",
        role: "Mecánica Jefa",
        experience: "10 años",
        achievements: "Especialista en Motores",
        location: "Sevilla, España",
        color: "#8b5cf6",
        initials: "MG"
    },
    {
        name: "Jorge Pérez",
        role: "Entrenador",
        experience: "12 años",
        achievements: "Ex-piloto profesional",
        location: "Bilbao, España",
        color: "#f59e0b",
        initials: "JP"
    },
    {
        name: "Lucía Sánchez",
        role: "Piloto Promesa",
        experience: "2 años",
        achievements: "Mejor Novata 2024",
        location: "Málaga, España",
        color: "#fbbf24",
        initials: "LS"
    }
];

// Datos de las metas
const goals = [
    {
        icon: "fas fa-bullseye",
        title: "Campeonato Nacional",
        description: "Ganar el campeonato nacional de karting 2024",
        progress: 75,
        year: "2024"
    },
    {
        icon: "fas fa-globe-americas",
        title: "Expansión Internacional",
        description: "Participar en 3 competencias internacionales",
        progress: 40,
        year: "2025"
    },
    {
        icon: "fas fa-users",
        title: "Formación de Talento",
        description: "Formar a 10 nuevos pilotos junior",
        progress: 60,
        year: "2024"
    },
    {
        icon: "fas fa-chart-line",
        title: "Desarrollo Técnico",
        description: "Implementar nueva tecnología en nuestros karts",
        progress: 30,
        year: "2025"
    },
    {
        icon: "fas fa-trophy",
        title: "Triplete de Victorias",
        description: "Ganar 3 competencias consecutivas",
        progress: 100,
        year: "2023-2024"
    },
    {
        icon: "fas fa-star",
        title: "Reconocimiento Nacional",
        description: "Ser reconocidos como el mejor club de karting",
        progress: 90,
        year: "2024"
    }
];

// Datos de los auspiciantes
const sponsors = [
    {
        name: "SpeedTech Motors",
        category: "Motores y Partes",
        icon: "fas fa-car",
        tier: "tier-platinum"
    },
    {
        name: "EnergyMax",
        category: "Combustibles",
        icon: "fas fa-bolt",
        tier: "tier-gold"
    },
    {
        name: "LubePro",
        category: "Lubricantes",
        icon: "fas fa-oil-can",
        tier: "tier-gold"
    },
    {
        name: "Precision Tools",
        category: "Herramientas",
        icon: "fas fa-wrench",
        tier: "tier-silver"
    },
    {
        name: "Velocity Wear",
        category: "Ropa Deportiva",
        icon: "fas fa-tshirt",
        tier: "tier-silver"
    },
    {
        name: "Urban Motors",
        category: "Concesionario",
        icon: "fas fa-building",
        tier: "tier-bronze"
    }
];

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Cerrar menu al hacer click en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // Cargar miembros
    const membersGrid = document.querySelector('.members-grid');
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <div class="member-header">
                <div class="member-avatar" style="background-color: ${member.color};">
                    ${member.initials}
                </div>
                <div class="member-info">
                    <h3>${member.name}</h3>
                    <p class="member-role">${member.role}</p>
                </div>
            </div>
            <div class="member-details">
                <div class="detail-item">
                    <i class="fas fa-trophy"></i>
                    <span>${member.achievements}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-award"></i>
                    <span>Experiencia: ${member.experience}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${member.location}</span>
                </div>
            </div>
        `;
        membersGrid.appendChild(memberCard);
    });

    // Cargar metas
    const goalsGrid = document.querySelector('.goals-grid');
    goals.forEach(goal => {
        const goalCard = document.createElement('div');
        goalCard.className = 'goal-card';
        goalCard.innerHTML = `
            <div class="goal-header">
                <div class="goal-icon">
                    <i class="${goal.icon}"></i>
                </div>
                <span class="goal-year">${goal.year}</span>
            </div>
            <h3>${goal.title}</h3>
            <p>${goal.description}</p>
            <div class="progress-container">
                <div class="progress-info">
                    <span>Progreso</span>
                    <span>${goal.progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${goal.progress}%"></div>
                </div>
            </div>
        `;
        goalsGrid.appendChild(goalCard);
    });

    // Cargar auspiciantes
    const sponsorsGrid = document.querySelector('.sponsors-grid');
    sponsors.forEach(sponsor => {
        const sponsorCard = document.createElement('div');
        sponsorCard.className = 'sponsor-card';
        sponsorCard.innerHTML = `
            <div class="sponsor-header">
                <div class="sponsor-icon">
                    <i class="${sponsor.icon}"></i>
                </div>
                <span class="sponsor-tier ${sponsor.tier}">
                    ${sponsor.tier.split('-')[1].toUpperCase()}
                </span>
            </div>
            <h3>${sponsor.name}</h3>
            <p class="sponsor-category">${sponsor.category}</p>
            <p class="sponsor-description">
                Socio estratégico que contribuye al desarrollo del equipo y al éxito en competencias.
            </p>
        `;
        sponsorsGrid.appendChild(sponsorCard);
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Aquí normalmente enviarías los datos a un servidor
        // Por ahora solo mostramos un mensaje
        alert(`¡Gracias ${name}! Tu mensaje ha sido enviado.\nTe contactaremos en ${email} pronto.`);
        
        // Resetear formulario
        contactForm.reset();
    });

    // Animación de barras de progreso al hacer scroll
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('.progress-fill');
                const width = progressFill.style.width;
                progressFill.style.width = '0%';
                setTimeout(() => {
                    progressFill.style.width = width;
                }, 300);
            }
        });
    }, observerOptions);

    // Observar todas las tarjetas de metas
    document.querySelectorAll('.goal-card').forEach(card => {
        observer.observe(card);
    });
});

