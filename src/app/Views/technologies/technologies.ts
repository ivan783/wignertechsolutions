import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  category: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css'
})
export class TechnologiesComponent {
  categories = ['Frontend', 'Backend', 'Mobile', 'DevOps & Cloud', 'Databases', 'Herramientas'];

  technologies: Technology[] = [
    // Frontend
    { name: 'Angular', category: 'Frontend', icon: '🅰️', color: '#DD0031' },
    { name: 'React', category: 'Frontend', icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript', category: 'Frontend', icon: '📘', color: '#3178C6' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: '🎨', color: '#06B6D4' },
    { name: 'HTML5', category: 'Frontend', icon: '🌐', color: '#E34F26' },
    { name: 'CSS3', category: 'Frontend', icon: '🎭', color: '#1572B6' },

    // Backend
    { name: '.NET', category: 'Backend', icon: '🔷', color: '#512BD4' },
    { name: 'C#', category: 'Backend', icon: '©️', color: '#239120' },
    { name: 'Node.js', category: 'Backend', icon: '🟢', color: '#339933' },
    { name: 'ASP.NET Core', category: 'Backend', icon: '⚡', color: '#512BD4' },
    { name: 'REST APIs', category: 'Backend', icon: '🔌', color: '#009688' },
    { name: 'GraphQL', category: 'Backend', icon: '◀️', color: '#E10098' },

    // Mobile
    { name: 'React Native', category: 'Mobile', icon: '📱', color: '#61DAFB' },
    { name: 'Flutter', category: 'Mobile', icon: '🦋', color: '#02569B' },
    { name: 'Kotlin', category: 'Mobile', icon: '🤖', color: '#7F52FF' },
    /* { name: 'Swift', category: 'Mobile', icon: '🍎', color: '#FA7343' }, */

    // DevOps & Cloud
    { name: 'Docker', category: 'DevOps & Cloud', icon: '🐳', color: '#2496ED' },
    { name: 'GitHub Actions', category: 'DevOps & Cloud', icon: '⚙️', color: '#2088FF' },
    { name: 'Azure', category: 'DevOps & Cloud', icon: '☁️', color: '#0078D4' },
    /* { name: 'AWS', category: 'DevOps & Cloud', icon: '🌩️', color: '#FF9900' }, */
    { name: 'Kubernetes', category: 'DevOps & Cloud', icon: '☸️', color: '#326CE5' },
    { name: 'CI/CD', category: 'DevOps & Cloud', icon: '🔄', color: '#00D084' },

    // Databases
    { name: 'SQL Server', category: 'Databases', icon: '🗄️', color: '#CC2927' },
    { name: 'PostgreSQL', category: 'Databases', icon: '🐘', color: '#4169E1' },
    { name: 'MongoDB', category: 'Databases', icon: '🍃', color: '#47A248' },
    { name: 'Redis', category: 'Databases', icon: '⚡', color: '#DC382D' },

    // Herramientas
    { name: 'Git', category: 'Herramientas', icon: '📦', color: '#F05032' },
    { name: 'VS Code', category: 'Herramientas', icon: '💻', color: '#007ACC' },
    { name: 'Figma', category: 'Herramientas', icon: '🎨', color: '#F24E1E' },
    { name: 'Postman', category: 'Herramientas', icon: '📮', color: '#FF6C37' },
    /* { name: 'Jira', category: 'Herramientas', icon: '📊', color: '#0052CC' },
    { name: 'Slack', category: 'Herramientas', icon: '💬', color: '#4A154B' } */
  ];

  stats = [
    { value: '15+', label: 'Tecnologías' },
    { value: '100%', label: 'Actualizados' },
    { value: '24/7', label: 'Disponibilidad' },
    { value: '∞', label: 'Aprendizaje' }
  ];

  getTechByCategory(category: string): Technology[] {
    return this.technologies.filter(tech => tech.category === category);
  }
}
