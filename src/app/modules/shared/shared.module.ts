import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, NzModalModule, NzSelectModule, pt_BR } from 'ng-zorro-antd';

const NG_MODULES = [
  ReactiveFormsModule,
  FormsModule,
  NgZorroAntdModule,
  NzSelectModule,
  NzModalModule
];

@NgModule({
  imports: [CommonModule, ...NG_MODULES],
  declarations: [],
  exports: [...NG_MODULES],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }]
})
export class SharedModule {}
