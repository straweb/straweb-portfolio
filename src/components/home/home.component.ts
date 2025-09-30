import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  standalone: true,
  selector: 'app-home.component',
  imports: [SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
