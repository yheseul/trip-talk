"use client";

import Input from "../../Input";
import Button from "../../Button";
import TextArea from "../../TextArea";
import { usePathname } from "next/navigation";
import ImageUploader from "../../ImageUploader/ImageUploader";
import { BOARDS_WRITE } from "../../../../constants/constants";
import { IBoardsWriteHook } from "../../../../types/components.type";
import useBoardsWrite from "../hooks/useBoardsWrite";
import ModalContainer from "../../ModalContainer/ModalContainer";
import { useState } from "react";

export default function BoardsWrite(props: IBoardsWriteHook) {
  const [userPassword, setUserPassword] = useState("");
  const {
    handleInputChange,
    onSubmit,
    formData,
    isInputPasswordModalOpen,
    isWrongPasswordModalOpen,
    isEditCompleteModalOpen,
  } = useBoardsWrite(props, userPassword);

  const path: string = usePathname();
  const isEdit = path.includes("edit")
    ? !(formData.title && formData.contents)
    : !(
        formData.writer &&
        formData.password &&
        formData.title &&
        formData.contents
      );

  return (
    <form
      className="flex flex-col items-start w-full gap-10 px-6"
      onSubmit={onSubmit}
    >
      <div className="flex w-full pb-10 text-xl font-bold text-black border-t-0 border-b border-solid border-x-0 border-lightGra">
        게시물 {props.isEdit ? "수정" : "등록"}
      </div>
      <div className="flex w-full gap-10 pb-10 border-t-0 border-b border-solid border-x-0 border-lightGray">
        <div className="flex-1">
          <Input
            id="writer"
            required={true}
            onChange={handleInputChange}
            defaultValue={props.data?.fetchBoard.writer as string}
            disabled={props.isEdit}
            isLabel={true}
          />
          {!formData.writer && (
            <div className="flex pt-2 text-base font-medium text-lightCoral">
              {BOARDS_WRITE.REQUIRED_FIELDS}
            </div>
          )}
        </div>
        <div className="flex-1">
          <Input
            id="password"
            required={true}
            onChange={handleInputChange}
            disabled={props.isEdit}
            isLabel={true}
          />
          {!formData.password && (
            <div className="flex pt-2 text-base font-medium text-lightCoral">
              {BOARDS_WRITE.REQUIRED_FIELDS}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full pb-10 border-t-0 border-b border-solid border-x-0 border-lightGray">
        <Input
          id="title"
          required={true}
          onChange={handleInputChange}
          defaultValue={props.data?.fetchBoard.title}
          isLabel={true}
        />
        {!formData.title && (
          <div className="flex pt-2 text-base font-medium text-lightCoral">
            {BOARDS_WRITE.REQUIRED_FIELDS}
          </div>
        )}
      </div>
      <div className="flex-col w-full">
        <div className="flex items-start gap-1">
          <p className="text-base font-medium text-darkGray">내용</p>
          <b className="text-base font-medium text-lightCoral">*</b>
        </div>
        <TextArea
          id="contents"
          onChange={handleInputChange}
          defaultValue={props.data?.fetchBoard.contents}
        />
        {!formData.contents && (
          <div className="flex pt-2 text-base font-medium text-lightCoral">
            {BOARDS_WRITE.REQUIRED_FIELDS}
          </div>
        )}
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-row items-end gap-2">
          <div>
            <Input
              id="zip_code"
              required={false}
              defaultValue={
                props.data?.fetchBoard.boardAddress?.zipcode as string
              }
              isLabel={true}
            />
          </div>
          <Button id="zip_code_search" color="white" />
        </div>
        <Input
          required={false}
          id="address"
          defaultValue={props.data?.fetchBoard.boardAddress?.address as string}
          isLabel={false}
        />
        <Input
          required={false}
          id="detail_address"
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail as string
          }
          isLabel={false}
        />
      </div>
      <div className="flex-col w-full gap-2">
        <Input
          required={true}
          id="youtubeUrl"
          onChange={handleInputChange}
          defaultValue={props.data?.fetchBoard.youtubeUrl as string}
          isLabel={true}
        />
      </div>
      <div className="flex-col items-start w-full gap-2">
        <p className="text-base font-medium text-darkGray">사진 첨부</p>
        <div className="flex flex-row items-start gap-4">
          <ImageUploader id={"1"} />
          <ImageUploader id={"2"} />
          <ImageUploader id={"3"} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-end w-full gap-4 border-none">
        <Button id="cancel" color="white" />
        <Button
          id="submit"
          disabled={isEdit}
          color={isEdit ? "gray" : "blue"}
        />
      </div>
      {isInputPasswordModalOpen && (
        <ModalContainer
          isSwitched={false}
          children="ALERT!!"
          isPrompt={true}
          alertMessage="글을 등록할 때 입력하셨던 비밀번호를 입력해 주세요."
          setUserPassword={setUserPassword}
        />
      )}
      {isWrongPasswordModalOpen && (
        <ModalContainer
          isSwitched={true}
          children="ERROR!!"
          isPrompt={false}
          alertMessage="비밀번호가 일치하지 않습니다."
        />
      )}
      {isEditCompleteModalOpen && (
        <ModalContainer
          isSwitched={false}
          children="ALERT!!"
          isPrompt={false}
          alertMessage="수정 완료."
        />
      )}
    </form>
  );
}
