import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import beneficiario from 'src/app/models/beneficiario.model';
import { beneficiarioService } from 'src/app/services/beneficiario.service';

@Component({
  selector: 'app-beneficiario-details',
  templateUrl: './beneficiario-details.component.html',
  styleUrls: ['./beneficiario-details.component.css']
})
export class beneficiarioDetailsComponent implements OnInit, OnChanges {

  @Input() beneficiario?: beneficiario;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentbeneficiario: beneficiario = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(private beneficiarioService: beneficiarioService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentbeneficiario = { ...this.beneficiario };
  }

  updatePublished(status: boolean): void {
    if (this.currentbeneficiario.id) {
      this.beneficiarioService.update(this.currentbeneficiario.id, { published: status })
      .then(() => {
        this.currentbeneficiario.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updatebeneficiario(): void {
    const data = {
      title: this.currentbeneficiario.title,
      description: this.currentbeneficiario.description
    };

    if (this.currentbeneficiario.id) {
      this.beneficiarioService.update(this.currentbeneficiario.id, data)
        .then(() => this.message = 'The beneficiario was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deletebeneficiario(): void {
    if (this.currentbeneficiario.id) {
      this.beneficiarioService.delete(this.currentbeneficiario.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The beneficiario was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
