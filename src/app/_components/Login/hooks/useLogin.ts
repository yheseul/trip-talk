"use client";

import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useAccessTokenStore } from "../../../../commons/stores/useAccessTokenStore";
import { LoginUserDocument } from "../../../../commons/graphql/graphql";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();
  const [loginUser] = useMutation(LoginUserDocument);
  const { setAccessToken } = useAccessTokenStore();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setLogin((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: login.email,
        password: login.password,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;

    if (accessToken === undefined) {
      alert("fail");
    }

    setAccessToken(accessToken ?? "");

    alert("success");
    router.push("/boards");
  };

  const onClickSignup = () => {
    router.push(`/?modal=Signup`);
  };

  return {
    handleInputChange,
    onClickLogin,
    onClickSignup,
  };
}
