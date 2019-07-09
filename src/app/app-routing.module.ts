import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { DirectoryComponent} from './directory/directory.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'directory', component: DirectoryComponent},
  { path: 'directory/:fruit', component: DirectoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
