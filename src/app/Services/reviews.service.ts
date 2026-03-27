import { Injectable } from '@angular/core';
import { initializeApp, getApps } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  Timestamp
} from 'firebase/firestore';
import { firebaseConfig } from '../config/firebase.config';

export interface Review {
  id?: string;
  name: string;
  comment: string;
  rating: number;
  createdAt?: Date;
}

@Injectable({ providedIn: 'root' })
export class ReviewsService {
  private db;

  constructor() {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    this.db = getFirestore(app);
  }

  async addReview(review: Omit<Review, 'id' | 'createdAt'>): Promise<void> {
    await addDoc(collection(this.db, 'reviews'), {
      ...review,
      createdAt: Timestamp.now()
    });
  }

  async getReviews(): Promise<Review[]> {
    const q = query(collection(this.db, 'reviews'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: (doc.data()['createdAt'] as Timestamp).toDate()
    })) as Review[];
  }
}
