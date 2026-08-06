import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import AOS from "aos";
import "aos/dist/aos.css";
import { profile } from "../data/portfolio";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const infoItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: profile.location, href: null },
    { icon: Clock, label: "Response Time", value: "Usually within 24 hours", href: null },
  ];

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%]">
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Let&apos;s build something great together.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center 2xl:pr-[3.1%] lg:pr-[3.8%] md:px-0"
        id="Contact"
      >
        <div className="container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-500 hover:shadow-[#6366f1]/10 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-sm">
              You can reach me directly through my social profiles or drop me an email anytime.
            </p>

            <a
              href={`mailto:${profile.email}`}
              data-aos="fade-up"
              data-aos-duration="800"
              className="group inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Email Me
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>

            <div className="flex justify-center space-x-6">
              <SocialLinks />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl transform transition-all duration-500 hover:shadow-[#6366f1]/10">
            <div className="space-y-4" data-aos="fade-up" data-aos-duration="1000">
              {infoItems.map(({ icon: Icon, label, value, href }, index) => (
                <a
                  key={label}
                  href={href || undefined}
                  className={`block group rounded-2xl bg-white/5 border border-white/10 p-5 transition-all duration-300 hover:bg-white/10 hover:border-[#6366f1]/30 ${href ? "cursor-pointer" : "cursor-default"}`}
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-[#a78bfa]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                      <p className="text-sm md:text-base text-gray-200 truncate group-hover:text-white transition-colors">
                        {value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
