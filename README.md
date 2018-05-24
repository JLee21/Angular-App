
* Create a new application

ng new <app_name>

* Create a new Component

ng generate component <component-name>


### Angular's Repeater directive

*ngFor

### Angular's Pipe

## Binding

### Property Binding

https://angular.io/guide/template-syntax#property-binding--property-

Set an element property to that of a component's property.
Also, this Property Binding is a great way for a parent and child components to
communicate.

### Event Binding
https://angular.io/guide/template-syntax#event-binding

### Class Binding

Add and remove CSS class conditionally with [class binding](https://angular.io/guide/template-syntax#class-binding).


### TypeScript

```typescript
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```
