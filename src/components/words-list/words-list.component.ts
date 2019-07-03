import { Component, OnInit } from '@angular/core';
import { Word } from '../../core/models/word.model';
import { Config } from '../../core/models/config.model';
import { WordsListService } from './words-list.service';
import { ConfigService } from '../../core/services/config.service';

@Component({
    selector: 'app-words-list',
    templateUrl: './words-list.component.html',
    styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit {

    wordList: Word[];

    constructor(
        private wordsListService: WordsListService,
        private configService: ConfigService,
    ) { }

    ngOnInit() {
        this.wordsListService.getWordsList()
            .subscribe(
                data => { this.wordList = data; }
            );
    }

    dragEnd() {
        const config: Config = {
            _id: 1,
            sort_items: this.wordList.map((word) => word._id)
        };
        this.configService.updateConfig(config)
            .subscribe();
    }

    findAnagrama(anagramaBase) {
        this.wordList.map(word => word.isAnagrama = false);
        if (anagramaBase) {
            this.wordsListService.getAnagramas(anagramaBase)
                .subscribe(
                    anagramaList => {
                        anagramaList
                            .map(key => this.wordList.find(list => list._id === key))
                            .map(word => word.isAnagrama = true);
                    }
                );
            }
    }
}
