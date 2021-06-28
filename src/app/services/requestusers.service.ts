import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import {Randomusers} from '../models/userinterface'


@Injectable({
  providedIn: 'root'
})
export class RequestusersService {

  constructor(private http:HttpClient) { }

  requestuser(){
    
    const url ='https://reqres.in/api/users?page=2'
    return this.http.get<Randomusers>(url)
  }

}
