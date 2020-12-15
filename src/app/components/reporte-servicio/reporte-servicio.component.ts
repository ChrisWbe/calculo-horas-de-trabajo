import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Servicio } from 'src/app/models/Servicio';
import {IServicio} from 'src/app/models/IServicio';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reporte-servicio',
  templateUrl: './reporte-servicio.component.html',
  styleUrls: ['./reporte-servicio.component.css']
})
export class ReporteServicioComponent implements OnInit {
  formularioReporte:FormGroup
  constructor(private fb:FormBuilder,private service:ServiceService) { }

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
    
    let servicio:Servicio = new Servicio(datos)
    if(servicio.validarFecha()){
      this.service.setReportes(servicio).subscribe(
        data=>{
          Swal.fire({
            icon: 'success',
            title: 'Reporte almacenado',
            showConfirmButton: false,
            timer: 1500
          })
        },
        error=>{
          Swal.fire({
            title: 'Error!',
            text: 'No hay conexion',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      )
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'La fecha de inicio es mayor a la fecha fin',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
      this.formularioReporte.reset()
    }
    

  }

}
