import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in-welcome',
  templateUrl: './sign-in-welcome.component.html',
  styleUrls: ['./sign-in-welcome.component.scss']
})
export class SignInWelcomeComponent implements OnInit {
  user: any;
  faChevronLeft = faChevronLeft;
  isBusy: boolean;
  toastVisible: boolean;

  constructor(private client: HttpClient, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage["user"]);

  }

  signIn() {
    if (!(this.user.password || '').trim()) return;

    this.isBusy = true;
    this.client.post('/api/Account/SignIn', this.user).subscribe((data) => {
      this.isBusy = false;
      this.user.isValid = data && data["user"] != null;
      if (this.user.isValid) {
        localStorage["user"] = JSON.stringify(this.user);
        this.showSuccessToast();
      }
    });
  }

  showSuccessToast() {
    this.toastVisible = true;
    setTimeout(() => {
      this.toastVisible = false;
    }, 5000);
  }
}
