import { Component, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.css']
})
export class NavbarSearchComponent {
  
  @Output() emitSearchQuery: EventEmitter<string>;
  search_query="";

  constructor(private router:Router) {
    this.emitSearchQuery = new EventEmitter();
   }

  emitQuery(){
    this.emitSearchQuery.emit(this.search_query);
  }

}
