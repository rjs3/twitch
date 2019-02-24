/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopGamesComponent } from './top-games.component';

describe('TopGamesComponent', () => {
  let component: TopGamesComponent;
  let fixture: ComponentFixture<TopGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
