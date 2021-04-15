import { Component, OnInit } from '@angular/core';
import { ninioService } from 'src/app/services/ninio.service';
import { map } from 'rxjs/operators';
import ninio from 'src/app/models/ninio.model';

@Component({
  selector: 'app-ninios-list',
  templateUrl: './ninios-list.component.html',
  styleUrls: ['./ninios-list.component.css']
})
export class niniosListComponent implements OnInit {

  ninios?: ninio[];
  currentninio?: ninio;
  currentIndex = -1;
  title = '';

  constructor(private ninioService: ninioService) { }

  ngOnInit(): void {
    this.retrieveninios();
  }

  refreshList(): void {
    this.currentninio = undefined;
    this.currentIndex = -1;
    this.retrieveninios();
  }

  retrieveninios(): void {
    this.ninioService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.ninios = data;
    });
  }

  setActiveninio(ninio: ninio, index: number): void {
    this.currentninio = ninio;
    this.currentIndex = index;
  }

}
