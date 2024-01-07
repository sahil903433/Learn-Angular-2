/**
 * Created by md7030 on 8/19/2016.
 */
import { Routes, RouterModule } from '@angular/router';
import {QuestionsComponent} from "./questions";
import {FormDetailsComponent} from "./form-details";
const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'/formDetails',
    pathMatch:'full'
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path:'formDetails',
    component: FormDetailsComponent
  }
];
export const routing = RouterModule.forRoot(appRoutes);
