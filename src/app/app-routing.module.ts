import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'peso-ideal',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'tutoriais',
    loadChildren: () => import('./tutoriais/tutoriais.module').then( m => m.TutoriaisPageModule)
  },

  {
    path: 'produtos-lista',
    loadChildren: () => import('./produtos-lista/produtos-lista.module').then( m => m.ProdutosListaPageModule)
  },
  {
    path: 'peso-ideal',
    loadChildren: () => import('./peso-ideal/peso-ideal.module').then( m => m.PesoIdealPageModule)
  },
  {
    path: 'salario',
    loadChildren: () => import('./salario/salario.module').then( m => m.SalarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
