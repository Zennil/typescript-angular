// Services
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';

// Dependencies
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import { TeamTableComponent } from './team-table/team-table.component';

// Constants
import { environment } from 'src/environments/environment';
import { PlayerDialogComponent } from './player-dialog/player-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerTableComponent,
    TeamTableComponent,
    PlayerDialogComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    PlayerService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
