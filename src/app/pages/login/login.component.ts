import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    const model = loginForm.value;
    console.log(model)
    this.auth.login(model.username, model.password).subscribe({
      next: res => {
        if (res.length > 0) {
          localStorage.setItem('username', model.username);
          localStorage.setItem('password', model.password);
          this.route.navigate(['/dash']).then(r => console.log(r));
        }else {
          alert('Invalid username or password')
        }
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
