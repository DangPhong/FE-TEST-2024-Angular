import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetBlogEditData } from 'src/app/stores/blog-detail';

@Component({
  selector: 'app-upsert-blog-tpml',
  templateUrl: './upsert-blog-tpml.component.html',
  styleUrls: ['./upsert-blog-tpml.component.scss'],
})
export class UpsertBlogTpmlComponent implements OnChanges {
  formGroup!: FormGroup;
  _item!: GetBlogEditData;

  @Input() set item(data: GetBlogEditData | any) {
    if (!!data.data?.id) {
      this.formGroup.setValue({
        id: data.data?.id,
        title: data.data.title,
        content: data.data.content,
        comments_count: data.data.comments_count,
        image: data.data?.image?.url,
      });
    }
  }

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      id: ['', [, Validators.required]],
      title: ['', Validators.required],
      content: ['', [Validators.required]],
      comments_count: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {}

  askSave() {
    console.log('save plz');
    console.log(this.formGroup.value);
  }
}
