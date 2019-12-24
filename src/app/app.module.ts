import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbCarouselConfig, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
<<<<<<< HEAD
// import { AuthGuard } from './_guards/auth.guard';
=======
import { AuthGuard } from './_guards/auth.guard';
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
import { AlertComponent } from './_directives/alert.component';
import { AlertService } from './_services/alert.service';
import { AuthService } from './_services/auth.service';
import { NgxPaginationModule } from "ngx-pagination";
import { OrderModule } from "ngx-order-pipe";
<<<<<<< HEAD
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



=======
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
// Routing
import { routing } from './app.routing';

// Components
import { AppComponent } from './app.component';

import { SettingsModule } from './_layout/settings/settings.module';
import { ThemeSettingsConfig } from './_layout/settings/theme-settings.config';
import { MenuSettingsConfig } from './_layout/settings/menu-settings.config';

import { HeaderComponent } from './_layout/header/header.component';
import { VerticalComponent as HeaderVerticalComponent } from './_layout/header/vertical/vertical.component';
import { HorizontalComponent as HeaderHorizontalComponent } from './_layout/header/horizontal/horizontal.component';
import { FullLayoutNavbarComponent } from './_layout/header/full-layout-navbar/full-layout-navbar.component';

import { FooterComponent } from './_layout/footer/footer.component';
import { NavigationComponent as AppNavigationComponent } from './_layout/navigation/navigation.component';

import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';

import { RegisterComponent } from './register';
import { SocialSigninComponent } from './social-signin/social-signin.component';
import { LoginComponent } from './login';

import { ChangelogComponent } from './changelog/changelog.component';

import { NavbarService } from './_services/navbar.service';
import { VerticalnavComponent } from './_layout/navigation/verticalnav/verticalnav.component';
import { HorizontalnavComponent } from './_layout/navigation/horizontalnav/horizontalnav.component';

// perfect scroll bar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// spinner
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { DeviceDetectorModule } from 'ngx-device-detector';
import { RouterModule } from '@angular/router';
import { CustomizerComponent } from './_layout/customizer/customizer.component';
import { PartialsModule } from './content/partials/partials.module';
import { BreadcrumbModule } from './_layout/breadcrumb/breadcrumb.module';
import { DataApiService } from './_services/data.api';
import { HorizontalCustomizerComponent } from './_layout/customizer/horizontal-customizer/horizontal-customizer.component';
import { BlockTemplateComponent } from './_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { MatchHeightModule } from './content/partials/general/match-height/match-height.module';
import { FullLayoutComponent } from './_layout/full-layout/full-layout.component';
import { ForgotUserComponent } from './auth/forgot-user/forgot-user.component';
import { ForgotPasswrodComponent } from './auth/forgot-passwrod/forgot-passwrod.component';
import { CommonComponent } from './common/common.component';
import { HelpComponent } from './firstadmin/help/help.component';
import { MarketComponent } from './firstadmin/market/market.component';
import { GetsocialComponent } from './firstadmin/getsocial/getsocial.component';
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
<<<<<<< HEAD
=======

>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationDialogComponent } from './_utils/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './_utils/confirmation-dialog/confirmation-dialog.service'

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
<<<<<<< HEAD


import { from } from 'rxjs';;


import { SetusernameComponent } from './auth/setusername/setusername.component';
import { ImportFilesDialogComponent } from './_utils/import-files-dialog/import-files-dialog.component';
import { ImportFilesDialogService } from './_utils/import-files-dialog/import-files-dialog.service';
import { TreeModule } from 'angular-tree-component';
import { NgxDataTableModule } from 'projects/ngx-data-table/src/public_api';


=======
import { from } from 'rxjs';;
import { SetusernameComponent } from './auth/setusername/setusername.component';
import { ImportFilesDialogComponent } from './_utils/import-files-dialog/import-files-dialog.component';
import { ImportFilesDialogService } from './_utils/import-files-dialog/import-files-dialog.service';
import { SearchContactComponent } from './firstadmin/search-contact/search-contact.component';
import { ContactInformationComponent } from './firstadmin/contact-information/contact-information.component';
import { ProspectLandingComponent } from './firstadmin/prospect-landing/prospect-landing.component';
import { ProductSearchComponent } from './firstadmin/product-search/product-search.component';
import { ProductsListComponent } from './firstadmin/products-list/products-list.component';
import { ThemesListComponent } from './firstadmin/themes-list/themes-list.component';
import { PersonalMessageComponent } from './firstadmin/personal-message/personal-message.component';
import { ConfirmCampaignComponent } from './firstadmin/confirm-campaign/confirm-campaign.component';;
import { HostThemesListComponent } from './firstadmin/host-themes-list/host-themes-list.component';
import { HostMessageComponent } from './firstadmin/host-message/host-message.component';
import { HostConfirmComponent } from './firstadmin/host-confirm/host-confirm.component';
import { JoinThemesListComponent } from './firstadmin/join-themes-list/join-themes-list.component';
import { JoinMessageComponent } from './firstadmin/join-message/join-message.component';;
import { JoinConfirmComponent } from './firstadmin/join-confirm/join-confirm.component';
import { CreateContactComponent } from './firstadmin/create-contact/create-contact.component';;
import { CustomerSearchComponent } from './firstadmin/customer-search/customer-search.component'
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

<<<<<<< HEAD

import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';


import {
  MatIconModule,
  MatButtonModule,
  MatCardModule } from '@angular/material';;
