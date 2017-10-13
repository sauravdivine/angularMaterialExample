import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceUsedPrograssComponent } from './space-used-prograss.component';

describe('SpaceUsedPrograssComponent', () => {
  let component: SpaceUsedPrograssComponent;
  let fixture: ComponentFixture<SpaceUsedPrograssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceUsedPrograssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceUsedPrograssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
