import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { PlayerErrorsComponent } from './player-errors/player-errors.component';
import { IapReceiptsComponent } from './iap-receipts/iap-receipts.component';
import { OfferReceiptsComponent } from './offer-receipts/offer-receipts.component';
import { SocialAccountsComponent } from './social-accounts/social-accounts.component';
import { CarsComponent } from './cars/cars.component';
import { ResourcesComponent } from './resources/resources.component';
import { AugmentsComponent } from './augments/augments.component';
import { FuelComponent } from './fuel/fuel.component';
import { DailyGiftComponent } from './daily-gift/daily-gift.component';
import { FtueProgressComponent } from './ftue-progress/ftue-progress.component';
import { FusionCreditsComponent } from './fusion-credits/fusion-credits.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AccountInfoComponent,
    PlayerErrorsComponent,
    IapReceiptsComponent,
    OfferReceiptsComponent,
    SocialAccountsComponent,
    CarsComponent,
    ResourcesComponent,
    AugmentsComponent,
    FuelComponent,
    DailyGiftComponent,
    FtueProgressComponent,
    FusionCreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
