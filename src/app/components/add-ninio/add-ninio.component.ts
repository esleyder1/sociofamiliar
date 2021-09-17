import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const moonjs = require('lunarphase-js');

import Luna from 'src/app/models/Luna.model';
import Sol from 'src/app/models/Sol.model';
import ninio from 'src/app/models/ninio.model';
import { ninioService } from 'src/app/services/ninio.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { now } from 'moment';

@Component({
  selector: 'app-add-ninio',
  templateUrl: './add-ninio.component.html',
  styleUrls: ['./add-ninio.component.css'],
  providers: [DatePipe],
})
export class AddninioComponent implements OnInit {
  users: any;
  mostrarFasesLuna = false;
  date = new Date();
  ninio = new ninio();
  luna: Luna = new Luna()
  sol: Sol = new Sol()

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private ninioService: ninioService,
    public datepipe: DatePipe,
    private toastr: ToastrService

  ) {}

  form = new FormGroup({
    uds: new FormControl('', [Validators.required, Validators.minLength(10)]),
    codigoUds: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    primerNombre: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  ngOnInit(): void {
    const name = this.translate.instant('app.name');

    this.ninioService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  
  submitted = false;

  showMessageValidation(): void {
    if (this.form.valid) this.toastr.info('Campos correctos, Guardando...');
    else this.toastr.error('Error al guardar, verifique los campos');

    Object.keys(this.form.controls).forEach((key) => {
      this.form.controls[key].markAsDirty();
    });
  }
  obtenerFaseLunar(e:any): void {
    let fechaN = e.target.value;
    //console.log(moonjs)


    if(fechaN){
    const date = new Date(fechaN);
    var datatodays = date.setDate(new Date(date).getDate());
    var todate = new Date(datatodays);
    console.log(todate)
    
    const fase = moonjs.Moon.lunarPhase(todate);
    const edad = parseInt(moonjs.Moon.lunarAge(todate));
    const imagen = moonjs.Moon.lunarPhaseEmoji(todate);

    let faseEspaniol = this.luna.obtenerFase(fase);
    this.mostrarFasesLuna = true

    //luna
    let fasePorEdadLunar = this.luna.obtenerFasePorDias(edad);

    this.luna = new Luna(faseEspaniol, edad, imagen, fasePorEdadLunar.numeroFase, fasePorEdadLunar.nombreFase, fasePorEdadLunar.nombreNasa, fasePorEdadLunar.nombreEsp, fasePorEdadLunar.inicio, fasePorEdadLunar.fin, fasePorEdadLunar.recomendaciones)
    console.log(this.luna)
    //sol
    let epocaSol = this.sol.datos(fechaN)
    this.sol = new Sol(epocaSol.nombreEpoca,epocaSol.nombreNasa, epocaSol.nombreEsp, epocaSol.fecha, epocaSol.fechaInicio, epocaSol.fechaFin, epocaSol.narracion )

  }
  }

  saveninio(): void {
    //mostrar mensajes de validación de formulario.
    this.showMessageValidation();

    this.ninioService.create(this.ninio).then(() => {
      this.submitted = true;
    });
  }

  newninio(): void {
    this.submitted = false;
    this.ninio = new ninio();
  }

  cancelninio(): void {
    this.form.markAsDirty();
    this.ninio = new ninio();
    this.toastr.info('Todos los campos han sido limpiados');
  }
}
