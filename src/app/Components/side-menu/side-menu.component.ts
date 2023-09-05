import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  //isCollapsed = true;
  //selectedItem: string | null = null;
  showSubItems = false;
  activeMainItem: string = '';

  claimsSubItems = [
    'Claims Number Search',
    'Check Number Search With Date Range ',
    'Multi Claim Number Type Search',
    'Multi Claim Number Load File Search',
  ];
  memberSubItems = ['Member ID', 'Name Search', 'TaxID'];
  providerSubItems = ['ProviderID', 'NPI', 'Name Search'];
  claimAdjustmentsSubItems = [
    'Quick Update (Amounts Only)',
    'Full Update',
    'EDI Adjustment',
  ];
  selectedSubItem: string | null = null;
  subItemsActive = false;

  constructor(public sharedService: SharedService) {}

  handleLinkClick(event: Event, menuItem: string) {
    event.stopPropagation();

   // this.selectedSubItem = ''
    this.sharedService.setSelectedMenuItem(menuItem);
   // this.sharedService.openSidebar();
  }

  toggleSubItems(mainItem: string) {
    if (this.activeMainItem === mainItem) {
      // If the sub-items of the clicked main item are already shown, hide them
      this.activeMainItem = '';
    } else {
      // If a different main item is clicked, show its sub-items
      this.activeMainItem = mainItem;
      //this.showSubItems = !this.showSubItems
    }
    this.subItemsActive = this.activeMainItem !== '';
  }

  selectSubItem(event: Event, subItem: string) {
    event.stopPropagation(); // Stop event propagation to prevent closing the main item
    this.selectedSubItem = subItem;
  }
}
