import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import {Moon} from "lunarphase-js";

import Luna from 'src/app/models/Luna.model';
import Sol from 'src/app/models/Sol.model';
import beneficiario from 'src/app/models/beneficiario.model';
import { beneficiarioService } from 'src/app/services/beneficiario.service';
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
  selector: 'app-add-beneficiario',
  templateUrl: './add-beneficiario.component.html',
  styleUrls: ['./add-beneficiario.component.css'],
  providers: [DatePipe],
})
export class AddbeneficiarioComponent implements OnInit {
  users: any;
  mostrarFasesLuna = false;
  date = new Date();
  beneficiario = new beneficiario();
  luna: Luna = new Luna()
  sol: Sol = new Sol()

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private beneficiarioService: beneficiarioService,
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

    this.beneficiarioService.getUsers().subscribe((data) => {
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
    
    const fase = Moon.lunarPhase(todate);
    const edad = parseInt(Moon.lunarAge(todate));
    const imagen = Moon.lunarPhaseEmoji(todate);

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

  savebeneficiario(): void {
    //mostrar mensajes de validación de formulario.
    this.showMessageValidation();

    this.beneficiarioService.create(this.beneficiario).then(() => {
      this.submitted = true;
    });
  }

  newbeneficiario(): void {
    this.submitted = false;
    this.beneficiario = new beneficiario();
  }

  cancelbeneficiario(): void {
    this.form.markAsDirty();
    this.beneficiario = new beneficiario();
    this.toastr.info('Todos los campos han sido limpiados');
  }
}
