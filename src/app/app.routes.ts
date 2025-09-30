import { Component } from '@angular/core';
// import { SkillsComponent } from './../components/skills/skills.component';
import { AboutComponent } from './../components/about/about.component';
import { HomeComponent } from './../components/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about',component:AboutComponent},
    // { path: 'skills', component: SkillsComponent },
];
