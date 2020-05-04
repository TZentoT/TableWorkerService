import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  workerForm: FormGroup

  myWorkerType = MyWorkerType;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {

    this.workerForm = new FormGroup ({ 
      name: new FormControl({ value: '', disabled: false}, [Validators.required]),
      surname: new FormControl({ value:"", disabled: false}, [Validators.required]),
      type: new FormControl({ value: 0, disabled: false}, [Validators.required]),
      telephone: new FormControl({ value: "", disabled: false}, [Validators.required])
    })
  }

  onAddWorker(worker){
    this.addWorker.emit(worker)
    this.workerForm.reset()
  }
}
