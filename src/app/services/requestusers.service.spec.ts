import { TestBed } from '@angular/core/testing';
import { RequestusersService } from './requestusers.service';

describe('RequestusersService', () => {
  let service: RequestusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
