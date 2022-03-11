import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PackageService {

  packages = [
    {
      pkgName: 'Trivandrum Holiday',
      pkgDesc: '',
      destination: 'Trivandrum',
      subLocs: ['Kovalam', 'Varkala', 'Kanyakumari'],
      tripdays: 2,
      travelOpt: ['Bus', 'Train', 'Car'],
      foodOpt: ['Breakfast', 'Lunch', 'Dinner'],
      price: 0,
    },
    {
      pkgName: 'Kochi Holiday',
      pkgDesc: '',
      destination: 'Kochi',
      subLocs: ['Kochi_1', 'Kochi_2', 'Kochi_3'],
      tripdays: 2,
      travelOpt: ['Bus', 'Train', 'Car'],
      foodOpt: ['Breakfast', 'Lunch', 'Dinner'],
      price: 0,
    },
    {
      pkgName: 'Calicut Holiday',
      pkgDesc: '',
      destination: 'Calicut',
      subLocs: ['Calicut_1', 'Calicut_2', 'Calicut_3'],
      travelOpt: ['Bus', 'Train', 'Car'],
      foodOpt: ['Breakfast', 'Lunch', 'Dinner'],
      price: 0,
    }
  ];

  constructor(private http: HttpClient) { }

  getUsername(){
    return 'anu'
  }

  fetchPackages(): Observable<any[]>{
    return of(this.packages);
  }
  // addPackages(): Observable<any>{
  //   return this.http.post('', {});
  // }
}
