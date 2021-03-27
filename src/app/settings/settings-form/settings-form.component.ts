import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormItemComponent } from './form-item/form-item.component';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.css'],
})
export class SettingsFormComponent implements OnInit {
  @Input()
  settings: any;
  @ViewChildren(FormItemComponent)
  formItems: QueryList<FormItemComponent>;

  configs = [];

  constructor() {}

  ngOnInit(): void {
    this.configs = this.createConfigFromMenu();
  }

  createConfigFromMenu(): any[] {
    const configs = [];
    this.settings.menu.forEach((m) => {
      configs.push({
        key: m.key,
        menuLabel: m.label,
        menu: m,
        items: this.getConfigFromMenuId(m.key),
      });
      m.subMenus.forEach((m2) =>
        configs.push({
          key: m2.key,
          menuLabel: m2.label,
          menu: m2,
          items: this.getConfigFromMenuId(m2.key),
        })
      );
    });

    return configs;
  }

  getConfigFromMenuId(menuId: string): [] {
    if (menuId === 'common') {
      return this.settings.config
        .filter((c) => {
          return c.menu.find((m) => {
            return m === menuId;
          });
        })
        .sort((a, b) => {
          let keyA = '';
          let keyB = '';
          if (a.key.includes('.')) {
            keyA = a.key.split('.')[1];
          } else {
            keyA = a.key;
          }
          if (b.key.includes('.')) {
            keyB = b.key.split('.')[1];
          } else {
            keyB = b.key;
          }
          return keyA > keyB ? 1 : -1;
        });
    } else {
      return this.settings.config.filter((c) => {
        return c.menu.find((m) => {
          return m === menuId;
        });
      });
    }
  }

  scrollToId(id: string): void {
    this.formItems.forEach((f) => {
      if (f.currentId === id) {
        f.isHilight = true;
      } else {
        f.isHilight = false;
      }
    });
  }

  onSelected(formItem: FormItemComponent): void {
    this.formItems.forEach((f) => {
      f.isSelected = false;
    });
    formItem.isSelected = true;
  }
}
