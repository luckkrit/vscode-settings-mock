import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsPanelComponent } from './settings/settings-panel/settings-panel.component';
import { SettingsNavigationComponent } from './settings/settings-navigation/settings-navigation.component';
import { SettingsMainComponent } from './settings/settings-main/settings-main.component';
import { SettingsMenuComponent } from './settings/settings-menu/settings-menu.component';
import { SettingsFormComponent } from './settings/settings-form/settings-form.component';
import { MenuItemComponent } from './settings/settings-menu/menu-item/menu-item.component';
import { FormItemComponent } from './settings/settings-form/form-item/form-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SettingsPanelComponent,
    SettingsNavigationComponent,
    SettingsMainComponent,
    SettingsMenuComponent,
    SettingsFormComponent,
    MenuItemComponent,
    FormItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
