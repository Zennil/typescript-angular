import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Team } from '../interfaces/team';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const TeamsTableHeaders = ['name', 'country', 'players'];

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsDb: AngularFireList<Team>;

  constructor(private db: AngularFireDatabase) {
    this.teamsDb = this.db.list('/teams', ref => ref.orderByChild('name'));
  }

  getTeams(): Observable<Team[]> {
    return this.teamsDb.snapshotChanges().pipe(
      map(teams => {
        return teams.map(t => ({ $key: t.payload.key, ...t.payload.val() }));
      })
    );
  }

  addTeam(team: Team) {
    this.teamsDb.push(team);
  }

  deleteTeam(id: string) {
    this.db.list('/teams').remove(id);
  }

  editTeam(newTeamData) {
    const $key = newTeamData.$key;
    delete (newTeamData.$key);
    this.teamsDb.update($key, newTeamData);
  }

}
