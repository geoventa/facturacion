import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FuseFullscreenModule} from '../../../../@fuse/components/fullscreen';
import {UserModule} from '../user/user.module';
import {UserHeaderModule} from '../user-header/user-header.module';
import {HeaderVerticalComponent} from './header-vertical.component';


@NgModule({
    declarations: [
        HeaderVerticalComponent
    ],
    exports: [
        HeaderVerticalComponent
    ],
    imports: [
        CommonModule,
        UserHeaderModule,
        FuseFullscreenModule,
        UserModule
    ]
})
export class HeaderVerticalModule {
}
