import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'account' },
  { path: 'account', loadChildren: async () => (await import('../app/account-info/account-info.module')).AccountInfoModule },
  { path: 'augments', loadChildren: async () => (await import('../app/augments/augments.module')).AugmentsModule },
  { path: 'cars', loadChildren: async () => (await import('../app/cars/cars.module')).CarsModule },
  { path: 'daily-gift', loadChildren: async () => (await import('../app/daily-gift/daily-gift.module')).DailyGiftModule },
  { path: 'ftue', loadChildren: async () => (await import('../app/ftue-progress/ftue-progress.module')).FtueProgressModule },
  { path: 'fuel', loadChildren: async () => (await import('../app/fuel/fuel.module')).FuelModule },
  { path: 'fusion-credits', loadChildren: async () => (await import('../app/fusion-credits/fusion-credits.module')).FusionCreditsModule },
  { path: 'iap-receipts', loadChildren: async () => (await import('../app/iap-receipts/iap-receipts.module')).IapReceiptsModule },
  { path: 'offer-receipts', loadChildren: async () => (await import('../app/offer-receipts/offer-receipts.module')).OfferReceiptsModule },
  { path: 'player-errors', loadChildren: async () => (await import('../app/player-errors/player-errors.module')).PlayerErrorsModule },
  { path: 'social-accounts', loadChildren: async () => (await import('../app/social-accounts/social-accounts.module')).SocialAccountsModule },
  { path: 'resources', loadChildren: async () => (await import('../app/resources/resources.module')).ResourcesModule },
  //{ path: '**', redirectTo: 'account' }
]
