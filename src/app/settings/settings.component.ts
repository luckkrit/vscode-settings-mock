import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { SettingsFormComponent } from './settings-form/settings-form.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  @ViewChild('menu')
  menu: SettingsMenuComponent;
  @ViewChild('form')
  form: SettingsFormComponent;

  settings = {
    menu: [
      {
        key: 'common',
        label: 'Commonly Used',
        subMenus: [],
      },
      {
        key: 'editor',
        label: 'Text Editor',
        subMenus: [
          {
            key: 'cursor',
            label: 'Cursor',
            subMenus: [],
          },
          {
            key: 'find',
            label: 'Find',
            subMenus: [],
          },
          {
            key: 'font',
            label: 'Font',
            subMenus: [],
          },
          {
            key: 'files',
            label: 'Files',
            subMenus: [],
          },
        ],
      },
      {
        key: 'workbench',
        label: 'Workbench',
        subMenus: [],
      },
    ],
    config: [
      {
        key: 'editor.accessibilityPageSize',
        value: {
          values: [10],
          defaultValue: 10,
          valueDescriptions: [],
        },
        label: '<strong>Accessibility Page Size</strong>',

        description:
          'Controls the number of lines in the editor that can be read out by a screen reader. Warning: this has a performance ' +
          'implication' +
          ' for numbers larger than the default.',
        menu: ['editor'],
      },
      {
        key: 'editor.fontSize',
        value: {
          values: [14],
          defaultValue: 14,
          valueDescriptions: [],
        },
        label: '<strong>Font Size</strong>',
        description: 'Controls the font size in pixels.',
        menu: ['font', 'common'],
      },
      {
        key: 'editor.fontFamily',
        value: {
          values: ['Sans Serif'],
          defaultValue: 'Sans Serif',
          valueDescriptions: [],
        },
        label: '<strong>Font Family</strong>',
        description: 'Controls the font family.',
        menu: ['font', 'common'],
      },
      {
        key: 'editor.cursorBlinking',
        value: {
          values: ['blink', 'smooth', 'phase', 'expand', 'solid'],
          valueDescriptions: [],
          defaultValue: 'blink',
        },

        label: '<strong>Cursor Blinking</strong>',
        description: 'Control the cursor animation style.',
        menu: ['cursor'],
      },
      {
        key: 'editor.find.addExtraSpaceOnTop',
        value: {
          values: [true, false],
          defaultValue: true,
          valueDescriptions: [],
        },

        label: '<strong>Add Extra Space On Top</strong>',
        description:
          'Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line ' +
          'when the Find Widget is visible.',
        menu: ['find'],
      },
      {
        key: 'files.autoSave',
        value: {
          values: [true, false],
          defaultValue: false,
          valueDescriptions: [],
        },
        label: '<strong>Auto Save</strong>',
        description:
          'Controls auto save of dirty editors. Read more about autosave <a href="#">here</a>.',
        menu: ['files', 'common'],
      },
      {
        key: 'workbench.commandPalette.history',
        value: {
          values: [50],
          defaultValue: 50,
          valueDescriptions: [],
        },
        label: 'Command Palette: <strong>History</strong>',
        description:
          'Controls the number of recently used commands to keep in history for the command' +
          ' palette. Set to 0 to disable command history.',
        menu: ['workbench'],
      },
    ],
    user: {},
    workspace: {},
  };

  constructor() {}

  ngOnInit(): void {}

  selectUser(isSelectUser: boolean): void {
    this.menu.onSelectUser(isSelectUser);
  }

  onMenuClick(id: string): void {
    this.form.scrollToId(id);
  }
}
