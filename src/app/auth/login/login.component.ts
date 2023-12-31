import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGoogle, faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	faTriangleExclamation = faTriangleExclamation;

	constructor(
		private _formBuilder: FormBuilder,
		private _router: Router
	) {
		this.loginForm = this.buildForm();
	}

	ngOnInit(): void { }

	// -----------------------------------------------------------------------------------------------------
	// @ Public methods
	// -----------------------------------------------------------------------------------------------------


	/**
	 * Build form
	 */
	private buildForm(): FormGroup {
		return this._formBuilder.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required]]
		});
	}

	/**
	 * Login user
	 */
	login(): void {
		this._router.navigateByUrl('/');
	}

}
