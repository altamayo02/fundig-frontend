import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user/user.model';
import { SecurityService } from 'src/app/services/security.service';
import Swal from 'sweetalert2';
import * as jose from 'jose';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.scss']
})
export class TwoFactorAuthComponent implements OnInit {
	pin: string
	constructor(
		private router: Router,
		private securityService: SecurityService
	) {}

	ngOnInit(): void {
	}


	confirmTwoFA() {
		this.securityService.validate2FACode(this.pin).subscribe({
			next: data => {
				sessionStorage.setItem("token", data.token)
				this.router.navigate(['user-profile'])
			},
			error: () => {
				Swal.fire(
					"Código de verificación incorrecto",
					"Por favor verifique el código ingresado.",
					"error"
				)
			}
		})
	}
}
