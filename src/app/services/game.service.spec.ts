import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';


describe('SettingserviceService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      
    });
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAllGames should return toBeDefined', () => {
    expect(service.getAllGames()).toBeDefined();
  });

  it('#getGamesByPlatform should return toBeDefined', () => {
    expect(service.getGamesByPlatform('all')).toBeDefined();
  });

  it('#getGamesByPlatform should return toBeDefined', () => {
    expect(service.getDetails(1)).toBeDefined();
  });


});
