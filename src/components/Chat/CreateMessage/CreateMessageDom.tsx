import { Form, Field } from "react-final-form";
import styled from "styled-components";

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
const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 0px solid transparent;
  color: var(--font);
  background-color: var(--input);
  padding: 8px;
  transition: 0.1s background-color;

  &:focus {
    outline: none;
  }

  &:-internal-autofill-selected {
    appearance: menulist-button;
    background-color: var(--input) !important;
    background-image: none !important;
    color: var(--font) !important;
  }
`;
const StyledError = styled.div`
  position: absolute;
  left: 325px;
  top: 8px;
  font-size: 13px;
  color: var(--font-wrong);
  width: max-content;
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 40px;
  margin: 5px;
  background-color: ${({ disabled }) =>
    disabled ? "#5d5d5d" : "var(--block)"};
  border-radius: 8px;
  border: 0px;
  transition: 0.2s background-color, 0.2s color;
  color: ${(props) => (props.disabled ? "#757575" : "white")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  font-size: 17px;

  &:hover {
    cursor: pointer;
    background-color: var(--block-hover);
  }

  &:focus {
    outline: none;
    background-color: var(--block);
  }

  &.submit {
    width: 100%;
    height: 100%;
  }
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
                    <StyledInput
                      {...input}
                      type={"text"}
                      placeholder={"Отправить сообщение"}
                      autoComplete={"off"}
                    />
                    {meta.error && meta.touched && (
                      <StyledError>{meta.error}</StyledError>
                    )}
                  </div>
                )}
              </Field>
            </StyledInputBlock>
            <StyledButton type="submit" disabled={pristine}>
              Отправить
            </StyledButton>
          </StyledForm>
        )}
      />
    </StyledCreateMessage>
  );
};
