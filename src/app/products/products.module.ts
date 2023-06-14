import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductTypeIconComponent } from './product-type-icon/product-type-icon.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductGuard } from './product.guard';

const childRoutes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'product/add', component: ProductComponent },
    { path: 'product/:id', component: ProductComponent, canActivate: [ProductGuard] },
];

@NgModule({
    declarations: [ProductComponent, ProductListComponent, ProductTypeIconComponent],
    imports: [CommonModule, FontAwesomeModule, FormsModule, HttpClientModule, RouterModule.forChild(childRoutes)],
    exports: [ProductTypeIconComponent],
})
export class ProductsModule {}
