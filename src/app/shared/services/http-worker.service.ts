import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from '../worker.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerService {

  routerApi = "http://localhost:3000/workers"

  constructor(
    private http: HttpClient
  ) { }

  getWorker(): Promise<any> {
    return this.http.get(this.routerApi).toPromise();
  }

  postWorker(data: MyWorker) {
    return this.http.post(this.routerApi, data).toPromise();
  }

  deleteWorker(id: number) {
    const url = `${this.routerApi}/${id}`; 
    return this.http.delete(url).toPromise()
  }

  changeWorker(worker: MyWorker){
    const url = `${this.routerApi}/${worker.id}`;
    return this.http.put(url, worker).toPromise()
  }
}
