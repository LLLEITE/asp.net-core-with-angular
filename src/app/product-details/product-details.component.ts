import { ProductService } from '../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {

  constructor(public service: ProductService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectRecord: Product) {
    console.log(selectRecord.id);
    this.service.formData = Object.assign({}, selectRecord);
  }

  onDelete(id: number) {
    console.log(id);
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteProduct(id)
      .subscribe(res => {
        this.service.refreshList();
      },
      err => { console.log(err)})
    }
  }
}
