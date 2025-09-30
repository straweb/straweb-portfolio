import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../filters/filter.pipe';
import { MyCustomFiltersPipe } from '../../filters/my-custom-filters-pipe';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogContentComponent } from '../../components/dialog-box/dialog-content/dialog-content.component';
import { SkillDetailsComponent } from '../../components/dialog-box/skill-details/skill-details.component';
import { FilterByItemKeyPipe } from '../../filters/filter-by-item-key-pipe';
import { ImageFallbackDirective } from '../../directives/image-fallback.directive';


@NgModule({
  declarations: [
    DialogContentComponent,
    SkillDetailsComponent,
    FilterByItemKeyPipe,
    MyCustomFiltersPipe,
    FilterPipe,
    // MyCustomFiltersPipe,
    // FilterPipe
    // { provide: MatDialogRef, useValue: {} }
  ],
  imports: [
    // FilterByItemKeyPipe,
    // MyCustomFiltersPipe,
    // FilterPipe,
    MatDialogModule,
    MatTooltipModule,
    ImageFallbackDirective,
    CommonModule
  ],
  exports: [
    FilterByItemKeyPipe,
    MyCustomFiltersPipe,
    ImageFallbackDirective,
    FilterPipe,
    // DialogContentComponent,
    // SkillDetailsComponent,
    MatDialogModule,
    MatTooltipModule,
    CommonModule
  ]
})
export class UtilitiesModule { }
