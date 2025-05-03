import React from "react";
import ModalComponent from ".././common/ModalComponent";
import Button from "../button/Button";
import ModalHeading from ".././modal/ModalTitle";
import ModalInputs, { Wrapper } from "../modal/ModalInputs";
import CloseButton from ".././modal/CloseButton";
import ButtonWrapper from "../common/ButtonWrapper";

const CreateNewBoard = () => {
  return (
    <div>
      <ModalComponent textContent="Create New Board">
        <ModalHeading title="Add New Board" />

        <Wrapper>
          <ModalHeading subtitle="Board Name" />
          <ModalInputs placeholder="e.g Web Design" />
        </Wrapper>

        <Wrapper>
          <ModalHeading subtitle=" Board Columns" />

          <div className="flex items-center space-x-2 justify-center mt-[12px]">
            <ModalInputs />
            <CloseButton />
          </div>
          <div className="flex items-center space-x-2 justify-center mt-[12px]">
            <ModalInputs />
            <CloseButton />
          </div>
        </Wrapper>
        <ButtonWrapper>
          <Button
            buttonName="Add New Column"
            icon="+"
            className="w-full justify-center"
          />
          <Button
            buttonName="Create New Board"
            className="w-full justify-center"
          />
        </ButtonWrapper>
      </ModalComponent>
    </div>
  );
};

export default CreateNewBoard;
