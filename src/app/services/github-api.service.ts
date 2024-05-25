import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GithubApiService {
    constructor(private http: HttpClient) {}

    getUserInfo() {
        return this.http.get('https://api.github.com/users/galleonpt');
    }
}
