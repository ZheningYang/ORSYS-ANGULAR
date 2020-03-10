import {Component, OnInit, Optional} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'lkb-view-home',
  templateUrl: './lkb-view-home.component.html',
  styleUrls: ['./lkb-view-home.component.css']
})
export class LkbViewHomeComponent implements OnInit {

  constructor(
    @Optional() private router: Router
  ) {
    console.log(router);
  }

  ngOnInit() {
  }

}
