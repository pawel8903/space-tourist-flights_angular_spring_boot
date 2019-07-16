import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'http://localhost:8080/tourist/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getTouirsts(): Observable<any> {
    return this.http.get(endpoint + 'touristList').pipe(
      map(this.extractData));
  }

  getTouirst(id): Observable<any> {
    return this.http.get(endpoint + id).pipe(
      map(this.extractData));
  }

  addTouirst(touirst): Observable<any> {
    console.log('fffffffff', touirst);
    return this.http.post<any>(endpoint, JSON.stringify(touirst), httpOptions).pipe(
      tap((_touirst) => console.log('added touirst w/ id=${touirst.id}')),
      catchError(this.handlerError<any>('addTourist')));
  }

  updateTouirst(touirst): Observable<any> {
    console.log(touirst);
    return this.http.put<any>(endpoint, JSON.stringify(touirst), httpOptions).pipe(
      tap(_ => console.log('update touirst id=${touirst.id}')),
      catchError(this.handlerError<any>('addTourist')));
  }

  deleteTouirst(id): Observable<any> {
    return this.http.delete<any>(endpoint + id, httpOptions).pipe(
      tap(_ => console.log('delete touirst id=${id}')),
      catchError(this.handlerError<any>('Delete touirst'))
    );
  }

  private handlerError<T>(operation = 'operations', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log('${operation} failed: ${error.operation}');
      return of(result as T);
    }
  }
}
