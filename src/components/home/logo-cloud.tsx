import Image from 'next/image';
import { brandLogos } from '@/lib/data';

export function LogoCloud() {
  // Multiply the base logos to ensure the track is very long
  const infiniteLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Brands Mariya has collaborated with
        </h3>

        <style>{`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 40s linear infinite;
            will-change: transform;
            transform: translateZ(0);
          }
        `}</style>

        <div className="mt-8 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center w-max animate-infinite-scroll">
            {infiniteLogos.map((brand, index) => (
              <li key={index} className="flex-shrink-0 mx-8">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={40}
                  unoptimized
                  loading="lazy"
                  className="h-10 w-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
