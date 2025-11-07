import './style.css';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "ServiceDesk система",
      period: "Август 2025 — настоящее время",
      description: "Fullstack разработка аналога ServiceDesk системы, приобретенной промышленной компанией",
      technologies: ["React", "TypeScript", "Go", "PostgreSQL", "WebHook", "Zustand", "TanStack Query"],
      achievements: [
        "Разработал frontend с нуля на React + TypeScript",
        "Реализовал систему ролей и прав доступа 3+ уровня",
        "Оптимизировал производительность: снизил перерисовки на 40%",
        "Настроил кэширование и синхронизацию данных с бэкендом",
        "Разработал бэкенд на Go с использованием WebHook",
        "Спроектировал и настроил PostgreSQL базу данных"
      ],
      githubUrl: "https://github.com/GazizX",
      status: "В процессе"
    },
    {
      id: 2,
      title: "Система бронирования офисов",
      period: "Июль 2025 — Сентябрь 2025",
      description: "Сервис бронирования объектов для офисов с микросервисной архитектурой",
      technologies: ["React", "TypeScript", "Zustand", "Leaflet", "Recharts.js", "Cypress"],
      achievements: [
        "Работал в команде над проектом с микросервисной архитектурой",
        "Разработал 3+ функциональных модуля на React + TypeScript",
        "Реализовал систему авторизации и защищенные маршруты",
        "Настроил управление состоянием приложения (Zustand)",
        "Оптимизировал загрузку интерфейса с помощью Lazy loading",
        "Создал интерактивные дашборды с графиками и картами",
        "Настроил CI/CD пайплайны с автоматическим тестированием"
      ],
      githubUrl: "https://github.com/GazizX",
      status: "Завершен"
    },
    {
      id: 3,
      title: "Система приема заявок СПБПУ",
      period: "Сентябрь 2024 — Май 2025",
      description: "Сервис приема и обработки заявок для студентов и администрации университета",
      technologies: ["Go", "Telegram Bot API", "React", "TypeScript", "PostgreSQL", "LLM"],
      achievements: [
        "Разработал Telegram-бота для автоматизации подачи заявок",
        "Настроил классификацию заявок с помощью LLM",
        "Спроектировал и администрировал PostgreSQL базу данных",
        "Создал интерактивную страницу с дашбордом заявок",
        "Реализовал визуализацию данных с Recharts.js"
      ],
      githubUrl: "https://github.com/GazizX/PolytechSupport",
      status: "Завершен"
    },
    {
      id: 4,
      title: "Сервис конвертации файлов EESTEC",
      period: "2024",
      description: "Международный проект по разработке сервиса конвертации файлов с зарубежными университетами",
      technologies: ["Go", "Python", "React", "TypeScript", "Docker", "gRPC"],
      achievements: [
        "Спроектировал микросервисную архитектуру на Go и Python",
        "Разработал frontend на React + TypeScript с адаптивным интерфейсом",
        "Интегрировал gRPC API для коммуникации между сервисами",
        "Настроил контейнеризацию всех сервисов с помощью Docker",
        "Написал unit-тесты для ключевых модулей",
        "Работал в международной команде на английском языке"
      ],
      githubUrl: "https://github.com/GazizX/pdf-to-txt-converter",
      status: "Завершен"
    }
  ];

  return (
    <div className="projects-page">
      <div className="page-header">
        <h2>Мои проекты</h2>
        <p className="page-subtitle">Реализованные решения и коммерческие проекты</p>
      </div>
      
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-period">{project.period}</span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              <h4>Технологии:</h4>
              <div className="tech-tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-achievements">
              <h4>Достижения:</h4>
              <ul>
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-footer">
              <span className={`project-status ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
              <a href={project.githubUrl} className="github-link" target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}