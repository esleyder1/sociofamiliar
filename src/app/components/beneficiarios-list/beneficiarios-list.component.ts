import { Component, OnInit } from '@angular/core';
import { beneficiarioService } from 'src/app/services/beneficiario.service';
import { map } from 'rxjs/operators';
import beneficiario from 'src/app/models/beneficiario.model';

@Component({
  selector: 'app-beneficiarios-list',
  templateUrl: './beneficiarios-list.component.html',
  styleUrls: ['./beneficiarios-list.component.css']
})
export class beneficiariosListComponent implements OnInit {

  beneficiarios?: beneficiario[];
  currentbeneficiario?: beneficiario;
  currentIndex = -1;
  title = '';

  constructor(private beneficiarioService: beneficiarioService) { }

  ngOnInit(): void {
    this.retrievebeneficiarios();
  }

  refreshList(): void {
    this.currentbeneficiario = undefined;
    this.currentIndex = -1;
    this.retrievebeneficiarios();
  }

  retrievebeneficiarios(): void {
    this.beneficiarioService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.beneficiarios = data;
    });
  }

  setActivebeneficiario(beneficiario: beneficiario, index: number): void {
    this.currentbeneficiario = beneficiario;
    this.currentIndex = index;
  }

}
