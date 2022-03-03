import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'collection', loadChildren: () => import('./collection/collection.module').then(m => m.CollectionModule) }, { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
