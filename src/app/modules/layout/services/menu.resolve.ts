import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { MenuService } from './menu.service';

@Injectable({ providedIn: 'root' })
export class MenuResolve implements Resolve<any> {
  constructor(private menuService: MenuService) {}
  resolve() {
    return this.menuService.getMenu();
  }
}
