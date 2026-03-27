import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: '🌐',
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas y escalables con las últimas tecnologías. Interfaces intuitivas y rendimiento excepcional.',
      technologies: ['Angular', '.NET', 'TypeScript', 'ASP.NET Core'],
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: '📱',
      title: 'Apps Móviles',
      description: 'Aplicaciones nativas y multiplataforma para iOS y Android. Experiencias móviles fluidas y de alto rendimiento.',
      technologies: ['React Native', 'Flutter', 'Kotlin', 'Swift'],
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      icon: '⚙️',
      title: 'DevOps & CI/CD',
      description: 'Automatización de despliegues y gestión de infraestructura. Pipelines eficientes y entrega continua.',
      technologies: ['Docker', 'GitHub Actions', 'Azure', 'AWS'],
      gradient: 'from-primary-600 to-accent-500'
    },
    {
      icon: '🔒',
      title: 'Seguridad',
      description: 'Implementación de mejores prácticas de seguridad. Protección de datos y cumplimiento normativo.',
      technologies: ['OAuth', 'JWT', 'SSL/TLS', 'Encriptación'],
      gradient: 'from-accent-600 to-primary-500'
    },
    {
      icon: '💼',
      title: 'Sistemas Empresariales',
      description: 'Soluciones a medida para gestión empresarial. ERP, CRM y sistemas de automatización.',
      technologies: ['Microservicios', 'APIs REST', 'SQL Server', 'MongoDB'],
      gradient: 'from-primary-500 to-accent-600'
    },
    {
      icon: '🎯',
      title: 'Consultoría Tech',
      description: 'Asesoramiento técnico y estratégico. Optimización de procesos y arquitectura de software.',
      technologies: ['Arquitectura', 'Code Review', 'Performance', 'Escalabilidad'],
      gradient: 'from-accent-500 to-primary-600'
    }
  ];
}
