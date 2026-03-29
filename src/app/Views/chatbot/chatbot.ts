import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  from: 'user' | 'bot';
  text: string;
  time: Date;
}

interface FaqEntry {
  keywords: string[];
  response: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css'
})
export class ChatbotComponent {
  isOpen = false;
  isTyping = false;
  userInput = '';
  messages: Message[] = [
    {
      from: 'bot',
      text: '¡Hola! 👋 Soy el asistente virtual de WYNOVA. ¿En qué puedo ayudarte hoy?',
      time: new Date()
    }
  ];

  private readonly faq: FaqEntry[] = [
    {
      keywords: ['hola', 'buenas', 'hey', 'saludos', 'buen día', 'buenas tardes', 'buenas noches'],
      response: '¡Hola! 😊 ¿En qué puedo ayudarte? Puedo informarte sobre nuestros servicios, tecnologías, precios o proceso de trabajo.'
    },
    {
      keywords: ['precio', 'costo', 'cuánto', 'tarifa', 'cobran', 'valor', 'presupuesto', 'cotización'],
      response: '💰 Los precios varían según el proyecto:\n\n• Landing page: desde $300 USD\n• App web: desde $800 USD\n• App móvil: desde $1,500 USD\n\nContáctanos para un presupuesto personalizado y sin costo. 👉 #contact'
    },
    {
      keywords: ['servicio', 'ofrecen', 'hacen', 'desarrollan', 'qué hacen'],
      response: '🚀 Nuestros servicios:\n\n🌐 Desarrollo Web (Angular, .NET)\n📱 Apps Móviles (React Native, Flutter)\n⚙️ DevOps & CI/CD\n🔒 Seguridad & Autenticación\n💼 Sistemas Empresariales (ERP, CRM)\n🎯 Consultoría Técnica'
    },
    {
      keywords: ['tecnología', 'tecnologías', 'stack', 'herramientas', 'angular', 'dotnet', 'react'],
      response: '⚡ Nuestro stack tecnológico:\n\n🖥 Frontend: Angular, React, TypeScript, Tailwind\n🔧 Backend: .NET, C#, Node.js, ASP.NET Core\n📱 Mobile: React Native, Flutter, Kotlin\n☁️ Cloud: Azure, Docker, Kubernetes\n🗄 DB: SQL Server, PostgreSQL, MongoDB'
    },
    {
      keywords: ['tiempo', 'plazo', 'cuánto tarda', 'demora', 'entrega', 'días', 'semanas', 'meses'],
      response: '⏱ Los tiempos de entrega típicos:\n\n• Landing page: 1-2 semanas\n• App web simple: 4-6 semanas\n• App web compleja: 2-4 meses\n• App móvil: 2-5 meses\n\nSiempre cumplimos los plazos acordados. ✅'
    },
    {
      keywords: ['contacto', 'contactar', 'comunicar', 'escribir', 'whatsapp', 'correo', 'email'],
      response: '📞 Puedes contactarnos por:\n\n💬 WhatsApp: +591 67121268 o +591 73201482\n📧 Email: contacto@wynova.com\n📍 100% Remoto\n⏰ Lun-Vie: 09:00 - 20:00'
    },
    {
      keywords: ['proyecto', 'portfolio', 'trabajos', 'ejemplos', 'clientes'],
      response: '💼 Algunos proyectos que hemos realizado:\n\n• Sistema ERP Empresarial (500+ usuarios)\n• App de Delivery con tracking GPS\n• Portal E-Learning (2K+ estudiantes)\n• Dashboard Analytics en tiempo real\n• API Gateway (1M+ requests/día)\n• App de Telemedicina (200+ médicos)\n\nVe la sección "Proyectos" para más detalles. 👆'
    },
    {
      keywords: ['proceso', 'cómo trabajan', 'metodología', 'pasos', 'etapas', 'cómo funciona'],
      response: '🔄 Nuestro proceso de trabajo:\n\n1️⃣ Reunión inicial (análisis de requerimientos)\n2️⃣ Propuesta técnica y presupuesto\n3️⃣ Diseño de arquitectura y UI\n4️⃣ Desarrollo iterativo con revisiones\n5️⃣ Pruebas de calidad (QA)\n6️⃣ Despliegue y puesta en producción\n7️⃣ Soporte post-lanzamiento'
    },
    {
      keywords: ['remoto', 'presencial', 'ubicación', 'donde', 'dónde están', 'bolivia'],
      response: '📍 Trabajamos 100% remoto, atendemos clientes en Bolivia y Latinoamérica.\n\nComunicación por videollamada, WhatsApp, email y herramientas de gestión como Jira o Trello. 🌎'
    },
    {
      keywords: ['gracias', 'muchas gracias', 'ok', 'entendido', 'perfecto', 'genial', 'excelente'],
      response: '¡De nada! 😊 Estoy aquí para ayudarte. Si tienes más preguntas o quieres iniciar un proyecto, no dudes en contactarnos. ¡Hasta pronto! 👋'
    }
  ];

  private readonly defaultResponse =
    'No estoy seguro de entender tu pregunta. 🤔 Puedes preguntarme sobre:\n\n• Servicios que ofrecemos\n• Precios y presupuestos\n• Tecnologías que usamos\n• Tiempos de entrega\n• Cómo contactarnos';

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.push({ from: 'user', text, time: new Date() });
    this.userInput = '';
    this.isTyping = true;

    setTimeout(() => {
      const response = this.getResponse(text);
      this.isTyping = false;
      this.messages.push({ from: 'bot', text: response, time: new Date() });
      setTimeout(() => this.scrollToBottom(), 50);
    }, 900);
  }

  handleKey(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private getResponse(input: string): string {
    const normalized = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    for (const entry of this.faq) {
      if (entry.keywords.some(kw => normalized.includes(kw.normalize('NFD').replace(/[\u0300-\u036f]/g, '')))) {
        return entry.response;
      }
    }
    return this.defaultResponse;
  }

  private scrollToBottom() {
    const container = document.getElementById('chat-messages');
    if (container) container.scrollTop = container.scrollHeight;
  }
}
