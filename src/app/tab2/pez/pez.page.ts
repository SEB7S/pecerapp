import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { Router, ActivatedRoute } from '@angular/router'
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-pez',
  templateUrl: './pez.page.html',
  styleUrls: ['./pez.page.scss'],
})
export class PezPage implements OnInit {
  public pk_nombre: String;
  public fk_comportamiento: String;
  public fk_tipotamano: String;
  public oxigeno: String;
  public calefaccion: String;


  public id: any;
  public editar: boolean;
  constructor(
    public modalCtrl: ModalController,
    private serviciosServices: ServiciosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    navParams: NavParams

  ) {
    this.id = navParams.get('id')
    this.editar = navParams.get('editar')
  }

  ngOnInit() {
    this.get_pezId();
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  add_pez() {
    let datos = {
      pk_nombre: this.pk_nombre,
      fk_comportamiento: this.fk_comportamiento,
      fk_tipotamano: this.fk_tipotamano,
      oxigeno: this.oxigeno,
      calefaccion: this.calefaccion
    }
    this.serviciosServices.add_pez(datos, localStorage.getItem('token')).subscribe(resp => {
      this.dismiss()
    })
  }

  edit_pez() {
    let datos = {
      pk_nombre: this.pk_nombre,
      fk_comportamiento: this.fk_comportamiento,
      fk_tipotamano: this.fk_tipotamano,
      oxigeno: this.oxigeno,
      calefaccion: this.calefaccion
    }
    this.serviciosServices.edit_pez(this.id, datos, localStorage.getItem('token')).subscribe(resp => {
      this.dismiss()
    })
  }

  get_pezId() {
    this.serviciosServices.get_pez(this.id, localStorage.getItem('token')).subscribe(resp => {

      this.pk_nombre = resp['peces'].pk_nombre,
        this.fk_comportamiento = resp['peces'].fk_comportamiento,
        this.fk_tipotamano = resp['peces'].fk_tipotamano,
        this.oxigeno = resp['peces'].oxigeno,
        this.calefaccion = resp['peces'].calefaccion
    })

  }
}
