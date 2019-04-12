import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { CalendarPage } from '../calendar/calendar';
import { NotesPage } from '../notes/notes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NotesPage;
  tab2Root = CalendarPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
