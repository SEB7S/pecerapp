import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { UsuariosService } from '../services/usuarios.service';
import { ServiciosService } from '../services/servicios.service';
import { LoginPage } from '../login/login.page';
import { UserPage } from './user/user.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  aPeces = [];
  constructor(public actionSheetController: ActionSheetController,
    private serviciosServices: ServiciosService,
    public modalCtrl: ModalController) { }

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Usuarios',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.delete_user(id)

        }
      }, {
        text: 'Modificar',
        icon: 'pencil',
        handler: () => {
          this.fn_modificarUsuario(id)
   
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
    
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();

  }
  ngOnInit() {
    this.get_user();

  }
  get_user() {


    this.serviciosServices.get_usuarios(localStorage.getItem('token')).subscribe(resp => {
      this.aPeces = resp['usuarios']

    })


  }
  delete_user(id) {


    this.serviciosServices.delete_user(id, localStorage.getItem('token')).subscribe(resp => {
      this.get_user();


    })


  }

  async fn_agregarUsuario() {
    
    const modal = await this.modalCtrl.create({

      component: UserPage,
      componentProps: {
        'editar':false
      },
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
      swipeToClose: true,
    })
    
    return await modal.present();

  }

  async fn_modificarUsuario(id) {
    const modal = await this.modalCtrl.create({
      component: UserPage,
      componentProps: {
        'id': id,
        'editar':true
      },
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
      swipeToClose: true,
    })
   
    return await modal.present();

  }

  doRefresh(event) {


    setTimeout(() => {
      this.get_user();

      event.target.complete();
    }, 2000);
  }
}
