import { List } from "../List";
import { Fetching } from "./../Fetching";
import ItemList from "./ItemList";

type Props = {
  users: any;
  fetching: boolean;
};

export const UsersDom = (props: Props) => {
  return (
    <div>
      {props.fetching && (
        <Fetching blockWidth={"100%"} blockHeight={"60px"} imageSize={"35px"} />
      )}
      {!props.fetching && <List listDirection={"column"}>
        {Boolean(props.users.length) &&
          props.users.map((el: any, i: number) => {
            return <ItemList user={el} key={i} />;
          })}
      </List>}
    </div>
  );
};
