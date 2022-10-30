import {Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  constructor(private prodService: ProductService, public sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.prodService.getAll().subscribe({
      next: res => {
        this.products = res
      },
      error: err => {
        console.log(err)
      }
    })
  }



}
