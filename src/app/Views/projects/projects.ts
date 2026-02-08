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
  template: `
    <section id="projects" class="py-20 bg-dark-900 relative overflow-hidden">

      <!-- Background -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Section Header -->
        <div class="text-center mb-16 animate-fade-in-up">
          <div class="inline-block mb-4 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
            <span class="text-primary-400 text-sm font-semibold">🚀 Portfolio</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Proyectos <span class="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones exitosas que han transformado negocios y optimizado procesos
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of projects; let i = index"
               class="group bg-dark-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 animate-fade-in-up"
               [style.animation-delay]="(i * 0.15) + 's'">

            <!-- Project Image/Icon -->
            <div class="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center overflow-hidden">
              <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div class="relative text-6xl transform group-hover:scale-110 transition-transform duration-300">
                {{ project.image }}
              </div>

              <!-- Category Badge -->
              <div class="absolute top-4 right-4 px-3 py-1 bg-dark-900/80 backdrop-blur-sm rounded-full border border-white/20">
                <span class="text-xs font-semibold text-primary-400">{{ project.category }}</span>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {{ project.title }}
              </h3>

              <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span *ngFor="let tech of project.technologies"
                      class="px-2 py-1 bg-primary-500/10 border border-primary-500/30 rounded text-xs text-primary-400 font-medium">
                  {{ tech }}
                </span>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div *ngFor="let stat of project.stats" class="text-center">
                  <div class="text-lg font-bold text-white">{{ stat.value }}</div>
                  <div class="text-xs text-gray-400">{{ stat.label }}</div>
                </div>
              </div>
            </div>

            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-primary-500/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="mt-16 text-center animate-fade-in-up" style="animation-delay: 0.8s;">
          <p class="text-gray-400 mb-6">¿Quieres ver tu proyecto aquí?</p>
          <a href="#contact"
             class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transform hover:scale-105 transition-all duration-300">
            <span>Comienza tu Proyecto</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-grid-pattern {
      background-image:
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 30px 30px;
    }
  `]
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
