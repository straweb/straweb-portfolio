import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilitiesModule } from '../modules/utilities/utilities-module';
// import { SkillsComponent } from '../components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UtilitiesModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('straweb-portfolio');
}
