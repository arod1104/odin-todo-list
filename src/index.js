import "./styles.css";
import { TodoItem, Project } from "./factory-modules";

const User = {
  projects: [],
  addProject(title) {
    const newProject = Project(title, []);
    this.projects.push(newProject);
  },
};
