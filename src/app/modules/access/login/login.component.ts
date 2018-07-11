import { Component, OnDestroy, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    $('body').addClass('empty-layout');
  }

  ngOnDestroy() {
    $('body').removeClass('empty-layout');
  }
}
