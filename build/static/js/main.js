// Main JavaScript for Mundo de Historias
// Storytelling Educational Website

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize navigation
    initializeNavigation();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'microtales':
            initializeMicrotalesPage();
            break;
        case 'story_formats':
            initializeFormatsPage();
            break;
        case 'interactive_guide':
            initializeInteractiveGuide();
            break;
    }
    
    // Initialize common elements
    initializeScrollEffects();
    initializeAnimations();
}

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('microtales')) return 'microtales';
    if (path.includes('story-formats')) return 'story_formats';
    if (path.includes('interactive-guide')) return 'interactive_guide';
    return 'index';
}

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('mainNav');
    
    // Handle navbar scroll behavior
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
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

// Home page functionality
function initializeHomePage() {
    // Animate floating shapes
    animateFloatingShapes();
    
    // Initialize hero animations
    initializeHeroAnimations();
}

function animateFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        // Add random movement to shapes
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 1000);
    });
}

function initializeHeroAnimations() {
    // Animate SVG elements
    const stars = document.querySelectorAll('.twinkling-stars polygon');
    stars.forEach((star, index) => {
        setInterval(() => {
            star.style.opacity = Math.random() * 0.5 + 0.5;
        }, 1000 + index * 500);
    });
}

// Microtales page functionality
function initializeMicrotalesPage() {
    initializeWritingArea();
    initializePromptGenerator();
}

function initializeWritingArea() {
    const textarea = document.getElementById('microtaleInput');
    const wordCountEl = document.getElementById('wordCount');
    const charCountEl = document.getElementById('charCount');
    
    if (textarea && wordCountEl && charCountEl) {
        textarea.addEventListener('input', function() {
            updateWordCount(this.value, wordCountEl, charCountEl);
        });
    }
    
    // Initialize story editor if exists
    const storyEditor = document.getElementById('storyEditor');
    const storyWordCount = document.getElementById('storyWordCount');
    const storyCharCount = document.getElementById('storyCharCount');
    const readingTime = document.getElementById('readingTime');
    
    if (storyEditor && storyWordCount && storyCharCount && readingTime) {
        storyEditor.addEventListener('input', function() {
            updateStoryStats(this.value, storyWordCount, storyCharCount, readingTime);
        });
    }
}

function updateWordCount(text, wordCountEl, charCountEl) {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = text.trim() === '' ? 0 : words.length;
    const charCount = text.length;
    
    wordCountEl.textContent = `${wordCount} palabras`;
    charCountEl.textContent = `${charCount} caracteres`;
    
    // Change color if over limit for microtales
    if (wordCount > 50) {
        wordCountEl.style.color = '#fd79a8';
    } else {
        wordCountEl.style.color = '#636e72';
    }
}

function updateStoryStats(text, wordCountEl, charCountEl, readingTimeEl) {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = text.trim() === '' ? 0 : words.length;
    const charCount = text.length;
    const readingTime = Math.ceil(wordCount / 250); // Average 250 words per minute
    
    wordCountEl.textContent = `${wordCount} palabras`;
    charCountEl.textContent = `${charCount} caracteres`;
    readingTimeEl.textContent = `${readingTime} min de lectura`;
}

function initializePromptGenerator() {
    // Generate initial prompts
    generateNewPrompt();
}

function generateNewPrompt() {
    const prompts = [
        {
            svg: `<svg width="200" height="150" viewBox="0 0 200 150">
                    <rect width="200" height="150" fill="#87CEEB"/>
                    <circle cx="170" cy="30" r="15" fill="#FFD700"/>
                    <path d="M20 120 Q50 80 80 120 Q110 80 140 120 Q170 80 200 120 L200 150 L0 150 Z" fill="#90EE90"/>
                    <rect x="90" y="100" width="20" height="30" fill="#8B4513"/>
                    <circle cx="100" cy="90" r="20" fill="#228B22"/>
                  </svg>`,
            text: "Un árbol solitario en un campo verde bajo el sol..."
        },
        {
            svg: `<svg width="200" height="150" viewBox="0 0 200 150">
                    <rect width="200" height="150" fill="#2F4F4F"/>
                    <circle cx="50" cy="40" r="25" fill="#F0F8FF" opacity="0.8"/>
                    <rect x="80" y="100" width="40" height="50" fill="#8B4513"/>
                    <polygon points="80,100 100,80 120,100" fill="#CD853F"/>
                    <rect x="95" y="120" width="10" height="30" fill="#654321"/>
                  </svg>`,
            text: "Una casa abandonada bajo la luna llena..."
        },
        {
            svg: `<svg width="200" height="150" viewBox="0 0 200 150">
                    <rect width="200" height="150" fill="#FFB6C1"/>
                    <circle cx="100" cy="75" r="30" fill="#FF1493"/>
                    <rect x="70" y="90" width="60" height="40" fill="#8B0000"/>
                    <circle cx="85" cy="110" r="8" fill="#FFD700"/>
                    <circle cx="115" cy="110" r="8" fill="#FFD700"/>
                  </svg>`,
            text: "Un objeto misterioso encontrado en el ático..."
        }
    ];
    
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    
    const promptImage = document.querySelector('.prompt-image');
    const promptText = document.querySelector('.prompt-text');
    
    if (promptImage && promptText) {
        promptImage.innerHTML = randomPrompt.svg;
        promptText.textContent = randomPrompt.text;
    }
}

