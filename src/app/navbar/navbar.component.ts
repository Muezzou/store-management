import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveDataPoint } from 'chart.js';
import { Store } from '../models/store';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  @Input() store!: Store;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getClassActiveLink(value: string): boolean{
    return this.router.url == value ? true : false;
  }
}
