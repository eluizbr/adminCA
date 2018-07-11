import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AccessRoutingModule } from './access-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginEffects } from './store/login/login.effects';
import { loginReducer } from './store/login/login.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([LoginEffects]),
    AccessRoutingModule
  ],
  declarations: [LoginComponent]
})
export class AccessModule {}
