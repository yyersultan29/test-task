import { Fragment, useEffect } from 'react'

import { Route, useHistory } from 'react-router'

import { LoginPage } from './pages/login/login'

export default function App() {

    const history = useHistory()

    useEffect(() => {
        //  if auth false redirect to login page
        history.push("/login/step-1")
    }, [])

    return (
        <Fragment>

            <header className="h-20 bg-primary flex items-center p-4">
                <h1 className="text-3xl text-black">Title</h1>
            </header>
            <main className="flex flex-col p-4 h-full">
                <Route path="/login" component={LoginPage} />
            </main>

        </Fragment>

    )
}

