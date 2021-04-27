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
          console.log('Delete clicked');
        }
      }, {
        text: 'Modificar',
        icon: 'pencil',
        handler: () => {
          this.fn_modificarUsuario(id)
          console.log('Edit clicked', id);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ngOnInit() {
    this.get_user();

  }
  get_user() {
    console.log(localStorage.getItem('token'))

    this.serviciosServices.get_usuarios(localStorage.getItem('token')).subscribe(resp => {
      this.aPeces = resp['usuarios']
      console.log('login', resp)
      console.log(this.aPeces)
    })


  }
  delete_user(id) {
    console.log(localStorage.getItem('token'))

    this.serviciosServices.delete_user(id, localStorage.getItem('token')).subscribe(resp => {
      this.get_user();
      console.log('login', resp)

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
    console.log('Begin async operation');

    setTimeout(() => {
      this.get_user();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