// Story formats page functionality
function initializeFormatsPage() {
    // Format details will be handled by showFormatDetails function
}

function showFormatDetails(formatType) {
    const modal = new bootstrap.Modal(document.getElementById('formatModal'));
    const modalTitle = document.getElementById('formatModalTitle');
    const modalBody = document.getElementById('formatModalBody');
    
    const formatDetails = {
        'microrrelatos': {
            title: 'Microrrelatos',
            content: `
                <h5>Características principales:</h5>
                <ul>
                    <li><strong>Extensión:</strong> 1-300 palabras</li>
                    <li><strong>Estructura:</strong> Inicio impactante → Desarrollo mínimo → Final sorprendente</li>
                    <li><strong>Elementos clave:</strong> Brevedad, intensidad, sorpresa</li>
                    <li><strong>Técnicas:</strong> Elipsis, sugerencia, ironía, paradoja</li>
                </ul>
                <h5>Consejos para escribir:</h5>
                <ul>
                    <li>Cada palabra debe ser necesaria</li>
                    <li>Comienza in media res</li>
                    <li>Deja que el lector complete la historia</li>
                    <li>El final debe reinterpretar todo lo anterior</li>
                </ul>
                <h5>Ejemplo de estructura:</h5>
                <p><em>"[Situación normal] + [Elemento perturbador] + [Revelación/Twist]"</em></p>
            `
        },
        'cuentos': {
            title: 'Cuentos',
            content: `
                <h5>Características principales:</h5>
                <ul>
                    <li><strong>Extensión:</strong> 1,000-15,000 palabras</li>
                    <li><strong>Estructura:</strong> Presentación → Nudo → Clímax → Desenlace</li>
                    <li><strong>Elementos:</strong> Unidad de acción, concentración, efecto único</li>
                    <li><strong>Personajes:</strong> Pocos pero bien desarrollados</li>
                </ul>
                <h5>Técnicas narrativas:</h5>
                <ul>
                    <li>Narrador definido (1ª o 3ª persona)</li>
                    <li>Tiempo lineal o con flashbacks</li>
                    <li>Ambiente y atmósfera cuidados</li>
                    <li>Diálogos funcionales</li>
                </ul>
            `
        },
        'noveletas': {
            title: 'Noveletas',
            content: `
                <h5>Características principales:</h5>
                <ul>
                    <li><strong>Extensión:</strong> 15,000-40,000 palabras</li>
                    <li><strong>Desarrollo:</strong> Más complejo que un cuento</li>
                    <li><strong>Personajes:</strong> 3-8 personajes con desarrollo</li>
                    <li><strong>Tramas:</strong> Principal + secundaria</li>
                </ul>
                <h5>Ventajas del formato:</h5>
                <ul>
                    <li>Más espacio para desarrollar personajes</li>
                    <li>Permite subtramas</li>
                    <li>Ideal para historias complejas</li>
                    <li>Lectura en una sesión</li>
                </ul>
            `
        },
        'novelas-cortas': {
            title: 'Novelas Cortas',
            content: `
                <h5>Características principales:</h5>
                <ul>
                    <li><strong>Extensión:</strong> 40,000-60,000 palabras</li>
                    <li><strong>Complejidad:</strong> Múltiples tramas interconectadas</li>
                    <li><strong>Personajes:</strong> 5-12 personajes desarrollados</li>
                    <li><strong>Mundo:</strong> Más amplio y detallado</li>
                </ul>
                <h5>Estructura típica:</h5>
                <ul>
                    <li>Múltiples capítulos</li>
                    <li>Arcos narrativos entrelazados</li>
                    <li>Desarrollo profundo de temas</li>
                    <li>Resolución satisfactoria</li>
                </ul>
            `
        },
        'novelas': {
            title: 'Novelas',
            content: `
                <h5>Características principales:</h5>
                <ul>
                    <li><strong>Extensión:</strong> 60,000+ palabras</li>
                    <li><strong>Alcance:</strong> Épico, múltiples tramas y personajes</li>
                    <li><strong>Mundo:</strong> Rico y completamente desarrollado</li>
                    <li><strong>Temas:</strong> Múltiples temas interconectados</li>
                </ul>
                <h5>Planificación necesaria:</h5>
                <ul>
                    <li>Outline detallado</li>
                    <li>Biblia de personajes</li>
                    <li>Worldbuilding extenso</li>
                    <li>Arcos de múltiples libros</li>
                </ul>
            `
        },
        'guiones': {
            title: 'Guiones',
            content: `
                <h5>Características principales:</h5>
                <ul>
                    <li><strong>Formato:</strong> 90-120 páginas (1 página = 1 minuto)</li>
                    <li><strong>Estructura:</strong> Tres actos bien definidos</li>
                    <li><strong>Elementos:</strong> Diálogos, acciones, descripciones visuales</li>
                    <li><strong>Objetivo:</strong> Guía para producción audiovisual</li>
                </ul>
                <h5>Formato específico:</h5>
                <ul>
                    <li>FADE IN / FADE OUT</li>
                    <li>ESCENA - LOCALIZACIÓN - TIEMPO</li>
                    <li>Nombres en MAYÚSCULAS</li>
                    <li>Acciones en presente</li>
                </ul>
            `
        },
        'poesia-narrativa': {
            title: 'Poesía Narrativa',
            content: `
                <h5>Características principales:</h5>
                <ul>
                    <li><strong>Forma:</strong> Combina narrativa y poesía</li>
                    <li><strong>Ritmo:</strong> Musicalidad y cadencia</li>
                    <li><strong>Recursos:</strong> Metáforas, símbolos, imágenes</li>
                    <li><strong>Historia:</strong> Cuenta una historia en verso</li>
                </ul>
                <h5>Técnicas poéticas:</h5>
                <ul>
                    <li>Rima y métrica (opcional)</li>
                    <li>Repeticiones y paralelismos</li>
                    <li>Lenguaje figurado</li>
                    <li>Condensación expresiva</li>
                </ul>
            `
        },
        'historias-digitales': {
            title: 'Historias Digitales',
            content: `
                <h5>Características principales:</h5>
                <ul>
                    <li><strong>Medio:</strong> Plataformas digitales</li>
                    <li><strong>Interactividad:</strong> El lector influye en la historia</li>
                    <li><strong>Multimedia:</strong> Texto, imagen, audio, video</li>
                    <li><strong>Formato:</strong> Hipertexto, aplicaciones, juegos</li>
                </ul>
                <h5>Elementos digitales:</h5>
                <ul>
                    <li>Decisiones del usuario</li>
                    <li>Múltiples finales</li>
                    <li>Elementos interactivos</li>
                    <li>Narrativa no lineal</li>
                </ul>
            `
        },
        'cronicas': {
            title: 'Crónicas',
            content: `
                <h5>Características principales:</h5>
                <ul>
                    <li><strong>Extensión:</strong> 2,000-8,000 palabras</li>
                    <li><strong>Base:</strong> Hechos reales documentados</li>
                    <li><strong>Estilo:</strong> Técnicas literarias + periodismo</li>
                    <li><strong>Objetivo:</strong> Informar narrando</li>
                </ul>
                <h5>Técnicas de la crónica:</h5>
                <ul>
                    <li>Investigación rigurosa</li>
                    <li>Narrador testigo o protagonista</li>
                    <li>Reconstrucción de escenas</li>
                    <li>Personajes reales como protagonistas</li>
                </ul>
            `
        }
    };
    
    const details = formatDetails[formatType];
    if (details) {
        modalTitle.textContent = details.title;
        modalBody.innerHTML = details.content;
        modal.show();
    }
}

