import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useLayoutHeader() {
  const router = useRouter();
  const path = usePathname();

  const [mainPage, setMainPage] = useState(true);
  const [purchasePage, setPurchasePage] = useState(false);
  const [myPage, setMyPage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClickMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const onClickMoveMainPage = () => {
    if (path === "/") window.location.reload();
    router.push("/");
    setIsMenuOpen(false);
  };

  const onClickTripTalk = () => {
    setMainPage(true);
    setPurchasePage(false);
    setMyPage(false);
    router.push("/boards");
    setIsMenuOpen(false);
  };

  const onClickMovePurchasePage = () => {
    setMainPage(false);
    setPurchasePage(true);
    setMyPage(false);
    router.push("/boards/purchase");
    setIsMenuOpen(false);
  };

  const onClickMoveMyPage = () => {
    setMainPage(false);
    setPurchasePage(false);
    setMyPage(true);
    setIsMenuOpen(false);
  };

  return {
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
  };
}
