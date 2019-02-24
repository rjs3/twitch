import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPreloadingStrategy } from './app-preloading-strategy';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: './main/main.module#MainModule',
    data: { preload: true, delay: true }
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({

  imports: [RouterModule.forRoot(routes, { 
    useHash: false,
    preloadingStrategy: AppPreloadingStrategy
  })],

  exports: [RouterModule],
  providers: [AppPreloadingStrategy]
})

export class AppRoutingModule {
}