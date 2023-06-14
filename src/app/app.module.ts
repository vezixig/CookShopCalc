import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingList } from './shopping/shoppinglist/shoppinglist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingComponent } from './landing/landing.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { ProductTypeIconComponent } from './products/product-type-icon/product-type-icon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AddProductComponent, AppComponent, LandingComponent, ShoppingList, ProductTypeIconComponent],
    imports: [AppRoutingModule, BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule],
    providers: [
        { provide: LOCALE_ID, useValue: 'de-DE' },
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
        registerLocaleData(localeDe);
    }
}
