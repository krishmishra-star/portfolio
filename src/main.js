import './styles/index.css';
import { projects } from './data/projects.js';

// Simple HTML escaping to avoid injection when rendering strings
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Render project entries dynamically into the DOM
function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container) return;

  const html = projects
    .map((project) => {
      const isLive = project.status === 'live';
      
      const liveLink = project.liveUrl
        ? `<a href="${project.liveUrl}" class="project-link project-link--primary" target="_blank" rel="noopener">Live demo <span aria-hidden="true">&nearr;</span></a>`
        : '';
        
      const repoLink = project.repoUrl
        ? `<a href="${project.repoUrl}" class="project-link project-link--secondary" target="_blank" rel="noopener">GitHub repo <span aria-hidden="true">&nearr;</span></a>`
        : '';

      const screenshotMarkup = project.screenshot
        ? `<div class="project-card__screenshot-wrapper">
             <img src="${project.screenshot}" alt="Screenshot of ${escapeHtml(project.title)}" class="project-card__screenshot" loading="lazy" width="800" height="450" />
           </div>`
        : '';

      return `
        <article class="project-card" id="project-${project.number}">
          <div class="project-card__top">
            <span class="outlined-num">${escapeHtml(project.number)}</span>
            <span class="project-card__status-tag project-card__status-tag--${isLive ? 'live' : 'code'}">
              ${escapeHtml(project.status)}
            </span>
          </div>

          <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
          <div class="project-card__hook">${escapeHtml(project.hook)}</div>
          <p class="project-card__description">${escapeHtml(project.description)}</p>
          <div class="project-card__stack font-mono">${escapeHtml(project.stack)}</div>
          
          <div class="project-card__note">
            <span class="project-card__note-label">note:</span>
            ${escapeHtml(project.note)}
          </div>

          <div class="project-card__actions">
            ${liveLink}
            ${repoLink}
          </div>

          ${screenshotMarkup}
        </article>
      `;
    })
    .join('');

  container.innerHTML = html;
}

// Subtle scroll reveal using IntersectionObserver (runs once per section)
function initScrollObserver() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll('.reveal-on-scroll');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target); // Trigger once only
        }
      });
    },
    {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    }
  );

  elements.forEach((el) => observer.observe(el));
}

// Initialise the application immediately or on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initScrollObserver();
  });
} else {
  renderProjects();
  initScrollObserver();
}

