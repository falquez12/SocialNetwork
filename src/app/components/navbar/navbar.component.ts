import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {NombresService} from '../../services/nombres.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario:string=''
  name= new FormControl('');

  constructor(public nombres:NombresService) { }

  ngOnInit(): void {
  }

  handleclick(){
    this.nombres.nombre=this.name.value;
  }
}
