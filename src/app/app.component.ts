import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'MHC-DEMO-PROJECT';

    selectedMenuItem!: string;
    //isLoggedIn: boolean = false;
    constructor(public sharedService: SharedService) {}

    ngOnInit() {
      this.sharedService.selectedMenuItem$.subscribe(item => {
        //debugger
        this.selectedMenuItem = item;
      });
    }
  }
