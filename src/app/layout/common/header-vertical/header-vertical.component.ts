import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../core/user/user.types';
import {Subject} from 'rxjs';
import {UserService} from '../../../core/user/user.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-header-vertical',
  templateUrl: './header-vertical.component.html',
  styleUrls: ['./header-vertical.component.scss']
})
export class HeaderVerticalComponent implements OnInit, OnDestroy {

    session: User;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _userService: UserService,
    ) {
    }

    ngOnInit(): void {
        this._userService.user$
            .pipe((takeUntil(this._unsubscribeAll)))
            .subscribe((session: User) => {
                this.session = session;
                console.log(session);
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
