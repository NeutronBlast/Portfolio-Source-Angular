import { Component } from '@angular/core';
import {NbIconLibraries} from "@nebular/theme";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PF2023';

  constructor(private iconLibraries: NbIconLibraries,
              private router: Router) {

    this.iconLibraries.registerFontPack('font-awesome', {
      packClass: 'fa',
      iconClassPrefix: 'fa',
      icons: [
        {name: 'sack-dollar', iconClass: 'fa-sack-dollar'},
        {name: 'table-list', iconClass: 'fa-table-list'},
        {name: 'coins', iconClass: 'fa-coins'}
      ],
    });

    this.iconLibraries.registerFontPack('font-awesome-brands', {
      packClass: 'fab',
      iconClassPrefix: 'fa',
      icons: [
        {name: 'discord', iconClass: 'fa-discord'},
      ],
    });

    // Register Nebular's default icon pack (required)
    this.iconLibraries.setDefaultPack('eva');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event);
      }
    });
  }
}
