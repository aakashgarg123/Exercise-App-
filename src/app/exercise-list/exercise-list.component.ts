import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
exArray = [];
displaying=false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.fetchExercises()
  }

  fetchExercises() {
    this.displaying = true;
    this.http.get('https://ng-exercise-app.firebaseio.com/exercises.json')
    .pipe(map(responseData => {
      const postsArray = [];
      for(const key in  responseData) {
        if(responseData.hasOwnProperty(key)){
          postsArray.push({ ... responseData[key], id: key})
        }
        
      }
      return postsArray;
    }))
    .subscribe(exercises => {
      console.log(exercises.length)
      console.log(exercises[0])
      this.exArray = exercises
    })
  }

}
