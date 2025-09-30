import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { FilterPipe } from '../filters/filter.pipe';
// import { MyCustomFiltersPipe } from '../filters/my-custom-filters-pipe';
import { UtilitiesModule } from '../modules/utilities/utilities-module';
// import { FilterByItemKeyPipe } from '../filters/filter-by-item-key-pipe';
// import { DialogContentComponent } from '../components/dialog-box/dialog-content/dialog-content.component';
// import { SkillDetailsComponent } from '../components/dialog-box/skill-details/skill-details.component';
import { CommonModule } from '@angular/common';
// import { authInterceptor } from '../core/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    // provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(withFetch()),
    importProvidersFrom(UtilitiesModule),
    // importProvidersFrom(FilterByItemKeyPipe),
    // importProvidersFrom(BrowserAnimationsModule),
    // importProvidersFrom(MaterialExampleModule),
    // importProvidersFrom(MatDialogModule),
    // importProvidersFrom(MatTooltipModule),
    // importProvidersFrom(DialogContentComponent),
    // importProvidersFrom(SkillDetailsComponent),
    // importProvidersFrom(MyCustomFiltersPipe),
    // importProvidersFrom(FilterPipe),
    importProvidersFrom(CommonModule),
    // importProvidersFrom(FormsModule),
    // importProvidersFrom(ReactiveFormsModule),
    // importProvidersFrom(MatFormFieldModule),
    // importProvidersFrom(MatInputModule),
    // importProvidersFrom(MatSelectModule),
    // importProvidersFrom(MatOptionModule),
    // importProvidersFrom(MatIconModule),
    // importProvidersFrom(MatButtonModule),
    // importProvidersFrom(MatChipsModule),
    // importProvidersFrom(MatCardModule),
    // importProvidersFrom(MatToolbarModule),
    // importProvidersFrom(MatSidenavModule),
    // importProvidersFrom(MatListModule),
    // importProvidersFrom(MatGridListModule),
    // importProvidersFrom(MatMenuModule),  
    // importProvidersFrom(HttpClientModule),
    provideClientHydration(withEventReplay()),
    provideZonelessChangeDetection()
  ]
};
