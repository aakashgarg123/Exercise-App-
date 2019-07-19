import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    exercisesArray = [];
    constructor(private http: HttpClient){}

    fetchExercises() {
        return this.http.get('https://ng-exercise-app.firebaseio.com/exercises.json')
        .pipe(map(responseData => {
          
          for(const key in responseData) {
            if(responseData.hasOwnProperty(key)){
              this.exercisesArray.push({... responseData[key], id: key})
            }
            
          }
          //return exercisesArray;
        }))
        
      }
}