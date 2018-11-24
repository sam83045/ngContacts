import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
@Injectable()
export class BaseURL {
    getBaseURL(): string {
        return environment.baseUrl;
    }
}