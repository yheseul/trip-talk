import Signup from "../_components/Signup/components/Signup";

export default function ModalPage({
  searchParams,
}: {
  searchParams: { modal?: string };
}) {
  const modal = searchParams.modal || "";
  return modal === "Signup" && <Signup />;
}
