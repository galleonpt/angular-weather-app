import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { GithubApiService } from './services/github-api.service';
import { IGibthubUserInfo } from './types/github.types';
import { CommonModule } from '@angular/common';
import { JobTagComponent } from './components/job-tag/job-tag.component';

interface ISearchForm {
    name: string;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        JobTagComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    searchForm: FormGroup;
    searchedUser: IGibthubUserInfo | null = null;

    constructor(
        private githubApiService: GithubApiService,
        private fb: FormBuilder
    ) {
        this.searchForm = this.fb.group<ISearchForm>({
            name: '',
        });
    }

    ngOnInit(): void {
        this.githubApiService.getUserInfo('galleonpt').subscribe((data) => {
            console.log(data);
            this.searchedUser = data;
        });
    }

    onSubmit() {
        this.githubApiService
            .getUserInfo(this.searchForm.value.name)
            .subscribe((data) => {
                console.log(data);
                this.searchedUser = data;
            });
    }
}
