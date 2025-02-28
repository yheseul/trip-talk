"use client";

import { useEffect } from "react";
import { useLoadStore } from "../stores/useLoadStore";
import { useAccessTokenStore } from "../stores/useAccessTokenStore";
import { useRouter } from "next/navigation";

const withLoginCheck =
  (Component: () => JSX.Element) =>
  <P extends object>(props: P) => {
    const router = useRouter();
    const { accessToken } = useAccessTokenStore();
    const { isLoaded } = useLoadStore();

    useEffect(() => {
      if (!isLoaded) return;
      if (accessToken) return;

      alert("로그인 후 다시 시도해 주세요.");
      router.push("/");
    }, [isLoaded, accessToken, router]);
    return <Component {...props} />;
  };

export default withLoginCheck;
