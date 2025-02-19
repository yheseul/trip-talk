import Image from "next/image";
import Login from "./_components/Login/Login";

export default async function Home() {
  return (
    <div className="flex flex-row justify-between">
      <div className="max-w-96">
        <Login />
      </div>
      <div className="relative w-full h-[700px]">
        <Image src="/webp/login-signup.webp" alt="loginSignup" fill />
      </div>
    </div>
  );
}
