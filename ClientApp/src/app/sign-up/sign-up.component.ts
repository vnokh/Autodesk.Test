import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: any = {};
  isBusy: boolean;
  isConfirmPasswordMismatch: boolean;
  isUsernameMismatch: boolean;

  constructor(private client: HttpClient, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('user');
  }

  signUp() {
    var isValid = true;

    if (!(this.user.username || '').trim() || !(this.user.password || '').trim() || !(this.user.confirmPassword || '').trim() ||
      !(this.user.firstName || '').trim() || !(this.user.firstName || '').trim()) {
      isValid = false;
    };

    if ((this.user.password || '').trim() && this.user.password != this.user.confirmPassword) {
      this.isConfirmPasswordMismatch = true;
      isValid = false;
    }

    if ((this.user.username || '').trim() && this.user.username != this.user.confirmUsername) {
      this.isUsernameMismatch = true;
      isValid = false;
    }

    if (!isValid) return;

    this.isBusy = true;
    this.client.post('/api/Account/SignUp', this.user).subscribe((data) => {
      this.isBusy = false;
      this.user.isValid = data && data["user"] != null;
      if (this.user.isValid) {
        localStorage["recentlyRegistered"] = true;
        localStorage["user"] = JSON.stringify(this.user);
        this.router.navigateByUrl('/sign-in');
      }
    });
  }
}
