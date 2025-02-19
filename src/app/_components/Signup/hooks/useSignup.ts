import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { CreateUserDocument } from "../../../../commons/graphql/graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../../../commons/zod/schema";
import { useState } from "react";
import { ISignupData } from "../types/signup.type";

export default function useSignup() {
  const { register, handleSubmit, control, formState } = useForm<ISignupData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const [createUser] = useMutation(CreateUserDocument);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickSubmit= async (data: ISignupData) => {
    try {
      const result = await createUser({
        variables: {
          email: data.email,
          name: data.name,
          password: data.password,
        },
      });
      console.log(result);
      setIsModalOpen(!isModalOpen);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    onClickSubmit,
    register,
    handleSubmit,
    control,
    formState,
    isModalOpen,
  };
}
