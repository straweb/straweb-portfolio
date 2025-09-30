import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-skill-details',
  standalone: false,
  templateUrl: './skill-details.component.html',
  styleUrl: './skill-details.component.scss'
})
export class SkillDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<SkillDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
