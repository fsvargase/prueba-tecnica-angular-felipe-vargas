import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component:HomeComponent
  },

  {
    path: 'game-list',
    component:GameListComponent
  },
  {
    path: 'game-details/:id',
    component:GameDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
