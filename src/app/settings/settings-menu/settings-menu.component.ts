import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css'],
})
export class SettingsMenuComponent implements OnInit {
  constructor() {
    this.settings = {};
    this.isSelectUser = true;
  }

  @Input()
  settings: any;
  isSelectUser: boolean;
  @Output()
  OnMenuClick: EventEmitter<string> = new EventEmitter<string>();

  @ViewChildren(MenuItemComponent)
  menuItemComponents: QueryList<MenuItemComponent>;

  menus(): string[] {
    return this.settings.menu;
  }

  ngOnInit(): void {}

  onSelectUser(selectUser: boolean): void {
    this.isSelectUser = selectUser;
  }

  onMenuClick(menuItemComponent: MenuItemComponent): void {
    this.OnMenuClick.emit(menuItemComponent.currentId);
    this.menuItemComponents.forEach((m) => {
      m.isSelected = false;
      if (menuItemComponent.currentId === m.currentId) {
        menuItemComponent.isSelected = true;
      }
    });
  }
}
