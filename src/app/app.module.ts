import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { MainMenuComponent } from './Components/main-menu/main-menu.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ClaimsComponent } from './Components/side-menu-components/claims/claims.component';
import { MembersComponent } from './Components/side-menu-components/members/members.component';
import { ProvidersComponent } from './Components/side-menu-components/providers/providers.component';
import { ClaimAdjustmentsComponent } from './Components/side-menu-components/claim-adjustments/claim-adjustments.component';
import { EncountersComponent } from './Components/side-menu-components/encounters/encounters.component';
import { SharedService } from './services/shared.service';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaimSearchComponent } from './Components/claim-search/claim-search.component';
import { DatabaseService } from './services/database.service';
import { HttpClientModule } from '@angular/common/http';
import { ProviderSearchComponent } from './Components/provider-search/provider-search.component';
import { MemberSearchComponent } from './Components/member-search/member-search.component';
import { BaseComponent } from './Components/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MainMenuComponent,
    NavBarComponent,
    ClaimsComponent,
    MembersComponent,
    ProvidersComponent,
    ClaimAdjustmentsComponent,
    EncountersComponent,
    LoginComponent,
    ClaimSearchComponent,
    ProviderSearchComponent,
    MemberSearchComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
