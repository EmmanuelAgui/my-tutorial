import { Component, OnInit, Input, Output ,EventEmitter, ElementRef} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue='';
  @Input() placeholder='What needs to be done?';
  @Input() delay:number=300;
  @Output() textChanges = new EventEmitter<string>();
  @Output() onEnterUp = new EventEmitter<boolean>();
  ngOnInit(){}

  constructor(
    private elementRef:ElementRef
  ){
    const $event = Observable.fromEvent(elementRef.nativeElement,'keyup').pipe(
      map(()=>this.inputValue),
      debounceTime(this.delay),
      distinctUntilChanged(),
    )
    $event.subscribe(input=>this.textChanges.emit(input));
  }

  

  onenterUp(){
    this.onEnterUp.emit(true);
    this.inputValue='';
  }



}
