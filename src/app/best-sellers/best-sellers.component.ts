import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../interfaces/products';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss'
})
export class BestSellersComponent implements OnInit {
  products:any[]= []
  search:string='';
  imgDomain:string='';
constructor(private _ProductService:ProductsService){}
ngOnInit(): void {
   this.imgDomain = this._ProductService.imgDomain;
    this._ProductService.getProducts(16,1,'-sold',this.search).subscribe((res) => { 
      this.products = res.data;
     })
}
}
