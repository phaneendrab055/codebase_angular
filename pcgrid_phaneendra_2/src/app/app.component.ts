import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayDetails;
  search_query;

  users=[{
    date: 'Jul 23',
    list_name:'Competitive Intelligence',
    count_entities:'28',
    user_details:'Description of Competitive Intelligence'
  },{
    date: 'Jun 28',
    list_name:'My Vendors',
    count_entities:'34',
    user_details:'Description of My Vendors'
  },{
    date: 'Apr 10',
    list_name:'My Customers',
    count_entities:'100',
    user_details:'Description of My Customers'
  },{
    date: 'Sep 28',
    list_name:'To_Index',
    count_entities:'78',
    user_details:'Description of To_Index'
  },{
    date: 'Mar 18',
    list_name:'KPMG Requested Companies-Listed Set_Prasada Kumar',
    count_entities:'23',
    user_details:'Description of KPMG'
  },{
    date: 'Jul 04',
    list_name:'Error Case-LTB To EBITDA Blank_Prasada Kumar',
    count_entities:'45',
    user_details:'Description of Error Case'
  },{
    date: 'Dec 25',
    list_name:'Two Companies',
    count_entities:'38',
    user_details:'Description of Two Companies'
  },{
    date: 'Oct 14',
    list_name:'Custom',
    count_entities:'12',
    user_details:'Description of Custom'
  },{
    date: 'Feb 08',
    list_name:'Mumbai',
    count_entities:'11',
    user_details:'Description of Mumbai'
  }]

  showCustomerDetails(customerDetails: string){
    this.displayDetails =  customerDetails;
  }

  searchThisQuery(data){
    this.search_query = data;
  }

}
