import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsoleFormComponent} from './console-form/console-form.component'

const routes: Routes = [
  {path: "Console", component: ConsoleFormComponent},
  {path: "", redirectTo: "/Console", pathMatch: "full"},
  {path: "**", component: ConsoleFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
