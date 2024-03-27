"use client";

import { authenticate } from "@/lib/actions";
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

  return (
    <>
      <form action={dispatch}>
        <input type="text" name="id" placeholder="id" required />
        <input type="text" name="password" placeholder="password" required />
        <LoginButton />
      </form>
    </>
  );
};

export default ExamplePage;
