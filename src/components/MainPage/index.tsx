import { Link } from "react-router-dom";
import './style.css'
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
        </>
    )
}