import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AboutModule } from './@components/about/about.module';
import { CvModule } from './@components/cv/cv.module';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderModule } from './@components/header/header.module';
import { HeroModule } from './@components/hero/hero.module';
import { ServiciosModule } from './@components/servicios/servicios.module';
import { SkillsModule } from './@components/skills/skills.module';
import { LoginModule } from './@components/login/login.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AboutModule,
    CvModule,
    FooterModule,
    HeaderModule,
    HeroModule,
    ServiciosModule,
    SkillsModule,
    LoginModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#ffb727",
      innerStrokeColor: "#fff4df",
      animationDuration: 300,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }