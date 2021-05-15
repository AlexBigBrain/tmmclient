import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routeFragment: string = '';

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(f => {
      console.log(f);
      this.viewportScroller.scrollToAnchor('test');
    })
  }

}
