import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * Ionic 4 providers
 */
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
// import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule, 
        IonicModule.forRoot(), 
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        Camera,
        File,
        // HTTP
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
