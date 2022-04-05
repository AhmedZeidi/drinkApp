import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { CocktailSearchComponent } from './pages/cocktail-search/cocktail-search.component';

const routes: Routes = [
  { path:'categories', component : CategoriesComponent },
  { path:'categorie/cocktails/:nomC', component : CocktailListComponent },
  { path:'cocktail/detail', component : CocktailDetailsComponent },
  { path:'conctail/search', component : CocktailSearchComponent },
  { path:'', redirectTo:'categories', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
