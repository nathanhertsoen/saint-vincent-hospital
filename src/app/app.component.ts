import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  title = 'Hôpital Saint Vincent et les Grenadines';

  someMethod() {
    this.trigger.openMenu();
  }
}
