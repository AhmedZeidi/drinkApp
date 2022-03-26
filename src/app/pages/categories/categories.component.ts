import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

categories:any = [];

  constructor() { }


  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then (response =>{
        console.log(response.data.drinks);
        this.categories = response.data.drinks;


      })
      .catch(e =>{
        console.log(e);
      })

  }

}
