import { useState, useEffect } from "react";


export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });


    useEffect(() => {

        const onMouseMoved = ({ x, y }) => {
            setCoords((c) => ({...c, x, y}));
        }

        window.addEventListener('mousemove', onMouseMoved);
        return () => {
            window.removeEventListener('mousemove', onMouseMoved);
        }
    }, [])

    return (
        <>
            <h3>User Already Exists</h3>
            <h4>{JSON.stringify(coords)}</h4>
        </>
    )
}
