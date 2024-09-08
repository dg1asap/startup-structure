import {Component} from "@angular/core";

@Component({
    selector: "app-root",
    standalone: true,
    template: `
        <h1 class="text-amber-200 bg-amber-950">
            Welcome to {{ title }}!
        </h1>

        <ul>
            <li>
                <button [class]="tasks[0].done ? 'line-through' : ''">{{ tasks[0].name }}</button>
            </li>
            <li>
                <button class="{{ tasks[1].done ? 'line-through' : '' }}">{{ tasks[1].name }}</button>
            </li>
        </ul>
    `,
})
export class AppComponent {
    title = "No niezły start!";

    tasks = [
        {
            name: "s111",
            done: false
        },
        {
            name: "s2132",
            done: true
        }
    ]
}
