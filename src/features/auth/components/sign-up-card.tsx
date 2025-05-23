import { Button } from "@/components/ui/button"
import { Card , CardHeader , CardDescription , CardContent , CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FcGoogle} from "react-icons/fc";
import { FaGithub} from "react-icons/fa";
import { SignInFlow } from "../types";
import { useState } from "react";
import {TriangleAlert} from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";



interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
};

export const SignUpCard = ({ setState } : SignUpCardProps) => {
    const {signIn} = useAuthActions();

const [name , setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [confirmPassword,setconfirmPassword] = useState("");
const [pending, setPending]  = useState(false);
const [error,setError] = useState("");

const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    if(password !== confirmPassword){
        setError("Passwords do not match");
        return;
    }

    setPending(true);
    signIn("password" , {name, email,password , flow : "signUp"})
    .catch(()=>{
        setError("Something went wrong");
    })
    .finally(()=>{
        setPending(false);
    })
}

const onProviderSignUp = (value : "github" | "google") => {
        setPending(true);
        signIn(value)
        .finally(()=>{
            setPending(false);
        }
        )
    }

    return(
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">
                Sign Up to continue
                </CardTitle>
            <CardDescription>
                Use your email or another service to continue
            </CardDescription>
            </CardHeader>
            {!!error && (
                <div className="bg-red-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-500">
                    <TriangleAlert className="size-4 text-red-500"/>
                    <p>
                        {error}
                    </p>
                </div>
            )}
            <CardContent className="space-y-5 px-0 pb-0">
                <form onSubmit={onPasswordSignUp} className="space-y-2.5">
                    <Input
                    disabled={pending}
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Full name"
                    required
                    />
                    <Input
                    disabled={pending}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    required
                    />
                    <Input
                    disabled={pending}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                    required
                    />
                    <Input
                    disabled={pending}
                    value={confirmPassword}
                    onChange={(e)=>setconfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    type="password"
                    required
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={pending}>
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button 
                    disabled={pending}
                    onClick={()=>{onProviderSignUp("google")}}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                    >
                        <FcGoogle className="size-5 absolute top-2.25 left-2.5"/>
                        Continue with Google
                    </Button>
                    <Button 
                    disabled={false}
                    onClick={()=>{onProviderSignUp("github")}}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                    >
                        <FaGithub className="size-5 absolute top-2.25 left-2.5"/>
                        Continue with Github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Already have an account? <span onClick={()=> setState("signIn")} className="text-sky-700 hover:underline cursor-pointer"> Sign In</span>
                </p>
            </CardContent>
        </Card>
    )
}