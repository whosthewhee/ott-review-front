import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

const LogoutPage = () => {
  const { logout } = useAuth();

  useEffect(() => {
    (async () => {
      await logout();
    })();
  }, [logout]);

  return <div>로그인 페이지로 이동합니다.</div>;
};

export default LogoutPage;
