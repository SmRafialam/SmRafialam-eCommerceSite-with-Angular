import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible: boolean = false;
  productObj:any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
  }
  categoryList:any[] = [];
  productList:any[] = [];
  
  constructor(private productService: ProductService, private categoryService:CategoryService){

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe((res:any)=>{
      console.log(res);
      this.categoryList = res.data;
    })
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe((res:any)=>{
      console.log(res);
      this.productList = res.data;
    })
  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

  onSave(){
    this.productService.saveProduct(this.productObj).subscribe((res:any)=>{
      console.log(res);
      debugger;
      if(res.result){
        alert("Product created!")
        this.getAllProducts();
      }else {
        alert(res.message);
      }
    })
  }

  onEdit(item : any){
    console.log(item);
    this.productObj = item;
    this.openSidePanel();
  }

  onUpdate(){
    this.productService.updateProduct(this.productObj).subscribe((res:any)=>{
      console.log(res);
      debugger;
      if(res.result){
        alert("Product updated!")
        this.getAllProducts();
      }else {
        alert(res.message);
      }
    })
  }

  onDelete(item: any){
    const isDelete = `Are you sure you want to delete?`
    if(isDelete) {
      this.productService.deleteProduct(item.productId).subscribe((res:any)=>{
        console.log(res);
        if(res.result){
          alert("Product deleted!");
        }else {
          alert(res.message);
        }
      })
    }
  }
}
