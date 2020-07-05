import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../products.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-prodcut-detail',
  templateUrl: './prodcut-detail.component.html',
  styleUrls: ['./prodcut-detail.component.scss']
})
export class ProdcutDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
    ) {
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productService.getProduct(id);
      console.log(this.product);
    });
  }

}
