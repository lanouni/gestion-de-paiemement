import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { NiveauComponent } from './components/niveau/niveau.component';
import { MatiereComponent } from './components/matiere/matiere.component';
import { AjoutEtudiantComponent } from './components/ajout-etudiant/ajout-etudiant.component';
import { AjoutNiveauComponent } from './ajout-niveau/ajout-niveau.component';
import { AjoutMatiereComponent} from './components/ajout-matiere/ajout-matiere.component';
import { MatiereDetailsComponent } from './components/matiere-details/matiere-details.component';
import { MatieresUpdateComponent } from './components/matieres-update/matieres-update.component';
import { EtudiantDetailsComponent } from './components/etudiant-details/etudiant-details.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { PaiementListeComponent } from './components/paiement-liste/paiement-liste.component';
import { EtudiantUpdateComponent } from './components/etudiant-update/etudiant-update.component';

const appRoutes:Routes = [{
  path:'niveau',
  component:NiveauComponent
},
{
  path:'matiere',
  component:MatiereComponent
},
{
  path:'etudiant',
  component:AjoutEtudiantComponent
}  ,
{
  path:'paiement',
  component:PaiementComponent
}  ,
{
  path:'paiement/liste',
  component:PaiementListeComponent
}  ,
{
  path:'niveau/add',
  component: AjoutNiveauComponent
},
{
  path:'matiere/add',
  component: AjoutMatiereComponent
},

{
  path:'niveau/matiere/:niveau',
  component: MatiereComponent
},
{
  path:'niveau/matiere/:niveau/:matiere',
  component:MatiereDetailsComponent
},
{
  path:'niveau/matiere/:niveau/:matiere/update',
  component:MatieresUpdateComponent
},
{
  path:'niveau/matiere/:niveau/:nom/:prenom/details',
  component:EtudiantDetailsComponent
},
{
  path:'niveau/matiere/:niveau/:nom/:prenom/details/update',
  component:EtudiantUpdateComponent
}


];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
