import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { Router, ActivatedRoute } from '@angular/router'
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public email: String;
  public password: String;
  public rol: String;
  public displayName: String;
  public id:any;
  public editar:boolean;
  constructor(
    public modalCtrl: ModalController,
    private serviciosServices : ServiciosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    navParams: NavParams

  ) { 
    this.id =  navParams.get('id')
    this.editar =  navParams.get('editar')
  }

  ngOnInit() {
    console.log(this.id, this.editar)
    this.get_userId();
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  add_user(){
    let datos = {
      displayName:this.displayName,
      email: this.email,
      password: this.password
    }
    console.log(datos) 

    this.serviciosServices.add_user(datos, localStorage.getItem('token')).subscribe(resp =>{
      this.dismiss()
      console.log('User', resp)
    })
    console.log(datos)
    

  }

  edit_user(){
    let datos = {
      displayName:this.displayName,
      email: this.email,
    }
    console.log(datos) 

    this.serviciosServices.edit_user(this.id, datos, localStorage.getItem('token')).subscribe(resp =>{
      this.dismiss()
      console.log('User', resp)
    })
    console.log(datos)
    

  }

  get_userId(){
    console.log(this.id)
    this.serviciosServices.get_usuario(this.id,localStorage.getItem('token')).subscribe(resp => {
      this.email = resp['usuario'].email
      this.displayName = resp['usuario'].displayName
      if (resp['usuario'].displayName=="Administrador") {
        this.rol = "Administrador"
      }else{
        this.rol= "Cliente"
      }
      console.log('login', resp)

    })

  }
}
