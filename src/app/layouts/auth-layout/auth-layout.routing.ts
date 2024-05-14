import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { PasswordResetComponent } from 'src/app/pages/password-reset/password-reset.component';
import { TwoFactorAuthComponent } from 'src/app/pages/two-factor-auth/two-factor-auth.component';

export const AuthLayoutRoutes: Routes = [
	{
		path: '',
		component: LandingComponent
	},
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: '2FA',
		component: TwoFactorAuthComponent
	},
	{
		path: 'pw-reset',
		component: PasswordResetComponent
	}
];
