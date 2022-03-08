import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit(): void {
  }

  onCreatePkg(){
    
  }

}
