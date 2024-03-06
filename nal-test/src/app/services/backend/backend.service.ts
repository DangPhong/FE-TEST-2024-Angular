import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}

  private get endPointApi() {
    return 'url';
  }

  public getBlogs(): Observable<any> {
    const endPoint = `${this.endPointApi}/${''}`;
    return this.httpClient.get<any>(endPoint);
  }
}
