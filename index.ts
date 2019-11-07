// Import stylesheets
import './style.css';
import { Student } from './student';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
let student = new Student("Maxime", "Smissen", new Date(27, 8, 1999));
appDiv.innerHTML = student.getName();