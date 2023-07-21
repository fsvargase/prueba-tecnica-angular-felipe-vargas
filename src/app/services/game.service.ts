import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Game } from '../../interfaces/game.interface';
import { GameDetail } from '../../interfaces/game-detail.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getAllGames():Observable<Game[]> {
    const filter = `${environment.baseUrlAPI}`;
    return this.http.get<Game[]>(filter);
  }

  getGamesByPlatform(platform:string):Observable<Game[]> {
    const filter = `${environment.baseUrlAPI}?platform=${platform}`;
    return this.http.get<Game[]>(filter);
  }

  getDetails(id: number) {
    return this.http.get<GameDetail>(`${environment.baseUrlAPIGame}${id}`);
  }

}