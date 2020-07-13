import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUploadComponent } from './item-upload.component';

describe('ItemUploadComponent', () => {
  let component: ItemUploadComponent;
  let fixture: ComponentFixture<ItemUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
