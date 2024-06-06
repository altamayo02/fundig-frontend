import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { PqrsComponent } from 'src/app/pages/pqrs/pqrs.component';
import { TwoFactorAuthComponent } from 'src/app/pages/two-factor-auth/two-factor-auth.component';
import { PasswordResetComponent } from 'src/app/pages/password-reset/password-reset.component';
import { PromptResetComponent } from 'src/app/pages/prompt-reset/prompt-reset.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
	ReactiveFormsModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    AboutComponent,
    PqrsComponent,
    TwoFactorAuthComponent,
    PasswordResetComponent,
    PromptResetComponent,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class AuthLayoutModule { }
