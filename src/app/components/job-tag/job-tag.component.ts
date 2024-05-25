import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-job-tag',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './job-tag.component.html',
    styleUrl: './job-tag.component.css',
})
export class JobTagComponent {
    @Input() job: boolean | null;

    constructor() {
        this.job = null;
    }
}
