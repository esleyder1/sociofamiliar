import { Component, OnInit } from '@angular/core';
import Tutorial from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
  providers: [DatePipe]
})


export class AddTutorialComponent implements OnInit {

  date = new Date()

  constructor(
    private fb: FormBuilder,
    private tutorialService: TutorialService,
    public datepipe: DatePipe,
    private toastr: ToastrService,

  ) { }

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });


  ngOnInit(): void { 
        console.log("translate")
  //   this.translate.get(['es']).subscribe(translations => {
  //     console.info(this.translateService.instant('app.name'));
  // });
  }

  tutorial: Tutorial = new Tutorial();
  submitted = false;


  showMessageValidation(): void {
    if (this.form.valid)
      this.toastr.info("Campos correctos, Guardando...")
    else
      this.toastr.error("Error al guardar, verifique los campos")
  }

  saveTutorial(): void {
    //mostrar mensajes de validación de formulario.
    this.showMessageValidation();

    this.tutorialService
    .create(this.tutorial)
    .then(() => {
      alert('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }
  //multiidioma.
}
