import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CosmetiquesComponent } from './cosmetiques/cosmetiques.component';
import { AddCosmetiqueComponent } from './add-cosmetique/add-cosmetique.component';
import { UpdateCosmetiqueComponent } from './update-cosmetique/update-cosmetique.component';

const routes: Routes = [
  {path : "cosmetiques", component : CosmetiquesComponent},
  {path: "add-cosmetique", component : AddCosmetiqueComponent},
  {path: "updateCosmetique/:id", component: UpdateCosmetiqueComponent},
  { path: "", redirectTo: "cosmetiques", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
