import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { GithubApiService } from './services/github-api.service';

interface ISearchForm {
    name: string;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    searchForm: FormGroup;
    searchedValue: string = '';

    constructor(
        private githubApiService: GithubApiService,
        private fb: FormBuilder
    ) {
        this.searchForm = this.fb.group<ISearchForm>({
            name: '',
        });
    }

    ngOnInit(): void {
        this.githubApiService
            .getUserInfo()
            .subscribe((data) => console.log(data));
    }

    onSubmit() {
        this.searchedValue = this.searchForm.value.name;
    }
}
