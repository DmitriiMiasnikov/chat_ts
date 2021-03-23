import { Form, Field } from "react-final-form";
import ListItem from "./ListItem/ListItem";
import { Button } from "./../Button";
import { Input } from "./../Input";
import { Fetching } from "../Fetching";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  height: inherit;
`;
const StyledCreateMessage = styled.div`
  background-color: rgb(63, 63, 63);
  margin: 10px 10px 0 10px;
  border-radius: 10px;
  padding: 5px;
`;
const StyledForm = styled.form`
  display: inline-block;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledInputBlock = styled.div`
  position: relative;
  padding: 0 10px;
  width: calc(100% - 110px);
`;
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

type Props = {
  chats: any;
  currentUser: { email: string; userName: string; _id: string };
  inputsCreateChat: { name: string; text: string }[];
  createNewChatHandler: any;
  fetching: boolean;
};

export const ChatsDom = (props: Props) => {
  return (
    <StyledWrapper>
      {props.currentUser && (
        <StyledCreateMessage>
          <Form
            onSubmit={props.createNewChatHandler}
            render={({ handleSubmit, pristine, form }) => (
              <StyledForm
                onSubmit={async (event) => {
                  await handleSubmit(event);
                  await form.reset();
                }}
              >
                {props.inputsCreateChat.map((el, i) => {
                  return (
                    <StyledInputBlock key={i}>
                      <Field name={el.name}>
                        {({ input }) => (
                          <div>
                            <Input
                              {...input}
                              type={"text"}
                              placeholder={el.text}
                              autoComplete={"off"}
                            />
                          </div>
                        )}
                      </Field>
                    </StyledInputBlock>
                  );
                })}
                <Button disabled={pristine} width={"110px"} height={"40px"} inputButton={true}>
                  Создать
                </Button>
              </StyledForm>
            )}
          />
        </StyledCreateMessage>
      )}
      {props.fetching && (
        <Fetching blockWidth={"100%"} blockHeight={"62px"} imageSize={"35px"} />
      )}
      {Boolean(props.chats.length) && (
        <StyledList>
          {props.chats.map((el: any, i: number) => {
            return <ListItem item={el} key={i} />;
          })}
        </StyledList>
      )}
    </StyledWrapper>
  );
};
