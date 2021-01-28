import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerErrorsComponent } from './player-errors.component';

describe('PlayerErrorsComponent', () => {
  let component: PlayerErrorsComponent;
  let fixture: ComponentFixture<PlayerErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
