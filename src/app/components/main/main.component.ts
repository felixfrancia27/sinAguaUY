import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import Swal from 'sweetalert2';
import { Calificacion } from 'src/app/interface/Calificacion';
import { ImageDialogComponent } from 'src/app/image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  field1: string;
  field2: string;
  public articulos: any[] = [];
  ordersTable: any[] = []; // Asumo que tendrás una tabla de pedidos, pero esto debería ajustarse a tus necesidades.
  public pedidos: any[] = [];
  public proveedor: any;
  public proveedores: any[] = [];
  datasource: any;
  indice: number = 0;
  public selectedNumeroPedido: any;
  public datos: any;
  imagenes: string[] = [];
  pidPedidoSeleccionado: number | undefined;


  constructor(private httpService: ServiceService,public dialog: MatDialog) {
    this.field1 = '';
    this.field2 = '';
  }
  displayedColumns: string[] = ['photo', 'CodArtToto', 'rTallles', 'colorToto', 'coincide', 'noCoincide'];

  mostrarTabla = false;


  getColumnLabel(column: string): string {
    switch (column) {
      case 'photo':
        return 'Foto';
      case 'CodArtToto':
        return 'CodArt Toto';
      case 'rTallles':
        return 'Rango';
      case 'colorToto':
        return 'Color Toto';
      case 'coincide':
        return 'Coincide';
      case 'noCoincide':
        return 'No Coincide';
      default:
        return '';
    }
  }

  getRowColor(row: any): string {
    if (row.coincide) {
      return 'lightgreen';
    } else if (row.noCoincide) {
      return 'lightcoral';
    } else {
      return '';
    }
  }


  openImageDialog(imageUrl: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imageUrl },
    });
    position: { top: '20px' }  // Ajusta este valor según tus necesidades
  }


  volver() {
    this.mostrarTabla = false;
    this.datasource = null;
  }
  toggleColor(element: any, column: string): void {
    // Asegúrate de que solo uno de los campos esté activo a la vez
    if (column === 'coincide') {
      element.coincide = !element.coincide;
      if (element.coincide) {
        element.noCoincide = false;
      
      }
    } else if (column === 'noCoincide') {
      element.noCoincide = !element.noCoincide;
      if (element.noCoincide) {
        element.coincide = false;
      }
    }
  }

  save(): void {
    // Aquí va la lógica para guardar los cambios
  }


  ngOnInit(): void {

    this.obtenerProveedores();

  }

  obtenerImagen(indice: number) {


    this.indice++;
    return this.imagenes[indice];

  }

  generateTable() {

  }

  obtenerProveedores() {
    this.httpService.getProveedores(0).subscribe({
      next: (listaProveedores) => {
        this.proveedores = listaProveedores;
      }
    })
  }

  toggleMatching(element: Element) {
    // element.isMatching = !element.isMatching;
  }


  seleccionoProveedor() {
    this.articulos = [];
    this.datasource = null;

    this.httpService.obtenerDatosPedido(this.proveedor.NroFabricante.toString()).subscribe({
      next: (numPedidos) => {
        this.pedidos = numPedidos;

        // Comprobamos si ambos están seleccionados después de recibir la respuesta.

      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No hay resultados con la búsqueda ingresada',
        });
      },
    });
  }


  pedidoSeleccionado(idPedido: number) {
    this.pidPedidoSeleccionado = idPedido;

    this.selectedNumeroPedido = this.pedidos.find(pedido => pedido.id === this.pidPedidoSeleccionado)?.NumeroPedido;

    // Aquí puedes guardar el número de pedido en alguna variable o hacer algo con él



    this.httpService.obtenerArticulosPedido(idPedido.toString()).subscribe({
      next: (data) => {
        this.datasource = data;

        for (let dato of this.datasource) {
          this.httpService.obtenerDescripcion(dato.CodArtToto, dato.colorToto).subscribe({
            next: (data) => {
              if (data.length == 0) {
                dato.imageUrl = 'http://10.100.59.24/comventa/Content/noFoto.png';

              } else {
                this.httpService.getImagen(this.proveedor.NroFabricante, dato.CodArtToto, data[0].DESCR, dato.colorToto).subscribe({
                  next: (imageUrl) => {
                    dato.imageUrl = imageUrl;
                  }
                });
              }
            }
          });
        }

        if (this.proveedor && this.pidPedidoSeleccionado) {
          this.mostrarTabla = true;
        }



        console.log('Datasource = >', this.datasource);
      }


    });
  }

  guardar(): void {
    this.datasource.forEach((fila: any) => {

      
      if (!fila.coincide && !fila.noCoincide) {
       // calificacion.Coincide = null;
       console.log('No se agrega a la tabla');
       
      } else {
        let calificacion: Calificacion = {
          CodArtToto: fila.CodArtToto,
          ColorToto: fila.colorToto,
          Talles: fila.rTalles,
          Proveedor: fila.NroFabricante,
          NumeroPedido: this.selectedNumeroPedido,
          Origen: 'Sistema control pedidos',
          Coincide: null
        };
        if (fila.coincide) {
          calificacion.Coincide = true;
        } else if (fila.noCoincide) {
          calificacion.Coincide = false;
        }
        this.httpService.agregarCalificacion(calificacion)
        .subscribe(respuesta => {
          console.log(respuesta);
        });
        console.log(fila);
        
      }
      



     
  

     
    });
  }
  





}
