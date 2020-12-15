import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IServicio } from 'src/app/models/IServicio';
import { Servicio } from 'src/app/models/Servicio';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-horas-trabajo',
  templateUrl: './horas-trabajo.component.html',
  styleUrls: ['./horas-trabajo.component.css']
})
export class HorasTrabajoComponent implements OnInit {
  formularioHoras:FormGroup
  constructor(private fb:FormBuilder, private service:ServiceService) { }
  reportes:Servicio[]
  iReportes:IServicio[]=[
    {
      _idTecnico:"100001",
      _idServicio:"123456789",
      _fechaInicio:new Date(1608087300000),
      _fechaFin:new Date(1608090000000)
    },
    {
      _idTecnico:"100002",
      _idServicio:"123456789",
      _fechaInicio:new Date(1608050300000),
      _fechaFin:new Date(1608090000000)
    },
    {
      _idTecnico:"100003",
      _idServicio:"123456789",
      _fechaInicio:new Date(1608085000000),
      _fechaFin:new Date(1608090000000)
    },
    {
      _idTecnico:"100004",
      _idServicio:"123456789",
      _fechaInicio:new Date(1608020300000),
      _fechaFin:new Date(1608090000000)
    }
  ]
  
  
    
  
  ngOnInit() {
    
    this.formularioHoras = this.fb.group({
      idTecnico:['',Validators.required],
      numeroSemana:['',Validators.required]
    })

  }

  consultar(){
    this.service.getReportes().subscribe(data=>{
      this.reportes=data;
    })
  }

}
