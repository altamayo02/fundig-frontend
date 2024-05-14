import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptResetComponent } from './prompt-reset.component';

describe('PromptResetComponent', () => {
  let component: PromptResetComponent;
  let fixture: ComponentFixture<PromptResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
