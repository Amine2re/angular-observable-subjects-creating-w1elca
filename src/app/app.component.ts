import { error } from '@angular/compiler/src/util';
import { Component, VERSION } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subject$ = new Subject();

  public maskObs: Subject<any> = new Subject();

  public unmask() {
    this.maskObs.next({ display: false });
  }

  ngOnInit() {
    this.getResultOfUnmask();

    this.subject$.subscribe((val) => {
      console.log(val);
    });

    this.subject$.next('1');
    this.subject$.next('2');
    this.subject$.complete();
    //this.subject.error("error")
  }

  setObservable() {}
  getResultOfUnmask() {
    let sx : any;
    this.maskObs.subscribe((value) => {
    //  console.log(typeof value);
    //
    });

    this.unmask();
  }
}
