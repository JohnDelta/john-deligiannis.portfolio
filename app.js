// ===== UTILITIES =====
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// ===== SIMPLE CLAMP (pixel height) =====
const DESC_MAX_PX = 140;

function setupClamp(desc){
  desc.style.setProperty('--desc-max', `${DESC_MAX_PX}px`);
  const needs = desc.scrollHeight > DESC_MAX_PX;
  let toggle = desc.nextElementSibling && desc.nextElementSibling.classList?.contains('more-link')
    ? desc.nextElementSibling : null;
  if (needs){
    desc.classList.add('clamped');
    if (!toggle){
      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'more-link mb-3';
      toggle.textContent = 'More';
      toggle.addEventListener('click', () => {
        const expanded = desc.classList.toggle('expanded');
        desc.classList.toggle('clamped', !expanded);
        toggle.textContent = expanded ? 'Less' : 'More';
      });
      desc.insertAdjacentElement('afterend', toggle);
    }
  } else {
    desc.classList.remove('clamped','expanded');
    if (toggle) toggle.remove();
  }
}

function clampAll(root = document){
  root.querySelectorAll('.card-desc').forEach(setupClamp);
}

// ===== PROJECT CARD =====

const IMAGES_PATH = './assets/images';

function projectImages(p) {
  // Fallback to placeholder if missing/empty
  return (p && Array.isArray(p.images) && p.images.length)
    ? p.images
    : ['placeholder_0.png'];
}

function createProjectCard(p, section){
  const col = document.createElement('div');
  col.className = 'col';

  const codeBtn = p.sourceLink
    ? `<a class="btn btn-sm btn-outline-light" href="${p.sourceLink}" target="_blank" rel="noopener"><i class="fa-solid fa-code me-2"></i>Code</a>`
    : `<button class="btn btn-sm btn-outline-light" disabled><i class="fa-solid fa-code me-2"></i>Code</button>`;

  const demoBtn = p.viewLink
    ? `<a class="btn btn-sm btn-outline-light" href="${p.viewLink}" target="_blank" rel="noopener"><i class="fa-solid fa-play me-2"></i>Demo</a>`
    : `<button class="btn btn-sm btn-outline-light" disabled style="opacity:.6"><i class="fa-solid fa-play me-2"></i>Demo</button>`;

  const tags = (p.utilized || []).map(t => `<span class="tag">${t}</span>`).join('');
  const images = projectImages(p);
  const firstImg = IMAGES_PATH + '/' + images[0];

  col.innerHTML = `
    <div class="card h-100 card-float">
      <img class="card-img-top gallery-thumb" src="${firstImg}" alt="${p.title} preview" loading="lazy">
      <div class="card-body d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <h5 class="card-title mb-0">${p.title}</h5>
          <div class="project-badges">
            ${section === 'recent' ? '<span class="badge text-bg-info">Recent</span>' : '<span class="badge text-bg-secondary">Legacy</span>'}
          </div>
        </div>
        <p class="card-text muted card-desc" style="white-space:pre-line">${p.description || ''}</p>
        <div class="mt-auto">
          <div class="mb-3">${tags}</div>
          <div class="d-flex gap-2">
            ${codeBtn}
            ${demoBtn}
          </div>
        </div>
      </div>
    </div>
  `;

  col.querySelector('.gallery-thumb').addEventListener('click', () => openGallery(p));
  return col;
}

// ===== RENDERERS =====
function renderProjects(){
  const recentWrap  = $('#recentGrid');
  const backlogWrap = $('#backlogGrid');
  recentWrap.innerHTML  = '';
  backlogWrap.innerHTML = '';
  CURRENT_PROJECTS.forEach(p => recentWrap.appendChild(createProjectCard(p, 'recent')));
  BACKLOG_PROJECTS.forEach(p => backlogWrap.appendChild(createProjectCard(p, 'backlog')));
  // clamp visible section now (recent grid)
  clampAll(recentWrap);
  // if backlog is already visible (has 'show'), clamp it; otherwise, wait for collapse event
  const backlogCollapse = $('#backlogGridWrap');
  if (backlogCollapse?.classList.contains('show')) {
    clampAll(backlogCollapse);
  } else if (backlogCollapse) {
    backlogCollapse.addEventListener('shown.bs.collapse', () => {
      // run after layout
      requestAnimationFrame(() => clampAll(backlogCollapse));
    });
  }
}

