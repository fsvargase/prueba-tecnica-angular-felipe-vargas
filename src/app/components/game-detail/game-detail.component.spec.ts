import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailComponent } from './game-detail.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameService } from '../../services/game.service';
import { Observable, of } from 'rxjs';
import { GameDetail } from 'src/interfaces/game-detail.interface';



class TestingGameService {
  getDetails():Observable<GameDetail> {
    return of()
  };
}
describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;
  let gameService: GameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule], 
      declarations: [ GameDetailComponent ],
      providers : [{
        provide: GameService, useClass: TestingGameService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    gameService = TestBed.inject(GameService);

  });

  it('should create', () => {
    spyOn(gameService,'getDetails').and.returnValue(of());
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(GameDetailComponent);
    expect(component.game$).toBeTruthy();  });
});
