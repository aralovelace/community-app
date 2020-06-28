import { Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth';
import { UserService} from './user.service';


@Injectable()

export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) { }

  canActivate(): Promise<boolean>{
    return new Promise((resolve, rejects) => {
      this.userService.getCurrentUser()
        .then(user => {
          const booleanPromise = this.router.navigate(['/user']);
          return resolve(booleanPromise);
        }, err => {
          return resolve(true);
        });
      });
  }
}


