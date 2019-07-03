import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Config } from '../models/config.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {

    constructor(
        private apiService: ApiService,
    ) { }

    updateConfig(config: Config): Observable<Config> {
        return this.apiService.post(`config/`, config);
    }
}
