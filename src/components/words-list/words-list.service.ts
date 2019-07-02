import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Words } from '../../core/models/words.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WordsListService {

    constructor(
        private apiService: ApiService,
    ) { }

    getWordList(id: number): Observable<Words> {
        return this.apiService.get(`words/${id}`);
    }
}
