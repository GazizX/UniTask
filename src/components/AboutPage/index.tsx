import './style.css';
import avatarPath from '../../assets/portrait2.png'
export function AboutPage() {
  const skills = {
    frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Redux", "Zustand", "TanStack Query"],
    backend: ["Go", "Node.js", "Python", "PostgreSQL", "Docker", "gRPC"],
    tools: ["Git", "Cypress", "Jest", "Figma", "NextJS", "Vite"],
    languages: ["Русский (родной)", "Английский (B2)", "Татарский (B1)"]
  };

  const experience = [
    {
      period: "Август 2025 — настоящее время",
      position: "Fullstack-разработчик",
      company: "Стартап 'Аналог ServiceDesk'",
      achievements: [
        "Разработал с нуля frontend для ServiceDesk-системы",
        "Создал интуитивный интерфейс для управления пакетами на Chakra UI",
        "Реализовал систему ролей и прав доступа через React Router v7",
        "Оптимизировал производительность: снизил перерисовки на 40%",
        "Настроил эффективное кэширование и синхронизацию данных",
        "Разработал бэкенд на Go с использованием WebHook",
        "Спроектировал и настроил PostgreSQL базу данных"
      ]
    },
    {
      period: "Июль 2025 — Сентябрь 2025",
      position: "Fullstack-разработчик",
      company: "Система бронирования Т1",
      achievements: [
        "Разработал сервис бронирования объектов для офисов",
        "Работал в команде над проектом с микросервисной архитектурой",
        "Реализовал более 3 функциональных модулей на React + TypeScript",
        "Настроил управление состоянием приложения (Zustand)",
        "Оптимизировал загрузку интерфейса с помощью Lazy loading",
        "Разработал интерактивные дашборды с графиками и картами",
        "Настроил CI/CD пайплайны для автоматического тестирования"
      ]
    },
    {
      period: "Сентябрь 2024 — Май 2025",
      position: "Fullstack-разработчик",
      company: "СПБПУ им. Петра Великого",
      achievements: [
        "Разработал сервис приема и обработки заявок для студентов",
        "Реализовал Telegram-бота для автоматизации подачи заявок",
        "Настроил классификацию заявок с помощью LLM",
        "Спроектировал и администрировал PostgreSQL базу данных",
        "Разработал интерактивную страницу с дашбордом заявок"
      ]
    }
  ];

  const education = [
    {
      institution: "СПБПУ им. Петра Великого",
      degree: "Бакалавр прикладной информатики",
      period: "2023 — 2027",
      faculty: "Институт компьютерных наук и кибербезопасности"
    }
  ];

  const courses = [
    { provider: "VK Education", name: "Frontend-разработка", year: "2024" },
    { provider: "VK Education", name: "Разработка микросервисов на Golang", year: "2025" },
    { provider: "T1", name: "ИT-Лагерь", year: "2025" },
    { provider: "VK Education", name: "Бизнес-аналитика", year: "2025" }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <img src={avatarPath} alt="Avatar" height={280}/>
        <h2>Газиз Хасанов</h2>
        <p className="subtitle">Fullstack-разработчик • 19 лет • Санкт-Петербург</p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">4+</span>
            <span className="stat-label">коммерческих проекта</span>
          </div>
          <div className="stat">
            <span className="stat-number">2</span>
            <span className="stat-label">корпоративных решения</span>
          </div>
          <div className="stat">
            <span className="stat-number">1</span>
            <span className="stat-label">проданный кейс</span>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h3>Опыт работы</h3>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="timeline-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h4>{exp.position}</h4>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="company">{exp.company}</p>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h3>Навыки и технологии</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skills-list">
              {skills.frontend.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <div className="skills-list">
              {skills.backend.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Инструменты</h4>
            <div className="skills-list">
              {skills.tools.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Языки</h4>
            <div className="skills-list">
              {skills.languages.map(lang => (
                <span key={lang} className="skill-tag language">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h3>Образование</h3>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h4>{edu.institution}</h4>
            <p className="degree">{edu.degree}</p>
            <p className="faculty">{edu.faculty}</p>
            <span className="education-period">{edu.period}</span>
          </div>
        ))}
      </section>

      <section className="about-section">
        <h3>Курсы и сертификаты</h3>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-item">
              <h5>{course.name}</h5>
              <p>{course.provider}</p>
              <span className="course-year">{course.year}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h3>Достижения</h3>
        <div className="achievements-list">
          <div className="achievement-item">
            <h4>🎓 Стипендиат Альфа-Банка</h4>
            <p>Получатель стипендии за академические успехи и достижения в IT</p>
          </div>
          <div className="achievement-item">
            <h4>🌍 Международный опыт</h4>
            <p>Участие в проектах с зарубежными командами, коммуникация на английском языке</p>
          </div>
          <div className="achievement-item">
            <h4>👨‍💻 Лидерский опыт</h4>
            <p>Организация хакатонов и образовательных интенсивов для студентов</p>
          </div>
        </div>
      </section>
    </div>
  );
}