import { Form, Field } from "react-final-form";
import styled from "styled-components";
import { Button } from "../../Button";
import { Input } from "../../Input";

const StyledCreateMessage = styled.div`
  background-color: rgb(63, 63, 63);
  margin: 10px 10px 10px 10px;
  border-radius: 10px;
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
  width: calc(100% - 140px);
`;
type Props = {
  newMessageHandler: any;
};

export const CreateMessageDom = (props: Props) => {
  return (
    <StyledCreateMessage>
      <Form
        onSubmit={props.newMessageHandler}
        render={({ handleSubmit, pristine, form }) => (
          <StyledForm
            onSubmit={async (event) => {
              await handleSubmit(event);
              await form.reset();
            }}
          >
            <StyledInputBlock>
              <Field name={"message"}>
                {({ input, meta }) => (
                  <div>
                    <Input
                      {...input}
                      type={"text"}
                      placeholder={"Отправить сообщение"}
                      autoComplete={"off"}
                    />
                  </div>
                )}
              </Field>
            </StyledInputBlock>
            <Button disabled={pristine} width={"110px"} height={"40px"}>
              Отправить
            </Button>
          </StyledForm>
        )}
      />
    </StyledCreateMessage>
  );
};
