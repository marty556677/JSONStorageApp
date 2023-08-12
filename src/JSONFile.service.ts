import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { map, catchError, tap, flatMap, mergeMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { VariableBinding } from '@angular/compiler';

@Injectable({providedIn: 'root'})
export class JSONFileService {
    constructor(private http: HttpClient) {}
    baseUrl = 'https://localhost:7293/api/JSONFile/';

    getAllFiles(): Observable<any>
    {
        return this.http.get<any>(this.baseUrl)
        .pipe(
      
          map((response: JSONFileItem[]) => {
            //tap( response => console.log('mapped:', response.arg1))
            //console.log(response)
            return response;
          }),
          catchError(this.handleError)
          );
          //tap( res => console.log('HTTP response:', res))
          /*
          map((response: JSONFileItem[]) => {
            return response
        })
        */
        //)
        
    }

    addFile(json: string): Observable<any[]>
    {
        return this.http.post<any[]>(this.baseUrl, json)
        .pipe(
          map((response: any[]) => {
            return response
        }),
        catchError(this.handleError)
        )
    }

    /*
tap( 
            res => console.log('HTTP response:', res)),
                map(res => res.json().payload),
                tap(console.log)

    getFileById(id: number): Observable<any[]>
    {
        return this.http.get<any[]>(this.baseUrl + id)
        .pipe(
          map((response: any[]) => {
            return response
        }),
        catchError(this.handleError)
        )
    }

    deleteFileById(id: number): Observable<any[]>
    {
        return this.http.delete<any[]>(this.baseUrl + id)
        .pipe(
          map((response: any[]) => {
            return response
        }),
        catchError(this.handleError)
        )
    }

    updateFile(json: string): Observable<any[]>
    {
        return this.http.put<any[]>(this.baseUrl, json)
        .pipe(
          map((response: any[]) => {
            return response
        }),
        catchError(this.handleError)
        )
    }
*/

    
    private handleError(error: HttpErrorResponse) {
        console.error(error.message);
        return throwError(() => new Error('An error occurred, please try again.'))
      }
}


interface JSONFileResponse {
  arg1: JSONFileItem[];
}
  interface JSONFileItem {
    id: number;
    text: string;
    updateDate: string;
    description: string;
  }