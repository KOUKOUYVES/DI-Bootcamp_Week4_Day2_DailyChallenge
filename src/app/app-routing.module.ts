import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitDeatailsComponent } from './produit-deatails/produit-deatails.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {
    path: 'produits', component: ProduitComponent
  },
  {
    path: 'details-produit', component: ProduitDeatailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
