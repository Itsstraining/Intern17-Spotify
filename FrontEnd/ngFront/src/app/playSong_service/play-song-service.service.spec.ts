import { TestBed } from '@angular/core/testing';

import { PlaySongServiceService } from './play-song-service.service';

describe('PlaySongServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaySongServiceService = TestBed.get(PlaySongServiceService);
    expect(service).toBeTruthy();
  });
});
