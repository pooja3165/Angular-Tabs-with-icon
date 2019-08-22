import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'Default', pathMatch: 'full' },
    { path: 'Default', component: DefaultComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);