import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { UsersDom } from './UsersDom';
import { getUsers } from './../../store/userReducer';

type Props = {
  getUsers: (page: number) => void,
  usersPage: number,
  users: any
}

const Users = (props: Props) => {
  const [getUsers, usersPage] = [props.getUsers, props.usersPage];

  useEffect(() => {
    const fetchData = async () => {
      getUsers(usersPage)
    }
    fetchData()
  }, [getUsers, usersPage])

  return (
    <UsersDom {...props}/>
  )
}

const mapStatesToProps = (state: any) => {
  return {
    usersPage: state.user.usersPage,
    users: state.user.users
  }
}
export default connect(mapStatesToProps, { getUsers })(Users)