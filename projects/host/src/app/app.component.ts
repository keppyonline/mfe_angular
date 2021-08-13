import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLibService } from 'projects/auth-lib/src/public-api';
import { buildRoutes } from '../menu-utils';
import { LookupService } from './microfrontends/lookup.service';
import { Microfrontend } from './microfrontends/microfrontend.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {

  microfrontends: Microfrontend[] = [];

  constructor(
    private router: Router,
    private lookupService: LookupService,
    private authService: AuthLibService) {
      // login
      this.authService.login("Keppy", '');
      console.log('auth');
      console.log(this.authService.user);
  }

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
  }
}