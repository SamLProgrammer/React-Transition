import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetPressed} = useForm({
        username: '',
        email: '',
        password: '',
    });

    const {username, email, password} = formState;

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <input type="text"
                className="form-control"
                placeholder="User Name"
                name="username"
                value={username}
                onChange={onInputChange}></input>

            <input type="email"
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={email}
                onChange={onInputChange}></input>

            <input type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}></input>

                {username === 'dude2' && <Message/>}
                <button className="btn btn-primary mt-2" onClick={onResetPressed}> Clear </button>
        </>
    )
}
