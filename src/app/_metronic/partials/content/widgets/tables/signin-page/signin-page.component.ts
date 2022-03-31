import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'ng-social-login-module';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {
  @Input() name: string;

  user: SocialUser
  loggedIn: boolean = false;
  constructor(private authService: AuthService, private route: Router, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.authService.authState.subscribe((res: any) => {
      this.user = res;
      this.loggedIn = (res != null)
      this.ref.detectChanges()
      // if (!res) {
      //   this.route.navigateByUrl("crafted/widgets/sign-with-google")
      // }
    })

    // window.onbeforeunload = () => {
    //   this.authService.signOut()
    // }

    // window.addEventListener('onbeforeunload', () => {
    //   this.authService.signOut()
    // })
  }

  signOut() {
    this.authService.signOut()
    if (this.loggedIn) {
      this.route.navigateByUrl("crafted/widgets/sign-with-google")
    }
  }

}
