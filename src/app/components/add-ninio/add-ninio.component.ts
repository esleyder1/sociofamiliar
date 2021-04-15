import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import ninio from 'src/app/models/ninio.model';
import { ninioService } from 'src/app/services/ninio.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

 
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-ninio',
  templateUrl: './add-ninio.component.html',
  styleUrls: ['./add-ninio.component.css'],
  providers: [DatePipe]
})


export class AddninioComponent implements OnInit {

  date = new Date()

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private ninioService: ninioService,
    public datepipe: DatePipe,
    private toastr: ToastrService,


  ) { }

  form = new FormGroup({
    uds: new FormControl('', [Validators.required, Validators.minLength(10)]),
    codigoUds: new FormControl('', [Validators.required, Validators.minLength(10)]),
    primerNombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });


  ngOnInit(): void { 
    const name = this.translate.instant('app.name')
    console.log(name);
  }

  ninio: ninio = new ninio();
  submitted = false;


  showMessageValidation(): void {
    if (this.form.valid)
      this.toastr.info("Campos correctos, Guardando...")
    else
      this.toastr.error("Error al guardar, verifique los campos")

      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].markAsDirty();
      });}

  saveninio(): void {
    //mostrar mensajes de validación de formulario.
    this.showMessageValidation();

    this.ninioService
    .create(this.ninio)
    .then(() => {

      this.submitted = true;
    });
  }

  newninio(): void {
    this.submitted = false;
    this.ninio = new ninio();
  }

  cancelninio(): void {
    this.form.markAsDirty()
    this.ninio = new ninio()
    this.toastr.info("Todos los campos han sido limpiados")
  }

}
