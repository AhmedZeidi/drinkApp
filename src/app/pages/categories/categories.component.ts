import { Component, OnInit } from '@angular/core';
import axios, { Axios } from 'axios';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any = [];
  nCategorie:any;

  constructor() { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .then (response =>{
        console.log('response drinks',response.data.drinks);
        this.categories = response.data.drinks;
        console.log('categories',this.categories);
      })
      .catch(e =>{
        console.log('error getCategories',e);
      })
  }

  validCategorie(categorie: any){
    if (categorie.indexOf("/") == -1){
      // this.nCategorie = categorie.replace('/',' ');
      // console.log(this.nCategorie);
      return true

    }else{
      return false
    }

  }
}
