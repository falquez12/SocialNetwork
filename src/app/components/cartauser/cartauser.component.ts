import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cartauser',
  templateUrl: './cartauser.component.html',
  styleUrls: ['./cartauser.component.css']
})
export class CartauserComponent implements OnInit {
    @Input() imageurl:string='imagen'
    @Input() nombre:string='nombre'
    @Input() mail:string='mail'


  constructor() { }

  ngOnInit(): void {
  }

}
