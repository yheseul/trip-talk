"use client";

import { CloseOutlined } from "@ant-design/icons";
import { ChangeEvent, useState } from "react";
import { IModalContainer } from "../types/modalContainer.type";
import Button from "../../Button/components/Button";

export default function ModalContainer(props: IModalContainer) {
  const { isSwitched, children, isPrompt, alertMessage, setUserPassword } =
    props;
  const [isModalOpen, setIsModalOpen] = useState(true);

  const ontoggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPassword!(event.target.value);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)]">
          <div className="flex justify-center items-center rounded-xl absolute bg-white w-96 h-48 flex-col top-[calc(50vh_-_100px)] left-[calc(50vw_-_200px)]">
            <div
              className="absolute top-0 flex flex-row items-center justify-between w-full px-3 text-2xl h-14 rounded-t-xl"
              style={{ backgroundColor: isSwitched ? "lightCoral" : "blue" }}
            >
              <div>{children}</div>
              <button onClick={ontoggleModal}>
                <CloseOutlined />
              </button>
            </div>
            <div className="absolute flex flex-col gap-4 bottom-3">
              <div>
                <div>{alertMessage}</div>
                {isPrompt && (
                  <input
                    onChange={onChangePassword}
                    type="password"
                    placeholder="password"
                  />
                )}
              </div>
              <div className="flex justify-center gap-2">
                <Button onClick={ontoggleModal} id="cancel" color="white" />
                <Button id="confirm" color="blue" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
