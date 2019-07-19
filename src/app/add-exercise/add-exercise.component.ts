import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addExerciseForm = new FormGroup({
    name: new FormControl('',Validators.required),
    imageUrl: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required)
  })


  onCreateExercise(exerciseData: { name: string; imageURL: string; description:string }) {
    this.http.post (
      'https://ng-exercise-app.firebaseio.com/exercises.json',exerciseData)
      .subscribe(responseData => {
        console.log(responseData);

      })
      this.addExerciseForm.reset();
  }

}
