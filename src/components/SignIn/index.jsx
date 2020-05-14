import React, {useState} from 'react';
import Styled from './style'; 
import {useHistory} from 'react-router-dom';



const SignIn = ({changeView, setIsLogged}) => {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [type, setType] = useState('password');
    const history = useHistory();
    const [message, setMessage] = useState(null);

    const changeType = () => {
        if(type==='password') setType('text');
        else setType('password');
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const res = await fetch('https://rest-api-utp.herokuapp.com/signin',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'same-origin',
          body: JSON.stringify({
            login: loginValue,
            password: passwordValue,
          })
        });
        const result = await res.json();
        console.log(result.message)
        
        if(result.data.success){
          if(result.data.logged){
            setIsLogged();
            localStorage.setItem('auth',result.data.logged);
            localStorage.setItem('user',JSON.stringify(result.data.user));
            history.push('/dashboard');
          }
        }else{
          setMessage(result.message);
        }
        
      }

    return(
        <Styled.Container>
            <Styled.Container__Title>Logowanie</Styled.Container__Title>
            <Styled.Form onSubmit={submitForm}>
            <Styled.Form__Label htmlFor="login" active={!!loginValue}>
              Login
            </Styled.Form__Label>
            <Styled.Form__Input
              type="text"
              id="login"
              value={loginValue}
              onChange={(e) => setLoginValue(e.currentTarget.value)}
            />

            <Styled.Form__PasswordContainer>
                <Styled.Form__Label htmlFor="password" active={!!passwordValue}>
                Hasło
                </Styled.Form__Label>
                <Styled.Form__Input
                type={type}
                id="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.currentTarget.value)}
                />
                {type === 'password' ? <Styled.EyeOffIcon onClick={changeType}/> : <Styled.EyeIcon onClick={changeType}/>}
            </Styled.Form__PasswordContainer>
            
            <Styled.Form__Button>Zaloguj się</Styled.Form__Button>
            {message && <p>{message}</p>}
            <p>Nie masz konta? <Styled.Form__Info onClick={changeView}>Zarejestruj się</Styled.Form__Info>.</p>
            </Styled.Form>
        </Styled.Container>
    );
}

export default SignIn;