import { footerData } from "./footer";

function Footer() {

    console.log(footerData)

    const fontFamily = `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`;

    return (
        <div className="bg-[#222]">
            <div className="px-[2rem] pt-[5rem] flex flex-col gap-[5rem] bg-[#222]
            sm:px-[5rem]
            2xl:max-w-[1360px] 2xl:m-auto   2xl:px-[0rem]">
                <div className="flex gap-[55%] flex-wrap w-full
            sm:gap-[12%]
            lg:justify-between lg:flex-nowrap lg:gap-[0%]
            ">
                    <div className="mb-[2rem]">
                        {
                            Array.isArray(footerData) && footerData
                                .filter(ele => ele.type === "CATEGORIES")
                                .map((ele, index) => {
                                    return <div key={index}>
                                        <p className="font-bold font-serif text-[1.1rem] mb-[2rem] text-white" key={index}>{ele.type}</p>
                                        <div className="flex flex-col gap-[.7rem]">
                                            {
                                                ele.name.map((ele, index) => {
                                                    return <p key={index} className="font-serif text-[1.02rem] text-[#cbd5e1] cursor-pointer">{ele}</p>
                                                })
                                            }
                                        </div>
                                    </div>
                                })
                        }
                    </div>
                    <div className="mb-[2rem]">
                        {
                            Array.isArray(footerData) && footerData
                                .filter(ele => ele.type === "HELP")
                                .map((ele, index) => {
                                    return <div key={index}>
                                        <p className="font-bold font-serif text-[1.1rem] mb-[2rem] text-white" key={index}>{ele.type}</p>
                                        <div className="flex flex-col gap-[.7rem]">
                                            {
                                                ele.name.map((ele, index) => {
                                                    return <p key={index} className="font-serif text-[1.02rem] text-[#cbd5e1] cursor-pointer">{ele}</p>
                                                })
                                            }
                                        </div>
                                    </div>
                                })
                        }
                    </div>
                    <div className="mb-[2rem]">
                        {
                            Array.isArray(footerData) && footerData
                                .filter(ele => ele.type === "GET IN TOUCH")
                                .map((ele, index) => {
                                    return <div key={index}>
                                        <p className="font-bold font-serif text-[1.1rem] mb-[2rem] text-white">{ele.type}</p>
                                        <p className="font-serif w-full leading-relaxed text-[1.02rem] text-[#cbd5e1]
                                    sm:w-[18rem]
                                    ">{ele.name}</p>
                                    </div>
                                })
                        }
                        {/* {
                            footerData
                                .filter(ele => ele.type === "icon")
                                .map((ele) => {
                                    return <div className="flex gap-[.5rem] mt-[1.2rem]">
                                        {
                                            ele.name.map((ele, index) => {
                                                return <span key={index} className="cursor-pointer">{ele}</span>
                                            })
                                        }
                                    </div>
                                })
                        } */}
                    </div>
                    <div className="mb-[2rem]">
                        {
                            Array.isArray(footerData) && footerData
                                .filter(ele => ele.type === "NEWSLETTER")
                                .map((ele, index) => {
                                    return <div key={index}>
                                        <div>
                                            <p className="font-bold font-serif text-[1.1rem] mb-[2rem] text-white">{ele.type}</p>
                                            <input className="font-serif text-[1.02rem] text-[#cbd5e1] bg-transparent border-b-2 border-[#cbd5e1] outline-none" placeholder={ele.email} />
                                        </div>
                                        <button
                                            style={{
                                                marginTop: "1rem",
                                                borderRadius: "5rem",
                                                backgroundColor: "#ea580c",
                                                color: "white",
                                                border: "none",
                                                fontFamily: fontFamily,
                                                fontSize: "1.1rem",
                                                width: "12rem",
                                                height: "3rem",
                                                // "&:hover": {
                                                //     backgroundColor: "white",
                                                //     color: "#ea580c",
                                                //     border: "none"
                                                // },
                                            }}
                                        >{ele.buttonName}</button>
                                    </div>
                                })
                        }
                    </div>
                </div>
                <div className="flex justify-center">
                    {
                        Array.isArray(footerData) && footerData
                            .filter(ele => ele.type === "Copyright")
                            .map((ele, index) => {
                                return <p key={index} className="font-serif text-[1.02rem] text-[#cbd5e1] mb-[.7rem] text-center">{ele.text}</p>
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer;