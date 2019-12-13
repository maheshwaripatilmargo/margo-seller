import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
// import { AuthGuard } from './_guards/auth.guard';
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

import { FacebookpostComponent } from './firstadmin/getsocial/facebookpost/facebookpost.component';
import { CustomfbpostComponent } from './firstadmin/getsocial/customfbpost/customfbpost.component';
import { ViewfbpostComponent } from './firstadmin/getsocial/viewfbpost/viewfbpost.component';
import { MsgsnipetaddsnipetComponent } from './firstadmin/getsocial/msgsnipetaddsnipet/msgsnipetaddsnipet.component';
import { MsgsnipetComponent } from './firstadmin/getsocial/msgsnipet/msgsnipet.component';
import { ScheduleComponent } from './firstadmin/getsocial/schedule/schedule.component';
import { FbcampaignnameComponent } from './firstadmin/getsocial/fbcampaignname/fbcampaignname.component';
import { FbnotesComponent } from './firstadmin/getsocial/fbnotes/fbnotes.component';
import { FbheadupComponent } from './firstadmin/getsocial/fbheadup/fbheadup.component';
import { SelectpostComponent } from './firstadmin/getsocial/selectpost/selectpost.component';
import { SchedulepostComponent } from './firstadmin/getsocial/schedulepost/schedulepost.component';
import { UpcomingpostComponent } from './firstadmin/getsocial/upcomingpost/upcomingpost.component';
import { LinktofbComponent } from './firstadmin/getsocial/linktofb/linktofb.component';
import { SetupfbComponent } from './firstadmin/getsocial/setupfb/setupfb.component';
import { SeriespostComponent } from './firstadmin/getsocial/seriespost/seriespost.component';
// import { AddnewrolesComponent } from './secondadmin/master/roles/addnewroles/addnewroles.component';

const appRoutes: Routes = [
  // Public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent, },
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
      { path: 'changelog', component: ChangelogComponent,  },

      // { path: 'common', component: CommonComponent },
      {
        path: "directseller", component: FirstadminComponent,
        //  ,
        children: [
          { path: "help", component: HelpComponent,  },

          { path: 'market', component: MarketComponent },
          //get social layout

          { path: "getsocial", component: GetsocialComponent ,},
          { path: "socialpost", component: SocialpostComponent },
          { path: "typeofpost", component: TypeofpostComponent },
          { path: "eventhost", component: EventhostComponent },
          { path: "searchhost", component: SearchforhostComponent },
          { path: "hosted", component: HostedcampaignsComponent },
          {path:"facebookpost",component:FacebookpostComponent},
          {path:"customfbpost",component:CustomfbpostComponent},
          {path:"viewfbpost", component:ViewfbpostComponent},
          {path:"msgsnipetaddsnipet", component:MsgsnipetaddsnipetComponent},
          {path:"msgsnipet", component:MsgsnipetComponent},
          {path:"seriespost", component:SeriespostComponent},

          {path:"fbcampaignname", component:FbcampaignnameComponent},
          {path:"fbnotes", component:FbnotesComponent},
          {path:"fbheadup", component:FbheadupComponent},
          {path:"selectpost", component:SelectpostComponent},
          {path:"schedulepost", component:SchedulepostComponent},
          {path:"upcomingpost", component:UpcomingpostComponent},
          {path:"linktofb", component:LinktofbComponent},
          {path:"setupfb", component:SetupfbComponent},



          {path:"schedule", component:ScheduleComponent},

          //quicktext layout
          { path: "quicktext", component: QuicktextComponent },


          { path: "replenishment", component: ReplunishmentComponent },

          { path: "crosssell", component: CrosssellComponent },

          { path: "mydashboard", component: MydashboardComponent },
        ]
      },
     
    ],
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'login' },


];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });
