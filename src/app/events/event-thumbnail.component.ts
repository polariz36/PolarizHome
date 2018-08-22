import { Component, Input } from "@angular/core";

@Component({
  selector: "app-event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.scss"]
})
export class EventThumbnailComponent {
  @Input()
  event: any;

  constructor() {}
}
