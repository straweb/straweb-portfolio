import { importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { UtilitiesModule } from '../modules/utilities/utilities-module';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [

        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideHttpClient(withFetch()),
        importProvidersFrom(UtilitiesModule),
        importProvidersFrom(CommonModule),
        provideClientHydration(withEventReplay()),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('title')?.textContent).toContain('Portfolio');
  });
});
