import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = "https://pokeapi.co/api/v2/";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private options = {
        headers: new HttpHeaders({
        }).set('Content-Type', 'application/json; charset=utf-8')
    };

    constructor(private httpClient: HttpClient) { }

    public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.httpClient.get(BASE_URL + path, this.options).pipe(catchError(this.formatErrors));
    }

    public put(path: string, body: object = {}): Observable<any> {
        return this.httpClient
            .put(BASE_URL + path, JSON.stringify(body), this.options)
            .pipe(catchError(this.formatErrors));
    }

    public post(path: string, body: any = {}): Observable<any> {
        if (typeof (body) === "string")
            return this.httpClient
                .post(BASE_URL + path, JSON.stringify(body), this.options)
                .pipe(catchError(this.formatErrors));
        return this.httpClient
            .post(BASE_URL + path, JSON.stringify(body), this.options);
    }

    public path(path: string, body: object = {}): Observable<any> {
        return this.httpClient
            .patch(BASE_URL + path, JSON.stringify(body), this.options)
            .pipe(catchError(this.formatErrors));
    }

    public delete(path: string): Observable<any> {
        return this.httpClient.delete(BASE_URL + path).pipe(catchError(this.formatErrors));
    }

    public formatErrors(error: any): Observable<any> {
        return throwError(error.error);
    }
}
