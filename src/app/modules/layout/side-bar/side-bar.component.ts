import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Menu } from '../../shared/models/menus';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menu$: Observable<Menu[]>;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menu$ = this.menuService.menu$;
  }
}
