import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  GetBlogEditData,
  RequestBodyUpsertData,
} from '../../stores/blog-detail';

@Component({
  selector: 'app-upsert-blog-tpml',
  templateUrl: './upsert-blog-tpml.component.html',
  styleUrls: ['./upsert-blog-tpml.component.scss'],
})
export class UpsertBlogTpmlComponent {
  formGroup!: FormGroup;
  _item!: GetBlogEditData;
  file: File | null = null;

  @Input() titlePage: string = 'Blog';

  @Input() set item(data: GetBlogEditData | any) {
    if (!!data.data?.id) {
      this.formGroup.setValue({
        id: data.data?.id,
        title: data.data.title,
        content: data.data.content,
        comments_count: data.data.comments_count,
        image: data.data?.image?.url,
      });
    } else {
      this.formGroup = this.fb.group({
        id: ['', []],
        title: ['', Validators.required],
        content: ['', [Validators.required]],
        comments_count: [''],
        image: [''],
      });
    }
  }

  @Output() emitActionSubmit = new EventEmitter<{
    action: string;
    value: RequestBodyUpsertData;
  }>();

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.formGroup = this.fb.group({
      id: ['', []],
      title: ['', Validators.required],
      content: ['', [Validators.required]],
      comments_count: [''],
      image: ['', Validators.required],
    });
  }

  askSave() {
    const payload: {
      action: string;
      value: RequestBodyUpsertData | any;
    } = {
      action: !!this.formGroup.value.id ? 'edit' : 'create',
      value: {
        id: this.formGroup.value.id || null,
        blog: {
          title: this.formGroup.value.title,
          content: this.formGroup.value.content,
          image: this.file,
        },
      },
    };

    this.emitActionSubmit.emit(payload);
  }

  uploadFile(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          image: reader.result,
        });
        let file: File = event.target.files[0];
        this.file = file;
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
}
