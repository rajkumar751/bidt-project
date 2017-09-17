import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../Services/auth.service";

@Component({
  selector: 'app-churning',
  templateUrl: './churning.component.html',
  styleUrls: ['./churning.component.css']
})
export class ChurningComponent implements OnInit {

  churnData;

  constructor(private _authServ: AuthService) { }

  ngOnInit() {
    this._authServ.onChurningHttpAction()
        .subscribe(res => this.churnData = res);
  }
  

}
