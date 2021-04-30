import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  aPeces = [];
  constructor(
    private serviciosServices: ServiciosService) { }

    ngOnInit(){
      this.get_pez();
    
    }
  get_pez() {
    this.serviciosServices.get_peces(localStorage.getItem('token')).subscribe(resp => {
      this.aPeces = resp['pez']
    })
  }
  doRefresh(event) {
    setTimeout(() => {
      this.get_pez();
      event.target.complete();
    }, 2000);
  }
}
