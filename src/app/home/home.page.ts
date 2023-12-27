import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  manMenu: any[];

  womanMenu: any[];

  footerColumn1: any[];

  footerColumn2: any[];

  constructor(
    private readonly menuSrv: MenuService,
    private readonly footerSrv: FooterService
  ) { 
    this.manMenu = this.menuSrv.manMenu;
    this.womanMenu = this.menuSrv.womanMenu;
    this.footerColumn1 = this.footerSrv.footerColumn1
    this.footerColumn2 = this.footerSrv.footerColumn2
  }

}
