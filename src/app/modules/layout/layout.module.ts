import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutSettingsComponent } from './layout-settings/layout-settings.component';
import { MainComponent } from './main/main.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopHeaderComponent } from './top-header/top-header.component';

@NgModule({
  imports: [CommonModule, LayoutRoutingModule],
  declarations: [
    MainComponent,
    DashboardComponent,
    TopHeaderComponent,
    FooterComponent,
    QuickSidebarComponent,
    LayoutSettingsComponent,
    SideBarComponent
  ]
})
export class LayoutModule {}
