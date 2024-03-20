  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class HousingService {

    constructor(private http: HttpClient) { }
    getAll() {
      return this.http.get('http://validate.jsontest.com/?json=%7B%22key%22:%22value%22%7D')
    }
  }
