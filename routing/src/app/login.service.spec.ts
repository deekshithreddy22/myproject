import { AuthenticationService, User } from './login.service';
import { TestBed, inject } from '@angular/core/testing';

describe('AuthenticationService', () => {
  let subject: AuthenticationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });
  beforeEach(inject([AuthenticationService], (service: AuthenticationService) => {
    subject = service;
  }));
  it('should pass true when details get matched ', () => {
    expect(subject.login(User)).toBe('true');
  });
}); 