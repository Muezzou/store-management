import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private idStore: string = "ijpxNJLM732vm8AeajMR";

  store!: Store;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getStoreById(this.idStore)
    .subscribe(store => this.store = store)
  }

}
