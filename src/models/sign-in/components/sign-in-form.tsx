"use client"
import { FC,} from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@/ui";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster, toast } from 'react-hot-toast';
import { login } from "../api/axiosInstance";

const schema = yup.object().shape({
  email: yup.string().email("Неверный формат email").required("Email обязателен"),
  password: yup.string().min(6, "Пароль должен быть не менее 6 символов").required("Пароль обязателен"),
});

export const SignInForm: FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await login(data); 
      toast.success("Успешный вход!"); 
      console.log(response);
    } catch {
      toast.error("Ошибка при входе. Проверьте данные."); 
    }
  };


  const handleError = () => {
    if (errors.email) {
      toast.error(errors.email.message || "Ошибка в поле Email");
    }
    if (errors.password) {
      toast.error(errors.password.message || "Ошибка в поле Пароль");
    }
  };



  return (
    <>
      {/* Компонент тостера, который будет отображать уведомления */}
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <form onSubmit={handleSubmit(onSubmit, handleError)} className="flex flex-col gap-5">
        <p className="text-2xl font-bold text-center mb-4">Войдите в свою учетную запись</p>
        
        <Input
          Label="Почта"
          variant="auth"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <Input
          type="password"
          Label="Пароль"
          variant="auth"
          placeholder="Password"
          {...register("password")}
        />
        <div className="text-center">
          <Button className="w-fit" type="primary">Войти</Button>
        </div>
      </form>
    </>
  );
};
