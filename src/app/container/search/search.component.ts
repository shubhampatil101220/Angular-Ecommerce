import { Component, Directive, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchtext:string =''
  
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged(){
   
  }
  updateSearchText(inputEL: HTMLInputElement){
    // this.searchtext=event.target.value;
    // console.log(inputEL.value);
    this.searchtext=inputEL.value;
    this.searchTextChanged.emit(this.searchtext)
  }
}
// Attribute directive
@Directive({
  selector:'[ChangeToGreen]'
})
export class ChangeTOGreen{

}