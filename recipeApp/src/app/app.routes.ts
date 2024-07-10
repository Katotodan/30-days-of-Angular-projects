import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';

export const routes: Routes = [
    {
        path: '',
        component: RecipeContainerComponent,
        title: 'Home page',
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
      },
];
