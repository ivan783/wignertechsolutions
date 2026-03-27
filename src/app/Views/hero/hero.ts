import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../Services/whatsapp';
//import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  constructor(private whatsappService: WhatsappService) {}

  contactWhatsApp() {
    this.whatsappService.sendSimpleMessage('¡Hola! Me gustaría conocer más sobre sus servicios.');
  }
}
