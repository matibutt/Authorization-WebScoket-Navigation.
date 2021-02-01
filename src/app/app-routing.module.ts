import { ChatComponent } from './chat/chat.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventgridComponent } from './eventgrid/eventgrid.component';
import { HappyMapComponent } from './happy-map/happy-map.component';
import { InternationalComponent } from './international/international.component';


const routes: Routes = [{path: '', redirectTo: '/Home', pathMatch:'full'},
                        {path: 'International', component: InternationalComponent},
                        {path: 'Home', component: EventgridComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'login2', component: Login2Component},
                        {path: 'Navigation', component: HappyMapComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'signIn', component: SignInComponent},
                        {path: 'chat', component: ChatComponent},
                        ];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EventgridComponent,InternationalComponent,HappyMapComponent]
