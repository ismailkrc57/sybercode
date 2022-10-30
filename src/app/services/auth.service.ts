import {Injectable} from '@angular/core';
import {HttpClient,} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private route:Router) {
  }
  public login(username: string, password: string):Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl+`/User/login?username=${username}&password=${password}`, );
  }
  public logout() {
    localStorage.clear();
    this.route.navigate(['/login']).then(r => console.log(r));
  }
}
