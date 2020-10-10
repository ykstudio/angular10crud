import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TutorialsListComponent } from "./components/tutorials-list/tutorials-list.component";
import { AddTutorialComponent } from "./components/add-tutorial/add-tutorial.component";
import { LoginComponent } from "./admin/login/login.component";
import { RegisterComponent } from "./admin/register/register.component";
import { ForgotPasswordComponent } from "./admin/forgot-password/forgot-password.component";
import { VerifyEmailComponent } from "./admin/verify-email/verify-email.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "tutorials", component: TutorialsListComponent },
  { path: "add", component: AddTutorialComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "verify-email", component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
