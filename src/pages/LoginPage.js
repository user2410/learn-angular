import LoginForm from "../components/login/LoginForm";

function LoginPage(){

    function signinSubmitHandler(signinData){
        console.log(signinData);
    }

    return (
        <section>
            <h1>入力</h1>
            <LoginForm signinSubmitHandler={signinSubmitHandler}/>
        </section>
    );
}

export default LoginPage;