import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubApiService } from './services/github-api.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    constructor(private githubApiService: GithubApiService) {}

    ngOnInit(): void {
        this.githubApiService
            .getUserInfo()
            .subscribe((data) => console.log(data));
    }
}
