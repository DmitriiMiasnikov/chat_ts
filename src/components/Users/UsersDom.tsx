import React from 'react';

type Props = {
  users: any
}

export const UsersDom = (props: Props) => {
  return (
    <div>
      {Boolean(props.users.length) && props.users.map((el: any, i: number) => {
        return <div key={i}>{el.userName}</div>
      })}
    </div>
  )
}