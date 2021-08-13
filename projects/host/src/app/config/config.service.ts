import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../../menu-utils';
import { APP_ROUTES } from '../app-routing.module';
import { LookupService } from '../microfrontends/lookup.service';

@Injectable({ providedIn: 'root' })
export class ConfigService {
    constructor(private router: Router,
        private lookupService: LookupService){}
        
    init(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
        this.lookupService.lookup().then((microfrontends) => {
            const routes = buildRoutes(microfrontends);
            this.router.resetConfig(routes);
            resolve();
        });
        });
    }
}