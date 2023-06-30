"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut , useSession, getProviders } from "next-auth/react";

const Nav = () => {
    // const isUserLoggedIn = false;
    const{data : session} = useSession();

    const [providers , setProviders] = useState(null);
    useEffect( ()=>{
        const setUpProviders = async ()=>{
            const response = await getProviders();

            setProviders(response);
        }
        setUpProviders();

    },[])

  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
        <Link href = "/" className="flex gap-2 flex-center">
            <Image
                src= "/assets/icons/NASA_logo.svg.svg"
                alt = "Promptopia Logo"
                width={45}
                height={45}
                className="object-contain"
            />
            <p className="logo_text">NASA_Imagine</p>
        </Link>

        <div>
            {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    <button type="button" onClick={signOut} className="outline_btn">
                        Sign Out
                    </button>
                    <Link href="/profile" className="hover:scale-150">
                        <Image 
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full border-lime-500 border-4 hover:scale-25 hover:border-red-400"
                            alt= "profile"
                            
                        />
                    </Link>
                </div>
            ) : (
                <>
                    {providers &&
                        Object.values(providers).map((provider) =>(
                            <button
                                type="button"
                                key={provider.name}
                                onClick={()=> signIn(provider.id)}
                                className="black_btn"
                            >
                                SignIn
                            </button>

                        ))   
                    }
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav
