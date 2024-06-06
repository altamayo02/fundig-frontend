import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  {
    path: 'users',
    loadChildren: () => import('src/app/pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'services',
    loadChildren: () => import('src/app/pages/services/services.module').then(m => m.ServicesModule)
  },
  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent }
];
