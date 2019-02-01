import { fromEvent } from "rxjs/Observable/fromEvent";
import { addItem } from "./addItem";

const hotObservable = fromEvent(document, "mousemove");

setTimeout(() => {
  hotObservable.subscribe(
    (value: any) => addItem(value.clientX)
  );
}, 2000);
