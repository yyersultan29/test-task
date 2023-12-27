
import { Route, Switch } from 'react-router'

import { Step1 } from './pages/step1';
import { ChangeEvent, createContext, useEffect, useState } from 'react';
import { FormInput } from '../../components';
import { Step2 } from './pages/step2';

export const LoginContext = createContext({ isValidEmail: false, email: "" });

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export function LoginPage() {

    const [email, setEmail] = useState("");

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value.trim();
        setEmail(email);
    }

    return (
        <LoginContext.Provider value={{ isValidEmail: emailRegex.test(email), email }} >
            <FormInput value={email} onChange={handleChangeEmail} />
            <Switch>

                <Route path={'/login/step-1'} component={Step1} />

                <Route path={'/login/step-2'} component={Step2} />

            </Switch>
        </LoginContext.Provider>
    )
}
