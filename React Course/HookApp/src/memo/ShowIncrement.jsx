import { memo } from "react";
export const ShowIncrement = memo(({increment}) => {
    
    console.log('generated :c');

  return (
    <button className="btn btn-primary" onClick={() => {increment()}}> Increment </button>
  )
})
