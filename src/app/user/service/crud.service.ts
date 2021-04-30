import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private token = 'lzMma3zQepNFsPwEmxrsM8hQDmyjNalNfDphTpk3';

  private header = new HttpHeaders().set("Authorization", this.token);

  private url="http://168.138.141.237:33000/api/usuarios";
  
  userEditar : any = new Subject();

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url, {
      headers: this.header
    });
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.url, user, {
      headers: this.header
    });
  }

  updateUser(id: string, usuario: any): Observable<any> {
    return this.http.put<any>(this.url + "/" + id, usuario, {
      headers: this.header
    });
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(this.url + "/" + id, {
      headers: this.header
    });
  }
  
}
