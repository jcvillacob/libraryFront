import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeBooksComponent } from './some-books.component';

describe('SomeBooksComponent', () => {
  let component: SomeBooksComponent;
  let fixture: ComponentFixture<SomeBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomeBooksComponent]
    });
    fixture = TestBed.createComponent(SomeBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
