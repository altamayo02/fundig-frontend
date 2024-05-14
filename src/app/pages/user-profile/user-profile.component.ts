import { Component, OnInit } from '@angular/core';
import { decodeJwt } from 'jose';
import { UserModel } from 'src/app/models/user/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: UserModel

  constructor(
	private usersService: UsersService
  ) {
	let userData: any = decodeJwt(sessionStorage.getItem("token"))
	this.usersService.findByMongoId(userData._id).subscribe(user => {
		this.user = user
		console.log(this.user);
	})
  }

  ngOnInit() {}

}
