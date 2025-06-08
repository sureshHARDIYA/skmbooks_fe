import * as yup from "yup";
import type { InferType } from "yup";
import { useForm } from "react-hook-form";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEffect } from "react";
type FormData = InferType<typeof FormSchema>;

const FormSchema = yup
  .object()
  .shape({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export function About() {
  const stateMachineName = "Login Machine";
  const { rive, RiveComponent } = useRive({
    src: "teddy.riv",
    stateMachines: stateMachineName,
    autoplay: true,
  });

  const checkType = useStateMachineInput(rive, stateMachineName, "isFocus");
  const isPrivateField = useStateMachineInput(
    rive,
    stateMachineName,
    "isPrivateField"
  );
  const successType = useStateMachineInput(
    rive,
    stateMachineName,
    "successTrigger"
  );
  const failType = useStateMachineInput(rive, stateMachineName, "failTrigger");
  const isPrivateFieldShow = useStateMachineInput(
    rive,
    stateMachineName,
    "isPrivateFieldShow"
  );

  const form = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);
    if (successType) {
      successType.fire();
    }
  };

  useEffect(() => {
    if (rive) {
      const inputs = rive.stateMachineInputs(stateMachineName);
      console.log("Inputs:");
      inputs?.forEach((input) => {
        console.log("→", input.name, "type:", input.type);
      });
    }
  }, [rive]);

  const focusPassword = () => {
    if (isPrivateField) {
      isPrivateField.fire();
      isPrivateField.value = true;
    }
    // if (lookType) {
    //   lookType.value = true;
    // }
  };

  const handleFocus = () => {
    if (checkType && isPrivateField) {
      checkType.fire();
      checkType.value = true;
      isPrivateField?.fire();
      isPrivateField.value = false;
    }
    // if (isPrivateField) {
    //   handupType.value = false;
    // }
  };

  const handleRememberMeClick = () => {
    if (checkType) {
      checkType.fire();
      checkType.value = true;
    }
  };

  const onError = (errors: any) => {
    if (failType) {
      failType.fire();
    }
  };

  return (
    <main className="mx-auto">
      <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
        <div className="w-full place-self-center lg:col-span-6">
          <div className="p-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 sm:max-w-xl sm:p-8">
            <h1 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Welcome back to SKM Books
            </h1>
            <p className="text-sm font-light text-gray-500 dark:text-gray-300">
              Start your website in seconds. Don’t have an account?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
              .
            </p>
            <Form {...form}>
              <form
                className="mt-4 space-y-6 sm:mt-6"
                onSubmit={form.handleSubmit(onSubmit, onError)}
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your username"
                          className="h-12"
                          onFocus={handleFocus}
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          className="h-12"
                          type="password"
                          onFocus={focusPassword}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center">
                  <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                    or
                  </div>
                  <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="w-full inline-flex items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_13183_10121)">
                        <path
                          d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                          fill="#3F83F8"
                        />
                        <path
                          d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                          fill="#FBBC04"
                        />
                        <path
                          d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                          fill="#EA4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13183_10121">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    Sign in with Google
                  </a>
                </div>
                <div className="flex items-center justify-between w-full">
                  <Button type="submit" className="w-full h-12 cursor-pointer">
                    Sign in to your account
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox
                        id="remember"
                        aria-describedby="remember"
                        className="w-5 h-5"
                        onClick={handleRememberMeClick}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <div className="mr-auto place-self-center flex items-center justify-center w-full h-full">
          <RiveComponent />
        </div>
      </section>
    </main>
  );
}
