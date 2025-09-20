import { Link } from "react-router-dom";
import './style.css'
export default function MainPage() {
    return (
        <>
            <header>
                <h1>Сайт для курсовой</h1>
                <nav>
                    <ul>
                        <li><Link className="nav_link" to="/content">Content</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}