import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  origin=''
  constructor(private httpClient:HttpClient) { }
  upload(formData){
    return this.httpClient.post(`http://localhost:8000/upload`,formData);
  }
}
