import { Component, OnInit,Input} from '@angular/core';
import { NombresService } from '../../services/nombres.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  


  constructor(public nombres:NombresService) { }

  ngOnInit(): void {
  }

}
