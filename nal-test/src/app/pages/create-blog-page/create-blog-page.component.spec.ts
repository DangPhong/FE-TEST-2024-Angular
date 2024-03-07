import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogPageComponent } from './create-blog-page.component';

describe('CreateBlogPageComponent', () => {
  let component: CreateBlogPageComponent;
  let fixture: ComponentFixture<CreateBlogPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBlogPageComponent],
    });
    fixture = TestBed.createComponent(CreateBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
