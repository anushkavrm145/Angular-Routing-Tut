import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'posts', component: PostListComponent},
      {path: 'post/:id', component: SinglePostComponent}
    ])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
