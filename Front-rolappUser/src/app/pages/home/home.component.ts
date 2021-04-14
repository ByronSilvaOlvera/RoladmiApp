import { Component, OnInit } from '@angular/core';
import { EntidadUser } from '../../models/rol-app';
import { RolappuserService } from '../../services/rolappuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuarioName : string ="Pablo";

  Usuarios : EntidadUser [] = [];
  constructor( private rolapp: RolappuserService ) { }

  ngOnInit(): void {

    this.rolapp.getUsuarios().subscribe(
      data => {
        this.Usuarios = [ ...data.entidad ];
        //console.log( this.Tasks); 
      }
  );
  }


  nuevaTarea(){

  }

}
