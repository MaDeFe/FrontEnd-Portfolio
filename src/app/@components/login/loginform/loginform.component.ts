import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;

  @Output() loginEvent =  new EventEmitter<boolean>();


  constructor(private formBuilder: UntypedFormBuilder, protected loginService: LoginService) {}


    ngOnInit() {
      this.form = this.formBuilder.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
    
    get f() { return this.form.controls; }

    
    onSubmit() {
      this.submitted = true;
      if (this.form.invalid) {
          return;
      }
      this.loading = true;

      setTimeout(() => {
        this.submitted = false,
        this.loading = false,
        this.loginEvent.emit(true)
      }, 1000);

      this.loginService.login(this.form.value)
          // .pipe(first())
          // .subscribe({
          //     next: () => {
          //          this.submitted = false,
          //          this.loading = false,
          //          this.loginEvent.emit(true)
          //     },
          //     error: () => {
          //         this.loading = false;
          //     }
          // });
          // }
    }


}