function applyFilter(buttonLocator, cardId, kind){
  const cards = $$('#' + cardId + ' .card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.parentElement.style.display = (kind === 'all' || text.includes(kind)) ? '' : 'none';
  });
  $$(buttonLocator).forEach(b => b.classList.toggle('active', b.dataset.filter === kind));
  // re-evaluate clamps in the recent grid after filtering
  clampAll($('#' + cardId));
}

// ===== GALLERY =====
let galleryState = { project: null, index: 0 };

function openGallery(project){
  galleryState.project = project;
  galleryState.index = 0;
  $('#galleryTitle').textContent = project.title;
  updateGalleryImage();
  new bootstrap.Modal($('#galleryModal')).show();
}

function updateGalleryImage(){
  const p = galleryState.project;
  const images = projectImages(p);
  const count = images.length;

  // clamp index
  galleryState.index = Math.max(0, Math.min(galleryState.index, count - 1));
  const idx = galleryState.index;

  $('#galleryImg').src = IMAGES_PATH + '/' + images[idx];
  $('#galleryCounter').textContent = `${idx + 1} / ${count}`;
  $('#prevImg').disabled = (idx === 0);
  $('#nextImg').disabled = (idx >= count - 1);
}

$('#prevImg').addEventListener('click', () => {
  galleryState.index = Math.max(0, galleryState.index - 1);
  updateGalleryImage();
});

$('#nextImg').addEventListener('click', () => {
  const count = projectImages(galleryState.project).length;
  galleryState.index = Math.min(count - 1, galleryState.index + 1);
  updateGalleryImage();
});

// ===== EVENTS =====

$$('.recent-filter-btns .btn').forEach(btn => {
  btn.addEventListener('click', () => applyFilter('.recent-filter-btns .btn', 'recentGrid', btn.dataset.filter));
});

$$('.backlog-filter-btns .btn').forEach(btn => {
  btn.addEventListener('click', () => applyFilter('.backlog-filter-btns .btn', 'backlogGrid', btn.dataset.filter));
});

// year
$('#year').textContent = new Date().getFullYear();

// ===== EXPERIENCE DATA & RENDERER =====
const EXPERIENCE = [
  {
    employer: "Dataverse Ltd. | Athens, Greece",
    role: "Software Engineer",
    when: "Mar 2023 – Present",
    bullets: [
      "Worked across a diverse stack, including <strong>.NET Framework (4.x & 8.x), ASP.NET (MVC, Razor Pages), JavaScript, CSS, HTML, SQL Server, MongoDB, RabbitMQ, Angular (v9 & v19)</strong>.",
      "Resolved a wide range of <strong>bugs and development tasks</strong> across multiple systems, often <strong>taking ownership</strong> of tasks with minimal initial analysis and delivering effective solutions <strong>under tight deadlines</strong>.",
      "Delivered <strong>client-critical fixes</strong> and managed <strong>hotfix deployments</strong>, balancing speed with reliability.",
      "Contributed to <strong>monolithic MVC systems</strong>, <strong>API-driven microservices</strong>, and <strong>Angular web applications</strong>, applying <strong>Domain-Driven Design (DDD)</strong> and key software design patterns to ensure clean, scalable, and maintainable architecture.",
      "Developed Angular front-ends from <strong>Figma UI designs</strong>, ensuring visual accuracy and consistency using <strong>Angular Material</strong> and modular component structure.",
      "Created <strong>data migration tools</strong> to import and transform data from external files or databases into the system’s main database."
    ],
    tags: ["C#", ".NET 4.x/8.x", "ASP.NET MVC", "Razor Pages", "Angular 9/19", "Angular Material", "SQL Server", "MongoDB", "RabbitMQ", "EF/EF Core", "LINQ", "Git"]
  },
  {
    employer: "Hellenic Armed Forces | Dept. of Informatics & Research",
    role: "IT Support Technician | Call Center Dispatcher",
    when: "Mar 2022 - Jan 2023",
    bullets: [
      "Completed <strong>mandatory military service</strong> while providing <strong>technical IT support</strong> to internal departments."
    ],
    tags: ["IT Support", "Helpdesk"]
  },
  {
    employer: "Megaventory Inc. | Athens, Greece",
    role: "Software Engineer",
    when: "Dec 2020 – Oct 2021",
    bullets: [
      "Contributed to the <strong>analysis, design, and development</strong> of projects within the company’s internal systems.",
      "Resolved a variety of <strong>backlog issues</strong> across all layers of the application stack, with a focus on <strong>code refactoring</strong> and cleanup aligned with clean code and SOLID principles.",
      "<strong>Redesigned and refactored key components</strong> of the application's user interface, implementing <strong>modern design approaches</strong> and enhancing usability with additional utilities.",
      "Conducted <strong>code reviews and pull request analysis</strong>, ensuring code quality and adherence to best practices.",
      "Provided <strong>technical support</strong> to customers by analyzing reported issues, <strong>debugging</strong> the application, and delivering effective resolutions."
    ],
    tags: [".NET 4.x", "VB.NET", "ASP.NET Web Forms", "Entity Framework", "SQL Server", "DevExpress", "JavaScript", "jQuery", "HTML", "CSS", "Git/GitHub"]
  }
];