function tryFormat() {
    alert('¡Excelente elección! Dirígete a la Guía Interactiva para comenzar a escribir en este formato.');
    window.location.href = '/interactive-guide';
}

let currentFormatType = '';

function showFormatDetailsAndTrack(formatType) {
    currentFormatType = formatType;
    showFormatDetails(formatType);
}

function downloadFormatTemplate() {
    if (!currentFormatType) {
        downloadGuideTemplate('microrrelato');
        return;
    }
    
    const formatMap = {
        'microrrelatos': 'microrrelato',
        'cuentos': 'cuento',
        'noveletas': 'cuento',
        'novelas-cortas': 'cuento',
        'novelas': 'cuento'
    };
    
    const templateType = formatMap[currentFormatType] || 'microrrelato';
    downloadGuideTemplate(templateType);
}

function downloadTechniquesGuide() {
    const techniquesContent = `GUÍA DE TÉCNICAS NARRATIVAS
===========================

Creado con Mundo de Historias
Fecha: ${new Date().toLocaleDateString('es-ES')}

TÉCNICAS FUNDAMENTALES PARA MICRORRELATOS:

1. ECONOMÍA DE PALABRAS
   - Elimina adjetivos innecesarios
   - Usa verbos fuertes y sustantivos precisos
   - Cada palabra debe tener un propósito

2. MOSTRAR VS CONTAR (SHOW DON'T TELL)
   - No digas que alguien está triste, muestra sus lágrimas
   - Las acciones revelan más que las descripciones
   - Permite que el lector deduzca las emociones

3. FINAL IMPACTANTE
   - El final debe sorprender, emocionar o hacer reflexionar
   - Técnicas: Plot twist, revelación, ironía, pregunta abierta
   - Es el momento de mayor impacto del relato

4. TÉCNICA DEL ICEBERG
   - Solo muestra la punta del iceberg
   - Deja que el lector imagine el resto de la historia
   - Sugiere más de lo que dices explícitamente

5. IN MEDIA RES
   - Comienza en medio de la acción
   - No hay tiempo para presentaciones largas
   - Engancha al lector desde la primera línea

6. EMOCIÓN ÚNICA
   - Enfócate en una sola emoción o sensación
   - No trates de abarcar demasiado
   - Miedo, amor, sorpresa, melancolía... elige una y profundiza

EJERCICIOS PRÁCTICOS:

1. Reescribe esta frase quitando palabras innecesarias:
   "El perro muy grande y peludo corrió rápidamente por el jardín verde"
   
2. Convierte esta descripción en "mostrar":
   "Estaba muy nervioso"
   
3. Crea un final sorprendente para:
   "Encontré una carta dirigida a mí, pero fechada 50 años en el futuro..."

RECURSOS ADICIONALES:
- Busca ejemplos de autores como Augusto Monterroso
- Lee microrrelatos famosos y analiza sus técnicas
- Practica escribiendo un microrrelato diario

¡Sigue practicando y mejorando tu técnica narrativa!`;

    const filename = 'guia_tecnicas_narrativas.txt';
    const blob = new Blob([techniquesContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

// Interactive guide functionality
function initializeInteractiveGuide() {
    currentStep = 1;
    updateProgress();
    initializeStepContent();
}

let currentStep = 1;
const totalSteps = 5;

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateStepDisplay();
        updateProgress();
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepDisplay();
        updateProgress();
    }
}

function updateStepDisplay() {
    // Hide all steps
    document.querySelectorAll('.step-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Show current step
    const currentStepCard = document.getElementById(`step${currentStep}`);
    if (currentStepCard) {
        currentStepCard.classList.add('active');
    }
}

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    const progressLabels = document.querySelectorAll('.step-label');
    
    if (progressBar) {
        const progress = (currentStep / totalSteps) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // Update step labels
    progressLabels.forEach((label, index) => {
        if (index + 1 <= currentStep) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });
}

function initializeStepContent() {
    // Initialize idea generators
    initializeIdeaGenerators();
    
    // Initialize character builder
    initializeCharacterBuilder();
    
    // Initialize structure selector
    initializeStructureSelector();
    
    // Initialize writing tools
    initializeWritingTools();
    
    // Initialize editing tools
    initializeEditingTools();
}

// Step 1: Idea Generation
function initializeIdeaGenerators() {
    // Ideas are generated on demand by buttons
}

function generateWhatIf() {
    const whatIfIdeas = [
        "¿Y si los sueños fueran memorias de vidas paralelas?",
        "¿Y si pudieras ver cuánto tiempo le queda de vida a cada persona?",
        "¿Y si los objetos tuvieran memoria?",
        "¿Y si cada mentira que dices se hace realidad?",
        "¿Y si pudieras intercambiar recuerdos con otras personas?",
        "¿Y si el tiempo fuera una moneda que puedes gastar?",
        "¿Y si los libros cambiaran su historia cada vez que los lees?",
        "¿Y si pudieras sentir las emociones de todos a tu alrededor?",
        "¿Y si las pesadillas fueran ventanas a otros mundos?",
        "¿Y si cada día que vives, alguien más lo pierde?"
    ];
    
    const output = document.getElementById('whatIfOutput');
    if (output) {
        const randomIdea = whatIfIdeas[Math.floor(Math.random() * whatIfIdeas.length)];
        output.textContent = randomIdea;
        output.style.animation = 'fadeInUp 0.5s ease';
    }
}

function generateSituation() {
    const situations = [
        "Una persona encuentra un objeto que no debería existir",
        "Alguien recibe una carta dirigida a una persona que murió hace 50 años",
        "Un niño habla con alguien que solo él puede ver",
        "Una mujer se despierta hablando un idioma que no conoce",
        "Un hombre encuentra fotos de sí mismo en lugares donde nunca ha estado",
        "Una persona descubre que puede escuchar los pensamientos de los demás",
        "Alguien encuentra un diario que describe su vida antes de vivirla",
        "Una familia se muda a una casa donde el tiempo pasa diferente",
        "Un estudiante nota que su sombra actúa independientemente",
        "Una persona descubre que puede cambiar el pasado tocando fotografías"
    ];
    
    const output = document.getElementById('situationOutput');
    if (output) {
        const randomSituation = situations[Math.floor(Math.random() * situations.length)];
        output.textContent = randomSituation;
        output.style.animation = 'fadeInUp 0.5s ease';
    }
}

function generateFirstLine() {
    const firstLines = [
        "El día que dejé de hacer sombra, nadie se dio cuenta.",
        "Mi reflejo parpadeó primero.",
        "Recibí mi certificado de defunción por correo esta mañana.",
        "Los relojes de la casa marcaban horarios diferentes, todos correctos.",
        "Mamá dijo que tenía un hermano gemelo, pero yo nunca lo vi.",
        "El último mensaje de mi teléfono era de mí mismo.",
        "Mi nombre apareció en un obituario de un periódico de 1987.",
        "Los pájaros comenzaron a volar hacia atrás.",
        "Encontré mis llaves en el lugar exacto donde las busqué ayer.",
        "El eco de mi voz regresó antes de que terminara de hablar."
    ];
    
    const output = document.getElementById('firstLineOutput');
    if (output) {
        const randomLine = firstLines[Math.floor(Math.random() * firstLines.length)];
        output.textContent = `"${randomLine}"`;
        output.style.animation = 'fadeInUp 0.5s ease';
    }
}

// Step 2: Character Development
function initializeCharacterBuilder() {
    // Listen for input changes to update character summary
    const inputs = ['characterName', 'characterAge', 'characterJob', 'characterDesire', 'characterFear'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', updateCharacterSummary);
        }
    });
}

