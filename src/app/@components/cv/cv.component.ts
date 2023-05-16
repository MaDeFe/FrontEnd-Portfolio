import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Cv, cvs } from 'src/app/models/cv';
import { CvService } from 'src/app/services/cv.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  isLoggedIn = this.loginService.isLoggedIn$;

  public CvEducacion: Cv[] = cvs.filter(cv => cv.categoria == 'educacion');
  public CvLaboral: Cv[] = cvs.filter(cv => cv.categoria == 'laboral');

  editingItem!: Cv | null;
  
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder, protected cvService: CvService, protected loginService: LoginService) {}


  ngOnInit() {

  }
  
 

  buildForm() {
    this.form = this.formBuilder.group({
      id: [this.editingItem?.id, Validators.required],
      titulo: [this.editingItem?.titulo, Validators.required],
      anio_inicio: [this.editingItem?.anio_inicio, Validators.required],
      anio_final: [this.editingItem?.anio_final, Validators.required],
      subtitulo: [this.editingItem?.subtitulo, Validators.required],
      descripcion: [this.editingItem?.descripcion, Validators.required],
      categoria: [this.editingItem?.categoria, Validators.required],
    });
  }


  editItem(item: Cv) {
    this.editingItem = item,
    this.buildForm()
  }
  
  onSubmit() {
    console.log(this.form.value);
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    this.loading = true;

    setTimeout(() => {
      this.submitted = false,
      this.loading = false,
      this.editingItem = null
    }, 1000);

    this.cvService.updateCv(this.form.value)
        // .pipe(first())
        // .subscribe({
        //     next: () => {
        //          this.submitted = false,
        //          this.loading = false,
        //          this.editingItem = null
        //     },
        //     error: () => {
        //         this.loading = false;
        //     }
        // });
        // }
  }

}
