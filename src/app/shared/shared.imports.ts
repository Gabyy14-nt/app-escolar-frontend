// Módulos para formularios y directivas de Angular que se importan en los componentes standalone de la aplicación.
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

// Elementos de angular material que se importan en los componentes standalone de la aplicación.
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

/* =========================
  Router
   ========================= */
import { RouterModule } from '@angular/router';

export const SHARED_IMPORTS = [

  // Angular Material
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  // Angular
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgOptimizedImage,
  // Router
  RouterModule

]
