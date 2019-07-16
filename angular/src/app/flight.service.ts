import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/flight/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getFlights(): Observable<any> {
    return this.http.get(endpoint + 'flightList').pipe(
      map(this.extractData));
  }

  getFlight(id): Observable<any> {
    return this.http.get(endpoint + id).pipe(
      map(this.extractData));
  }

  addFlight(flight): Observable<any> {
    console.log('fffffffff',flight);
    return this.http.post<any>(endpoint, JSON.stringify(flight), httpOptions).pipe(
      tap((_flight) => console.log('added flight w/ id=${flight.id}')),
      catchError(this.handlerError<any>('addFlight')));
  }

  updateFlight(flight): Observable<any> {
    console.log(flight);
    return this.http.put<any>(endpoint, JSON.stringify(flight), httpOptions).pipe(
      tap(_ => console.log('update flight id=${flight.id}')),
      catchError(this.handlerError<any>('addFlight')));
  }

  deleteFlight(id): Observable<any> {
    return this.http.delete<any>(endpoint + id, httpOptions).pipe(
      tap(_ => console.log('delete flight id=${id}')),
      catchError(this.handlerError<any>('Delete flight'))
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
