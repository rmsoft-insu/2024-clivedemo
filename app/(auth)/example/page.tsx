"use client";

import { Button } from "@/components/ui/button";
import { authenticate, logout } from "@/lib/actions";
import axios from "axios";
import { useFormState, useFormStatus } from "react-dom";

function LoginButton() {
  const { pending, data, method } = useFormStatus();
  console.log("data", data);

  return (
    <button type="submit" disabled={pending}>
      Login
    </button>
  );
}

const ExamplePage = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const [logoutError, logoutDispatch] = useFormState(logout, undefined);

  return (
    <>
      <form action={dispatch}>
        <input type="text" name="id" placeholder="id" required />
        <input type="text" name="password" placeholder="password" required />
        <LoginButton />
      </form>
      <Button formAction={logoutDispatch}>Logout</Button>
    </>
  );
};

export default ExamplePage;
