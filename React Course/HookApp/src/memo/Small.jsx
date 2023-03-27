
import { memo } from 'react';

export const Small = memo(({text}) => {
    console.log('Im generated already c:');
  return (
    <small>{text}</small>
  )
})
