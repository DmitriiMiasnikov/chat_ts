import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { UserDom } from "./UserDom";
import { getUser, clearUser } from "./../../store/userReducer";

type Props = {
  match: any;
  getUser: (id: string) => void;
  user: { email: string; _id: string; userName: string };
  userChats: { date: string; title: string; user_id: string; _id: string }[];
  userMessages: {
    _id: string;
    text: string;
    user_id: string;
    chat_id: string;
    userName: string;
    date: string;
  }[];
  clearUser: () => void
};

const User = (props: Props) => {
  const [getUser, clearUser] = [props.getUser, props.clearUser];

  useEffect(() => {
    const fetchData = async () => {
      await getUser(props.match.params.userId);
    };
    fetchData();
  }, [getUser, props.match.params.userId]);

  useEffect(() => {
    return () => clearUser()
  }, [clearUser])

  return <UserDom {...props} />;
};

const mapStatesToProps = (state: any) => {
  return {
    user: state.user.user,
    userChats: state.user.userChats,
    userMessages: state.user.userMessages,
  };
};

export default withRouter(connect(mapStatesToProps, { getUser, clearUser })(User));
