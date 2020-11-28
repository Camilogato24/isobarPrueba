
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicioService } from './servicio.service';

describe('myService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ServicioService]
  }));

  it('should be created', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: ServicioService = TestBed.get(ServicioService);
    expect(service.getEmployee).toBeTruthy();
  });

});