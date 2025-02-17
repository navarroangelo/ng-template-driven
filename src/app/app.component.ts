import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-form-app';
  anytext: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  phone: string = "";
  handicap: number = 0;
  teamName: string = "";
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

}
