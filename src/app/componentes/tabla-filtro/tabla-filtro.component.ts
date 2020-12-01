import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ServicioService } from '../../servicios/servicio.service'


export interface Employee {
  id: number;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: "";
}

@Component({
  selector: 'app-tabla-filtro',
  templateUrl: './tabla-filtro.component.html',
  styleUrls: ['./tabla-filtro.component.scss']
})
export class TablaFiltroComponent implements OnInit {

  loading: boolean = true;
  employees: Employee[];

  constructor(private primengConfig: PrimeNGConfig, private servicio: ServicioService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.servicio.getEmployee().then(data =>{      
      this.employees = data
      this.loading = false;
    })
  }

}
