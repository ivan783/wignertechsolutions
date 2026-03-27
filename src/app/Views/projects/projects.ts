import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  stats: { label: string; value: string }[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Sistema ERP Empresarial',
      description: 'Plataforma integral de gestión empresarial con módulos de inventario, ventas, compras y contabilidad.',
      category: 'Enterprise',
      technologies: ['Angular', '.NET', 'SQL Server', 'Azure'],
      image: '💼',
      stats: [
        { label: 'Usuarios', value: '500+' },
        { label: 'Eficiencia', value: '+40%' }
      ]
    },
    {
      title: 'App Móvil de Delivery',
      description: 'Aplicación multiplataforma para pedidos en tiempo real con tracking GPS y pagos integrados.',
      category: 'Mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🚚',
      stats: [
        { label: 'Descargas', value: '10K+' },
        { label: 'Rating', value: '4.8⭐' }
      ]
    },
    {
      title: 'Portal de E-Learning',
      description: 'Plataforma educativa con cursos interactivos, evaluaciones automáticas y seguimiento de progreso.',
      category: 'Education',
      technologies: ['Angular', 'ASP.NET', 'PostgreSQL', 'Docker'],
      image: '📚',
      stats: [
        { label: 'Estudiantes', value: '2K+' },
        { label: 'Cursos', value: '150+' }
      ]
    },
    {
      title: 'Dashboard Analytics',
      description: 'Sistema de visualización de datos en tiempo real con reportes personalizados y exportación.',
      category: 'Analytics',
      technologies: ['React', '.NET', 'Redis', 'Chart.js'],
      image: '📊',
      stats: [
        { label: 'Métricas', value: '50+' },
        { label: 'Tiempo Real', value: '100%' }
      ]
    },
    {
      title: 'API Gateway',
      description: 'Arquitectura de microservicios con gateway centralizado, autenticación OAuth y rate limiting.',
      category: 'Backend',
      technologies: ['ASP.NET Core', 'Docker', 'Kubernetes', 'JWT'],
      image: '🔌',
      stats: [
        { label: 'Requests/día', value: '1M+' },
        { label: 'Uptime', value: '99.9%' }
      ]
    },
    {
      title: 'App de Telemedicina',
      description: 'Plataforma de consultas médicas virtuales con videollamadas, recetas digitales y historial clínico.',
      category: 'Healthcare',
      technologies: ['Flutter', '.NET', 'WebRTC', 'HIPAA'],
      image: '🏥',
      stats: [
        { label: 'Consultas', value: '5K+' },
        { label: 'Médicos', value: '200+' }
      ]
    }
  ];
}
