import AuthPage from "@/components/home/AuthPage";
import HomePage from "@/components/home/HomePage";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return <main className="">{user ? <HomePage /> : <AuthPage />}</main>;
}