function selectTrait(button, category) {
    // Remove selection from other buttons in the same category
    const categoryButtons = button.parentElement.querySelectorAll('.trait-btn');
    categoryButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Select this button
    button.classList.add('selected');
    
    // Update character summary
    updateCharacterSummary();
}

function updateCharacterSummary() {
    const name = document.getElementById('characterName')?.value || 'Tu personaje';
    const age = document.getElementById('characterAge')?.value || '??';
    const job = document.getElementById('characterJob')?.value || 'una ocupación misteriosa';
    const desire = document.getElementById('characterDesire')?.value || 'algo importante';
    const fear = document.getElementById('characterFear')?.value || 'lo desconocido';
    
    const personality = document.querySelector('.trait-btn.selected[onclick*="personality"]')?.textContent || 'una personalidad única';
    const flaw = document.querySelector('.trait-btn.selected[onclick*="flaw"]')?.textContent || 'defectos humanos';
    
    const summary = `${name} es un/a ${job} de ${age} años con una personalidad ${personality.toLowerCase()}. Su mayor deseo es ${desire}, pero teme ${fear}. Su principal defecto es ser ${flaw.toLowerCase()}, lo que podría complicar su búsqueda.`;
    
    const summaryElement = document.getElementById('characterSummary');
    if (summaryElement) {
        summaryElement.innerHTML = summary;
    }
}

