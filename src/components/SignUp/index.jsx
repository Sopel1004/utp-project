import React, { useState } from 'react';
import Styled from './style';
import StepProggress from './StepProgress';

const SignUp = ({changeView}) => {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [positionValue, setPositionValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [repasswordValue, setRepasswordValue] = useState('');
  const [step, setStep] = useState(1);

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3001/signup',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        firstName: firstNameValue,
        lastName: lastNameValue,
        position: positionValue,
        gender: genderValue,
        email: emailValue,
        login: loginValue,
        password: passwordValue,
        repassword: repasswordValue
      })
    });
    const result = await res.json();
    console.log(result);
  }

  const checkFirstStep = (e) => {
    e.preventDefault();
    if (emailValue && loginValue && passwordValue && repasswordValue) {
      if (passwordValue === repasswordValue) {
        setStep(step + 1);
      }
    }
  };
  const checkSecondStep = (e) => {
    e.preventDefault();
    if (firstNameValue && lastNameValue && genderValue) {
      setStep(step + 1);
    }
  };

  const changeStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Styled.Form__Subtitle>Dane logowania</Styled.Form__Subtitle>
            <Styled.Form__Label htmlFor="email" active={!!emailValue}>
              Email
            </Styled.Form__Label>
            <Styled.Form__Input
              type="email"
              id="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.currentTarget.value)}
            />

            <Styled.Form__Label htmlFor="login" active={!!loginValue}>
              Login
            </Styled.Form__Label>
            <Styled.Form__Input
              type="text"
              id="login"
              value={loginValue}
              onChange={(e) => setLoginValue(e.currentTarget.value)}
            />

            <Styled.Form__Label htmlFor="password" active={!!passwordValue}>
              Hasło
            </Styled.Form__Label>
            <Styled.Form__Input
              type="password"
              id="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.currentTarget.value)}
            />

            <Styled.Form__Label htmlFor="repassword" active={!!repasswordValue}>
              Powtórz hasło
            </Styled.Form__Label>
            <Styled.Form__Input
              type="password"
              id="repassword"
              value={repasswordValue}
              onChange={(e) => setRepasswordValue(e.currentTarget.value)}
            />
            <Styled.Form__Button onClick={checkFirstStep}>
              Dalej
            </Styled.Form__Button>
            <p>Masz konto? <Styled.Form__Info onClick={changeView}>Zaloguj się</Styled.Form__Info>.</p>
          </>
        );
        break;
      case 2:
        return (
          <>
            <Styled.Form__Subtitle>Dane osobiste</Styled.Form__Subtitle>
            <Styled.Form__Label htmlFor="firstName" active={!!firstNameValue}>
              Imię
            </Styled.Form__Label>
            <Styled.Form__Input
              type="text"
              id="firstName"
              value={firstNameValue}
              onChange={(e) => setFirstNameValue(e.currentTarget.value)}
            />

            <Styled.Form__Label htmlFor="lastName" active={!!lastNameValue}>
              Nazwisko
            </Styled.Form__Label>
            <Styled.Form__Input
              type="text"
              id="lastName"
              value={lastNameValue}
              onChange={(e) => setLastNameValue(e.currentTarget.value)}
            />
            <Styled.Form__Label htmlFor="gender" active={!!genderValue}>
              Płeć
            </Styled.Form__Label>
            <Styled.Form__Input
              as="select"
              id="gender"
              value={genderValue}
              onChange={(e) => setGenderValue(e.target.value)}
            >
              <option value="" disabled></option>
              <option value={'Kobieta'}>Kobieta</option>
              <option value={'Mężczyzna'}>Mężczyzna</option>
            </Styled.Form__Input>
            <Styled.Form__ButtonsGroup>
              <Styled.Form__BackButton onClick={() => setStep(step - 1)}>
                Wstecz
              </Styled.Form__BackButton>
              <Styled.Form__Button onClick={checkSecondStep}>
                Dalej
              </Styled.Form__Button>
            </Styled.Form__ButtonsGroup>
          </>
        );
        break;
      case 3:
        return (
          <>
            <Styled.Form__Subtitle>Rola</Styled.Form__Subtitle>
            <Styled.Form__Label htmlFor="position" active={!!positionValue}>
              Stanowisko
            </Styled.Form__Label>
            <Styled.Form__Input
              as="select"
              id="position"
              value={positionValue}
              onChange={(e) => setPositionValue(e.target.value)}
            >
              <option value="" disabled></option>
              <option value={'user'}>User</option>
              <option value={'admin'}>Admin</option>
            </Styled.Form__Input>

            <Styled.Form__ButtonsGroup>
              <Styled.Form__BackButton onClick={() => setStep(step - 1)}>
                Wstecz
              </Styled.Form__BackButton>
              <Styled.Form__Button>Utwórz</Styled.Form__Button>
            </Styled.Form__ButtonsGroup>
          </>
        );
        break;
      default:
        console.log('error');
    }
  };

  return (
    <Styled.Container>
      <Styled.Container__Title>Utwórz konto</Styled.Container__Title>
      <StepProggress step={step} />
      <Styled.Form onSubmit={submitForm}>{changeStep()}</Styled.Form>
    </Styled.Container>
  );
};

export default SignUp;
