import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {SelectPipe} from '../../../shared/select.pipe';
import {FormsModule} from '@angular/forms';
import {LkbModule} from '../../../../../../lkb/src/lib/lkb.module';
import {StoreService} from '../../../core/store.service';
import {ActionTypes} from '../../../core/action-types.enum';
import {BehaviorSubject} from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  class MockStoreService {
    state$ = new BehaviorSubject({});

    dispatch(action: { type: ActionTypes, data?: any }) {
      return this.state$;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SelectPipe
      ],
      providers: [
        {provide: StoreService, useClass: MockStoreService}
      ],
      imports: [
        FormsModule,
        LkbModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display welcome title', () => {
    const title = fixture.nativeElement.querySelector('h1.view-title').textContent;
    console.log(title);
    expect(title).toBe('Welcome');
  });

  it('should display welcome credentials', () => {
    component.credentials.username = 'TEST';
    fixture.detectChanges();
    const credentials = fixture.nativeElement.querySelector('code:nth-child(1)').textContent;
    console.log(credentials);
    expect(credentials).toContain('"username": "TEST"');
  });

  it('connect should call StoreService.dispatch', () => {
    const spyDispatch = spyOn(component.store, 'dispatch');
    component.connect();
    expect(spyDispatch).toHaveBeenCalledWith({type: ActionTypes.AUTH, data: component.credentials});
  });
});
