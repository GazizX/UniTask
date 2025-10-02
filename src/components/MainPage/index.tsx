import { Link } from "react-router-dom";
import './style.css'
import avatarPath from '../../assets/avatar.jpg'
export default function MainPage() {
    return (
        <>
            <header>
                <h1>Сайт для курсовой</h1>
                <nav>
                    <ul className="nav_list">
                        <li><Link className="nav_link" to="/task1">Задание 1</Link></li>
                        <li><Link className="nav_link" to="/task2">Задание 2</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="about">
                    <img 
                        src={avatarPath} 
                        alt="Гоблин-аватар" 
                        className="about_img"
                    />
                    <div className="about_text">
                        <h2>Хасанов Газиз</h2>
                        <p>🎓 Студент 3 курса</p>
                        <p>📍 СПБПУ им. Петра Великого</p>
                        <p>💻 Fullstack-разработчик</p>
                    </div>
                </section>
            </main>
        </>
    )
}
