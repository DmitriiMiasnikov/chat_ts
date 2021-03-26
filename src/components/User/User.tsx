import { connect } from "react-redux";
import { UserDom } from "./UserDom";

type Props = {
  
}

const User = (props: Props) => {

  return (
    <UserDom {...props}/>
  )
}

const mapStatesToProps = (state: any) => {
  return {

  }
}

export default connect(mapStatesToProps, {})(User)