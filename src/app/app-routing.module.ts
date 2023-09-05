import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimSearchComponent } from './Components/claim-search/claim-search.component';
import { LoginComponent } from './Components/login/login.component';
import { MainMenuComponent } from './Components/main-menu/main-menu.component';
import { MemberSearchComponent } from './Components/member-search/member-search.component';
import { ProviderSearchComponent } from './Components/provider-search/provider-search.component';
import { ClaimAdjustmentsComponent } from './Components/side-menu-components/claim-adjustments/claim-adjustments.component';
import { ClaimsComponent } from './Components/side-menu-components/claims/claims.component';
import { EncountersComponent } from './Components/side-menu-components/encounters/encounters.component';
import { MembersComponent } from './Components/side-menu-components/members/members.component';
import { ProvidersComponent } from './Components/side-menu-components/providers/providers.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';

const routes: Routes = [
    { path: '', component: MainMenuComponent,pathMatch:'full' },
   { path: 'main', component: MainMenuComponent },
  {path : 'Claims Number Search',component:ClaimSearchComponent},
  {path : 'encounters',component:EncountersComponent},
  {path : 'claimAdjustments',component:ClaimAdjustmentsComponent},
  {path : 'providers',component:ProvidersComponent},
  {path : 'members',component:MembersComponent},
  { path: 'claims', component: ClaimsComponent },
  {path : 'provider/Name Search',component:ProviderSearchComponent},
  {path : 'member/Name Search',component:MemberSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
