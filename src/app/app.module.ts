// Services
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';

// Dependencies
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { TeamTableComponent } from './team-table/team-table.component';

// Constants
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TeamTableComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [
    PlayerService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
