import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreusComponent } from './correus.component';

describe('CorreusComponent', () => {
  let component: CorreusComponent;
  let fixture: ComponentFixture<CorreusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorreusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorreusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
