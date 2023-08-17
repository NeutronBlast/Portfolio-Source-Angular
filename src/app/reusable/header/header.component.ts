import { Component } from '@angular/core';
import {NbMenuService} from "@nebular/theme";
import {Router} from "@angular/router";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Menu
  items = [
    { title: 'Work'},
    { title: 'Educational Projects' },
    { title: 'Contact' }
  ];

  constructor(private nbMenuService: NbMenuService,
              private router: Router) {
  }

  ngOnInit(){
    // Get clicked option and perform action according to the option selected
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'options'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        if (title === "Work"){
          this.router.navigate(['work']).then(r => {})
        }
        else if (title === "Educational Projects"){
          this.router.navigate(['educational-projects']).then(r => {})
        }
        else if (title == "Contact"){
          // TODO: mailto
        }
      });
  }

  /**
   * Return to root route
   */
  returnHome(){
    this.router.navigate(['']).then(r => {})
  }
}
