import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { StudioComponent } from './pages/studio.component';
import { ClicksComponent } from './pages/clicks.component';
import { DigitalComponent } from './pages/digital.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'RANGRIOT — Home' },
  { path: 'about', component: AboutComponent, title: 'RANGRIOT — About' },
  { path: 'studio', component: StudioComponent, title: 'RANGRIOT — Studio' },
  { path: 'clicks', component: ClicksComponent, title: 'RANGRIOT — Clicks' },
  { path: 'digital', component: DigitalComponent, title: 'RANGRIOT — Digital' },
  { path: 'contact', component: ContactComponent, title: 'RANGRIOT — Contact' },
{
  path: 'studio/reels',
  loadComponent: () =>
    import('./pages/studio-reels/studio-reels.component')
      .then(m => m.StudioReelsComponent)
},
{
  path: 'clicks/gallery',
  loadComponent: () =>
    import('./pages/clicks-gallery/clicks-gallery.component')
      .then(m => m.ClicksGalleryComponent)
},
  { path: '**', redirectTo: '' }



];
