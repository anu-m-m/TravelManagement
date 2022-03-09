import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  navVal = 'from Link1'
  constructor(private route: Router) {
    const navg = this.route.getCurrentNavigation();
    if(navg && navg.extras && navg.extras.state){
      const state = navg.extras.state;
      // alert(state['abc']);
      this.navVal = state['navVal'];
    }
  }

  ngOnInit(): void {
  }

}
