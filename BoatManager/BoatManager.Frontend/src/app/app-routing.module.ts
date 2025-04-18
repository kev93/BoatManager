import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UpdateBoatComponent } from './pages/update-boat/update-boat.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'update-boat', component: UpdateBoatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
