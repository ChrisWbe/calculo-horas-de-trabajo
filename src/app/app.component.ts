import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-horas-de-trabajo';

  ngOnInit(){
    Swal.fire({
      title: 'Calculo de horas trabajadas',
      text:"Modulos por separado: /reporte-servicio y /horas-trabajo",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
}
