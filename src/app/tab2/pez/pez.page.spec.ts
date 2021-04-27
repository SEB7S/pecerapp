import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PezPage } from './pez.page';

describe('PezPage', () => {
  let component: PezPage;
  let fixture: ComponentFixture<PezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PezPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
