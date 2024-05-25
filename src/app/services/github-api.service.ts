import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGibthubUserInfo } from '../types/github.types';

@Injectable({
    providedIn: 'root',
})
export class GithubApiService {
    constructor(private http: HttpClient) {}

    getUserInfo() {
        return this.http.get<IGibthubUserInfo>(
            'https://api.github.com/users/galleonpt'
        );
    }
}
