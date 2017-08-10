import { Routes, RouterModule } from '@angular/router';
import {
    AboutComponent,
    PortafolioComponent,
    ProductoComponent
} from './components/index.pagina';

const APP_ROUTES: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: ProductoComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
