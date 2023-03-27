import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'dude',
        email: 'dude@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        switch (name) {
            case 'username':
                setFormState((fs) => ({ ...fs, username: value }));
                break;

            case 'email':
                setFormState((fs) => ({ ...fs, email: value }));
                break;
        }
    }

    return (
        <>
            <h1>Simple Form</h1>
            <input type="text"
                className="form-control"
                placeholder="User Name"
                name="username"
                value={username}
                onChange={onInputChange}></input>

            <input type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}></input>

                {username === 'dude2' && <Message/>}
        </>
    )
}
