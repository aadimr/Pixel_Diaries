import Image from "next/image";

const menu = {
    page: ["Home", "About", "Blog", "Contact"],
    authPage: ["Sign in", "Sign up"]
}

function Header() {
    return (
        <div className="w-screen h-20 flex justify-between items-center gap-15 px-20 fixed border border-black-2">
            <div>
                <Image
                    src="/logo.png"
                    alt="Pixel Diaries Logo"
                    width={80}
                    height={80}
                />
            </div>
            <div className="flex justify-between items-center gap-15">
                <div className="flex justify-center items-center gap-10">
                    {
                        menu.page.map((item) => (<p key={item} className="font-bold">{item}</p>))
                    }
                </div>
                <div className="flex justify-center items-center gap-5">
                    {
                        menu.authPage.map((item) => (<p key={item} className="font-bold">{item}</p>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;