import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactForm, WhatsAppContact, WhatsappService } from '../../Services/whatsapp';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  formData: ContactForm = { name: '', email: '', message: '' };
  isSubmitting = false;
  showSuccess = false;

  whatsappContacts: WhatsAppContact[];

  constructor(private whatsappService: WhatsappService) {
    this.whatsappContacts = this.whatsappService.contacts;
  }

  onSubmit() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    this.showSuccess = true;

    setTimeout(() => {
      this.whatsappService.sendContactMessage(this.formData);
      this.formData = { name: '', email: '', message: '' };
      this.isSubmitting = false;
      setTimeout(() => { this.showSuccess = false; }, 3000);
    }, 500);
  }

  openWhatsApp(phone: string) {
    this.whatsappService.sendSimpleMessage(
      '¡Hola! Me gustaría conocer más sobre sus servicios de desarrollo de software.',
      phone
    );
  }
}
