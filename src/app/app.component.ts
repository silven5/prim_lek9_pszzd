import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MyHeaderComponent } from './my-header/my-header.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    MyHeaderComponent,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'prim_lek9_pszzd';
}
