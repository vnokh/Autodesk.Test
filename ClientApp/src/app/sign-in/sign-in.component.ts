import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user: any = {username:''};
  isBusy: boolean = false;
  toastVisible: boolean;

  constructor(private client: HttpClient, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('recentlyRegistered')) {
      localStorage.removeItem('recentlyRegistered');
      this.user = JSON.parse(localStorage["user"]);
      this.showRecentRegisterToast();
    }
  }

  showRecentRegisterToast() {
    this.toastVisible = true;
    setTimeout(() => {
      this.toastVisible = false;
    }, 5000);
  }

  checkUserName() {
    if (!(this.user.username || '').trim()) return;

    this.isBusy = true;
    this.client.get('/api/Account/CheckUsername?username=' + this.user.username).subscribe((data) => {
      this.isBusy = false;
      this.user.isValid = data['isValid'];
      if (this.user.isValid) {
        localStorage["user"] = JSON.stringify(this.user);
        this.router.navigateByUrl('/sign-in-welcome');
      }
    });
  }
}
