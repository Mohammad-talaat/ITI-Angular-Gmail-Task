import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-gmail-task-4';
  isSideNavOpened:boolean = true;
  isCategoriesOpened:boolean = false;
  isMoreIconOpened:boolean = false;


}
