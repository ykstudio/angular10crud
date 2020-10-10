import { Component, OnInit } from "@angular/core";
import { TutorialService } from "src/app/services/tutorial.service";
import Tutorial from "src/app/models/tutorial";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-tutorial",
  templateUrl: "./add-tutorial.component.html",
  styleUrls: ["./add-tutorial.component.css"],
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = new Tutorial();
  submitted = false;

  constructor(
    private tutorialService: TutorialService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    document.body.style.cursor = "wait";
    this.tutorialService.create(this.tutorial).then(() => {
      console.log("Created new item successfully!");
      this.submitted = true;
      setTimeout(() => {
        this.router.navigate(["/tutorials"]);
        document.body.style.cursor = "default";
      }, 2000);
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }
}
