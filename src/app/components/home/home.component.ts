import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {



    constructor(private snack:MatSnackBar){}



    btnClick(): void{
        this.snack.open("Welcome to the Home","Cancel");
    };

}

