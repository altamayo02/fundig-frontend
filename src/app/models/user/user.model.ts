import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.model.html',
  styleUrls: ['./user.model.scss']
})
export class UserModel {
	id?: number;
    cc?: string;
    names?: string;
    surnames?: string;
    email: string;
    password: string;
    city?: string;
    address?: string;

	constructor() { }
}
