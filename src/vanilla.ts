import { Observable } from "rxjs/Observable";
import { addItem } from "./addItem";

// create an observable
const observable = Observable.create((observer: any) => {
  // produce messages
  observer.next("Hello world - 1");
  observer.next("Hello world - 2");
  setInterval(() => observer.next("Hello from world"), 2000);
});

const observer1 = observable.subscribe(
  (value: any) => addItem("Observer 1: " + value),
  (error: any) => addItem("Observer 1: " + error),
  () => addItem("Observer 1: Completed")
);

const observer2 = observable.subscribe(
  (value: any) => addItem("Observer 2: " + value)
);

// join the 2 observers into one to make unsubscribing easier
observer1.add(observer2);

setTimeout(() => observer1.unsubscribe(), 4001);
