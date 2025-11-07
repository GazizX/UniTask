import { Link } from "react-router-dom";
import './style.css';
import serviceDeskPath from '../../assets/servicedesk.png'
import bookingsPath from '../../assets/bookings.png'
import goblinPath from '../../assets/me.png'
export default function MainPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Fullstack-разработчик & Goblin Core Enjoyer</h2>
          <p>Превращаю сложные задачи в элегантные цифровые решения</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Проекта</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Корпоративных решения</span>
            </div>
            <div className="stat">
              <span className="stat-number">19</span>
              <span className="stat-label">Лет</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="about-card">
          <h3>Опыт в технологиях</h3>
          <img src={goblinPath} alt="Goblin" height={180}/>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Redux</span>
            <span className="tech-tag">Go</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">Node.js</span>
          </div>
          <Link to="/about" className="cta-button">Узнать больше</Link>
        </div>
      </section>

      <section className="recent-projects">
        <h3>Последние проекты</h3>
        <div className="projects-preview">
          <div className="project-preview-card">
            <h4>ServiceDesk система</h4>
            <img src={serviceDeskPath} alt="ServiceDesk" height={180}/>
            <p>Fullstack разработка системы для промышленной компании</p>
            <Link to="/projects" className="project-link">Подробнее</Link>
          </div>
          <div className="project-preview-card">
            <h4>Система бронирования</h4>
            <img src={bookingsPath} alt="Bookings" height={180}/>
            <p>Сервис бронирования офисов с микросервисной архитектурой</p>
            <Link to="/projects" className="project-link">Подробнее</Link>
          </div>
        </div>
      </section>
    </>
  );
}