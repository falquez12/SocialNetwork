import { Component, OnInit } from '@angular/core';

import{RequestusersService} from '../../services/requestusers.service'
import {Datum} from '../../models/userinterface'


@Component({
  selector: 'app-misamigos',
  templateUrl: './misamigos.component.html',
  styleUrls: ['./misamigos.component.css']
})
export class MisamigosComponent implements OnInit {
  


  userlist:Datum[]=[]

  constructor(private requestusersservice:RequestusersService) { }

  ngOnInit(): void {
    this.requestusersservice.requestuser().subscribe(response => {
      this.userlist=response.data.map(x=>x)
    })

    

  }

}
