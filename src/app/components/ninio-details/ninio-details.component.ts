import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import ninio from 'src/app/models/ninio.model';
import { ninioService } from 'src/app/services/ninio.service';

@Component({
  selector: 'app-ninio-details',
  templateUrl: './ninio-details.component.html',
  styleUrls: ['./ninio-details.component.css']
})
export class ninioDetailsComponent implements OnInit, OnChanges {

  @Input() ninio?: ninio;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentninio: ninio = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(private ninioService: ninioService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentninio = { ...this.ninio };
  }

  updatePublished(status: boolean): void {
    if (this.currentninio.id) {
      this.ninioService.update(this.currentninio.id, { published: status })
      .then(() => {
        this.currentninio.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateninio(): void {
    const data = {
      title: this.currentninio.title,
      description: this.currentninio.description
    };

    if (this.currentninio.id) {
      this.ninioService.update(this.currentninio.id, data)
        .then(() => this.message = 'The ninio was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteninio(): void {
    if (this.currentninio.id) {
      this.ninioService.delete(this.currentninio.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The ninio was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
