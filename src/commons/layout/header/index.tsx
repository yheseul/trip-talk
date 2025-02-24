"use client";

import Image from "next/image";
import { HEADER } from "../../../constants/constants";
import {
  CaretDownOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useLayoutHeader from "./hooks/useLayoutHeader";

export default function Header() {
  const {
    onClickTripTalk,
    onClickMoveMainPage,
    onClickMovePurchasePage,
    onClickMoveMyPage,
    onClickMenuOpen,
    mainPage,
    purchasePage,
    myPage,
    isMobile,
    isMenuOpen,
  } = useLayoutHeader();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between w-full p-5">
        <div className="flex flex-row items-center justify-between w-full gap-6 md:justify-normal">
          <div
            onClick={onClickMoveMainPage}
            className="relative w-[51.521px] h-8 p-2"
          >
            <Image src="/webp/logo.webp" alt="logo" fill />
          </div>
          {isMobile ? (
            <MenuOutlined
              className="text-2xl cursor-pointer"
              onClick={onClickMenuOpen}
            />
          ) : (
            <>
              <div
                onClick={onClickTripTalk}
                className={
                  mainPage
                    ? "text-black border-solid border-b-2 p-2 cursor-pointer"
                    : "text-gray p-2 cursor-pointer"
                }
              >
                {HEADER.TRIP_TALK}
              </div>
              <div
                onClick={onClickMovePurchasePage}
                className={
                  purchasePage
                    ? "text-black border-solid border-b-2 p-2 cursor-pointer"
                    : "text-gray p-2 cursor-pointer"
                }
              >
                {HEADER.PURCHASE_ACCOMMODATION_TICKETS}
              </div>
              <div
                onClick={onClickMoveMyPage}
                className={
                  myPage
                    ? "text-black border-solid border-b-2 p-2 cursor-pointer"
                    : "text-gray p-2 cursor-pointer"
                }
              >
                {HEADER.MY_PAGE}
              </div>
            </>
          )}
        </div>
        {!isMobile && (
          <div className="flex flex-row gap-1">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lightGray">
              <UserOutlined className="text-xl" />
            </div>
            <CaretDownOutlined className="text-xs" />
          </div>
        )}
      </div>
      <div className="relative">
        <div
          className={`durationInOut overflow-hidden ${
            isMenuOpen
              ? "max-h-96 scaleOpacityFull"
              : "max-h-0 scaleOpacityNone"
          }`}
        >
          <ul className="cursor-pointer">
            <li className="headerMobileMenulist" onClick={onClickTripTalk}>
              {HEADER.TRIP_TALK}
            </li>
            <li
              className="headerMobileMenulist"
              onClick={onClickMovePurchasePage}
            >
              {HEADER.PURCHASE_ACCOMMODATION_TICKETS}
            </li>
            <li className="headerMobileMenulist" onClick={onClickMoveMyPage}>
              {HEADER.MY_PAGE}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
