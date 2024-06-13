import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/repositories/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  headers: string[]
  users: User[]

  constructor(
    private theUsersService: UsersService,
    private router: Router,
  ) {
    // this.headers = Object.keys(new User())
    this.headers = [
      "ID",
      "Name",
      "E-mail",
      "Role"
    ]
    // Passwords are encrypted anyway
    // this.headers.splice(this.headers.indexOf("password"), 1)
    this.users = []
  }

  ngOnInit(): void {
    this.list()
  }

  create() {

  }

  list() {
    this.theUsersService.list().subscribe(users => {
      this.users = users
      console.log(JSON.stringify(users))
      console.log(users);
    })
  }

  view(id: number) {
    this.router.navigate(['users/view/', id])
  }

  update(id: number) {
    this.router.navigate(['users/update/', id])
  }

  remove(id: number) {
    this.theUsersService.delete(id).subscribe(() => {
      this.router.navigate(['services/delete'])
    })
  }
}
