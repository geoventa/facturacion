import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../core/user/user.types';
import {Subject} from 'rxjs';
import {UserService} from '../../../core/user/user.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit, OnDestroy {

    user: User;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(
        private _userService: UserService,
    ) {
    }

    ngOnInit(): void {
        // Subscribe to the user service
        this._userService.user$
            .pipe((takeUntil(this._unsubscribeAll)))
            .subscribe((user: User) => {
                this.user = user;
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
