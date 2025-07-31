import React from "react";
// import { Link } from "react-router-dom";
import { footerData, FooterSection } from "./footerData";

const Footer: React.FC = () => {
  const getSection = <T extends FooterSection["type"]>(type: T) =>
    footerData.find((s) => s.type === type) as Extract<
      FooterSection,
      { type: T }
    > | undefined;

  const quickLinks = getSection("Quick Links to Success");
  const stayConnected = getSection("Stay Connected, Stay Cool");
  const contact = getSection("Contact Us (We don't bite!)");
  const social = getSection("Social Icons");
  const copyright = getSection("Copyright");

  return (
    <footer
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="relative overflow-hidden text-[#cbd5e1]"
    >
      {/* gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1B1D26_0%,#191B23_60%,#141622_100%)]" />

      {/* subtle neon glows */}
      <div
        className="pointer-events-none absolute -top-16 -left-16 w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,230,255,0.02), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 75% 70%, rgba(255,63,174,0.02), transparent 60%)",
        }}
      />

      <div className="relative px-[2rem] pt-[5rem] flex flex-col gap-[2rem] max-w-[1360px] mx-auto sm:px-[5rem]">
        <div className="flex gap-[55%] flex-wrap w-full sm:gap-[12%] lg:justify-between lg:flex-nowrap lg:gap-[0%]">
          {/* Quick Links */}
          {quickLinks && "name" in quickLinks && Array.isArray(quickLinks.name) && (
            <div className="mb-[2rem]">
              <p className="font-bold text-[1.1rem] mb-[1rem] text-white">
                {quickLinks.type}
              </p>
              <div className="flex flex-col gap-[.7rem]">
                {quickLinks.name.map(({ pageName, link }) =>
                  link ? (
                    // replace with <Link> once enabled
                    <p
                      key={pageName}
                      className="text-[1.02rem] hover:underline"
                    >
                      {pageName}
                    </p>
                  ) : (
                    <p key={pageName} className="text-[1.02rem]">
                      {pageName}
                    </p>
                  )
                )}
              </div>
            </div>
          )}

          {/* Stay Connected + Social */}
          {stayConnected && "name" in stayConnected && (
            <div className="mb-[2rem] w-full sm:w-[350px]">
              <p className="font-bold text-[1.1rem] mb-[1rem] text-white">
                {stayConnected.type}
              </p>
              <div className="flex flex-col gap-[.7rem]">
                {Array.isArray(stayConnected.name) &&
                  stayConnected.name.map((line, i) => (
                    <p key={i} className="text-[1.02rem]">
                      {line}
                    </p>
                  ))}

                {/* Social icons */}
                {social && "name" in social && Array.isArray(social.name) && (
                  <div className="flex gap-[.5rem] mt-[.5rem]">
                    {social.name.map(({ icon, link }, idx) => (
                      <a
                        key={idx}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white text-xl"
                        aria-label={`social-${idx}`}
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Contact */}
          {contact && "arr" in contact && Array.isArray(contact.arr) && (
            <div className="mb-[2rem] w-full sm:w-[370px]">
              <p className="font-bold text-[1.1rem] mb-[1rem] text-white">
                {contact.type}
              </p>
              <div className="w-full flex flex-col gap-[.5rem] text-[1.02rem]">
                {contact.arr.map((item, i) => (
                  <div key={i}>
                    {Object.entries(item).map(([key, value]) => (
                      <div key={key} className="flex gap-[.5rem]">
                        <p className="text-white">
                          {key !== "Address" && `${key}:`}
                        </p>
                        {key === "Email" ? (
                          <a
                            href={`mailto:${value}`}
                            className="underline"
                          >
                            {value}
                          </a>
                        ) : (
                          <p>{value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        {copyright && "text" in copyright && (
          <div className="flex justify-center">
            <p className="text-[1.02rem] mb-[.7rem] text-center w-full">
              {copyright.text}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;