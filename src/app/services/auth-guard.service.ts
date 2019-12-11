import { AuthenticateService } from './authentication.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public authenticationService: AuthenticateService) {  }

  canActivate(): boolean { return true;
   /* return this.authenticationService.isAuthenticated();*/
  }


}
