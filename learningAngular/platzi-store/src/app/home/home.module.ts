import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRountingModule } from './home-routing.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        HomeRountingModule,
        CommonModule
    ]
})
export class HomeModule {}