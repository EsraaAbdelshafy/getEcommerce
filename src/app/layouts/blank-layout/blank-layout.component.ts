import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from '../../component/nav-blank/nav-blank.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet,NavBlankComponent,FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}
