import { Component, OnInit } from '@angular/core';

import { Game } from '../../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: Game[] = [];
  gamesTotal: Game[] = [];
  textFilter:string='';
  selectedValue:string='all';
  selectedGendre:string='all';
  generos: string[] = [];


  public page!: number;

  constructor(    private gameService: GameService,    ) { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService(): void {
    this.gameService.getAllGames().subscribe((res:Game[]) =>{
        if(res.length){
            this.games = res;
            this.gamesTotal= res;
            this.generos = this.gamesTotal.map((g) => g.genre).reduce((acc:string[],item)=>{
              if(!acc.includes(item)){
                acc.push(item);
              }
              return acc;
            },[]);
            console.log(this.generos);
        }else{
            this.games = [];  
        }
    } );

  }

  public filterGamesByName(): void {
    if(this.textFilter===''){
      this.games = this.gamesTotal;
    }else{
      this.games = this.gamesTotal.filter((game) => game.title.toLocaleLowerCase().includes(this.textFilter.toLocaleLowerCase()));
    }
  }

  public onChangeGendre(): void {
    if(this.selectedGendre==='all'){
      this.games = this.gamesTotal;
    }else{
      this.games = this.gamesTotal.filter((game) => game.genre.toLocaleLowerCase().includes(this.selectedGendre.toLocaleLowerCase()));
    }
  }

    public onChangePlatform(): void {
    this.gameService.getGamesByPlatform(this.selectedValue).subscribe((res:Game[]) =>{
      if(res.length){
          this.games = res;
      }else{
          this.games = [];  
      }
  } );
  }

}
