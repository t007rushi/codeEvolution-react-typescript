import React from 'react'

type StatusProps = {
    status : 'loading' | 'error' | 'success';
}

export const Status = (props: StatusProps) => {
  return (
    <div>Status</div>
  )
}