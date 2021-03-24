import styled, { css } from "styled-components";
import { Button } from "./../../Button";
import { Input } from "./../../Input";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { removeChat, renameChat } from "./../../../store/chatReducer";

const StyledEditBlockWrapper = styled.div<{ show?: boolean }>`
  overflow: hidden;
  width: 100%;
  height: 0px;
  transition: 0.3s height;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ show }) =>
    show &&
    css`
      height: 40px;
    `}
`;

const StyledForm = styled.form`
  display: inline-block;
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledInputBlock = styled.div`
  position: relative;
  padding: 0 10px 0 0;
  width: calc(100% - 160px);
`;

type Props = {
  id: string;
  removeChat: (id: string) => void;
  renameChat: (id: string, title: string) => void;
  setShowEditBlock: (show: boolean) => void;
  show: boolean;
};

const EditBlock = (props: Props) => {
  const inputsRenameChat = {
    name: "chatTitle",
    text: "Введите новое название",
  };

  const removeChatHandler = (id: string) => {
    props.removeChat(id);
    props.setShowEditBlock(false);
  };
  const renameChatHandler = (data: any) => {
    const fetchData = async () => {
      await props.renameChat(props.id, data.chatTitle);
      props.setShowEditBlock(false);
    };
    fetchData();
  };

  return (
    <StyledEditBlockWrapper show={props.show}>
      <div style={{ width: "100%" }}>
        <Form
          onSubmit={renameChatHandler}
          render={({ handleSubmit, pristine, form }) => (
            <StyledForm
              onSubmit={async (event) => {
                await handleSubmit(event);
                await form.reset();
              }}
            >
              <StyledInputBlock>
                <Field name={inputsRenameChat.name}>
                  {({ input }) => (
                    <div>
                      <Input
                        {...input}
                        type={"text"}
                        placeholder={inputsRenameChat.text}
                        autoComplete={"off"}
                      />
                    </div>
                  )}
                </Field>
              </StyledInputBlock>
              <Button
                disabled={pristine}
                width={"160px"}
                height={"30px"}
                borderRadius={"4px"}
                margin={"0px 5px"}
                inputButton={true}
              >
                Переименовать
              </Button>
            </StyledForm>
          )}
        />
      </div>
      <Button
        width={"160px"}
        height={"30px"}
        borderRadius={"4px"}
        margin={"0px 5px"}
        onClick={() => removeChatHandler(props.id)}
        buttonType={"error"}
      >
        Удалить
      </Button>
    </StyledEditBlockWrapper>
  );
};

const mapStatesToProps = (state: any) => {
  return {};
};

export default connect(mapStatesToProps, { removeChat, renameChat })(EditBlock);
