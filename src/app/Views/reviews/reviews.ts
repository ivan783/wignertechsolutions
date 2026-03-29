import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Review, ReviewsService } from '../../Services/reviews.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  isLoading = true;
  isSubmitting = false;
  showSuccess = false;
  showForm = false;
  errorMessage = '';

  newReview = { name: '', comment: '', rating: 0 };
  hoverRating = 0;

  constructor(private reviewsService: ReviewsService) {}

  async ngOnInit() {
    await this.loadReviews();
  }

  async loadReviews() {
    this.isLoading = true;
    this.errorMessage = '';
    try {
      this.reviews = await this.reviewsService.getReviews();
    } catch (err: unknown) {
      this.reviews = [];
      const msg = err instanceof Error ? err.message : String(err);
      this.errorMessage = `Error al cargar reseñas: ${msg}`;
      console.error('[WYNOVA Reviews] loadReviews error:', err);
    }
    this.isLoading = false;
  }

  get averageRating(): number {
    if (this.reviews.length === 0) return 0;
    const sum = this.reviews.reduce((acc, r) => acc + r.rating, 0);
    return Math.round((sum / this.reviews.length) * 10) / 10;
  }

  setRating(value: number) {
    this.newReview.rating = value;
  }

  setHover(value: number) {
    this.hoverRating = value;
  }

  clearHover() {
    this.hoverRating = 0;
  }

  getStarFill(star: number, rating: number): 'full' | 'empty' {
    return star <= rating ? 'full' : 'empty';
  }

  get canSubmit(): boolean {
    return this.newReview.name.trim().length > 0 &&
           this.newReview.comment.trim().length > 0 &&
           this.newReview.rating > 0;
  }

  async onSubmit() {
    if (!this.canSubmit || this.isSubmitting) return;
    this.isSubmitting = true;
    try {
      await this.reviewsService.addReview(this.newReview);
      this.showSuccess = true;
      this.errorMessage = '';
      this.newReview = { name: '', comment: '', rating: 0 };
      this.showForm = false;
      await this.loadReviews();
      setTimeout(() => { this.showSuccess = false; }, 4000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      this.errorMessage = `No se pudo guardar la reseña: ${msg}`;
      console.error('[WYNOVA Reviews] addReview error:', err);
    }
    this.isSubmitting = false;
  }
}
