import styles from "./Chats.module.scss";
import { Form, Field } from "react-final-form";
import ListItem from "./ListItem/ListItem";
import { Button } from "./../Button";
import { Input } from './../Input';
import { Fetching } from "../Fetching";

type Props = {
  chats: any;
  currentUser: { email: string; userName: string; _id: string };
  inputsCreateChat: { name: string; text: string }[];
  createNewChatHandler: any;
  fetching: boolean;
};

export const ChatsDom = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      {props.currentUser && (
        <div className={styles.createNewChat}>
          <Form
            onSubmit={props.createNewChatHandler}
            render={({ handleSubmit, pristine, form }) => (
              <form
                onSubmit={async (event) => {
                  await handleSubmit(event);
                  await form.reset();
                }}
              >
                {props.inputsCreateChat.map((el, i) => {
                  return (
                    <div className={styles.inputBlock} key={i}>
                      <Field name={el.name}>
                        {({ input, meta }) => (
                          <div>
                            <Input
                              {...input}
                              type={"text"}
                              placeholder={el.text}
                              autoComplete={"off"}
                            />
                            {meta.error && meta.touched && (
                              <div className={styles.error}>{meta.error}</div>
                            )}
                          </div>
                        )}
                      </Field>
                    </div>
                  );
                })}
                <Button disabled={pristine} width={"110px"} height={"40px"}>
                  Создать
                </Button>
              </form>
            )}
          />
        </div>
      )}
      {props.fetching && <Fetching blockWidth={'100%'} blockHeight={'62px'} imageSize={'35px'} />}
      {Boolean(props.chats.length) && (
        <div className={styles.list}>
          {props.chats.map((el: any, i: number) => {
            return <ListItem item={el} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};
