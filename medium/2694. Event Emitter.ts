/**
 * 
Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.
 

Example 1:

Input: 
actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"], 
values = [[], ["firstEvent"], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]
Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
Explanation: 
const emitter = new EventEmitter();
emitter.emit("firstEvent"); // [], no callback are subscribed yet
emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });
emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2
 * 
 */


type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private events: Map<string, Callback[]>;

    constructor() {
        this.events = new Map();
    }
    
    subscribe(eventName: string, callback: Callback): Subscription {
        if(!this.events.has(eventName))
            this.events.set(eventName, []);

        this.events.get(eventName)!.push(callback);

        return {
            unsubscribe: () => {
                const arr = this.events.get(eventName)!;
                const idx = arr.indexOf(callback);
                if(idx !== -1)
                    arr.splice(idx, 1);
            }
        };
    }
    
    emit(eventName: string, args: any[] = []): any[] {
        if(!this.events.has(eventName))
            return [];

        const arr = this.events.get(eventName)!;
        return arr.map((callback => callback(...args)));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */