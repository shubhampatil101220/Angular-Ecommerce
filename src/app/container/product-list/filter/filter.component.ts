import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all:number =0;
  @Input()
  instock:number=0;
  @Input()
  outofstock:number=0;
  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new  EventEmitter<string>();
  selectedFilterRadioButton:string='all';
  onSelectedFilterRadioButtonChanged(){
   
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

}
