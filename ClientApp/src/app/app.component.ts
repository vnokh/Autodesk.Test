import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  slider } from './common/animations';
import { NavigationService } from './common/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slider],
})
export class AppComponent {
  title = 'app';
  isAbsolute: boolean = true;

  constructor(private navigationService: NavigationService) {

  }

  onResized(e) {
    if (window.innerHeight - e.newHeight < 130) {
      this.isAbsolute = false;
    } else {
      this.isAbsolute = true;
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