function renderExperience(){
  const wrap = document.getElementById('experienceTimeline');
  if (!wrap) return;
  wrap.innerHTML = '';
  EXPERIENCE.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    const bullets = item.bullets.map(b => `<li>${b}</li>`).join('');
    const tags = (item.tags||[]).map(t => `<span class="tag">${t}</span>`).join('');
    el.innerHTML = `
      <div class="card p-3">
        <div class="d-flex justify-content-between flex-wrap gap-2">
          <div>
            <div class="employer">${item.employer}</div>
            <div class="role">${item.role}</div>
          </div>
          <div class="when">${item.when}</div>
        </div>
        ${bullets ? `<ul class="mt-2 mb-2 muted">${bullets}</ul>` : ''}
        ${tags ? `<div class="d-flex flex-wrap gap-2">${tags}</div>` : ''}
      </div>
    `;
    wrap.appendChild(el);
  });

  // Roadmap (right column)
  const chips = document.getElementById('roadmapChips');
  const tags1 = document.getElementById('roadmapTags_tags1'); 
  const tags2 = document.getElementById('roadmapTags_tags2');
  if (chips){
    chips.innerHTML = `
      <span class="chip">2020–2021 • Megaventory</span>
      <span class="chip">Mar 2022 • Military (fulfilled)</span>
      <span class="chip">2023–Now • Dataverse</span>
    `;
  }
  if (tags1){
    tags1.innerHTML = `
      <span class="tag">.NET (4.x, 8.x)</span>
      <span class="tag">ASP.NET</span>
      <span class="tag">C#</span>
      <span class="tag">NoSQL</span>
      <span class="tag">SQL</span>
      <span class="tag">Javascript</span>
      <span class="tag">TypeScript</span>
      <span class="tag">Angular (v9, v19)</span>
    `;
  }
  if (tags2) {
    tags2.innerHTML = `
      <span class="tag">MVC</span>
      <span class="tag">SOLID</span>
      <span class="tag">DDD</span>
      <span class="tag">Clean Code</span>
    `;
  }
}

const CURRENT_PROJECTS = [
  {
    "title": "Atlas Bake - Smart Texture Baker",
    "name": "atlas_bake",
    "images": [
      "atlas_bake_0.gif",
      "atlas_bake_1.png",
      "atlas_bake_2.png",
      "atlas_bake_3.png",
      "atlas_bake_4.png"
    ],
    "sourceLink": "https://github.com/JohnDelta/atlas_bake_documentation",
    "viewLink": "",
    "description": `A Blender add-on that automates baking passes (Base Color, Metallic, Roughness, Normals, AO),
packed outputs (e.g., Metallic+Smoothness), and export for game engines.
\nBuilt for reliability: resumable jobs, logs, and clear UX.`,
    "utilized": ["Python", "Blender API", "Bake Texture", "Add-on"]
  }
];

