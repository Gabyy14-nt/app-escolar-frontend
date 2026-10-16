import { Component, inject, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared.imports';
// import { CookieService } from 'ngx-cookie-service';
// import { NgxMaskDirective } from 'ngx-mask';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Router } from 'express'; 

@Component({
  selector: 'app-login-screen',
  imports: [
    ...SHARED_IMPORTS,
    // NgxMaskDirective,
    NgClass,
    FormsModule
],
  templateUrl: './login-screen.html',
  styleUrl: './login-screen.scss',
})

export class LoginScreen implements OnInit {

  // Se definen las variables globales que se utilizarán en el componente
  public username: string = '';
  public password: string = '';
  public load: boolean = false;
  public errors: any = {};
  public typeInput: string = 'password';

  // private cookies = inject(CookieService);

  constructor() {
    // this.cookies.set('sesion', 'valor');
    // const valor = this.cookies.get('sesion');
  }

  ngOnInit(): void {

  }
  public login(){

  }
  public showPassword(){

  }
  public registrar(){

  }
  public olvideContrasena(){

  }

}


