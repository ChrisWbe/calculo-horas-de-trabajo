import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Servicio } from '../models/Servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/caso-practico/reportes'

  getReportes(){
    return this.http.get<Servicio[]>(this.Url)
  }

  setReportes(servicio:Servicio){
    return this.http.post<Servicio>(this.Url,servicio)
  }

}
