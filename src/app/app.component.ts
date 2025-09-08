import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HeroComponent} from './hero/hero.component';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alphaeonfront';
}
