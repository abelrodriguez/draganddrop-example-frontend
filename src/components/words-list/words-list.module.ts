import { NgModule } from '@angular/core';
import { WordsListService } from './words-list.service';
import { ConfigService } from '../../core/services/config.service';

@NgModule({
    declarations: [],
    imports: [],
    entryComponents: [],
    providers: [ WordsListService, ConfigService ]
})

export class WordsListModule { }
