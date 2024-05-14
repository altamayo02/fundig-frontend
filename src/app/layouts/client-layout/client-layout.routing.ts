import { Routes } from '@angular/router';

import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';

export const ClientLayoutRoutes: Routes = [
    {
		path: 'user-profile',
		component: UserProfileComponent
	},
];
