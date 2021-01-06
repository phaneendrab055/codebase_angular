import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { NavbarSearchComponent } from './navbar-search/navbar-search.component';
import { SavedListsComponent } from './saved-lists/saved-lists.component';
import { SavedFiltersComponent } from './saved-filters/saved-filters.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    NavbarSearchComponent,
    SavedListsComponent,
    SavedFiltersComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
