import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { ApiService } from './services/api.service';
import { HeaderInterceptor } from './interceptors/header.interceptor';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [],
    declarations: [],
    providers: [
        ApiService,
        { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    ]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
