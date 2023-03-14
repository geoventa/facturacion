import { TestBed } from '@angular/core/testing';

import { ListaFacturaService } from './lista-factura.service';

describe('ListaFacturaService', () => {
  let service: ListaFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
