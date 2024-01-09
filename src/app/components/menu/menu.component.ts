import { CommonModule, Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class MenuComponent {

  @Input() menuId: string = '';

  constructor(
    public readonly menuSrv: MenuService,
    protected readonly menuCtrl: MenuController,
    protected readonly location: Location,
    protected readonly router: Router
  ) { }

  async navigate(gender: string, category: string) {
    await this.menuCtrl.close();
    // Close the menu
    await setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, 1000);
    this.router.navigate(['collection', gender, category]);
  }

  async showIsOpen() {
    console.log('menu id:', this.menuId);
  }

  navigateCart(){
    this.router.navigate(['cart']);
  }
}
