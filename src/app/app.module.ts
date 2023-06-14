import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsModule } from './products/products.module';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { ShoppingList } from './shopping/shoppinglist/shoppinglist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'shoppinglist', component: ShoppingList },
    { path: 'recipes', component: RecipeListComponent },
    { path: 'landing', component: LandingComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: '**', redirectTo: 'landing', pathMatch: 'full' },
];

@NgModule({
    declarations: [AppComponent, LandingComponent, ShoppingList, NavigationComponent, RecipeListComponent],
    imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule, ProductsModule, RouterModule.forRoot(routes)],
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