import { FacebookpostComponent } from './firstadmin/getsocial/facebookpost/facebookpost.component'
;
import { CustomfbpostComponent } from './firstadmin/getsocial/customfbpost/customfbpost.component'
;
import { ViewfbpostComponent } from './firstadmin/getsocial/viewfbpost/viewfbpost.component'
;
import { MsgsnipetaddsnipetComponent } from './firstadmin/getsocial/msgsnipetaddsnipet/msgsnipetaddsnipet.component'
;
import { MsgsnipetComponent } from './firstadmin/getsocial/msgsnipet/msgsnipet.component'
;
import { ScheduleComponent } from './firstadmin/getsocial/schedule/schedule.component'
;
import { FbcampaignnameComponent } from './firstadmin/getsocial/fbcampaignname/fbcampaignname.component';
import { FbnotesComponent } from './firstadmin/getsocial/fbnotes/fbnotes.component';
import { FbheadupComponent } from './firstadmin/getsocial/fbheadup/fbheadup.component';
import { SelectpostComponent } from './firstadmin/getsocial/selectpost/selectpost.component';
import { SchedulepostComponent } from './firstadmin/getsocial/schedulepost/schedulepost.component';
import { UpcomingpostComponent } from './firstadmin/getsocial/upcomingpost/upcomingpost.component' ;
import { LinktofbComponent } from './firstadmin/getsocial/linktofb/linktofb.component';
import { SetupfbComponent } from './firstadmin/getsocial/setupfb/setupfb.component';;
import { SeriespostComponent } from './firstadmin/getsocial/seriespost/seriespost.component';
import { CookieService } from 'ngx-cookie-service';
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('246222385503381')
  }
]);

export function provideConfig() {
  return config;
}



=======
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
@NgModule({
    imports: [
        BrowserModule,
        PartialsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatchHeightModule,
        BreadcrumbModule,
        NgbModule,
        FormsModule,
<<<<<<< HEAD
        // NgxDatatableModule,
=======
        NgxDatatableModule,
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
        routing,
        // Settings modules
        SettingsModule.forRoot(ThemeSettingsConfig, MenuSettingsConfig),
        PerfectScrollbarModule,
        NgxSpinnerModule,
        NgxPaginationModule,
        OrderModule,
        DeviceDetectorModule.forRoot(),
        ToastrModule.forRoot(),
        LoadingBarRouterModule,
        DeviceDetectorModule.forRoot(),
        LoadingBarRouterModule,
        Ng2SearchPipeModule,
        MatSlideToggleModule,
<<<<<<< HEAD
        SocialLoginModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
        TreeModule.forRoot(),
        BlockUIModule.forRoot({
            template: BlockTemplateComponent
        }),
        NgxDataTableModule
=======
        BlockUIModule.forRoot({
            template: BlockTemplateComponent
        })
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
    ],
    declarations: [
        AppComponent,
        PublicLayoutComponent,
        PrivateLayoutComponent,
        HeaderComponent,
        FullLayoutNavbarComponent,
        HeaderHorizontalComponent,
        HeaderVerticalComponent,
        FooterComponent,
        AppNavigationComponent,
        AlertComponent,
        RegisterComponent,
        SocialSigninComponent,
        LoginComponent,
        ChangelogComponent,
        VerticalnavComponent,
        HorizontalnavComponent,
        CustomizerComponent,
        HorizontalCustomizerComponent,
        BlockTemplateComponent,
        FullLayoutComponent,
        ForgotUserComponent,
        ForgotPasswrodComponent,
        CommonComponent,
        HelpComponent,
        MarketComponent,
        GetsocialComponent,
        QuicktextComponent,
        ReplunishmentComponent,
        CrosssellComponent,
        MydashboardComponent,
<<<<<<< HEAD
       
        FirstadminComponent,
       
=======
        FirstadminComponent,
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
        SocialpostComponent,
        TypeofpostComponent,
        EventhostComponent,
        SearchforhostComponent,
        HostedcampaignsComponent,
<<<<<<< HEAD
       
        ResetpasswordComponent,
       
        ConfirmationDialogComponent,
        SetusernameComponent,
        FacebookpostComponent,
        CustomfbpostComponent,
        ViewfbpostComponent
,
        MsgsnipetaddsnipetComponent
,
        MsgsnipetComponent ,
        ScheduleComponent ,
        FbcampaignnameComponent ,
        FbnotesComponent ,
        FbheadupComponent,
        SetupfbComponent,
        LinktofbComponent,
        UpcomingpostComponent,
        SchedulepostComponent,
        ImportFilesDialogComponent,
        SelectpostComponent,
        SeriespostComponent],
    providers: [
        // AuthGuard,
=======
        ResetpasswordComponent,     
        ConfirmationDialogComponent,
        SetusernameComponent,
        ImportFilesDialogComponent,
        SearchContactComponent , 
        ContactInformationComponent ,
        ProspectLandingComponent ,
        ProductSearchComponent ,
        ProductsListComponent ,
        ThemesListComponent ,
        PersonalMessageComponent,
        ConfirmCampaignComponent,
        HostThemesListComponent ,
        HostMessageComponent ,
        HostConfirmComponent ,
        JoinThemesListComponent ,
        JoinMessageComponent ,
        JoinConfirmComponent ,
        CreateContactComponent ,
        CustomerSearchComponent],
    providers: [
        AuthGuard,
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
        AlertService,
        NavbarService,
        DataApiService,
        AuthService,
<<<<<<< HEAD
        CookieService,
       {provide: AuthServiceConfig,
        useFactory: provideConfig},
=======
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerGestureConfig
        },
        NgbCarouselConfig,
        NgbModalConfig,
        ConfirmationDialogService,
        ImportFilesDialogService
    ],
    entryComponents: [
        BlockTemplateComponent,
        ConfirmationDialogComponent,
<<<<<<< HEAD
         ImportFilesDialogComponent
=======
        ImportFilesDialogComponent
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
    ],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})

export class AppModule {

}
