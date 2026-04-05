import AuthForm from "@/components/auth/AuthForm";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: "",
  };
}

export default function Page() {
  return (
    <>
      <main>
        <AuthForm type="sign-up"/>
        
      </main>
    </>
  );
}