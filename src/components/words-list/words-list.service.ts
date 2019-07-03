import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Word } from '../../core/models/word.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WordsListService {

    constructor(
        private apiService: ApiService,
    ) { }

    getWordsList(): Observable<Word[]> {
        return this.apiService.get(`words/`);
    }

    getAnagramas(anagramaBase: string): Observable<number[]> {
        return this.apiService.get(`anagramas/${anagramaBase}`);
    }
}
