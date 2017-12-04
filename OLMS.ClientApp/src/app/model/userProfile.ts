import { Injectable } from '@angular/core';
import { IProfile } from './user';
import { Router } from '@angular/router';
@Injectable()
export class UserProfile {
    userProfile: IProfile = {
        token: "",
        expiration: "",
        currentUser: { id: '', userName: '', email: '',landingRoute:'' },
        claims: null
    };
    constructor(private router: Router) {
        
    }

    setProfile(profile: IProfile): void {
console.log('set profile',profile);

        
      //  var userName = profile.
      
        //var userName = profile.claims.filter(p => p.type == 'userName')[0].value;
     //   console.log('set email',userName);
        sessionStorage.setItem('access_token', profile['access_token']);
        sessionStorage.setItem('expires_in', profile['expires_in']);
       // sessionStorage.setItem('nameid', nameid);
        sessionStorage.setItem('userName', profile['userName']);
        sessionStorage.setItem('landingRoute', profile['landingRoute']);
       
      
        this.userProfile.currentUser.id = sessionStorage.getItem('access_token');
        console.log(this.userProfile.currentUser.id);
    }

    getProfile(authorizationOnly: boolean = false): IProfile {
        var accessToken = sessionStorage.getItem('access_token');

        if (accessToken) {
            this.userProfile.token = accessToken;
            this.userProfile.expiration = sessionStorage.getItem('expires_in');
            if (this.userProfile.currentUser == null) {
                this.userProfile.currentUser = { id: '', userName: '', email: '',landingRoute:'' }
            }
            this.userProfile.currentUser.id = sessionStorage.getItem('userName');
            this.userProfile.currentUser.userName = sessionStorage.getItem('userName');
            this.userProfile.currentUser.landingRoute = sessionStorage.getItem('landingRoute');
        }

        return this.userProfile;
    }

    resetProfile(): IProfile {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('expires_in');
        this.userProfile = {
            token: "",
            expiration: "",
            currentUser: null,
            claims: null
        };
        return this.userProfile;
    }
}