import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFiltroComponent } from './tabla-filtro.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicioService } from '../../servicios/servicio.service';


describe('TablaFiltroComponent', () => {
  let component: TablaFiltroComponent;
  let fixture: ComponentFixture<TablaFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaFiltroComponent ],
      imports: [HttpClientTestingModule],
      providers: [ServicioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
