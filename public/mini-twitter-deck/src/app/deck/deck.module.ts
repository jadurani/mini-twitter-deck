import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { DeckComponent } from './deck.component';
import { DeckColumnComponent } from './components/deck-column/deck-column.component';
import { TweetRowComponent } from './components/tweet-row/tweet-row.component';
import { TweetContentPipe } from './pipes/tweet-content.pipe';

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
    TweetRowComponent,
    TweetContentPipe,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class DeckModule { }
