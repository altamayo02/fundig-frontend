import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Panel de control',  icon: 'ni-tv-2 text-purple', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-purple', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-purple', class: '' },
    { path: '/user-profile', title: 'Perfil de usuario',  icon:'ni-single-02 text-purple', class: '' },
    { path: '/services', title: 'Servicios',  icon:'ni-bullet-list-67 text-purple', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-purple', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-purple', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
