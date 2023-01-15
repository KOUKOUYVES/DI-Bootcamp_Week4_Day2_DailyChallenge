import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDeatailsComponent } from './produit-deatails.component';

describe('ProduitDeatailsComponent', () => {
  let component: ProduitDeatailsComponent;
  let fixture: ComponentFixture<ProduitDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitDeatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
