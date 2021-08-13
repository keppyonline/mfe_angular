import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config/config.service';
import { SharedSubjectService } from './services/shared-subject.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    { 
      provide: APP_INITIALIZER,
      useFactory: initializeConfig, 
      deps: [ConfigService],
      multi: true
    },
    SharedSubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function initializeConfig(configService: ConfigService) {
  return (): Promise<any> => { 
    return configService.init();
  }
}
