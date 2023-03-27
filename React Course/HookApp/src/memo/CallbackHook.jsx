import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import { useCallback } from "react"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => {
          setCounter((c) => (c+1));
        },
        [],
      )
    return (
        <>
            <h1>Counter: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment}/>
        </>
    )
}
