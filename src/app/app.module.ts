import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { WordsListComponent } from '../components/words-list/words-list.component';
import { WordsListModule } from '../components/words-list/words-list.module';

@NgModule({
    declarations: [
        AppComponent,
        WordsListComponent
    ],
    imports: [
        BrowserModule,
        DndModule.forRoot(),
        WordsListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
