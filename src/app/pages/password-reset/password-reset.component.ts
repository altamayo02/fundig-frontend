import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  user: User

  constructor(
	private router: Router,
	private securityService: SecurityService
  ) {
	this.user = new User()
  }

  ngOnInit(): void {
  }


  passwordReset() {
	this.securityService.sendPasswordCode(this.user).subscribe({
		next: response => {
			localStorage.setItem("session_id", response.session_id)
		},
		error: err => {
			console.log(err);
		}
	})
	this.router.navigate(['/prompt-reset'])
  }
}
