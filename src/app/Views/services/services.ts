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
  template: `
    <section id="services" class="py-20 bg-dark-900 relative overflow-hidden">

      <!-- Background Effects -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Section Header -->
        <div class="text-center mb-16 animate-fade-in-up">
          <div class="inline-block mb-4 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
            <span class="text-primary-400 text-sm font-semibold">💼 Nuestros Servicios</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Soluciones que <span class="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Impulsan tu Negocio</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Ofrecemos servicios completos de desarrollo de software, desde aplicaciones web hasta soluciones móviles y automatización DevOps
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services; let i = index"
               class="group relative bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
               [style.animation-delay]="(i * 0.1) + 's'">

            <!-- Gradient Background on Hover -->
            <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                 [ngClass]="service.gradient"></div>

            <!-- Icon -->
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
                   [ngClass]="service.gradient">
                <span class="text-3xl">{{ service.icon }}</span>
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
              {{ service.title }}
            </h3>

            <p class="text-gray-400 mb-6 leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of service.technologies"
                    class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-medium hover:bg-white/10 transition-colors">
                {{ tech }}
              </span>
            </div>

            <!-- Hover Arrow -->
            <div class="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="mt-16 text-center animate-fade-in-up" style="animation-delay: 0.6s;">
          <a href="#contact"
             class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transform hover:scale-105 transition-all duration-300">
            <span>¿Tienes un proyecto en mente?</span>
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
      background-size: 50px 50px;
    }
  `]
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
