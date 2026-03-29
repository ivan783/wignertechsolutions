import { Injectable } from '@angular/core';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface WhatsAppContact {
  name: string;
  role: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  readonly contacts: WhatsAppContact[] = [
    { name: 'WYNOVA', role: 'Ventas & Proyectos', phone: '59167121268' },
    { name: 'WYNOVA', role: 'Soporte Técnico',   phone: '59173201482' }
  ];

  sendContactMessage(contact: ContactForm, phone?: string): void {
    const message = this.formatContactMessage(contact);
    const target = phone ?? this.contacts[0].phone;
    this.openWhatsApp(target, message);
  }

  sendSimpleMessage(message: string, phone?: string): void {
    const target = phone ?? this.contacts[0].phone;
    this.openWhatsApp(target, message);
  }

  getWhatsAppLink(phone?: string): string {
    return `https://wa.me/${phone ?? this.contacts[0].phone}`;
  }

  private formatContactMessage(contact: ContactForm): string {
    return `¡Hola! Me gustaría contactar con WYNOVA

*Nombre:* ${contact.name}
*Email:* ${contact.email}
*Mensaje:*
${contact.message}`;
  }

  private openWhatsApp(phone: string, message: string): void {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  }
}
