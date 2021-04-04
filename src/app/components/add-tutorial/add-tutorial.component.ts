import { Component, OnInit } from '@angular/core';
import Tutorial from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core'
 
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
    private translate: TranslateService

  ) { }

  form = new FormGroup({
    uds: new FormControl('', [Validators.required, Validators.minLength(10)]),
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });


  ngOnInit(): void { 
   const name = this.translate.instant('app.name')
   console.log(name)
  }

  tutorial: Tutorial = new Tutorial();
  submitted = false;


  showMessageValidation(): void {
    if (this.form.valid)
      this.toastr.info("Campos correctos, Guardando...")
    else
      this.toastr.error("Error al guardar, verifique los campos")

      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].markAsDirty();
      });}

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

  cancelTutorial(): void {
    alert()
  }

}
