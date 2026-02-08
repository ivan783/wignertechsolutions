import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Views/navbar/navbar/navbar';
import { HeroComponent } from './Views/hero/hero';
import { ServicesComponent } from './Views/services/services';
import { TechnologiesComponent } from './Views/technologies/technologies';
import { ProjectsComponent } from './Views/projects/projects';
import { ContactComponent } from './Views/contact/contact';
import { FooterComponent } from './Views/footer/footer';
import { WhatsappFloatComponent } from './Views/whatsapp-float/whatsapp-float';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    WhatsappFloatComponent
  ],
  template: `
    <div class="min-h-screen bg-dark-950">
      <!-- Navigation -->
      <app-navbar />

      <!-- Main Content -->
      <main>
        <app-hero />
        <app-services />
        <app-technologies />
        <app-projects />
        <app-contact />
      </main>

      <!-- Footer -->
      <app-footer />

      <!-- WhatsApp Float Button -->
      <app-whatsapp-float />
    </div>
  `,
  //templateUrl: './app.html',
  //styleUrl: './app.css'
  styles: []
})
export class App {
  protected readonly title = signal('wigner-tech-solutions');
}
