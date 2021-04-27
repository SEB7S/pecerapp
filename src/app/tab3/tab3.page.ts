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
    console.log(localStorage.getItem('token'))

    this.serviciosServices.get_peces(localStorage.getItem('token')).subscribe(resp => {
      this.aPeces = resp['pez']
      console.log('login', resp)
      console.log(this.aPeces)
    })
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.get_pez();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
