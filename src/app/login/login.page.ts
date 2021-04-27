import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router'
import { ServiciosService } from '../services/servicios.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: String;
  public password: String;
  constructor(
    public modalCtrl: ModalController,
    private serviciosServices : ServiciosService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  login(){
    let datos = {
      email: this.email,
      password: this.password
    }

    this.serviciosServices.login(datos).subscribe(resp =>{
      this.router.navigateByUrl('/tabs')
      localStorage.setItem("token", resp['token'])
      this.dismiss()
      console.log('login', resp)
    })
    console.log(datos)
    

  }
}
