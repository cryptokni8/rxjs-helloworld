/**
 * Order of subscription matters
 */
import { Subject } from "rxjs/Subject";
import { addItem } from "./addItem";

// a subject is a producer
const subject = new Subject();

// lets have an observer for the observable
subject.subscribe(
  data => addItem("Observer 1:" + data),
  err => addItem(err),
  () => addItem("Observer 1: Completed")
);

// only observer 1 receives the message
subject.next("Hello!");

// now add a new observer on the same subject
const observer = subject.subscribe(
  data => addItem("Observer 2:" + data),
  err => addItem(err),
  () => addItem("Observer 2: Completed")
);

// both observers receive the broadcasted messages
subject.next("Anyone home?");
subject.next("Ofcourse the 2 of you!");

// farewell observer
observer.unsubscribe();

// only observer1 receives the good bye
subject.next("Good bye folks");
