import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
})
export class EditProdComponent implements OnInit {

  constructor(public dialogbox : MatDialogRef<EditProdComponent>, public service:ProductService) { }


  ngOnInit(): void {
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.service.updateProduct(form.value,form.value.id).subscribe(res=>
      {
        alert(res);
      })
  }
}
