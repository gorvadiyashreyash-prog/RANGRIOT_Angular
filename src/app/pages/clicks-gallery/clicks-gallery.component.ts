
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ClicksPhoto {
  id: number;
  title: string;
  image: string;
  year: string;
}

@Component({
  selector: 'app-clicks-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clicks-gallery.component.html',
  styleUrl: './clicks-gallery.component.css'
})
export class ClicksGalleryComponent {

  photos: ClicksPhoto[] = [
    {
      id: 1,
      title: 'Portrait',
      image: '/assets/images/clicks/clicks-01.JPG',
      year: '2026'
    },
    {
      id: 2,
      title: 'Product',
      image: '/assets/images/clicks/clicks-02.png',
      year: '2026'
    },
    {
      id: 3,
      title: 'Lifestyle',
      image: '/assets/images/clicks/clicks-03.png',
      year: '2026'
    },
    {
      id: 4,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-04.png',
      year: '2026'
    },
    {
      id: 5,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-05.JPG',
      year: '2026'
    },
    {
      id: 6,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-06.JPG',
      year: '2026'
    },
    {
      id: 7,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-07.png',
      year: '2026'
    },
    {
      id: 8,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-08.png',
      year: '2026'
    },
    {
      id: 9,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-09.png',
      year: '2026'
    },
    {
      id: 10,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-010.png',
      year: '2026'
    },
    {
      id: 11,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-011.png',
      year: '2026'
    },
    {
      id: 12,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-012.png',
      year: '2026'
    },
    {
      id: 13,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-013.jpg',
      year: '2026'
    },
    {
      id: 14,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-014.png',
      year: '2026'
    },
    {
      id: 15,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-015.png',
      year: '2026'
    },
    {
      id: 16,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-016.png',
      year: '2026'
    },
    {
      id: 17,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-017.png',
      year: '2026'
    },
    {
      id: 18,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-018.png',
      year: '2026'
    },
     {
      id: 19,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-019.png',
      year: '2026'
    },
     {
      id: 20,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-020.png',
      year: '2026'
    },
     {
      id: 21,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-021.png',
      year: '2026'
    },
     {
      id: 22,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-022.jpeg',
      year: '2026'
    },
     {
      id: 23,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-023.jpeg',
      year: '2026'
    },
     {
      id: 24,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-024.jpeg',
      year: '2026'
    },
     {
      id: 25,
      title: 'Creative Campaign',
      image: '/assets/images/clicks/clicks-025.png',
      year: '2026'
    }

    // Add new photographs below this line
  ];

  get totalPhotos(): string {
    return this.photos.length.toString().padStart(2, '0');
  }

  getPhotoNumber(id: number): string {
    return id.toString().padStart(2, '0');
  }
}