// Step 3: Structure Selection
function initializeStructureSelector() {
    // Structure selection is handled by selectStructure function
}

function selectStructure(structureType) {
    // Remove selection from other structures
    document.querySelectorAll('.structure-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Select this structure
    event.target.closest('.structure-option').classList.add('selected');
    
    // Show structure details
    showStructureDetails(structureType);
    
    // Show planner
    showStructurePlanner(structureType);
}

function showStructureDetails(structureType) {
    const detailElement = document.getElementById('structureDetail');
    
    const structures = {
        'microtale': {
            title: 'Microrrelato',
            description: 'Perfecto para historias impactantes y breves',
            parts: ['Inicio impactante (1-2 líneas)', 'Desarrollo mínimo (opcional)', 'Final sorprendente (1-2 líneas)'],
            tips: ['Cada palabra cuenta', 'El final debe reinterpretar todo', 'Deja que el lector complete la historia']
        },
        'short-story': {
            title: 'Cuento Clásico',
            description: 'Estructura tradicional para narrativas completas',
            parts: ['Presentación (25%)', 'Desarrollo (50%)', 'Clímax (15%)', 'Desenlace (10%)'],
            tips: ['Enfócate en un solo conflicto', 'Desarrolla bien a tu protagonista', 'El clímax debe ser satisfactorio']
        },
        'hero-journey': {
            title: 'Viaje del Héroe',
            description: 'Estructura mítica para historias de transformación',
            parts: ['Mundo ordinario', 'Llamada a la aventura', 'Rechazo/Aceptación', 'Mentor', 'Pruebas', 'Transformación', 'Retorno'],
            tips: ['El héroe debe cambiar', 'Las pruebas deben ser progresivas', 'El retorno completa el círculo']
        },
        'three-act': {
            title: 'Tres Actos',
            description: 'Estructura clásica para guiones y novelas',
            parts: ['Acto I: Presentación (25%)', 'Acto II: Confrontación (50%)', 'Acto III: Resolución (25%)'],
            tips: ['Cada acto tiene su función', 'Los puntos de giro son cruciales', 'Mantén el ritmo en el Acto II']
        }
    };
    
    const structure = structures[structureType];
    if (structure && detailElement) {
        detailElement.innerHTML = `
            <h5><i class="fas fa-info-circle me-2"></i>${structure.title}</h5>
            <p>${structure.description}</p>
            <h6>Partes de la estructura:</h6>
            <ul>
                ${structure.parts.map(part => `<li>${part}</li>`).join('')}
            </ul>
            <h6>Consejos:</h6>
            <ul>
                ${structure.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        `;
    }
}

function showStructurePlanner(structureType) {
    const plannerElement = document.getElementById('structurePlanner');
    const contentElement = document.getElementById('plannerContent');
    
    if (!plannerElement || !contentElement) return;
    
    const planners = {
        'microtale': `
            <div class="mb-3">
                <label class="form-label">Situación inicial:</label>
                <input type="text" class="form-control" placeholder="¿Cuál es la situación normal?">
            </div>
            <div class="mb-3">
                <label class="form-label">Elemento perturbador:</label>
                <input type="text" class="form-control" placeholder="¿Qué cambia o sorprende?">
            </div>
            <div class="mb-3">
                <label class="form-label">Revelación final:</label>
                <input type="text" class="form-control" placeholder="¿Cuál es el twist o revelación?">
            </div>
        `,
        'short-story': `
            <div class="mb-3">
                <label class="form-label">Presentación (25%):</label>
                <textarea class="form-control" rows="2" placeholder="Personajes, lugar, situación inicial..."></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Desarrollo (50%):</label>
                <textarea class="form-control" rows="3" placeholder="Conflicto, complicaciones, desarrollo..."></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Clímax (15%):</label>
                <textarea class="form-control" rows="2" placeholder="Momento de mayor tensión..."></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Desenlace (10%):</label>
                <textarea class="form-control" rows="2" placeholder="Resolución y consecuencias..."></textarea>
            </div>
        `,
        'hero-journey': `
            <div class="mb-3">
                <label class="form-label">Mundo ordinario:</label>
                <input type="text" class="form-control" placeholder="¿Cómo es la vida normal del héroe?">
            </div>
            <div class="mb-3">
                <label class="form-label">Llamada a la aventura:</label>
                <input type="text" class="form-control" placeholder="¿Qué evento cambia todo?">
            </div>
            <div class="mb-3">
                <label class="form-label">Mentor:</label>
                <input type="text" class="form-control" placeholder="¿Quién ayuda al héroe?">
            </div>
            <div class="mb-3">
                <label class="form-label">Pruebas principales:</label>
                <textarea class="form-control" rows="2" placeholder="¿Qué desafíos debe superar?"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Transformación:</label>
                <input type="text" class="form-control" placeholder="¿Cómo cambia el héroe?">
            </div>
        `,
        'three-act': `
            <div class="mb-3">
                <label class="form-label">Acto I - Presentación:</label>
                <textarea class="form-control" rows="2" placeholder="Personajes, mundo, incidente incitador..."></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Plot Point 1:</label>
                <input type="text" class="form-control" placeholder="¿Qué lanza la historia principal?">
            </div>
            <div class="mb-3">
                <label class="form-label">Acto II - Confrontación:</label>
                <textarea class="form-control" rows="3" placeholder="Obstáculos, complicaciones, desarrollo..."></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Plot Point 2:</label>
                <input type="text" class="form-control" placeholder="¿Qué lleva al clímax final?">
            </div>
            <div class="mb-3">
                <label class="form-label">Acto III - Resolución:</label>
                <textarea class="form-control" rows="2" placeholder="Clímax y resolución final..."></textarea>
            </div>
        `
    };
    
    contentElement.innerHTML = planners[structureType] || '';
    plannerElement.style.display = 'block';
}

// Step 4: Writing Tools
function initializeWritingTools() {
    // Writing stats are handled by existing functions
    // Initialize word suggestions
    initializeWordSuggester();
    
    // Load saved story if exists
    loadSavedStory();
}

function initializeWordSuggester() {
    // Word suggestions are generated on demand
}

function insertTemplate(type) {
    const editor = document.getElementById('storyEditor');
    if (!editor) return;
    
    const templates = {
        'dialogue': '\n\n—¿[Pregunta o comentario del personaje]? —preguntó [nombre del personaje].\n—[Respuesta] —respondió [otro personaje].\n\n',
        'description': '\n\n[El lugar/ambiente] se extendía ante [personaje]. [Descripción sensorial: colores, sonidos, olores]. [Detalle específico que llama la atención].\n\n',
        'action': '\n\n[Personaje] [acción específica]. [Consecuencia inmediata]. [Reacción o siguiente acción].\n\n',
        'emotion': '\n\n[Emoción] recorrió el [parte del cuerpo] de [personaje]. [Manifestación física de la emoción]. [Pensamiento o reacción interna].\n\n'
    };
    
    const template = templates[type];
    if (template) {
        const cursorPos = editor.selectionStart;
        const textBefore = editor.value.substring(0, cursorPos);
        const textAfter = editor.value.substring(cursorPos);
        
        editor.value = textBefore + template + textAfter;
        editor.focus();
        editor.setSelectionRange(cursorPos + template.length, cursorPos + template.length);
        
        // Update stats
        const event = { target: editor };
        updateStoryStats(editor.value, 
            document.getElementById('storyWordCount'),
            document.getElementById('storyCharCount'),
            document.getElementById('readingTime')
        );
    }
}

function suggestWords(category) {
    const words = {
        'emotions': ['alegría', 'melancolía', 'ansiedad', 'esperanza', 'desesperación', 'asombro', 'nostalgia', 'euforia', 'temor', 'serenidad'],
        'actions': ['susurrar', 'contemplar', 'vacilar', 'deslizarse', 'emerger', 'desvanecer', 'precipitarse', 'tambalear', 'acechar', 'refugiarse'],
        'descriptions': ['etéreo', 'sombrío', 'luminoso', 'agreste', 'apacible', 'turbulento', 'místico', 'desolado', 'exuberante', 'lúgubre']
    };
    
    const categoryWords = words[category] || [];
    const suggestedWordsElement = document.getElementById('suggestedWords');
    
    if (suggestedWordsElement && categoryWords.length > 0) {
        suggestedWordsElement.innerHTML = categoryWords.map(word => 
            `<span class="word-suggestion" onclick="insertWord('${word}')">${word}</span>`
        ).join(' ');
    }
}

function insertWord(word) {
    const editor = document.getElementById('storyEditor');
    if (!editor) return;
    
    const cursorPos = editor.selectionStart;
    const textBefore = editor.value.substring(0, cursorPos);
    const textAfter = editor.value.substring(cursorPos);
    
    editor.value = textBefore + word + textAfter;
    editor.focus();
    editor.setSelectionRange(cursorPos + word.length, cursorPos + word.length);
}

function saveStory() {
    const editor = document.getElementById('storyEditor');
    if (editor && editor.value.trim()) {
        localStorage.setItem('mundoHistorias_story', editor.value);
        localStorage.setItem('mundoHistorias_storyDate', new Date().toISOString());
        
        // Show confirmation
        const originalText = event.target.innerHTML;
        event.target.innerHTML = '<i class="fas fa-check me-2"></i>Guardado';
        event.target.style.background = '#6c5ce7';
        
        setTimeout(() => {
            event.target.innerHTML = originalText;
            event.target.style.background = '';
        }, 2000);
    }
}

function loadSavedStory() {
    const savedStory = localStorage.getItem('mundoHistorias_story');
    const editor = document.getElementById('storyEditor');
    
    if (savedStory && editor && !editor.value.trim()) {
        editor.value = savedStory;
        // Update stats
        updateStoryStats(savedStory, 
            document.getElementById('storyWordCount'),
            document.getElementById('storyCharCount'),
            document.getElementById('readingTime')
        );
    }
}

// Step 5: Editing Tools
function initializeEditingTools() {
    // Editing tools are interactive through the UI
}

function analyzeStory() {
    const editor = document.getElementById('storyEditor');
    const analysisResults = document.getElementById('analysisResults');
    
    if (!editor || !analysisResults || !editor.value.trim()) {
        analysisResults.innerHTML = '<p class="text-muted">No hay historia para analizar. Escribe algo en el paso anterior.</p>';
        return;
    }
    
    const text = editor.value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    
    // Simple analysis
    const avgWordsPerSentence = words.length / sentences.length;
    const avgSentencesPerParagraph = sentences.length / paragraphs.length;
    
    const suggestions = [];
    
    // Analysis suggestions
    if (avgWordsPerSentence > 20) {
        suggestions.push("⚠️ Tus oraciones son bastante largas (promedio: " + Math.round(avgWordsPerSentence) + " palabras). Considera dividir algunas para mejorar la fluidez.");
    }
    
    if (paragraphs.length === 1 && words.length > 100) {
        suggestions.push("📝 Tu historia tiene un solo párrafo. Considera dividirla para mejorar la legibilidad.");
    }
    
    if (text.includes('muy') || text.includes('mucho')) {
        suggestions.push("✂️ Detecté el uso de 'muy' o 'mucho'. Intenta usar adjetivos o verbos más específicos.");
    }
    
    if (!text.includes('—') && !text.includes('"') && words.length > 50) {
        suggestions.push("💬 Tu historia no parece tener diálogos. Considera agregar algunos para dar vida a los personajes.");
    }
    
    if (suggestions.length === 0) {
        suggestions.push("✨ Tu historia se ve bien estructurada. Revisa la ortografía y considera leerla en voz alta para mejorar el ritmo.");
    }
    
    // Format results
    analysisResults.innerHTML = `
        <div class="analysis-stats mb-3">
            <div class="row text-center">
                <div class="col-4">
                    <strong>${words.length}</strong><br>
                    <small>Palabras</small>
                </div>
                <div class="col-4">
                    <strong>${sentences.length}</strong><br>
                    <small>Oraciones</small>
                </div>
                <div class="col-4">
                    <strong>${paragraphs.length}</strong><br>
                    <small>Párrafos</small>
                </div>
            </div>
        </div>
        <h6>Sugerencias:</h6>
        <ul>
            ${suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
        </ul>
    `;
}

function downloadStory() {
    const editor = document.getElementById('storyEditor');
    if (!editor || !editor.value.trim()) {
        alert('No hay historia para descargar. Escribe algo primero.');
        return;
    }
    
    const story = editor.value;
    const title = prompt('¿Qué título quieres darle a tu historia?', 'Mi Historia');
    const filename = (title || 'Mi Historia').replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.txt';
    
    const fullContent = `${title || 'Mi Historia'}\n${'='.repeat((title || 'Mi Historia').length)}\n\nEscrito con Mundo de Historias\nFecha: ${new Date().toLocaleDateString('es-ES')}\n\n${story}`;
    
    const blob = new Blob([fullContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

function downloadMicrotale() {
    const textarea = document.getElementById('microtaleInput');
    if (!textarea || !textarea.value.trim()) {
        alert('No hay microrrelato para descargar. Escribe algo primero.');
        return;
    }
    
    const microtale = textarea.value;
    const title = prompt('¿Qué título quieres darle a tu microrrelato?', 'Mi Microrrelato');
    const filename = (title || 'Mi Microrrelato').replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.txt';
    
    const wordCount = microtale.trim().split(/\s+/).filter(word => word.length > 0).length;
    const fullContent = `${title || 'Mi Microrrelato'}\n${'='.repeat((title || 'Mi Microrrelato').length)}\n\nMicrorrelato creado con Mundo de Historias\nFecha: ${new Date().toLocaleDateString('es-ES')}\nPalabras: ${wordCount}\n\n${microtale}`;
    
    const blob = new Blob([fullContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

function downloadGuideTemplate(formatType) {
    const templates = {
        'microrrelato': {
            title: 'Plantilla de Microrrelato',
            content: `PLANTILLA DE MICRORRELATO
========================

Creado con Mundo de Historias
Fecha: ${new Date().toLocaleDateString('es-ES')}

ESTRUCTURA BÁSICA:
1. Situación inicial (1-2 líneas)
2. Elemento perturbador
3. Revelación/Twist final

CONSEJOS:
- Máximo 300 palabras
- Cada palabra debe ser necesaria
- Final sorprendente
- Comienza in media res

TU MICRORRELATO:
________________

[Escribe aquí tu microrrelato]

________________

ANÁLISIS DE TU TRABAJO:
- Palabras utilizadas: ___
- ¿Tiene un final sorprendente? ___
- ¿Cada palabra es necesaria? ___`
        },
        'cuento': {
            title: 'Plantilla de Cuento',
            content: `PLANTILLA DE CUENTO
==================

Creado con Mundo de Historias
Fecha: ${new Date().toLocaleDateString('es-ES')}

ESTRUCTURA:
1. Presentación (personajes y situación)
2. Nudo (conflicto principal)
3. Clímax (momento de mayor tensión)
4. Desenlace (resolución)

ELEMENTOS CLAVE:
- Personajes: _______________
- Lugar: ___________________
- Tiempo: __________________
- Conflicto: ________________

TU CUENTO:
__________

[Escribe aquí tu cuento]

__________`
        }
    };
    
    const template = templates[formatType] || templates['microrrelato'];
    const filename = template.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.txt';
    
    const blob = new Blob([template.content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

function shareStory() {
    const editor = document.getElementById('storyEditor');
    if (!editor || !editor.value.trim()) {
        alert('No hay historia para compartir. Escribe algo primero.');
        return;
    }
    
    if (navigator.share) {
        navigator.share({
            title: 'Mi historia creada con Mundo de Historias',
            text: editor.value.substring(0, 200) + (editor.value.length > 200 ? '...' : ''),
            url: window.location.origin
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(editor.value).then(() => {
            alert('Historia copiada al portapapeles. ¡Ahora puedes pegarla donde quieras!');
        });
    }
}

function startNewStory() {
    if (confirm('¿Estás seguro de que quieres comenzar una nueva historia? Los cambios no guardados se perderán.')) {
        // Clear all form data
        document.querySelectorAll('input, textarea').forEach(element => {
            if (element.type !== 'button' && element.type !== 'submit') {
                element.value = '';
            }
        });
        
        // Clear selections
        document.querySelectorAll('.selected').forEach(element => {
            element.classList.remove('selected');
        });
        
        // Reset to step 1
        currentStep = 1;
        updateStepDisplay();
        updateProgress();
        
        // Clear localStorage
        localStorage.removeItem('mundoHistorias_story');
        localStorage.removeItem('mundoHistorias_storyDate');
        
        alert('¡Listo para una nueva aventura literaria!');
    }
}

function completeGuide() {
    const celebration = `
        <div class="text-center">
            <h2>🎉 ¡Felicitaciones! 🎉</h2>
            <p>Has completado tu historia usando la Guía Interactiva.</p>
            <p>¡Eres oficialmente un creador de historias!</p>
            <div class="mt-4">
                <button class="btn btn-primary me-2" onclick="downloadStory()">
                    <i class="fas fa-download me-2"></i>Descargar Historia
                </button>
                <button class="btn btn-success" onclick="startNewStory()">
                    <i class="fas fa-plus me-2"></i>Crear Otra Historia
                </button>
            </div>
        </div>
    `;
    
    const modalHtml = `
        <div class="modal fade" id="completionModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        ${celebration}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('completionModal'));
    modal.show();
    
    // Remove modal after closing
    document.getElementById('completionModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

// Common scroll and animation effects
function initializeScrollEffects() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.feature-card, .format-card, .technique-card, .content-card').forEach(card => {
        observer.observe(card);
    });
}

function initializeAnimations() {
    // Add subtle animations to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Utility functions
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

// Export functions for global access
window.generateNewPrompt = generateNewPrompt;
window.generateWhatIf = generateWhatIf;
window.generateSituation = generateSituation;
window.generateFirstLine = generateFirstLine;
window.showFormatDetails = showFormatDetails;
window.tryFormat = tryFormat;
window.nextStep = nextStep;
window.previousStep = previousStep;
window.selectTrait = selectTrait;
window.selectStructure = selectStructure;
window.insertTemplate = insertTemplate;
window.suggestWords = suggestWords;
window.insertWord = insertWord;
window.saveStory = saveStory;
window.analyzeStory = analyzeStory;
window.downloadStory = downloadStory;
window.shareStory = shareStory;
window.startNewStory = startNewStory;
window.completeGuide = completeGuide;

console.log('🌟 Mundo de Historias cargado correctamente');
