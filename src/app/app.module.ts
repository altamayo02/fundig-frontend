import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UserModel } from './models/user/user.model';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { PqrsComponent } from './pages/pqrs/pqrs.component';
import { TwoFactorAuthComponent } from './pages/two-factor-auth/two-factor-auth.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserModel,
    LandingComponent,
    AboutComponent,
    PqrsComponent,
    TwoFactorAuthComponent,
    PasswordResetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
