// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import TasksPage from "./components/TasksPage";
import ProjectsPage from "./components/ProjectsPage.tsx";
import { AboutPage } from "./components/AboutPage/index.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="task1" element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;