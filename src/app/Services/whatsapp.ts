import { Injectable } from '@angular/core';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  // ⚠️ IMPORTANTE: Reemplaza con tu número de WhatsApp (con código de país, sin +)
  // Ejemplo Bolivia: '591XXXXXXXXX'
  // Ejemplo México: '52XXXXXXXXXX'
  private readonly phoneNumber = '59167121268'; // CAMBIA ESTE NÚMERO

  constructor() { }

  /**
   * Envía un mensaje directo de contacto a WhatsApp
   */
  sendContactMessage(contact: ContactForm): void {
    const message = this.formatContactMessage(contact);
    this.openWhatsApp(message);
  }

  /**
   * Abre WhatsApp con un mensaje simple
   */
  sendSimpleMessage(message: string): void {
    this.openWhatsApp(message);
  }

  /**
   * Formatea el mensaje del formulario de contacto
   */
  private formatContactMessage(contact: ContactForm): string {
    return `¡Hola! Me gustaría contactar con WignerTechSolutions

*Nombre:* ${contact.name}
*Email:* ${contact.email}
*Mensaje:*
${contact.message}`;
  }

  /**
   * Abre WhatsApp con el mensaje formateado
   */
  private openWhatsApp(message: string): void {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;

    // Abre en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  }

  /**
   * Obtiene el link de WhatsApp sin mensaje predefinido
   */
  getWhatsAppLink(): string {
    return `https://wa.me/${this.phoneNumber}`;
  }
}
