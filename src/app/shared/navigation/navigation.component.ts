import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private rtr: Router) { }

  ngOnInit(): void {
  }

  onSelect(val: string){
    const abc = 'link 2';
    // /${val} ..use /?
    this.rtr.navigate([`/${val}`],{state: {abc}})
  }

}
