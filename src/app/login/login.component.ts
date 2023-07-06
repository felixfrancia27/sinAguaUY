import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username!: string;
  public password!: string;

  constructor(private router: Router) { }

  login() {
    let data = { message: "" }
    if (this.username == 'ldefritas' && this.password == 'toto') {
      sessionStorage.setItem('Fase', 'Deposito2');
      this.router.navigate(['/main']);
    } else if (this.username == 'mdelgado' && this.password == 'toto') {
      sessionStorage.setItem('Fase', 'Administracion');
      sessionStorage.setItem('Usuario', this.username);
      this.router.navigate(['/main']);
    } else if (this.username == 'vromero' && this.password == 'toto') {
      sessionStorage.setItem('Fase', 'Administracion');
      sessionStorage.setItem('Usuario', this.username);
      this.router.navigate(['/main']);
    } else if (this.username == 'fpaleso' && this.password == 'toto') {
      sessionStorage.setItem('Fase', 'Deposito1');
      sessionStorage.setItem('Usuario', this.username);
      this.router.navigate(['/main']);
    } else if (this.username == 'casa' && this.password == 'toto') {
      sessionStorage.setItem('Fase', 'Casa');
      sessionStorage.setItem('Usuario', this.username);
      this.router.navigate(['/main']);
    } else {
      data.message = "!Los campos están vacíos, por favor verifique!";
      this.abrirDialogo(data);
    }
  }

  abrirDialogo(data: any) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: data.message,
    });
  }
}
