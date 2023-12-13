import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  public form: FormGroup | any;

  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializationForm();
  }

  initializationForm() {
   this.form= this.fb.group({
      Username: ['', Validators.required, Validators.minLength(6),Validators.maxLength(8)],
      Email: ['',[Validators.required]],
      Password: ['',[Validators.required]],
      Mobile: ['',[Validators.required]]
    });
  }

  onSubmit(){
console.log(this.form.value);



  }
}
