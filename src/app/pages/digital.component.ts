
import { Component } from '@angular/core';

export interface DigitalCategory {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  services: string[];
}

@Component({
  selector: 'app-digital',
  standalone: true,
  imports: [],
  templateUrl: './digital.component.html',
  styleUrl: '../../styles/18-digital-page.css'
})
export class DigitalComponent {

  // ==========================================
  // RANGRIOT DIGITAL - SERVICE CATEGORIES
  // ==========================================

  readonly digitalCategories: DigitalCategory[] = [

    {
      number: '01',
      title: 'Website',
      subtitle: 'Digital experiences that make an impression.',
      description:
        'We design and develop modern, responsive websites that communicate your brand, engage your audience and help your business grow.',

      icon: 'monitor',

      services: [
        'Business Websites',
        'Corporate Websites',
        'E-commerce Websites',
        'Landing Pages',
        'Portfolio Websites',
        'Website Redesign'
      ]
    },

    {
      number: '02',
      title: 'ERP Solutions',
      subtitle: 'Bring every operation together.',
      description:
        'Manage your business with integrated ERP solutions designed to simplify operations, improve visibility and connect every department.',

      icon: 'layers',

      services: [
        'Business Management ERP',
        'Finance & Accounting',
        'HRM & Payroll',
        'Inventory Management',
        'Procurement Management',
        'Sales & CRM'
      ]
    },

    {
      number: '03',
      title: 'Applications',
      subtitle: 'Technology built around your business.',
      description:
        'We build custom applications and digital platforms that solve real business problems and create smarter ways to work.',

      icon: 'app-window',

      services: [
        'Custom Web Applications',
        'SaaS Platforms',
        'Booking Applications',
        'Customer Portals',
        'Admin Dashboards',
        'Business Applications'
      ]
    },

    {
      number: '04',
      title: 'UI/UX Design',
      subtitle: 'Design with purpose. Experience with clarity.',
      description:
        'We create intuitive and meaningful digital experiences through thoughtful user journeys, modern interfaces and functional design systems.',

      icon: 'palette',

      services: [
        'UI Design',
        'UX Research',
        'Wireframing',
        'Prototyping',
        'Dashboard Design',
        'Design Systems'
      ]
    },

    {
      number: '05',
      title: 'Digital Marketing',
      subtitle: 'Make your brand impossible to ignore.',
      description:
        'We help businesses build their digital presence, reach the right audience and grow through creative content and strategic marketing.',

      icon: 'trending-up',

      services: [
        'Social Media Marketing',
        'Content Strategy',
        'Brand Communication',
        'Digital Campaigns',
        'Social Media Management',
        'Performance Marketing'
      ]
    },

    {
      number: '06',
      title: 'Maintenance & Support',
      subtitle: 'Better performance. Continuous improvement.',
      description:
        'We keep your digital products secure, updated and performing smoothly with reliable technical support and ongoing maintenance.',

      icon: 'settings',

      services: [
        'Website Maintenance',
        'Application Maintenance',
        'Bug Fixing',
        'Performance Optimisation',
        'Security Updates',
        'Technical Support'
      ]
    }

  ];

  // ==========================================
  // ACTIVE CATEGORY
  // ==========================================

  activeCategoryIndex = 0;

  get activeCategory(): DigitalCategory {
    return this.digitalCategories[this.activeCategoryIndex];
  }

  // ==========================================
  // CATEGORY COUNT
  // ==========================================

  get totalCategories(): string {
    return String(this.digitalCategories.length).padStart(2, '0');
  }

  // ==========================================
  // CATEGORY NAVIGATION
  // ==========================================

  selectCategory(index: number): void {

    if (index < 0 || index >= this.digitalCategories.length) {
      return;
    }

    this.activeCategoryIndex = index;

  }

  isCategoryActive(index: number): boolean {
    return this.activeCategoryIndex === index;
  }

}
