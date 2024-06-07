import { Component, OnInit } from '@angular/core';
import { decodeJwt } from 'jose';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User

  constructor(
	private theUsersService: UsersService
  ) {
	let userData: any = decodeJwt(localStorage.getItem("token"))
	this.theUsersService.find(userData._id).subscribe(user => {
		this.user = user
		console.log(this.user);
	})
  }

  ngOnInit() {}
}
