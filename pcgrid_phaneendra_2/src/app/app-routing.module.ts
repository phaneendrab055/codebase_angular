import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedFiltersComponent } from './saved-filters/saved-filters.component';
import { SavedListsComponent } from './saved-lists/saved-lists.component';
import { SearchHistoryComponent } from './search-history/search-history.component';


const routes: Routes = [
  {path:'savedLists', component: SavedListsComponent},
  {path:'savedFilters', component: SavedFiltersComponent},
  {path:'searchHistory', component: SearchHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
