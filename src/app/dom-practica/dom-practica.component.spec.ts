import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomPracticaComponent } from './dom-practica.component';

describe('DomPracticaComponent', () => {
  let component: DomPracticaComponent;
  let fixture: ComponentFixture<DomPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomPracticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
