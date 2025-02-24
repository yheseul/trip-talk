import Image from "next/image";
import Login from "./_components/Login/Login";

export default async function Home() {
  return (
    <div className="flex flex-col justify-between md:flex-row">
      <div className="order-2 max-w-96 md:order-1">
        <Login />
      </div>
      <div className="relative w-full h-52 md:h-[700px] order-1 md:order-2">
        <Image src="/webp/login-signup.webp" alt="loginSignup" fill />
      </div>
    </div>
  );
}
