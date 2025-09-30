import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsService } from '../../services/skill.service';
import * as _ from 'lodash';
import { UtilitiesModule } from '../../modules/utilities/utilities-module';
import { MatDialog } from '@angular/material/dialog';
import { SkillDetailsComponent } from '../dialog-box/skill-details/skill-details.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, UtilitiesModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: any = [];
  filteredSkills: any = [];
  selectedSkill: any;
  hoveredSkill: any;
  selectedCategory: string = '';
  groupByCategory: any = [];
  categories: any = [];
  kinds: any = [];
  tags: any = [];
  kind: any ="";
  selectedKind: string = '';

  constructor(private skillsService: SkillsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.skillsService.getSkillsJsonData().subscribe(data => {
      this.filteredSkills = this.skills = data;
      console.log('Local JSON data:', this.skills.length);
      this.updateModels();
    });
    this.skillsService.getSkillCategoryJsonData().subscribe(data => {
      this.groupByCategory = data;
      console.log('Local JSON data:', this.groupByCategory.length);
      this.updateModels();
    });
  }

  onSelectedCategory(entries: string | undefined, entriesList: any = null) {
    console.log('Entries:', entries, 'entriesList', entriesList);
    this.selectedCategory = entries ? entries : "";
    if (this.selectedCategory) {
      this.filteredSkills = this.skills.filter((skill: any) => entriesList.filter((item:any) => item.index == skill.index).length > 0);
      // this.filteredSkills = this.skills.filter((skill: any) => entriesList.filter((item:any) => item.index === skill.index));
    } else {
      this.filteredSkills = this.skills;
    }
    this.updateModels();
    console.log('Selected category:', this.selectedCategory);
  }

  updateModels() {
    this.categories = _.uniqBy(this.skills, 'category');
    this.categories = this.categories.map((cat: any) => cat.category);
    this.kinds = _.uniqBy(this.skills, 'kind');
    this.kinds = this.kinds.map((k: any) => k.kind);
    this.tags = _.uniqBy(this.skills, 'tag');
    this.tags = this.tags.map((t: any) => t.tag);
  }

  onHover(skill: any) {
    this.hoveredSkill = skill;
    // console.log('Hovered skill:', this.hoveredSkill);
  }

  skillByKind(kind: string) {
    this.kind = kind;
    if (kind) {
      this.filteredSkills = this.skills.filter((skill: any) => skill.kind === kind);
      this.updateModels();
    } else {
      this.skillsService.getSkillsJsonData().subscribe(data => {
        this.skills = data;
        console.log('Local JSON data:', this.skills.length);
        this.updateModels();
      });
    }
    this.selectedKind = kind;
    console.log('Selected kind:', this.selectedKind);
  }

  changeImage(event:any, skill:any): string {
    const currentSrc = event.target.src;
    // console.log(skill.name);
    if(skill.icon == currentSrc && skill.logo != currentSrc) {
      console.log(skill.name,'Image icon load failed.', currentSrc);
      event.target.src = skill.logo;
      return skill.logo;
    } else if(skill.logo == currentSrc && skill.favicon != currentSrc) {
      console.log(skill.name,'Image logo load failed.', currentSrc);
      event.target.src = skill.favicon;
      return skill.favicon;
    } else if(skill.favicon == currentSrc) {
      console.log(skill.name,'Image favicon load failed.', currentSrc);
      event.target.src = "/str-tiger.png";
      return "/str-tiger.png";
    } else {
      event.target.src = "/str-tiger.png";
      console.log(skill.name,'Image load failed, changeImage to placeholder.', currentSrc);
      return "/str-tiger.png";
    }
  }

  swapImage(event: Event, skill:any): string {
    const img = event.target as HTMLImageElement;
    if (img) {
      console.log('Image load failed, swapping to placeholder.', img.src);
      if(img.src == skill.icon) {
        img.src = skill.logo;
        return img.src;
      } else if(img.src == skill.logo) {
        img.src = skill.favicon;
        return img.src;
      } else if(img.src == skill.favicon) {
        img.src = "/str-tiger.png";
        return img.src;
      }
    } else {
        // Handle cases where it's not an image or is null
        console.error("Element is not an HTMLImageElement.");
    }
      console.log('new image placeholder.', img.src);
      return "/str-tiger.png";
  }

  openSkillDialog(skill: any): void {
    const dialogRef = this.dialog.open(SkillDetailsComponent, {
      // width: '250px',
      panelClass: 'skill-dialog-panel',
      data: { title: skill.name, model: skill, message: skill.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle actions after the dialog closes
    });
  }
}
