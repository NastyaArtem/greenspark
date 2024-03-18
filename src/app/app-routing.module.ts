import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "widgets",
  loadChildren: () => import('./modules/widgets/widgets.module').then(m => m.WidgetsModule)
},
{
  path: "**",
  redirectTo: "widgets"
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
