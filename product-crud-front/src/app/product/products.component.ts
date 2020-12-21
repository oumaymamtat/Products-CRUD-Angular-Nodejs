import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/product.service';
import { MatSort } from '@angular/material/sort';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditProdComponent } from './edit-prod/edit-prod.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  nameFilter = new FormControl('');
  filterValues = {
    name: '',
    id: '',
  };
  constructor(private service:ProductService,private dialog:MatDialog) {
    this.service.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshProdList();
    })
   }

 listData : MatTableDataSource<any>;
 displayedColumns : string[] = ['ProductId','ProductName','ProductPrice','ProductQuantity','Options'];
 @ViewChild(MatSort) sort: MatSort;

 ngOnInit(): void {
    this.refreshProdList();
    this.nameFilter.valueChanges
    .subscribe(
      name => {
        this.filterValues.name = name;
        this.listData.filter = JSON.stringify(this.filterValues);
      }
    )
  }

  refreshProdList(){
    this.service.getProdList().subscribe(data => {
      console.log(data);
       this.listData = new MatTableDataSource(data);
    this.listData.sort = this.sort;

    });   
  }
  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddProdComponent,dialogConfig);
  }
  onEdit(prod : Product){
    console.log(prod); console.log(" has been edited successfully!");
    this.service.formData = prod;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(EditProdComponent,dialogConfig);

  }
  onDelete(id:number){
    console.log("Product with id: "+id+" has been deleted successfully!");
    if(confirm('Are you sure to delete?,')){
    this.service.deleteProduct(id).subscribe(res=>{
      this.refreshProdList();
      
    })
  }
  }
 
}