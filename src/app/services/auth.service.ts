import { Injectable } from '@angular/core';
import {addDoc, collection, Firestore} from '@angular/fire/firestore/firebase';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";
// import {User} from "../models/user.model";
// import {AngularFireAuth} from "@angular/fire/compat/auth";
// import { UserCredential } from 'firebase/auth';
// import {collectionData } from "@angular/fire/firestore";
// import {deleteDoc, doc} from "@angular/fire/firestore/lite";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	baseUrl = environment.baseUrl;
	
	constructor(
		// private _fireStore: Firestore,
		private _httpClient: HttpClient,
		// private _auth: AngularFireAuth
	) { }


	// -----------------------------------------------------------------------------------------------------
	// @ Public methods
	// -----------------------------------------------------------------------------------------------------

	// signUp(email: string, password: string) {
	// 	return this._auth.createUserWithEmailAndPassword(email, password);
	// }
	//
	// signIn(email: string, password: string) {
	// 	return this._auth.signInWithEmailAndPassword(email, password);
	// }
	
	// getUsers() {
	// 	let usersCollection = collection(this._fireStore, 'users');
	// 	return collectionData(usersCollection, {idField: 'id'})
	// }
	//
	// addUser(desc:string) {
	// 	let data = {description: desc};
	// 	let usersCollection = collection(this._fireStore, 'users');
	// 	return addDoc(usersCollection, data);
	// }
	
	// deleteUser(id:string) {
	// 	let docRef = doc(this._fireStore, 'notes/'+id);
	// 	return deleteDoc(docRef)
	// }
	
}
