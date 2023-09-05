import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isDropdownOpen: boolean = false;
  loggedInUser = localStorage.getItem('loggedInUser');
  constructor(private sharedService: SharedService) {}
  //  toggleSidebar() {
  //   if (this.sharedService.sidebarVisible) {
  //     this.sharedService.closeSidebar();
  //   } else {
  //     this.sharedService.openSidebar();
  //   }
  toggleSidebar() {
    if (!this.sharedService.sidebarVisible) {
      this.sharedService.openSidebar();
    } else {
      this.sharedService.closeSidebar();
    }
  }
  toggleSignInDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
