import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductComponent } from './product/product.component';
import { CategoryItemComponent } from './category-icon/category-icon.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductGuard } from './product.guard';
import { ProductListComponent } from './product-list/product-list.component';

const childRoutes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'product/add', component: ProductComponent },
    { path: 'product/:id', component: ProductComponent, canActivate: [ProductGuard] },
];

@NgModule({
    declarations: [ProductComponent, CategoryItemComponent, ProductListComponent],
    imports: [CommonModule, FontAwesomeModule, FormsModule, HttpClientModule, RouterModule.forChild(childRoutes)],
    exports: [CategoryItemComponent],
})
export class ProductsModule {}
