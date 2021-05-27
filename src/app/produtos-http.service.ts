import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosHttp {

  constructor(public http: Http) { }

  query(): Observable<Array<any>> {
    return this.http.get('http://localhost:3000/produtos')
    .map(response=> response.json());
  }


}
