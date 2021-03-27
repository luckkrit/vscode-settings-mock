import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  config: any;
  @Input()
  menus: any;
  currentId: string;
  currentSetting: string;
  isHilight = false;
  isSelected = false;
  isShowDropdown = false;
  isChanged = false;
  @Output()
  OnSelected: EventEmitter<FormItemComponent> = new EventEmitter<FormItemComponent>();

  constructor() {}

  isClickOutside(e): void {
    if (!document.querySelector('.dropdown').contains(e.target as Node)) {
      this.isShowDropdown = false;
    }
  }

  ngAfterViewInit(): void {
    window.addEventListener('click', this.isClickOutside.bind(this));
  }

  ngOnInit(): void {
    this.currentId = this.config.key;
  }

  isBoolean(config: any): boolean {
    return (
      config.value.values.length === 2 &&
      typeof config.value.defaultValue === 'boolean'
    );
  }

  isNumber(config: any): boolean {
    return (
      config.value.values.length === 1 &&
      typeof config.value.defaultValue === 'number'
    );
  }

  isString(config: any): boolean {
    return (
      config.value.values.length === 1 &&
      typeof config.value.defaultValue === 'string'
    );
  }

  isArray(config: any): boolean {
    return (
      config.value.values.length > 1 &&
      typeof config.value.defaultValue !== 'boolean'
    );
  }

  getSubMenuTitle(config: any): string {
    if (this.config.menu.key === 'common') {
      const m = config.menu.find((m2) => m2 !== 'common');
      let subTitle = '';
      this.menus.forEach((m2) => {
        if (m2.key === m) {
          subTitle =
            '<div class="settings-description-header">' + m2.label + ':</div> ';
        }
        m2.subMenus.forEach((m3) => {
          if (m3.key === m) {
            subTitle =
              '<div class="settings-description-header">' +
              m3.label +
              ':</div> ';
          }
        });
      });
      return subTitle;
    } else {
      return '';
    }
  }

  showDropdown(): void {
    this.isShowDropdown = true;
  }

  ngOnDestroy(): void {
    window.addEventListener('click', this.isClickOutside.bind(this));
  }

  settingClick(key: string): void {
    this.currentSetting = key;
    this.OnSelected.emit(this);
  }

  changeValue(value: any, oldValue: any): void {
    console.log(value, oldValue);
    if (value !== oldValue) {
      this.isChanged = true;
    } else {
      this.isChanged = false;
    }
  }
}
