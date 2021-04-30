import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ServiciosService } from '../services/servicios.service';
import { PezPage } from './pez/pez.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  aPeces=[];
  constructor(public actionSheetController: ActionSheetController,
    private serviciosServices:ServiciosService,
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
            this.delete_pez(id)

          }
        }, {
          text: 'Modificar',
          icon: 'pencil',
          handler: () => {
            this.fn_modificarPez(id)

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
ngOnInit(){
  this.get_pez();

}
  get_pez(){
    this.serviciosServices.get_peces(localStorage.getItem('token')).subscribe(resp =>{
      this.aPeces=resp['pez']
    })


    

  }

  delete_pez(id) {
    this.serviciosServices.delete_pez(id, localStorage.getItem('token')).subscribe(resp => {
      this.get_pez();
    })


  }

  async fn_agregarPez() {
    
    const modal = await this.modalCtrl.create({

      component: PezPage,
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


  async fn_modificarPez(id) {
    const modal = await this.modalCtrl.create({
      component: PezPage,
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
      this.get_pez();
      event.target.complete();
    }, 2000);
  }
}
