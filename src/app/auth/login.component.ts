import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.email, this.password)
    .then(() => {
      this.snackBar.open(`${this.email} cadastrado com sucesso`, 'Fechar', {
        duration: 2000
      });
      this.router.navigate(['']);
    })
    .catch(err => {
      this.snackBar.open('Não foi possível cadastrar usuário', 'Fechar', {
        duration: 2000
      });
      this.email = this.password = '';
      console.log(err);
    });
  }

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.snackBar.open(`Bem vindo ${this.email}`, 'Fechar', {
          duration: 2000
        });
        this.router.navigate(['']);
      })
      .catch(err => {
        this.snackBar.open('Usuário e/ou senha incorretos', 'Fechar', {
          duration: 2000
        });
        this.email = this.password = '';
        console.log(err);
      });
  }

}
