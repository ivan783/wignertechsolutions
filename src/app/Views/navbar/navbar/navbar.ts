import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  menuItems = [
    { label: 'Inicio', link: '#home' },
    { label: 'Servicios', link: '#services' },
    { label: 'Tecnologías', link: '#tech' },
    { label: 'Proyectos', link: '#projects' },
    { label: 'Reseñas', link: '#reviews' },
    { label: 'Contacto', link: '#contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
