import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // ----card1----
  name: string ='Iphone 13';
  price: number =999;
  color: string='red';
  disprice: number=789;
  //----card2----
  product={
    name: 'Iphone 14',
    price:1599,
    color:'black',
    disper: 8.5,
  }
  //----card3----
  product1={
    name: 'Iphone 15',
    price:1799,
    color:'White',
    disper: 8.5,
  }
  getdiscountedprice(){
   return this.product1.price -(this.product1.price*this.product1.disper/100);
  }
  //----card3----
  product2={
    name: 'Iphone 16',
    price:1999,
    color:'Violet',
    disper: 8.5,
    instock: 5,
    pImage:'../../assets/iphone13.jpg'
  }
  newName="John smith";
  onNameChange(event: any){
    this.product2.name=event.target.value;
  }

//card5
 addCartValue: number =0;
 incrementCartValue(){
  if(this.addCartValue <this.product2.instock && this.addCartValue <3){
    this.addCartValue++;
  }
 }
 decrementCartValue(){
  if(this.addCartValue >0){
    this.addCartValue--;
  }
 }
 listofstring:string[]=['Shubham','Omkar','Rushikesh','Saurabh'];
 searchText:string='';
 setSearchText(value: string){
  this.searchText=value;

 }
 @ViewChild(ProductListComponent) productListComponent:ProductListComponent;

}
