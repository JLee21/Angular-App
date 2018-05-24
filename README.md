
* Create a new application

ng new <app_name>


### Angular's Repeater directive

*ngFor

### Angular's Pipe

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
