import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService, WhatsAppContact } from '../../Services/whatsapp';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-float.html',
  styleUrl: './whatsapp-float.css'
})
export class WhatsappFloatComponent {
  isScrolled = false;
  panelOpen = false;

  contacts: WhatsAppContact[];

  constructor(private whatsappService: WhatsappService) {
    this.contacts = this.whatsappService.contacts;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  togglePanel() {
    this.panelOpen = !this.panelOpen;
  }

  openContact(phone: string) {
    this.panelOpen = false;
    this.whatsappService.sendSimpleMessage(
      '¡Hola! Me gustaría conocer más sobre sus servicios de desarrollo de software.',
      phone
    );
  }
}
