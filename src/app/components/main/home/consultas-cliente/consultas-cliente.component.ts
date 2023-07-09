import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consultas-cliente.component.html',
  styleUrls: ['./consultas-cliente.component.scss']
})
export class ConsultasClienteComponent implements OnInit {

  name!: string; 
  mail!: string;
  cedula!: string; 
  tel!: string; 
  msj!: string; 


  constructor( ) { }

  ngOnInit(): void {
    
  }





  
}
