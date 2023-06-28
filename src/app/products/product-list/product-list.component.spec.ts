import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIconComponent } from './category.component';

describe('CategoryIconComponent', () => {
    let component: CategoryIconComponent;
    let fixture: ComponentFixture<CategoryIconComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryIconComponent],
        });
        fixture = TestBed.createComponent(CategoryIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
