import { Component, OnInit } from '@angular/core';
import { Asincrona20 } from 'src/app/models/asincrona20';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-asincrona20',
  templateUrl: './asincrona20.component.html',
  styleUrls: ['./asincrona20.component.css']
})
export class Asincrona20Component implements OnInit {

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.items()
  }
  listado:Asincrona20 = new Array()
  items(){
    this.userService.getasincrona20().subscribe({
      next: (response: any) => {this.listado = response.body;console.log(response)}
    })
  }
}
