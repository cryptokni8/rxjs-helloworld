import { Observable } from "rxjs/Observable";

const myObservable = Observable.create((observer: any) => {
  observer.next("Hello world - 1");
  observer.next("Hello world - 2");
  setInterval(() => observer.next("Hello from world"), 2000);
});

const addItem = (val: any) => {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
};

const observer1 = myObservable.subscribe(
  (value: any) => addItem(value),
  (error: any) => addItem(error),
  () => addItem("Completed")
);

const observer2 = myObservable.subscribe((value: any) => addItem(value));

observer1.add(observer2);

setTimeout(() => {
  observer1.unsubscribe();
}, 6001);
