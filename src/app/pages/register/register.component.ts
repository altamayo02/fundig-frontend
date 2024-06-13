import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/repositories/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	pwStrength: number
	user: User
	formGroup: FormGroup
  
	constructor(
	  private router: Router,
	  private formBuilder: FormBuilder,
	  private usersService: UsersService,
	) {
	  this.user = new User()
	  this.pwStrength = 0
	  this.buildFormGroup()
	}
  
	ngOnInit(): void {}
  
	get getFormGroup() {
	  return this.formGroup.controls
	}
  
	buildFormGroup() {
	  this.formGroup = this.formBuilder.group({
		name: ['', [
		  Validators.required,
		  Validators.maxLength(100),
		]],
		email: ['', [
		  Validators.required,
		  Validators.email,
		]],
		password: ['', [
		  Validators.required,
		  Validators.minLength(8),
		]]
	  })
	}

	checkStrength() {
		this.pwStrength = 3
		if (this.getFormGroup.password.errors) {
			if (this.getFormGroup.password.errors.required) {
				this.pwStrength = 0
				return
			}

			if (this.getFormGroup.password.errors.minlength) {
				this.pwStrength--
			}
		}

		if (
			this.user.password.match('[!-/]') == null ||
			this.user.password.match('[A-Z]') == null ||
			this.user.password.match('[a-z]') == null ||
			this.user.password.match('[0-9]') == null
		) {
			this.pwStrength--
		}
		console.log(this.pwStrength);
	}
  
	create() {
		if (this.formGroup.invalid || this.pwStrength < 3) {
			Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error")
			return
		}
		this.usersService.create(this.user).subscribe(data => {
			
			this.router.navigate(["user-profile"])
		})
	}
}
