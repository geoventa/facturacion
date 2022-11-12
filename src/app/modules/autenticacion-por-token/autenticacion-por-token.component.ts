import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../../core/auth/auth.service";
import {NavigationService} from "../../core/navigation/navigation.service";

@Component({
  selector: 'app-autenticacion-por-token',
  templateUrl: './autenticacion-por-token.component.html',
  styleUrls: ['./autenticacion-por-token.component.scss']
})
export class AutenticacionPorTokenComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      public router: Router,
      private autchService: AuthService) {
      const token = this.route.snapshot.paramMap.get('token');
      if(token) {
        this.autenticar(token);
      }
  }

  autenticar(token: string): void {
      this.autchService.signInUsingToken(token).subscribe(async (item) => {
          console.log(item);
          await this.router.navigate([NavigationService.ROUT_FACTURA]);
      });
  }

    ngOnInit(): void {}

}
