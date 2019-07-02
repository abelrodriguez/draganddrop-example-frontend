import { Component, OnInit } from '@angular/core';
import { Words } from '../../core/models/words.model';

@Component({
    selector: 'app-words-list',
    templateUrl: './words-list.component.html',
    styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit {

    wordList: Words = {
        _id: 1,
        items: ['gato', 'cosa', 'nada']
    };

    constructor() { }

    ngOnInit() {
    }

    dragEnd() {
        console.log(this.wordList);
    }
}
