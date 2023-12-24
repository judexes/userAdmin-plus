import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGoogle, faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import {AngularFireDatabase} from "@angular/fire/compat/database";
// import {Firestore} from "@angular/fire/firestore/firebase";
import {Firestore, collection, addDoc} from "@angular/fire/firestore";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	signupForm: FormGroup;
	faTriangleExclamation = faTriangleExclamation;

	constructor(
		private _formBuilder: FormBuilder,
		private _firestore: Firestore,

	) {
		this.signupForm = this.buildForm();
	}

	ngOnInit(): void { }

	/**
	 * Build form
	 */
	private buildForm(): FormGroup {
		return this._formBuilder.group({
			name: [null, [Validators.required, Validators.maxLength(255)]],
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required, Validators.minLength(6)]],
			password_confirmation: [null, [Validators.required]]
		});
	}

	/**
	 * Handles the user registration process.
	 * Validates the signup form and registers the user into the Firestore database.
	 * Upon successful registration, it logs a message to the console and potentially
	 * performs further actions like redirecting the user or showing a success message.
	 * Errors during the registration process are caught and logged.
	 */
	register(): void {
		// Ensure the form is valid before proceeding with the registration process.
		if (!this.signupForm.valid) {
			console.error('The signup form is invalid.');
			return;
		}

		// Extract the user information from the form's value.
		const { name, email, password } = this.signupForm.value;
		const payload = {
			name,
			email,
			password,
			admin: false,
			verified: false,
		};

		// Reference the 'users' collection in Firestore.
		const collectionInstance = collection(this._firestore, 'users');

		// Add the new user document to the Firestore collection.
		addDoc(collectionInstance, payload)
			.then(() => {
				// Handle successful registration, e.g., logging, redirecting, or updating UI state.
				console.log('User registration successful.');
				// this.router.navigate(['/success']); // For example, navigating to a success page.
			})
			.catch((err) => {
				// Handle any errors that occur during registration, e.g., logging or displaying an error message.
				console.error('Error during user registration:', err);
				// this.errorService.handle(err); // Potentially calling an error handling service.
			});
	}


}
