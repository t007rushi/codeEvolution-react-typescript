import React,{ReactNode} from 'react'

type Props = {
    children: ReactNode
}

export const Oscar = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}