const BACKLOG_PROJECTS = [
  {
    "title" : "Junior Workers",
    "name": "junior-workers",
    "images" : [
      "junior-workers_0.jpg",
      "junior-workers_1.jpg",
      "junior-workers_2.jpg",
      "junior-workers_3.jpg",
      "junior-workers_4.jpg",
      "junior-workers_5.jpg",
      "junior-workers_6.jpg",
      "junior-workers_7.jpg",
      "junior-workers_8.jpg"
    ],
    "sourceLink" : "https://github.com/JohnDelta/junior-workers",
    "viewLink" : "",
    "description" : `Junior Workers is a concept project of a professional networking web app platform used by undergraduate/postgraduate students and hirers. The main goal of the platform is to help both students and hirers cover their job search needs. Students can create their personal profiles and upload their CVs. Also, they can search job posts created by hirers. Hirers can search for students based on the position requirements they want to cover and create job posts to let students communicate with them.
\nFor this project, I:
- Developed REST API controllers utilizing CRUD functions with Java (JAXRS-Jersey)
- Applied JWT to ensure authentication
- Developed a web application using React to handle the users' views
- Utilized react-router for asynchronous routing through the web application
- Designed normalized relational database`,
    "utilized" : ["RESTful API", "Java", "Maven", "MySQL", "Web App", "React","Javascript","HTML5","CSS"]
  },
  {
    "title": "Gym Equipment",
    "name": "gymequipment",
    "images": [
      "gymequipment_0.jpg",
      "gymequipment_1.jpg",
      "gymequipment_2.jpg",
      "gymequipment_3.jpg",
      "gymequipment_4.jpg",
      "gymequipment_5.jpg",
      "gymequipment_6.jpg",
      "gymequipment_7.jpg",
      "gymequipment_8.jpg",
      "gymequipment_9.jpg",
      "gymequipment_10.jpg",
      "gymequipment_11.jpg"
    ],
    "sourceLink": "https://github.com/JohnDelta/gym_equipment",
    "viewLink": "",
    "description": `Concept e-shop for gym equipment with Spring MVC, JPA/Hibernate, JSP views.`,
    "utilized": ["Spring MVC", "Java", "JPA", "Hibernate", "MySQL", "JSTL"]
  },
  {
    "title": "9laugh",
    "name": "9laugh",
    "images": [
      "9laugh_0.jpg",
      "9laugh_1.jpg",
      "9laugh_2.jpg",
      "9laugh_3.jpg",
      "9laugh_4.jpg",
      "9laugh_5.jpg",
      "9laugh_6.jpg",
      "9laugh_7.jpg",
      "9laugh_8.jpg",
      "9laugh_9.jpg",
      "9laugh_10.jpg",
      "9laugh_11.jpg",
      "9laugh_12.jpg"
    ],
    "sourceLink": "https://github.com/JohnDelta/9laugh_webapp",
    "viewLink": "",
    "description": `Entertainment platform (9gag-like) with Spring Boot REST API, JWT auth and React client.`,
    "utilized": ["Spring Boot", "JWT", "REST API", "React", "MySQL", "Maven"]
  },
  {
    "title": "Examination Centers",
    "name": "examinationcenters",
    "images": [
      "examinationcenters_0.jpg", 
      "examinationcenters_1.jpg", 
      "examinationcenters_2.jpg", 
      "examinationcenters_3.jpg", 
      "examinationcenters_4.jpg", 
      "examinationcenters_5.jpg", 
      "examinationcenters_6.jpg", 
      "examinationcenters_7.jpg", 
      "examinationcenters_8.jpg", 
      "examinationcenters_9.jpg", 
      "examinationcenters_10.jpg", 
      "examinationcenters_11.jpg", 
      "examinationcenters_12.jpg", 
      "examinationcenters_13.jpg", 
      "examinationcenters_14.jpg", 
      "examinationcenters_15.jpg", 
      "examinationcenters_16.jpg", 
      "examinationcenters_17.jpg"
    ],
    "sourceLink": "https://github.com/JohnDelta/ExaminationCenters",
    "viewLink": "",
    "description": `Online examination system with roles (Admin/Supervisor/Student), results, and Excel imports.`,
    "utilized": ["Java", "RESTful", "JSP", "Servlet", "Swing", "MySQL"]
  },
  {
    "title": "Ticket Support System",
    "name": "issues",
    "images": [
      "issues_0.jpg", 
      "issues_1.jpg", 
      "issues_2.jpg", 
      "issues_3.jpg"
    ],
    "sourceLink": "https://github.com/JohnDelta/Issues",
    "viewLink": "",
    "description": `Simple ticketing app for internal issue reporting and triage.`,
    "utilized": ["PHP", "MySQL", "Bootstrap", "HTML5", "CSS", "JS"]
  },
  {
    "title": "Lab Exchanges",
    "name": "lab-exchange",
    "images": [
      "lab-exchange_0.jpg", 
      "lab-exchange_1.jpg", 
      "lab-exchange_2.jpg", 
      "lab-exchange_3.jpg", 
      "lab-exchange_4.jpg", 
      "lab-exchange_5.jpg"
    ],
    "sourceLink": "https://github.com/JohnDelta/LabExchange_WebApplication",
    "viewLink": "",
    "description": `Cloud-native lab enrollment app with microservices (Spring Boot), React UI, MongoDB, RabbitMQ; Docker/Kubernetes deploys.`,
    "utilized": ["React", "Spring Boot", "MongoDB", "RabbitMQ", "Docker", "Kubernetes"]
  },
  {
    "title": "Biriba Notes",
    "name": "biriba-notes",
    "images": [
      "biriba-notes_0.jpg", 
      "biriba-notes_1.jpg", 
      "biriba-notes_2.jpg", 
      "biriba-notes_3.jpg"
    ],
    "sourceLink": "https://github.com/JohnDelta/biriba",
    "viewLink": "https://johndelta.github.io/biriba",
    "description": `React app to keep scores for the “Biriba” card game; uses Google Drive API for persistence.`,
    "utilized": ["React", "Google Drive API", "HTML5", "CSS"]
  },
  {
    "title": "Pomodoro Clock",
    "name": "pomodoro-clock",
    "images": [
      "pomodoro-clock_0.jpg", 
      "pomodoro-clock_1.jpg"
    ],
    "sourceLink": "https://github.com/JohnDelta/pomodoro-clock",
    "viewLink": "https://johndelta.github.io/pomodoro-clock",
    "description": `Responsive Pomodoro clock built in React with adjustable break lengths.`,
    "utilized": ["React", "HTML5", "CSS"]
  }
];

mailJsSetup = () => {
  emailjs.init({ publicKey: "_Tnn0nvaK0_xhVrhy" });
  const form = document.getElementById('contact-form');
  const btn  = document.getElementById('send-btn');
  const statusEl = document.getElementById('form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true; 
    statusEl.textContent = 'Sending…';
    try {
      await emailjs.sendForm('service_eigu1au', 'template_hrahja3', '#contact-form');
      form.reset();
      statusEl.textContent = 'Thanks! Your message was sent.';
    } catch (err) {
      console.error(err);
      statusEl.textContent = 'Something went wrong. Please try again.';
    } finally {
      btn.disabled = false;
    }
  });
};

// boot
renderProjects();
renderExperience();
mailJsSetup();
applyFilter('.recent-filter-btns .btn', 'recentGrid', 'all');
applyFilter('.backlog-filter-btns .btn', 'backlogGrid', 'all');

window.addEventListener('resize', (() => {
  let t; return () => { clearTimeout(t); t = setTimeout(() => clampAll(document), 120); };
})());
