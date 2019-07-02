import { Component, OnInit } from '@angular/core';
import { Words } from '../../core/models/words.model';
import { WordsListService } from './words-list.service';

@Component({
    selector: 'app-words-list',
    templateUrl: './words-list.component.html',
    styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit {

    wordList: Words;

    constructor(
        private wordsListService: WordsListService,
    ) { }

    ngOnInit() {
        this.wordsListService.getWordList(1)
            .subscribe(
                data => { this.wordList = data; }
            );
    }

    dragEnd() {
        console.log(this.wordList);
    }
}
