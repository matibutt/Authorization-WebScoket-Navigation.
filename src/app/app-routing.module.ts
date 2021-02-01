import { Admin1Component } from './admin1/admin1.component';
import { UserComponent } from './user/user.component';
import { ChatComponent } from './chat/chat.component';
import { Login2Component } from './login2/login2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventgridComponent } from './eventgrid/eventgrid.component';
import { HappyMapComponent } from './happy-map/happy-map.component';
import { InternationalComponent } from './international/international.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [{path: '', redirectTo: '/Home', pathMatch:'full'},
                        {path: 'International', component: InternationalComponent},
                        {path: 'Home', component: EventgridComponent},
                        {path: 'login2', component: Login2Component},
                        {path: 'Navigation', component: HappyMapComponent},
                        {path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
                        {path: 'user', component: UserComponent, canActivate: [AuthGuard] },
                        {path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

                        ];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EventgridComponent,InternationalComponent,HappyMapComponent]
