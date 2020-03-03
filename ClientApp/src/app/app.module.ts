import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInWelcomeComponent } from './sign-in-welcome/sign-in-welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularResizedEventModule } from 'angular-resize-event';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationService } from './common/navigation';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    SignInWelcomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ad-test' }),
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularResizedEventModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: SignInComponent, pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent, data: { animation: 'isLeft' } },
      { path: 'sign-in-welcome', component: SignInWelcomeComponent, data: { animation: 'isRight' } },
      { path: 'sign-up', component: SignUpComponent, data: { animation: 'isRight' } }
    ])
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
