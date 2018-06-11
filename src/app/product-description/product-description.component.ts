import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    // calling getAlbum function from ProductService we've just imported
    this._productService.getAlbum(1).subscribe(response =>
      this.albumInfo = response);
  }
}
