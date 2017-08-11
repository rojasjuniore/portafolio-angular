import { Routes, RouterModule } from '@angular/router';
import {
    AboutComponent,
    PortafolioComponent,
    ProductoComponent
} from './components/index.pagina';

const APP_ROUTES: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'app-portafolio', component: ProductoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
