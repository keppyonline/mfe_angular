import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend.model';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                remoteName: 'enquiries',
                exposedModule: './Module',

                // For Routing
                displayName: 'Enquiry',
                routePath: 'enquiries',
                ngModuleName: 'EnquiryModule'
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:5000/remoteEntry.js',
                remoteName: 'enrollments',
                exposedModule: './Module',

                // For Routing
                displayName: 'Enrollment',
                routePath: 'enrollments',
                ngModuleName: 'EnrollmentModule'
            }
        ] as Microfrontend[]);
    }
}