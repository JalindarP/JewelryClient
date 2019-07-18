import { Component } from '@angular/core';
import { Client } from '../services/handcraft-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: string[];
  constructor(private handcraftService: Client) {}
  ngOnInit(): void {
    this.handcraftService.get().subscribe(items => {
      this.items = items;
    });
  }
}
