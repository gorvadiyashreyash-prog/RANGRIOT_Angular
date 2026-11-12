
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ReelProject {
  id: number;
  title: string;
  video: string;
  year: string;
}

@Component({
  selector: 'app-studio-reels',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './studio-reels.component.html',
  styleUrl: './studio-reels.component.css'
})
export class StudioReelsComponent {

  projects: ReelProject[] = [
    {
      id: 1,
      title: 'Visual Storytelling',
      video: '/assets/videos/client-reel-01.MP4',
      year: '2026'
    },
    {
      id: 2,
      title: 'Made for Attention',
      video: '/assets/videos/client-reel-02.MP4',
      year: '2026'
    },
    {
      id: 3,
      title: 'Moments in Motion',
      video: '/assets/videos/client-reel-03.MP4',
      year: '2026'
    },

    // Add your new reels below this line

   {
  id: 4,
  title: 'Brand Film',
  video: '/assets/videos/client-reel-04.MP4',
  year: '2026'
},
      {
  id: 5,
  title: 'Brand Film',
  video: '/assets/videos/client-reel-05.MP4',
  year: '2026'
},
    {
      id: 6,
      title: 'Creative Direction',
      video: '/assets/videos/client-reel-06.MP4',
      year: '2026'
    },
    {
      id: 7,
      title: 'The Campaign Edit',
      video: '/assets/videos/client-reel-07.MP4',
      year: '2026'
    },
    {
      id: 8,
      title: 'Visual Identity Film',
      video: '/assets/videos/client-reel-08.MP4',
      year: '2026'
    },
    {
      id: 9,
      title: 'Behind the Scenes',
      video: '/assets/videos/client-reel-09.MP4',
      year: '2026'
    },
    {
      id: 10,
      title: 'Product in Focus',
      video: '/assets/videos/client-reel-10.MP4',
      year: '2026'
    },
    {
      id: 11,
      title: 'The Social Cut',
      video: '/assets/videos/client-reel-11.MP4',
      year: '2026'
    },
    {
      id: 12,
      title: 'A Visual Experience',
      video: '/assets/videos/client-reel-12.MP4',
      year: '2026'
    },
    {
      id: 13,
      title: 'The Brand Story',
      video: '/assets/videos/client-reel-13.MP4',
      year: '2026'
    },
    {
      id: 14,
      title: 'Captured in Motion',
      video: '/assets/videos/client-reel-14.MP4',
      year: '2026'
    },
    {
      id: 15,
      title: 'Creative Moments',
      video: '/assets/videos/client-reel-15.MP4',
      year: '2026'
    }
  ];

  get totalProjects(): string {
    return this.projects.length.toString().padStart(2, '0');
  }

  getProjectNumber(id: number): string {
    return id.toString().padStart(2, '0');
  }

  trackProject(index: number, project: ReelProject): number {
    return project.id;
  }
}
