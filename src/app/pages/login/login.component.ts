import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { SecurityService } from 'src/app/services/security.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
	user: User

	constructor(
		private router: Router,
		private securityService: SecurityService,
	) {
		this.user = new User()
	}

	ngOnInit() {}
	ngOnDestroy() {}


	twoFA() {
		this.securityService.send2FACode(this.user).subscribe({
          next: response => {
            localStorage.setItem("session_id", response.session_id)
          },
          error: err => {
            console.log(err);
          }
        })
		this.router.navigate(['2FA'])
	}
}
