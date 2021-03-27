import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit {
  @Input()
  settings: any;

  @Input()
  currentMenu: any;
  @Output()
  OnMenuSelected: EventEmitter<MenuItemComponent> = new EventEmitter<MenuItemComponent>();
  isSelected: boolean;
  currentId: string;

  constructor() {
    this.isSelected = true;
    this.currentId = 'common';
  }

  ngOnInit(): void {}

  onClick(id: string): void {
    this.currentId = id;
    this.scrollToId(id);
    this.OnMenuSelected.emit(this);
  }

  scrollToId(id: string): void {
    const element = document.querySelector(`section[id='${id}']`);
    if (element) {
      const offsetY = element.getBoundingClientRect().top;
      window.scrollTo(0, offsetY + 20);
    }
  }
}
