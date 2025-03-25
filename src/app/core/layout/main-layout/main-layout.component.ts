import {
  Component,
  HostListener,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { isPlatformBrowser } from '@angular/common';
import { NavItem } from '../../interfaces/navList';

@Component({
  selector: 'app-main-layout',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  @Input() opened: boolean = true;
  drawerMode: 'side' | 'over' = 'side';

  sidenavList: NavItem[] = [
    {
      data: '<i class="fa-solid fa-house w-1/7"></i><p>Dashboard</p>',
      link: 'analytics',
    },
    {
      data: '<i class="fa-solid fa-cart-shopping w-1/7"></i><p>Orders</p>',
      link: 'orders',
    },
    {
      data: '<i class="fa-solid fa-user w-1/7"></i><p>Users</p>',
      link: 'users',
    },
    {
      data: '<i class="fa-solid fa-shop w-1/7"></i><p>Items</p>',
      link: 'items',
    },
    {
      data: '<i class="fa-solid fa-bookmark w-1/7"></i><p>Tranactions</p>',
      link: 'tranactions',
    },
    {
      data: '<i class="fa-solid fa-file w-1/7"></i><p>Reports</p>',
      link: 'reports',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth < 1000) {
      this.opened = false;
      this.drawerMode = 'over';
    } else {
      this.opened = true;
      this.drawerMode = 'side';
    }
  }
}
