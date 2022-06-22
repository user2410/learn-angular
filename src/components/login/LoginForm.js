
import {useRef} from 'react';

import classes from './LoginForm.module.css';

function LoginForm(props){
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const signinData = {
            username: enteredUsername,
            password: enteredPassword
        };

        props.signinSubmitHandler(signinData);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">ユーザー名</label>
                <input type="text" required name="username" ref={usernameInputRef}/>
            </div>
            <div>
                <label htmlFor="password">パスワード</label>
                <input type="password" required name="password" ref={passwordInputRef}/>
            </div>
            <div>
                <button>ログイン</button>
            </div>
        </form>
    );
}

export default LoginForm;