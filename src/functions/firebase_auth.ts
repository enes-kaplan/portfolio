import { auth } from './firebase_setup'
import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'

export const uiConfig = {
	signInSuccessUrl: '',
	signInOptions: [
		// Leave the lines as is for the providers you want to offer your users.
		firebase.auth.GoogleAuthProvider.PROVIDER_ID
		// firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		// firebase.auth.TwitterAuthProvider.PROVIDER_ID,
		// firebase.auth.GithubAuthProvider.PROVIDER_ID,
		// firebase.auth.EmailAuthProvider.PROVIDER_ID,
		// firebase.auth.PhoneAuthProvider.PROVIDER_ID,
		// firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
	]
	// tosUrl and privacyPolicyUrl accept either url string or a callback function.
	// Terms of service url/callback.
	// tosUrl: '/tos',
	// Privacy policy url/callback.
	// privacyPolicyUrl: function() {
	// 	window.location.assign('/privacypolicy')
	// }
}
const firebaseAuthUI = new firebaseui.auth.AuthUI(auth)
export const startFirebaseAuthUI = () => {
	firebaseAuthUI.start('#firebaseui-auth-container', uiConfig)
}
