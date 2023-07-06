import { Injectable } from '@angular/core';
import { ProveedorInfo } from './interface/ProveedorInfo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './environments/environment';
import { Calificacion } from './interface/Calificacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 // 
 
  constructor(private http: HttpClient) { }

  getProveedores(numero: number): Observable<ProveedorInfo[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.get<ProveedorInfo[]>( environment.urlImportaciones + `pedidos/getProvInfo?numero=${numero}`, {
      headers: headers
    });
  }

  infoPedido(proveedores: string): Observable<any> {
    return this.http.get<any>(
      environment.urlImportaciones + `pedidos/InfoPedido?proveedores=${proveedores}`
    );
  }

  obtenerDatosPedido(fab: string): Observable<any> {
    return this.http.get<any>(
      environment.urlImportaciones + `pedidos/obtenerDatosPedido?fab=${fab}&Nropedido=${'No'}`
    );
  }

  obtenerArticulosPedido(idPedido: string): Observable<any> {
    return this.http.get<any>(
      environment.urlImportaciones + `pedidos/ObtenerArticulosPedido?idPedido=${idPedido}`
    );
  }

  obtenerDescripcion(codart: string, color:string): Observable<any> {
    return this.http.get<any>(
      environment.urlImportaciones + `recepcionPedidos/obtenerDescripcion?codart=${codart}&color=${color}`
    );
  }
 
  getImagen(proveedor: string, codart: string, descripcion: string, color: string){
    return this.http.get<any>(`http://10.100.59.137/UtilidadesAPI/api/Colector/GetImagen?Proveedor=${proveedor}&Articulo=${codart}&Descripcion=${descripcion}&Color=${color}`
    );
  }


  agregarCalificacion(calificacion: Calificacion): Observable<string> {
    return this.http.post<string>(`${environment.urlImportaciones}calificaciones/agregarCalificacion`, calificacion);
  }

  


}
