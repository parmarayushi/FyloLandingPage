import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LandingPagePresenterService } from 'src/app/landing-page/landing-page-container/landing-page-presenter/landing-page-presenter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  viewProviders: [LandingPagePresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  public form: FormGroup;
  public formSubmitted: boolean;

  constructor(private landingPagePresenter: LandingPagePresenterService) {
    this.formSubmitted = false
  }

  ngOnInit(): void {
    this.form = this.landingPagePresenter.buildForm();
  }

  public get getControls() {
    return this.form.controls;
  }

  public onSubmit() {
    this.formSubmitted = !this.form.valid;
    if (this.form.valid)
      console.log(this.form.value);
  }
}
