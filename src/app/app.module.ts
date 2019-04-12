import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage} from '../pages/settings/settings';
import { CalendarPage} from '../pages/calendar/calendar';
import { NotesPage } from '../pages/notes/notes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddNotePage } from '../pages/add-note/add-note';
import { NoteService } from '../providers/note-service/note-service';
import { ViewNotePage } from '../pages/view-note/view-note';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AddNotePage,
    ViewNotePage,
    SettingsPage,
    CalendarPage,
    NotesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    AddNotePage,
    ViewNotePage,
    SettingsPage,
    CalendarPage,
    NotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService,
  ]
})
export class AppModule {}
