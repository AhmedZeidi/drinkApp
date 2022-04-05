import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  nomC: any = '';
  cocktails: any =[];
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {

    console.log(this.route.snapshot.params['nomC']);

    this.nomC = this.route.snapshot.params['nomC'];
    this.getCoctailsByCategorie();
  }

  getCoctailsByCategorie(){
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.nomC}`)
    .then(
      res =>{

        this.cocktails = res.data.drinks;
        console.log('Coctails', this.cocktails);
      })
    .catch(
      err =>{
        console.log('getCoctailsByCategorie-err',err);
      })
  }


}
