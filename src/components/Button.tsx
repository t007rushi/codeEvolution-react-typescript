import React,{MouseEvent} from 'react'

type Props = {
    handleClick : (event:MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props: Props) => {
  return (
    <button onClick={props.handleClick}>Click</button>
  )
}