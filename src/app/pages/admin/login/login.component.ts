import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    loginObj:any = {
      userName: '',
      password: ''
    }

    constructor(private router: Router) {}

    onLogin() {
      if(this.loginObj.userName == 'admin' && this.loginObj.password == "334455"){
        this.router.navigateByUrl('/products')
      }else {
        alert("Wrong credetials!");
      }
    }
}
