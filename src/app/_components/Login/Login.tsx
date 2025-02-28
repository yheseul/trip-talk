"use client";

import Image from "next/image";
import Input from "../Input/components/Input";
import Button from "../Button/components/Button";
import useLogin from "./hooks/useLogin";

export default function Login() {
  const { handleInputChange, onClickLogin, onClickSignup } = useLogin();

  return (
    <div className="relative flex flex-col items-center self-stretch gap-6 px-5 py-7 md:py-16 w-96">
      <Image src="/webp/logo.webp" alt="logo" width={120} height={74.533} />
      <div className="self-stretch text-lg not-italic font-semibold leading-6 text-center text-black">
        트립트립에 오신걸 환영합니다.
      </div>
      <div className="self-stretch text-[color:var(--gray-800,#333)] text-center text-sm not-italic font-medium leading-5">
        트립트립에 로그인 하세요.
      </div>

      <Input
        id="email"
        required={false}
        onChange={handleInputChange}
        isLabel={false}
      />
      <Input
        id="password"
        required={false}
        onChange={handleInputChange}
        isLabel={false}
      />
      <div className="flex gap-2">
        <Button id="login" color="blue" onClick={onClickLogin} />
        <Button id="singUp" color="white" onClick={onClickSignup} />
      </div>
    </div>
  );
}
