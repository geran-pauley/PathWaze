import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LocationComponent } from './location/location.component';

import { SocialLoginModule } from "../sociallogin.module";
import { AuthServiceConfig } from '../auth.service';
import { GoogleLoginProvider } from '../providers/google-login-provider';
import { FacebookLoginProvider } from '../providers/facebook-login-provider';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("750175574432-tpshh02i3gacjjuaf1u2sfugs4r83h51.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1435994693213211")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LocationComponent,
    SigninComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SocialLoginModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9nIuzBQg_mY6Xi8Ia_3_KtbwXftZInyQ'
    }),
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
