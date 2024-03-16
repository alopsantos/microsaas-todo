"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from "@/components/ui/card";
import { Spinner } from "@phosphor-icons/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export function AuthForm() {
  const form = useForm();
  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn("nodemailer", { email: data.email, redirect: false });
      toast({
        title: "Magic Link Sent",
        description: "Check your email for the magic link to login"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again"
      });
    }
  });
  return (
    <Card className="mx-auto max-w-sm space-y-4">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              {...form.register("email")}
            />
          </div>
          <Button
            className="w-full flex gap-4"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            Send Magic Link
            <Spinner
              data-active={form.formState.isSubmitting}
              className="data-[active=true]:flex hidden animate-spin"
              size={32}
            />
          </Button>
        </CardContent>
        <div
          className="py-1 px-6 rounded cursor-pointer flex justify-center items-center gap-2 bg-white border-[1px] border-gray-200 font-medium w-5/6"
          onClick={() => signIn("google")}
        >
          <span>Sign in with Google</span>
        </div>
      </form>
    </Card>
  );
}
