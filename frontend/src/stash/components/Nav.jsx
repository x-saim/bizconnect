import React, { useState } from "react";
import logo from '../images/logo.png'
import dropdown from '../images/dropdown.png'
import '../index.css'


const Nav =()=>{

    // MOBILE MENU
    const [menu, setMenu]=useState(false)
    const [login, setLogin]=useState(false)

    const mobileMenu =()=>{
        setMenu(!menu)
    }

    const loginMenu=()=>{
        setLogin(!login)
    }

    // PC DROPDOWN
    const [drop,setDrop]=useState(false)

    const pcDrop =()=>{
        setDrop(!drop)
    }


    return (
        <>
            <div className="flex justify-between items-center px-8 py-5  lg:justify-start relative   ">
            <img src={logo} className="w-[10rem]" alt="" />
            <span onClick={mobileMenu} class="material-symbols-outlined lg:hidden">menu</span>

            <div className="ml-[5rem] space-x-10 hidden lg:inline-block">
                <a href="#">Home</a>
                <a href="#">Job Board</a>
            </div>

            <div className="hidden lg:flex items-center space-x-1 absolute right-[32px]  ">
                <img src={dropdown} className="w-[2.5rem]"  alt="" />
                <span onClick={pcDrop} class="material-symbols-outlined cursor-pointer">arrow_drop_down</span>

            {drop && (
                <div className="hidden px-4 py-4 space-y-2 lg:inline-block absolute top-[50px] right-[12px] w-[7rem] shadow-md rounded-sm">
                <a href="#" className="block hover:bg-slate-400 px-1 rounded-sm ">Log in</a>
                <a href="#" className="block hover:bg-slate-400 px-1 rounded-sm">Sign up</a>
            </div>
            )

            }
                
            </div>



            {/* MOBILE MENU LIST */}
            {menu && (
                <div className="absolute top-[44px] left-0 flex flex-col py-8 px-8 bg-white lg:hidden">
                    <div className="flex flex-col space-y-4">
                        <a href="#">Home</a>
                        <a href="#">Job Board</a>
                    </div>
                    
                    <div className="flex items-center mt-7 space-x-1">
                        <img src={dropdown} className="w-[2.5rem]"  alt="" />
                        <span onClick={loginMenu} class="material-symbols-outlined">arrow_drop_down</span>

                        {login && (
                            <div className="py-3 px-3 shadow-md flex flex-col space-y-1 absolute bottom-[-45px]">
                                <a href="#">Log in</a>
                                <a href="#">Sign up</a>
                            </div>
                        )

                        }

                    </div>



                </div>
            )}


        </div>
        
        </>
    )
}

export default Nav