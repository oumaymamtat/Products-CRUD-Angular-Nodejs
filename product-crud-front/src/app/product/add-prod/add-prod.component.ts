import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
})
export class AddProdComponent implements OnInit {

  constructor(public dialogbox : MatDialogRef<AddProdComponent>, public service:ProductService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData={
      id:0,
      name:'',
      price : 0,
      quantity : 0
    }
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
    
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.service.addProduct(form.value).subscribe(res=>
      {
     //   this.resetForm(form);
      })
  }

}
