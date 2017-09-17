import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './Components/top-header/top-header.component';
import { LeftNagigationComponent } from './Components/left-nagigation/left-nagigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ChurningComponent } from './Components/churning/churning.component';
import { InactiveComponent } from './Components/inactive/inactive.component';
import { CancelledComponent } from './Components/cancelled/cancelled.component';
import { FutureComponent } from './Components/future/future.component';
import { MultipleComponent } from './Components/multiple/multiple.component';

import { AuthService } from './Services/auth.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'churning', component: ChurningComponent },
  { path: 'inactive', component: InactiveComponent },
  { path: 'cancelled', component: CancelledComponent },
  { path: 'future', component: FutureComponent },
  { path: 'multiple', component: MultipleComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    LeftNagigationComponent,
    FooterComponent,
    HomeComponent,
    ChurningComponent,
    InactiveComponent,
    CancelledComponent,
    FutureComponent,
    MultipleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
