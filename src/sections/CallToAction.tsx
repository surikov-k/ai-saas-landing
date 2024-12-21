import Button from "@/components/Button";
import Orbit from "@/components/Orbit";
import Planet from "@/components/Planet";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";
import underlineImage from "@/assets/images/underline.svg?url";

export const CallToAction = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div
              className={`
                absolute inset-0 -z-10
                bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)]
                [mask-image:radial-gradient(circle_farthest-side,black,transparent)]
              `}
            />
            <div className="absolute inset-0 -z-10">
              <Orbit className="size-[200px] absolute-center" />
              <Orbit className="size-[350px] absolute-center" />
              <Orbit className="size-[500px] absolute-center" />
              <Orbit className="size-[650px] absolute-center" />
              <Orbit className="size-[800px] absolute-center" />
            </div>
            <div className="absolute-center -z-10">
              <Planet
                color="violet"
                size="lg"
                className="absolute -left-[200px] top-[200px] rotate-45"
              />
              <Planet
                color="violet"
                className="absolute -top-[216px] left-[185px] -rotate-135"
              />
              <Planet
                color="fuchsia"
                size="sm"
                className="absolute -left-[407px] -top-[260px] -rotate-225"
              />
              <Planet
                color="teal"
                size="md"
                className="absolute -left-[515px] -top-[12px] rotate-90"
              />
              <Planet
                color="teal"
                size="md"
                className="absolute -top-[110px] left-[490px] -rotate-90"
              />
              <Planet
                color="fuchsia"
                size="sm"
                className="absolute left-[390px] top-[140px] -rotate-45"
              />
            </div>
            <h1
              className={`
                text-center text-3xl font-bold leading-tight text-gray-200
                lg:mx-auto lg:max-w-2xl lg:text-5xl
                md:text-4xl
              `}
            >
              Join the AI Revolution with{" "}
              <span className="relative">
                <span>Sphereal</span>
                <span
                  className={`
                    absolute left-0 top-full h-4 w-full -translate-y-1/2
                    bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]
                  `}
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "top",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p
              className={`
                mt-8 text-center text-xl
                lg:mx-auto lg:max-w-2xl
              `}
            >
              Experience the transformative power of AI with Sphereal. Boost
              your productivity and streamline your workflow with our innovative
              AI chat platform
            </p>
            <div className="mt-10 flex justify-center">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
