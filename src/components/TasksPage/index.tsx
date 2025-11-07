// components/TasksPage/TasksPage.jsx
import { Link } from "react-router-dom";
import './style.css';

export default function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: "Задание 1",
      subtitle: "CSS-верстка: Сцена с природой",
      description: "Создание сложной CSS-верстки с использованием чистого CSS для отрисовки природной сцены со стрекозой, грибами и облаками.",
      features: [
        "Анимированная стрекоза с крыльями",
        "Реалистичные облака с градиентами",
        "Интерактивные грибы с 3D-эффектом",
        "Декоративная рамка с точками"
      ],
      link: "/task1",
      type: "css"
    },
    {
      id: 2,
      title: "Задание 2", 
      subtitle: "Интерактивный интерфейс: Магазин игрушек",
      description: "Разработка интерактивного интерфейса с CSS-анимациями для создания игрового взаимодействия с игрушками.",
      features: [
        "Анимация движения машинки при наведении",
        "Качание лодки с transform-origin",
        "Появление мальчика при клике на игрушки",
        "Динамические эффекты с :active и :hover"
      ],
      link: "/task2", 
      type: "interactive"
    },
    {
      id: 3,
      title: "Задание 3",
      subtitle: "DOM-тест: Тест на знание сленга",
      description: "Разработка веб-приложения для прохождения теста с системой подсчета очков и статистикой.",
      features: [
        "Система подсчета правильных ответов",
        "Анимации переходов между вопросами",
        "Подробная статистика результатов",
        "Возможность повторного прохождения"
      ],
      link: "/task3/index.html",
      type: "web-app",
      external: true
    },
    {
      id: 4,
      title: "Задание 4",
      subtitle: "Расчет землекопов",
      description: "Разработка веб-приложения для расчета работников для копания канав",
      features: [
        "Использование new Function()",
        "Разные исходы при определенных входных данных",
        "3 независимые формы"
      ],
      link: "/task4/index.html",
      type: "forms",
      external: true
    }
  ];

  return (
    <div className="tasks-page">
      <div className="page-header">
        <h2>Задания на курсе</h2>
        <p className="page-subtitle">Практические задания по веб-разработке с использованием современных технологий</p>
      </div>
      
      <div className="tasks-container">
        {tasks.map(task => (
          <div key={task.id} className={`task-card ${task.type}`}>
            <div className="task-header">
              <h3>{task.title}</h3>
              <span className="task-type">{task.type}</span>
            </div>
            
            <h4 className="task-subtitle">{task.subtitle}</h4>
            <p className="task-description">{task.description}</p>
            
            <div className="task-features">
              <h5>Ключевые особенности:</h5>
              <ul>
                {task.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="task-footer">
              {task.external ? (
                <a href={task.link} className="task-link" target="_blank" rel="noopener noreferrer">
                  Перейти к заданию →
                </a>
              ) : (
                <Link to={task.link} className="task-link">
                  Перейти к заданию →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}