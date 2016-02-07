import {Observable} from 'rxjs';


Observable.timer(0, 100)
  .map(i => `Seconds elapsed = ${i}`)
  .subscribe(text => {
    const container = document.body;
    container.textContent = text;
  });
