import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Countries, SquadNumber, Player } from '../interfaces/player';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';
import { take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {

  @Input() player: Player;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();

  private team;
  public countries = Object.keys(Countries).map(key => ({ label: key, key: Countries[key] }));
  public squadNumber = Object.keys(SquadNumber)
    .slice(Object.keys(SquadNumber).length / 2)
    .map(key => ({ label: key, key: SquadNumber[key] }));


  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().pipe(take(1)).subscribe(teams => {
      if (teams.length > 0) {
        this.team = teams[0];
      }
    });
  }

  private newPlayer(playerFormValue) {
    const key = this.playerService.addPlayer(playerFormValue).key;
    const playerFormValueKey = {
      ...playerFormValue,
      key
    };
    const formattedTeam = {
      ...this.team,
      players: [...(this.team.players ? this.team.players : []), playerFormValueKey]
    };
    this.teamService.editTeam(formattedTeam);
  }

  private editPlayer(playerFormValue) {
    const playerFormValueWhitKey = { ...playerFormValue, $key: this.player.$key };
    const playerFormValueWhitFormatedKey = { ...playerFormValue, key: this.player.$key };
    delete playerFormValueWhitFormatedKey.$key;
    const modifiedPlayers = this.team.players ?
      this.team.players.map((player: any) => {
        return this.player.$key === player.key ? playerFormValueWhitFormatedKey : player;
      })
      : this.team.players;
    const formattedTeam = {
      ...this.team,
      players: [...(modifiedPlayers ? modifiedPlayers : [playerFormValueWhitFormatedKey])]
    };
    this.playerService.editPlayer(playerFormValueWhitKey);
    this.teamService.editTeam(formattedTeam);
  }

  onSubmit(playerForm: NgForm) {
    const playerFormValue = { ...playerForm.value };
    if (!playerForm.valid) {
      alert('Debe completar el formulario.');
      return;
    }
    playerFormValue.leftFooted = playerFormValue.leftFooted !== true ? false : playerFormValue.leftFooted;
    if (this.player) {
      this.editPlayer(playerFormValue);
    } else {
      this.newPlayer(playerFormValue);
    }
    window.location.replace('#');
  }

  cerrarModal() {
    this.closeDialog.emit(true);
  }

}
