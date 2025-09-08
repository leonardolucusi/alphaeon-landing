import {Component} from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {AboutComponent} from './about/about.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alphaeonfront';
}
