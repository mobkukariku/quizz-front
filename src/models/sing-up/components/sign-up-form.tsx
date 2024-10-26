"use client"
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@/ui"; // Ваш Input компонент
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster, toast } from 'react-hot-toast';
import { registerUser } from "../api/axiosInstance";

type FormData = {
  confirmPassword: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const schema = yup.object().shape({
  email: yup.string().email("Неверный формат email").required("Email обязателен"),
  password: yup.string().min(6, "Пароль должен быть не менее 6 символов").required("Пароль обязателен"),
  firstName: yup.string().required("Имя обязательно"),
  lastName: yup.string().required("Фамилия обязательна"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), ], "Пароли должны совпадать").required("Подтверждение пароля обязательно"),
});

export const SignUpForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    if(data.password !== data.confirmPassword){
      toast.error("Пароли не совпадают");
      return;
    }
    try{
      const response = registerUser({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName
      });
      toast.success("Успешный регистрация!");
      console.log(response);
    }
    catch(error){
      console.error(error);
    }
  };

  const handleError = () => {
    if (errors.email) {
      toast.error(errors.email.message || "Ошибка в поле Email");
    }
    if (errors.password) {
      toast.error(errors.password.message || "Ошибка в поле Пароль");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, handleError)} className="flex flex-col gap-5">
        <Toaster position="bottom-right" reverseOrder={false}  />
        <p className="text-2xl font-bold text-center mb-4">Создайте учетную запись</p>
        <Input
          Label="Имя"
          variant="auth"
          type="text"
          placeholder="First Name"
          className=""
          {...register("firstName")}
         />
         <Input
          Label="Фамилия"
          variant="auth"
          type="text"
          placeholder="Last Name"
          className=""
          {...register("lastName")}
         />
        <Input
          Label="Почта"
          variant="auth"
          type="email"
          placeholder="Email"
          className=""
          {...register("email")}
        />
        <Input 
          type="password"
          Label="Пароль"
          variant="auth"
          placeholder="Password"
          className=""
          {...register("password")}
        />
        <Input
          type="password"
          Label="Подтверждение пароля"
          variant="auth"
          placeholder="Confirm password"
          className=""
          {...register("confirmPassword")}
         />
        <div className="text-center">
         <Button className="w-fit" type="primary" >Войти</Button>
        </div>
    </form>
  );
};
