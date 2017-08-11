import { Routes, RouterModule } from '@angular/router';
import {
    AboutComponent,
    PortafolioComponent,
    ProductoComponent,
    SearhComponent
} from './components/index.pagina';

const APP_ROUTES: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'app-portafolio', component: ProductoComponent },
    { path: 'buscar/:termino', component: SearhComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
