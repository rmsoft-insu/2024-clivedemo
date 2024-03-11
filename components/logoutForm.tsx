import { logout } from "@/actions";

export const LogoutForm = () => {
  return (
    <form action={logout}>
      <button>logout</button>
    </form>
  );
};
