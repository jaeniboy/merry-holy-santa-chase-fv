<script>
    import { initializeApp } from "firebase/app";
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { writable } from "svelte/store";
    import { push } from "svelte-spa-router";


    const firebaseConfig = {
        apiKey: "AIzaSyBpOgtLkUIXsLaHmqZHoqVV_0D3dCfVlVk",
        authDomain: 'merry-holy-santa-chase.firebaseapp.com',
        projectId: 'merry-holy-santa-chase',
        storageBucket: 'merry-holy-santa-chase.appspot.com',
        messagingSenderId: '1050325198070',
        appId: '1:1050325198070:web:2efd1e961bf1c135af38d7',
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    let email = '';
    let password = '';

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("signed in",user)
            push("/dmn")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const authStore = writable({
        isLoggedIn: false,
        firebaseControlled: false,
    })
</script>


<div class="login-form">
    <h1>Login</h1>
    <form on:submit|preventDefault={signIn}>
     <div><input bind:value={email} type="text" placeholder="Email" /></div>
     <div><input bind:value={password} type="password" placeholder="Password" /></div>
     <button type="submit">Login</button>
    </form>
</div>