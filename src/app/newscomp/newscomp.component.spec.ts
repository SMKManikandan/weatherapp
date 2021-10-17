import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


import { NewscompComponent } from './newscomp.component';

describe('NewscompComponent', () => {
  let component: NewscompComponent;
  let fixture: ComponentFixture<NewscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewscompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
