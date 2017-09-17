import { Component, OnInit } from '@angular/core';
import { TopHeaderComponent } from '../../Components/top-header/top-header.component';
import { LeftNagigationComponent } from '../../Components/left-nagigation/left-nagigation.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
