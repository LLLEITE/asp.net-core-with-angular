import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: [
  ]
})
export class ProductFormComponent implements OnInit {

  constructor(public service: ProductService) { }

  ngOnInit(): void {
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new Product();
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
    this.insertRecord(form);
  else
    this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postProduct().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putProduct().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
