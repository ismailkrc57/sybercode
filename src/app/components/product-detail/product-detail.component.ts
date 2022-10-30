import {Component, OnInit, Sanitizer} from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {Product} from "../../models/product";
import {DomSanitizer} from "@angular/platform-browser";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    id: 1,
    name: "test",
    qty: 1,
    price: 1,
    imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
  }

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer, private prodService: ProductService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        const id = params['id']
        this.prodService.getById(id).subscribe({
          next: res => {
            this.product = res
          },
          error: err => {
            console.log(err)
          }
        })

      },
      error: err => {
      }
    })
  }

}
