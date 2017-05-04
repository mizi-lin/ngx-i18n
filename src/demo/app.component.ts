import {Component} from '@angular/core';
import {$$I18nServices} from '../lib/i18n.services';
import * as mu from 'mzmu';

@Component({
    selector: 'ngx-app',
    template: `
<div class="container">
    <h2>Angular 4 ngx-i18n demo</h2>
    
    <select #f (change)="setLang(f.value)" [(ngModel)]="lang">
        <option value="zh-cn">中文</option>
        <option value="jp">日文</option>
        <option value="en">English</option>
    </select>
    
    <h5>PIPE</h5>
    <div>{{ 'HELLO_WORLD' | i18n }}</div>
    <div>{{ 'HELLO_USER' | i18n: 'Mizi' }}</div>
    <div>{{ 'WELCOME_1' | i18n:'Mizi':'i18n' }}</div>
    <div>{{ 'WELCOME_1' | i18n:['Mizi','i18n'] : 'Shanghai' }}</div>
    <div>{{ 'WELCOME_2' | i18n: userInfo }}</div>
    <div>{{ 'WELCOME_3' | i18n: '2017-05-05' : userInfo }}</div>
    <div>{{ 'WELCOME._3' | i18n: '2017-05-05' : userInfo }}</div>
    
    <h5>DIRECTIVE</h5>
    
    <div [i18n]>HELLO_WORLD</div>
    <div [i18n]="'Mizi'">HELLO_USER</div>
    <div [i18n]="['Mizi', 'i18n']">WELCOME_1</div>
    <div [i18n]="[['Mizi', 'i18n'], 'Shanghai']">WELCOME_1</div>
    <div [i18n]="['2017-05-05', this.userInfo]">WELCOME._3</div>
</div>
  `,
    providers: [
        // { provide: TreeviewI18n, useClass: DefaultTreeviewI18n }
    ]
})
export class AppComponent {
    userInfo: any = {
        name: 'Mizi',
        site: 'il8n',
        address: {
            province: 'Beijing'
        }
    };

    lang: string;

    setLang(lang: string): void {
        this.$$I18nServices.setLang(lang);
        this.test();
    }

    test() {
        this.$$I18nServices.getText((text) => {
            console.debug(text);
        }, 'HELLO_WORLD');

        this.$$I18nServices.getText((text) => {
            console.debug(text);
        }, 'HELLO_USER', 'Mizi');

        this.$$I18nServices.getText((text) => {
            console.debug(text);
        }, 'WELCOME_1', 'Mizi', 'i18n');

        this.$$I18nServices.getText((text) => {
            console.debug(text);
        }, 'WELCOME_1', [
            'Mizi',
            'i18n'
        ], 'Shanghai');

        this.$$I18nServices.getText((text) => {
            console.debug(text);
        }, 'WELCOME_2', this.userInfo);

        this.$$I18nServices.getText((text) => {
            console.debug(text);
        }, 'WELCOME_3', '2017-05-05', this.userInfo);

        this.$$I18nServices.getText((text) => {
            console.debug(text);
        }, 'WELCOME._3', '2017-05-05', this.userInfo);


        this.$$I18nServices.getText((text) => {
            console.debug(text);
        }, '今天是{0}, 我叫{name}', '2017-05-05', this.userInfo);

        this.$$I18nServices.getText((text) => {
            console.debug(text);
        }, '----', '2017-05-05', this.userInfo);
    }

    constructor(private $$I18nServices: $$I18nServices) {
        // this.$$I18nServices.prefix = '/demo/i18n/';
        // this.$$I18nServices.lang = 'zh-cn';

        $$I18nServices.setConfig({
            prefix: '/demo/i18n'
        });

        this.lang = mu.storage(this.$$I18nServices.config.storageKey) || this.$$I18nServices.config.lang;
        this.test();

    }
}
