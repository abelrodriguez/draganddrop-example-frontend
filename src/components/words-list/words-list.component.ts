import { Component, OnInit } from '@angular/core';
import { Word } from '../../core/models/word.model';
import { WordsListService } from './words-list.service';

@Component({
    selector: 'app-words-list',
    templateUrl: './words-list.component.html',
    styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit {

    wordList: Word[];

    constructor(
        private wordsListService: WordsListService,
    ) { }

    ngOnInit() {
        this.wordsListService.getWordsList()
            .subscribe(
                data => { this.wordList = data; }
            );
    }

    dragEnd() {
        console.log(this.wordList);
    }
}
