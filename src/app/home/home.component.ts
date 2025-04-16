import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { CategoriesComponent } from "../categories/categories.component";
import { SettingComponent } from "../setting/setting.component";

@Component({
  selector: 'app-home',
  imports: [ ProductsComponent, CategoriesComponent, SettingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
