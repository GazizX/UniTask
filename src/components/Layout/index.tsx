import { Link, Outlet } from "react-router-dom";
import './style.css';

export default function Layout() {
  return (
    <div className="layout">
      <header>
        <div className="header-content">
          <div className="logo"></div>
          <h1>Газиз Хасанов CV</h1>
          <nav>
            <ul className="nav_list">
              <li><Link className="nav_link" to="/">Главная</Link></li>
              <li><Link className="nav_link" to="/tasks">Задания</Link></li>
              <li><Link className="nav_link" to="/projects">Проекты</Link></li>
              <li><Link className="nav_link" to="/about">Обо мне</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 Газиз Хасанов. Все права защищены.</p>
          <div className="footer-links">
            <a href="mailto:hasanov.gaziz.work@gmail.com" target="_blank">Email</a>
            <a href="https://github.com/GazizX" target="_blank">GitHub</a>
            <a href="https://t.me/whtlts3" target="_blank">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}