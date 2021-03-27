import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-settings-navigation',
  templateUrl: './settings-navigation.component.html',
  styleUrls: ['./settings-navigation.component.css'],
})
export class SettingsNavigationComponent
  implements OnInit, AfterViewInit, OnDestroy {
  isTypingSearch = false;
  isSelectUser = true;
  isShowBlackBorder = false;
  @Output()
  OnSelectUser: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  selectUser(selectUser: boolean): void {
    this.isSelectUser = selectUser;
    this.OnSelectUser.emit(this.isSelectUser);
  }

  showBlackBorder(): void {
    if (!this.isShowBlackBorder) {
      this.isShowBlackBorder = true;
    }
  }

  hideBlackBorder(): void {
    if (this.isShowBlackBorder) {
      this.isShowBlackBorder = false;
    }
  }

  onScrollPage(): void {
    if (window.pageYOffset > 0) {
      this.showBlackBorder();
    } else {
      this.hideBlackBorder();
    }
  }

  ngAfterViewInit(): void {
    // For show black border
    window.addEventListener('scroll', this.onScrollPage.bind(this));
    // For highlight menu when scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          if (document.querySelector(`summary[id='${id}']`)) {
            document
              .querySelector(`summary[id='${id}']`)
              .classList.add('active');
          }
          if (document.querySelector(`li[id='${id}']`)) {
            document.querySelector(`li[id='${id}']`).classList.add('active');
          }
        } else {
          if (document.querySelector(`summary[id='${id}']`)) {
            document
              .querySelector(`summary[id='${id}']`)
              .classList.remove('active');
          }
          if (document.querySelector(`li[id='${id}']`)) {
            document.querySelector(`li[id='${id}']`).classList.remove('active');
          }
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScrollPage.bind(this));
  }
}
