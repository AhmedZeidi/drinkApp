import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  idC: any;
  cocktail: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.idC = this.route.snapshot.params['idC']
    this.getDetailById()
  }

  getDetailById(){
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.idC}`)
    .then(
      res =>{
        this.cocktail = res.data.drinks[0];
        console.log(this.cocktail);

      }
    )
    .catch(
      err =>{
        console.log('err getDetailById', err );
      }
    )
  }

}
