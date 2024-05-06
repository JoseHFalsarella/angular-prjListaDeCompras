import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private token = '';
  // private jwtToken = new BehaviorSubject<string>(this.token);
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient,
              //private router: Router,
              //private toast: ToastrService
  ) { 
    // const fetchedToken = localStorage.getItem('act');

    // if (fetchedToken) {
    //   this.token = atob(fetchedToken);
    //   this.jwtToken.next(this.token);
    // }
  }

  // get jwtUserToken(): Observable<string> {
  //   return this.jwtToken.asObservable();
  // }

  getAllItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}/lista`)
  }

  // login(username: string, password: string) {
  //   this.http.post(`${this.apiUrl}/auth/login`, {username: username, password: password})
  //    .subscribe((res: any) => {
  //     this.token = res.token;

  //     if (this.token) {
  //       this.toast.success('Login realizado com sucesso, redirecionando...', '', {
  //         timeOut: 700,
  //         positionClass: 'toast-bottom-center'
  //       }).onHidden.toPromise().then(()=> {
  //         this.jwtToken.next(this.token);
  //         localStorage.setItem('act', btoa(this.token));
  //         this.router.navigateByUrl('/').then();
  //       });
  //     }
  //    }, (err: HttpErrorResponse) => console.log(err.message));
  // }

  createItem(nome: string, quantity: number){
    return this.http.post(`${this.apiUrl}/lista`,{nome: nome, quantity: quantity});
  }

  updateStatus(status: boolean, id: number) {
    return this.http.patch(`${this.apiUrl}/lista/${id}`, {status: status});
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.apiUrl}/lista/${id}`);

  }
}
