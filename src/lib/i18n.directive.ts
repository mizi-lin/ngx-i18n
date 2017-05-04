import {Directive, ElementRef, Input, AfterViewInit, OnChanges, DoCheck} from '@angular/core';
import {$$I18nServices} from './i18n.services';
import * as mu from 'mzmu';

@Directive({
    selector: '[i18n]'
})
export class $$I18nDirective implements AfterViewInit, OnChanges, DoCheck {
    @Input() i18n;
    lang: string;
    key: string;

    constructor(
        private elm: ElementRef,
        private $$I18nServices: $$I18nServices
    ) {
        this.lang = this.$$I18nServices.config.lang;
    }

    ngAfterViewInit() {
        let key = this.key = this.key || this.elm.nativeElement.innerText.trim();
        this.$$I18nServices.getText((text) => {
            this.elm.nativeElement.innerText = text;
        }, key, ...this.i18n);
    }

    ngOnChanges() {
        this.ngAfterViewInit();
    }

    ngDoCheck() {
        mu.run(this.$$I18nServices.config.lang, (lang) => {
            if(lang !== this.lang){
                this.lang = lang;
                this.ngAfterViewInit();
            }
        });
    }
}