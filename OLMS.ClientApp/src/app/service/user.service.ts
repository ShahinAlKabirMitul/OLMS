import { CommonService } from '../shared/common.service';
import { contentHeaders } from '../common/headers';
import { IProfile } from '../model/user';
import { UserProfile } from '../model/userProfile';


import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

  redirectUrl: string;
  errorMessage: string;
  constructor(
      private http: Http,
      private router: Router,
      private authProfile: UserProfile,
      private commonService: CommonService) { }

  isAuthenticated() {
      // tslint:disable-next-line:prefer-const
      let profile = this.authProfile.getProfile();
      const validToken = profile.token !== '' && profile.token != null;
      const isTokenExpired = this.isTokenExpired(profile);
      return validToken && !isTokenExpired;
  }
  isAuthorized() {
      const profile = this.authProfile.getProfile();
      const validToken = profile.token !== '' && profile.token != null;
      const isTokenExpired = this.isTokenExpired(profile);
      return validToken && !isTokenExpired;
  }
  isTokenExpired(profile: IProfile) {
      const expiration = new Date(profile.expiration);
      return expiration < new Date();
  }

  login(userName: string, password: string) {
      console.log('User Login' + userName + '-' + password);
      const options = new RequestOptions(
          { headers: contentHeaders });

      const credentials = {
          grant_type: 'password',
          email: userName,
          password: password
      };
      console.log('credentials', credentials);
    //  let m='username='+userName+'&password='+password+'&grant_type=password';
      const m = `username=${userName}&password=${password}&grant_type=password`;
      const data = `username=${userName}&password=${password}&grant_type=password`;
      const url = this.commonService.getBaseUrl();
     console.log('Url', url );
      return this.http.post(url, data, options)
          .map((response: Response) => {
              const userProfile: IProfile = response.json();
              this.authProfile.setProfile(userProfile);
              return response.json();
          }).catch(this.commonService.handleFullError);
  }
  register(userName: string, password: string, confirmPassword: string) {
      if (!userName || !password) {
          return;
      }
      const options = new RequestOptions(
          { headers: contentHeaders });

      const credentials = {
          email: userName,
          password: password,
          confirmPassword: confirmPassword
      };
      let url = this.commonService.getBaseUrl() + '/auth/register';
      return this.http.post(url, credentials, options)
          .map((response: Response) => {
              return response.json();
          }).catch(this.commonService.handleFullError);
  }

  logout(): void {
      this.authProfile.resetProfile();
  }

}
