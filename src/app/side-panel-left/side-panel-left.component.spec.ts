import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelLeftComponent } from './side-panel-left.component';

describe('SidePanelLeftComponent', () => {
  let component: SidePanelLeftComponent;
  let fixture: ComponentFixture<SidePanelLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidePanelLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidePanelLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
