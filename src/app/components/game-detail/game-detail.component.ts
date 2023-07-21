import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import {Location} from '@angular/common';

import { GameService } from 'src/app/services/game.service';
import { GameDetail } from 'src/interfaces/game-detail.interface';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game$!: Observable<GameDetail>;

  constructor(private route:ActivatedRoute, private gameService:GameService, private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.game$ = this.gameService.getDetails(id);
    });
  }

  onGoBack():void{
    this.location.back();
  }

}
