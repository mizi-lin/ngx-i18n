import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {$$I18nPipe} from './i18n.pipe';
import {$$I18nDirective} from './i18n.directive';
import {$$I18nServices} from './i18n.services';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule
    ],
    declarations: [
        $$I18nPipe,
        $$I18nDirective
    ],

    /**
     * 作为子模块, 若主模块需要使用, 那么必须使用 exports
     */
    exports: [
        $$I18nPipe,
        $$I18nDirective
    ],
    providers: [
        $$I18nServices
    ]
})
export class I18nModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: I18nModule
            // providers: [
            //     TreeviewConfig,
            //     {
            //         provide: TreeviewI18n,
            //         useClass: TreeviewI18nDefault
            //     },
            //     {
            //         provide: TreeviewEventParser,
            //         useClass: DefaultTreeviewEventParser
            //     }
            // ]
        };
    }
}
