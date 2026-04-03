"use client";

import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="relative bg-background overflow-hidden">
      {/* 🔥 HERO HEADER */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        {/* ✅ Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg1.webp"
            alt="Contact Background"
            fill
            priority
            className="object-cover scale-105 brightness-[0.85] contrast-[1.1]"
          />

          {/* ✅ Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background/80" />

          {/* ✅ Subtle Luxury Light Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
          </div>

          {/* ✅ Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* 🌟 Soft Background Glow (reduced intensity) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-pink-300/10 blur-[100px] rounded-full" />
        </div>

        {/* 🔥 CONTENT */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Let’s Create Your
              <span className="block text-primary mt-2 drop-shadow-md">
                Perfect Bridal Look
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
              Book your transformation with Mariya. Luxury bridal makeup
              services delivered to your doorstep across Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* 🌟 MAIN CONTENT */}
      <section className="pb-24 sm:pb-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {/* 💎 GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* 📝 FORM */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent blur-2xl rounded-3xl" />

              <div className="relative bg-card/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-border shadow-2xl">
                <h2 className="font-headline text-3xl font-semibold mb-6">
                  Booking Inquiry
                </h2>

                <ContactForm />
              </div>
            </div>

            {/* 📞 INFO */}
            <div className="bg-card/90 backdrop-blur-xl p-10 rounded-3xl border border-border shadow-2xl">
              <h2 className="font-headline text-3xl font-semibold mb-10">
                Get in Touch
              </h2>

              <div className="space-y-10">

                {/* PHONE */}
                <div className="flex items-start gap-5 group">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:scale-110 transition">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call / WhatsApp</h3>
                    <a
                      href="tel:+918136932606"
                      className="text-muted-foreground hover:text-primary transition text-lg"
                    >
                      +91 81369 32606
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-5 group">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:scale-110 transition">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a
                      href="mailto:makeupbymariya.in@gmail.com"
                      className="text-muted-foreground hover:text-primary transition text-lg"
                    >
                      makeupbymariya.in@gmail.com
                    </a>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Service Locations</h3>
                    <p className="text-muted-foreground">
                      Available across Kerala
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {["Ernakulam", "Thrissur", "Kottayam", "Alappuzha"].map(
                        (loc) => (
                          <span
                            key={loc}
                            className="px-4 py-1.5 text-xs rounded-full border border-border bg-background hover:bg-primary/10 transition"
                          >
                            {loc}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ⭐ TRUST */}
              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="font-headline text-xl font-semibold mb-4">
                  Why Brides Love Mariya
                </h4>

                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    ✨ 10+ Years of Bridal Expertise
                  </li>
                  <li className="flex items-center gap-2">
                    💎 Premium Luxury Products
                  </li>
                  <li className="flex items-center gap-2">
                    💧 Waterproof & Long-Lasting Finish
                  </li>
                  <li className="flex items-center gap-2">
                    👰 Fully Customized Bridal Looks
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 🚀 CTA */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-headline font-semibold">
              Limited Slots Available This Wedding Season
            </h3>

            <p className="text-muted-foreground mt-3">
              Secure your date early to avoid last-minute disappointment.
            </p>

            <a
              href="https://wa.me/918136932606"
              className="inline-block mt-6 px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg hover:scale-105 transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}