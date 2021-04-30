import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {
  rol:"Administrador"
  rol2:"Cliente"
  rolf:any
  bMostrar=false
  constructor(private menu: MenuController, private router: Router,) {



   
  }

  ngOnInit(){

    if (localStorage.getItem("nombre") == "administrador") {
     this.bMostrar=true
    }else{

      this.bMostrar = false
    }
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  fn_logout(){
    localStorage.clear()
    this.router.navigateByUrl('/')
    
  }

  ngOnDestroy(){

  }

}
