import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Servicio } from 'src/app/models/Servicio';
import {IServicio} from 'src/app/models/IServicio';

@Component({
  selector: 'app-reporte-servicio',
  templateUrl: './reporte-servicio.component.html',
  styleUrls: ['./reporte-servicio.component.css']
})
export class ReporteServicioComponent implements OnInit {
  formularioReporte:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formularioReporte = this.fb.group({
      idTecnico:['',Validators.required],
      idServicio:['',Validators.required],
      fechaInicio:['',Validators.required],
      fechaFin:['',Validators.required]
     
    })
  }

  reportarServicio(){
    let datos:IServicio = {
      _idTecnico:this.formularioReporte.value.idTecnico,
      _idServicio:this.formularioReporte.value.idServicio,
      _fechaInicio:new Date(this.formularioReporte.value.fechaInicio),
      _fechaFin:new Date(this.formularioReporte.value.fechaFin)
    }
    console.log(datos._fechaFin.getTime())
    
    let servicio:Servicio = new Servicio(datos)
    if(servicio.validarFecha()){
    
    }else{
      console.log("La fecha de inicio debe ser menor a la fecha final")
    }
    

  }

}
