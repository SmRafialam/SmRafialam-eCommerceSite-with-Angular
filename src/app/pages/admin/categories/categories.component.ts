import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  products$: Observable<any>;

  constructor(private categoryService : CategoryService) {
    this.products$ = this.categoryService.getAllCategories().pipe(
      map((item:any)=>{
        console.log(item);
        return item.data;
      })
    );
  }

  getAllCategories(){
    // this.categoryService.getAllCategories().subscribe((res:any)=>{
    //   console.log(res);
    //   this.categoryList = res.data;
    // })
  }
}
