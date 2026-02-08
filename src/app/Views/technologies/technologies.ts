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
  template: `
    <section id="tech" class="py-20 bg-dark-950 relative overflow-hidden">

      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <!-- Section Header -->
        <div class="text-center mb-16 animate-fade-in-up">
          <div class="inline-block mb-4 px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full">
            <span class="text-accent-400 text-sm font-semibold">⚡ Stack Tecnológico</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Tecnologías <span class="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">Modernas</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Utilizamos las herramientas más avanzadas del mercado para construir soluciones robustas y escalables
          </p>
        </div>

        <!-- Technologies Grid by Category -->
        <div class="space-y-12">
          <div *ngFor="let category of categories; let i = index"
               class="animate-fade-in-up"
               [style.animation-delay]="(i * 0.2) + 's'">

            <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
              <span class="w-2 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mr-4"></span>
              {{ category }}
            </h3>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div *ngFor="let tech of getTechByCategory(category)"
                   class="group relative bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/20">

                <!-- Glow effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 rounded-xl transition-all duration-300"></div>

                <div class="relative flex flex-col items-center">
                  <!-- Icon/Logo -->
                  <div class="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300"
                       [style.color]="tech.color">
                    {{ tech.icon }}
                  </div>

                  <!-- Name -->
                  <span class="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors text-center">
                    {{ tech.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div *ngFor="let stat of stats; let i = index"
               class="text-center p-6 bg-dark-800/30 backdrop-blur-sm rounded-xl border border-white/10 animate-fade-in-up"
               [style.animation-delay]="(i * 0.1 + 0.8) + 's'">
            <div class="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
              {{ stat.value }}
            </div>
            <div class="text-sm text-gray-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
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
    { name: 'Swift', category: 'Mobile', icon: '🍎', color: '#FA7343' },

    // DevOps & Cloud
    { name: 'Docker', category: 'DevOps & Cloud', icon: '🐳', color: '#2496ED' },
    { name: 'GitHub Actions', category: 'DevOps & Cloud', icon: '⚙️', color: '#2088FF' },
    { name: 'Azure', category: 'DevOps & Cloud', icon: '☁️', color: '#0078D4' },
    { name: 'AWS', category: 'DevOps & Cloud', icon: '🌩️', color: '#FF9900' },
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
    { name: 'Jira', category: 'Herramientas', icon: '📊', color: '#0052CC' },
    { name: 'Slack', category: 'Herramientas', icon: '💬', color: '#4A154B' }
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
