import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
// import {ToastrService} from 'ngx-toastr';
import {Router} from "@angular/router";

@Injectable({
	providedIn: 'root',
})
export class ErrorService {
	constructor(
		// private toastService: ToastrService,
		private _router: Router,) {
	}

	handleError(error: HttpErrorResponse): Observable<never> {
		let errorMessage = this.getServerErrorMessage(error);

		// Check if the error response contains a specific error message
		if (error.error) {
			errorMessage = error.error?.message || error.error?.error?.message;
		}

		// Use your toast service to display the error message
		// this.toastService.error(errorMessage, 'Error');

		// Log the error to the console (you can remove this if not needed)
		// console.error(errorMessage);

		return throwError(errorMessage);
	}

	private getServerErrorMessage(error: HttpErrorResponse): string {
		if (error.status === 404) {
			return `The requested resource was not found. Please check the URL. [HTTP ${error.status}]`;
		} else if (error.status === 500) {
			return 'Oops! Something went wrong. Please contact admin or try again later.';
		} else if (error.status === 403) {
			return 'Access denied. You do not have permission to access this resource.';
		} else if (error.status === 401) {
			this.signOut();
			return 'Access denied. Invalid or Expired Token. Logging you out...';
		}

		return `An unexpected server error occurred (HTTP ${error.status}). Please try again later.`;
	}


	/**
	 * Sign out
	 */
	signOut(): void {
		this._router.navigate(['/sign-out']);
	}
}
