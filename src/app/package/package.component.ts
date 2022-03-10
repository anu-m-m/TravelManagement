import { Component, OnInit } from '@angular/core';
import { PackageService } from './service/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packages=[];
  
  constructor(private pkgService: PackageService) { }

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(){
    const name = this.pkgService.getUsername();
    console.log(name);

    this.pkgService.fetchPackages().subscribe((pkg) => {
      this.packages = pkg;
    }, (err) => {
      console.error(err);
    });
  }

  onCreatePkg(){
    
  }

}
