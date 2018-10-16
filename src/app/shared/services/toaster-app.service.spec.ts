import { TestBed, inject } from '@angular/core/testing';

import { ToasterAppService } from './toaster-app.service';

describe('ToasterAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterAppService]
    });
  });

  it('should be created', inject([ToasterAppService], (service: ToasterAppService) => {
    expect(service).toBeTruthy();
  }));
});
