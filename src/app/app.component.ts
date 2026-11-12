
import {
  Component,
  HostListener,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  Router,
  NavigationEnd,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

import { filter, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],

  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit, OnDestroy {

  // =====================================================
  // GLOBAL STATE
  // =====================================================

  menuOpen = false;

  isScrolled = false;

  scrollProgress = 0;

  currentYear = new Date().getFullYear();


  // =====================================================
  // PRIVATE SUBSCRIPTIONS
  // =====================================================

  private routerSubscription?: Subscription;

  private revealObserver?: IntersectionObserver;


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor(
    private router: Router
  ) {}


  // =====================================================
  // INITIALIZATION
  // =====================================================

  ngOnInit(): void {

    // ROUTE CHANGE LISTENER

    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe(() => {

        this.closeMenu();

        // Scroll to top after navigation
        this.scrollToTop();

        // Refresh reveal animations
        setTimeout(() => {
          this.observeReveals();
        }, 100);

        // Refresh scroll states
        this.onWindowScroll();

      });


    // INITIAL REVEAL OBSERVER

    setTimeout(() => {
      this.observeReveals();
    }, 150);


    // INITIAL SCROLL STATE

    this.onWindowScroll();

  }


  // =====================================================
  // SCROLL PROGRESS & HEADER
  // =====================================================

  @HostListener('window:scroll')

  onWindowScroll(): void {

    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop;

    const documentHeight =
      document.documentElement.scrollHeight;

    const windowHeight =
      window.innerHeight;

    const maxScroll =
      documentHeight - windowHeight;


    // SCROLL PROGRESS

    this.scrollProgress =
      maxScroll > 0
        ? Math.min(
            100,
            Math.max(0, (scrollTop / maxScroll) * 100)
          )
        : 0;


    // HEADER SCROLL STATE

    this.isScrolled = scrollTop > 24;

  }


  // =====================================================
  // MOBILE MENU
  // =====================================================

  toggleMenu(): void {

    this.menuOpen = !this.menuOpen;

    document.body.style.overflow =
      this.menuOpen ? 'hidden' : '';

  }


  closeMenu(): void {

    this.menuOpen = false;

    document.body.style.overflow = '';

  }


  // =====================================================
  // BACK TO TOP
  // =====================================================

  scrollToTop(): void {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }


  // =====================================================
  // SCROLL REVEAL OBSERVER
  // =====================================================

  private observeReveals(): void {

    // Disconnect previous observer

    this.revealObserver?.disconnect();


    // Find reveal elements

    const elements = document.querySelectorAll(
      '.route-page .reveal:not(.is-visible)'
    );


    // Browser fallback

    if (!('IntersectionObserver' in window)) {

      elements.forEach(element => {
        element.classList.add('is-visible');
      });

      return;

    }


    // Create observer

    this.revealObserver = new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add('is-visible');

            this.revealObserver?.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px'
      }

    );


    // Observe elements with staggered delay

    elements.forEach((element, index) => {

      const htmlElement = element as HTMLElement;

      htmlElement.style.transitionDelay =
        `${(index % 4) * 80}ms`;

      this.revealObserver?.observe(element);

    });

  }


  // =====================================================
  // COMPONENT CLEANUP
  // =====================================================

  ngOnDestroy(): void {

    this.routerSubscription?.unsubscribe();

    this.revealObserver?.disconnect();

    document.body.style.overflow = '';

  }

}
