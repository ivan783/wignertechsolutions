import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavbarComponent } from './Views/navbar/navbar/navbar';
import { HeroComponent } from './Views/hero/hero';
import { ServicesComponent } from './Views/services/services';
import { TechnologiesComponent } from './Views/technologies/technologies';
import { ProjectsComponent } from './Views/projects/projects';
import { ReviewsComponent } from './Views/reviews/reviews';
import { ContactComponent } from './Views/contact/contact';
import { FooterComponent } from './Views/footer/footer';
import { WhatsappFloatComponent } from './Views/whatsapp-float/whatsapp-float';
import { ChatbotComponent } from './Views/chatbot/chatbot';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ReviewsComponent,
    ContactComponent,
    FooterComponent,
    WhatsappFloatComponent,
    ChatbotComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('devbridge-solutions');
}
