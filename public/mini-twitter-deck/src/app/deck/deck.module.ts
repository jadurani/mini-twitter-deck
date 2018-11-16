import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DeckComponent } from './deck.component';
import { DeckColumnComponent } from './components/deck-column/deck-column.component';

const routes: Routes = [
  {
    path: '',
    component: DeckComponent,
  },
];

@NgModule({
  declarations: [
    DeckComponent,
    DeckColumnComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class DeckModule { }
