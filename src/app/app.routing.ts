import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { ChangelogComponent } from './changelog/changelog.component';
import { ForgotUserComponent } from './auth/forgot-user/forgot-user.component';
import { ForgotPasswrodComponent } from './auth/forgot-passwrod/forgot-passwrod.component';
import { CommonComponent } from './common/common.component';
import { HelpComponent } from './firstadmin/help/help.component';
import { MarketComponent } from './firstadmin/market/market.component';
import { GetsocialComponent } from './firstadmin/getsocial/getsocial.component'
import { QuicktextComponent } from './firstadmin/quicktext/quicktext.component';
import { ReplunishmentComponent } from './firstadmin/replunishment/replunishment.component';
import { CrosssellComponent } from './firstadmin/crosssell/crosssell.component';
import { MydashboardComponent } from './firstadmin/mydashboard/mydashboard.component';
import { FirstadminComponent } from './firstadmin/firstadmin.component';
import { SocialpostComponent } from './firstadmin/getsocial/socialpost/socialpost.component';
import { TypeofpostComponent } from './firstadmin/getsocial/typeofpost/typeofpost.component';
import { EventhostComponent } from './firstadmin/getsocial/eventhost/eventhost.component';
import { SearchforhostComponent } from './firstadmin/getsocial/searchforhost/searchforhost.component';
import { HostedcampaignsComponent } from './firstadmin/getsocial/hostedcampaigns/hostedcampaigns.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { SetusernameComponent } from './auth/setusername/setusername.component';
import { SearchContactComponent } from './firstadmin/search-contact/search-contact.component';
import { ContactInformationComponent } from './firstadmin/contact-information/contact-information.component'
import { ProspectLandingComponent } from './firstadmin/prospect-landing/prospect-landing.component';
import { ProductSearchComponent } from './firstadmin/product-search/product-search.component';
import {ProductsListComponent } from './firstadmin/products-list/products-list.component';
import { ThemesListComponent } from './firstadmin/themes-list/themes-list.component';
import { PersonalMessageComponent } from './firstadmin/personal-message/personal-message.component';
import { ConfirmCampaignComponent } from './firstadmin/confirm-campaign/confirm-campaign.component';
import { HostThemesListComponent } from './firstadmin/host-themes-list/host-themes-list.component';
import { HostMessageComponent } from './firstadmin/host-message/host-message.component';
import { HostConfirmComponent } from './firstadmin/host-confirm/host-confirm.component';
import { JoinMessageComponent } from './firstadmin/join-message/join-message.component';
import { JoinConfirmComponent } from './firstadmin/join-confirm/join-confirm.component';
import { JoinThemesListComponent } from './firstadmin/join-themes-list/join-themes-list.component';
import { CreateContactComponent } from './firstadmin/create-contact/create-contact.component';
import { CustomerSearchComponent } from './firstadmin/customer-search/customer-search.component';
const appRoutes: Routes = [
  // Public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-user', component: ForgotUserComponent},
      { path: 'setusername/:token', component: SetusernameComponent },
      { path: 'forgot-pwd', component: ForgotPasswrodComponent },
      { path: "resetpwd/:token", component: ResetpasswordComponent },
      { path: '', component: LoginComponent }
    ]
  },
  // Private layout
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'logout', component: LoginComponent,
        //  canActivate: [AuthGuard] 
      },
      { path: 'changelog', component: ChangelogComponent, canActivate: [AuthGuard] },

      // { path: 'common', component: CommonComponent },
      {
        path: "directseller", component: FirstadminComponent,
        // canActivate: [AuthGuard] ,
        children: [
          { path: "help", component: HelpComponent, canActivate: [AuthGuard] },

          { path: 'market', component: MarketComponent },
          { path: 'searchContact', component: SearchContactComponent,
            children: []},
          { path: 'contactInformation', component: ContactInformationComponent },
          { path: 'propspectLanding', component: ProspectLandingComponent },
          { path: 'searchProduct', component: ProductSearchComponent },
          { path: 'productsList', component: ProductsListComponent },
          { path: 'themesList', component: ThemesListComponent },
          { path: 'personalMessage', component: PersonalMessageComponent },
          { path: 'confirmCampaign', component: ConfirmCampaignComponent },
          { path: 'hostThemes', component: HostThemesListComponent},
          { path: 'hostPersonalMessage', component: HostMessageComponent},
          { path: 'hostConfirmCampaign', component: HostConfirmComponent},
          { path: 'joinThemes', component: JoinThemesListComponent},
          { path: 'joinPersonalMessage', component: JoinMessageComponent},
          { path: 'joinConfirmCampaign', component: JoinConfirmComponent},
          { path: 'createContact', component: CreateContactComponent},
          //get social layout

          { path: "getsocial", component: GetsocialComponent ,canActivate: [AuthGuard]},
          { path: "socialpost", component: SocialpostComponent },
          { path: "typeofpost", component: TypeofpostComponent },
          { path: "eventhost", component: EventhostComponent },
          { path: "searchhost", component: SearchforhostComponent },
          { path: "hosted", component: HostedcampaignsComponent },
          //quicktext layout
          { path: "quicktext", component: QuicktextComponent },


          { path: "replenishment", component: ReplunishmentComponent },

          { path: "crosssell", component: CrosssellComponent },

          { path: "mydashboard", component: MydashboardComponent },
          { path: "searchCustomer", component: CustomerSearchComponent}
        ]
      },
     
    ],
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'login' },


];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });
