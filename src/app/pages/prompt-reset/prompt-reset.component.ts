import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-prompt-reset',
  templateUrl: './prompt-reset.component.html',
  styleUrls: ['./prompt-reset.component.scss']
})
export class PromptResetComponent implements OnInit {
  code: string
  matches: boolean
  password: string
  confirmedPassword: string
  user: User

  constructor() {
	this.user = new User()
	this.matches = true
  }

  ngOnInit(): void {
  }


  promptReset() {
	
  }
}
