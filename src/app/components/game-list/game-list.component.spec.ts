import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListComponent } from './game-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';  
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Game } from 'src/interfaces/game.interface';
import { Observable, of } from 'rxjs';

class TestingGameService {
  getAllGames():Observable<Game[]> {
    return of([{
      id: 1,
      title: '',
      thumbnail: '',
      short_description: '',
      game_url: '',
      genre: '',
      platform: 'all',
      publisher: '',
      developer: '',
      release_date: '',
      freetogame_profile_url: '',
    }])
  };
  getGamesByPlatform(platform:string):Observable<Game[]> {
    return of([])
  }
}


describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;
  let gameService: GameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,NgxPaginationModule,FormsModule], 
      declarations: [ GameListComponent ],
      providers : [{
        provide: GameService, useClass: TestingGameService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    gameService = TestBed.inject(GameService);
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(GameListComponent);
  });
  it('should execute all functions', () => {
    spyOn(gameService,'getAllGames').and.returnValue(of([{
      id: 1,
      title: '',
      thumbnail: '',
      short_description: '',
      game_url: '',
      genre: '',
      platform: '',
      publisher: '',
      developer: '',
      release_date: '',
      freetogame_profile_url: '',
    }]));
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(GameListComponent);
    expect(component.games.length).toBe(1);
    component.textFilter='ac';
    component.filterGamesByName();
    expect(component.games.length).toBe(0);
    component.selectedValue='PC'
    component.onChangePlatform();
    expect(component.games.length).toBe(0);
    component.selectedGendre='Social';
    component.onChangeGendre();
    expect(component.games.length).toBe(0);
    component.textFilter='';
    component.filterGamesByName();
    expect(component.games.length).toBe(1);
    component.selectedGendre='all';
    component.onChangeGendre();
    expect(component.games.length).toBe(1);
  });

});
