import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  ngOnInit() {
    this.service.getReportes().subscribe(data=>{
      this.reportes=data;
    })
    this.formularioHoras = this.fb.group({
      idTecnico:['',Validators.required],
      numeroSemana:['',Validators.required]
    })
  }

  consultar(){

  }

}
