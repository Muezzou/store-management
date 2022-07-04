import { StoreService } from './service/store.service';
import { Component, OnInit } from '@angular/core';
import { Store } from './models/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  private idStore = 'ijpxNJLM732vm8AeajMR';

  store!: Store;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getStoreById(this.idStore).subscribe(store => this.store = store)
    // to do recup nav et logique sur html 
  }
}
