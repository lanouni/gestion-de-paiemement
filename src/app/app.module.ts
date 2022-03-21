import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NiveauComponent } from './components/niveau/niveau.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { AppRoutingModule } from './app-routing.module';
import { MatiereComponent } from './components/matiere/matiere.component';
import { AjoutEtudiantComponent } from './components/ajout-etudiant/ajout-etudiant.component';
import {FormsModule} from '@angular/forms';
import { AjoutNiveauComponent } from './ajout-niveau/ajout-niveau.component';
import { AjoutMatiereComponent } from './components/ajout-matiere/ajout-matiere.component';
import { NiveauDetaisComponent } from './components/niveau-detais/niveau-detais.component';
import { MatiereDetailsComponent } from './components/matiere-details/matiere-details.component';
import { MatieresUpdateComponent } from './components/matieres-update/matieres-update.component';
import { EtudiantDetailsComponent } from './components/etudiant-details/etudiant-details.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { PaiementListeComponent } from './components/paiement-liste/paiement-liste.component';
import { EtudiantUpdateComponent } from './components/etudiant-update/etudiant-update.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NiveauComponent,
    EtudiantComponent,
    MatiereComponent,
    AjoutEtudiantComponent,
    AjoutNiveauComponent,
    AjoutMatiereComponent,
    NiveauDetaisComponent,
    MatiereDetailsComponent,
    MatieresUpdateComponent,
    EtudiantDetailsComponent,
    PaiementComponent,
    PaiementListeComponent,
    EtudiantUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
