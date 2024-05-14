import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user/user.model';
import { SecurityService } from 'src/app/services/security.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
	user: UserModel

	constructor(
		private router: Router,
		private securityService: SecurityService,
	) {
		this.user = new UserModel()
	}

	ngOnInit() {}
	ngOnDestroy() {}


	twoFA() {
		this.securityService.send2FACode(this.user).subscribe(response => {
			sessionStorage.setItem("session_id", response.session_id)
		})
		this.router.navigate(['2FA'])
	}
}
