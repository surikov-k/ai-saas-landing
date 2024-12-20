import robotImg from "@/assets/images/robot.jpg";
import Button from "@/components/Button";
import Orbit from "@/components/Orbit";
import Planet from "@/components/Planet";
import Image from "next/image";
import underlineImage from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader.svg";

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="border-l border-r border-[var(--color-border)]">
          <div
            className={`
              container relative isolate py-24
              lg:py-48
              md:py-36
            `}
          >
            <div
              className={`
                absolute inset-0 -z-10
                bg-[radial-gradient(circle_farthest-side,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)]
                [mask-image:radial-gradient(circle_farthest-side,black,transparent)]
              `}
            ></div>
            <div
              className={`
                absolute inset-0 -z-10 overflow-hidden
                [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
              `}
            >
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className={`absolute-center`}>
                <Orbit className="size-[850px]" />
              </div>
              <div className={`absolute-center`}>
                <Orbit className="size-[1100px]" />
              </div>
              <div className={`absolute-center`}>
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1
              className={`
                text-center text-4xl font-semibold leading-tight text-gray-100
                lg:text-6xl
                md:text-5xl
              `}
            >
              Unlock the Future of AI Conversations with{" "}
              <span className="relative">
                <span className="">Sphereal</span>
                <span
                  className={`
                    absolute left-0 top-full h-4 w-full -translate-y-1/2
                    bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]
                  `}
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p
              className={`
                mt-8 text-center text-lg
                lg:mx-auto lg:max-w-3xl
                md:text-xl
              `}
            >
              Harness the power of AI with Sphereal. Elevate your productivity
              and streamline your workflow with our cutting-edge AI chat
              platform.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate mx-auto max-w-5xl">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="lg"
                  color="violet"
                  className={`-translate-x-[315px] -translate-y-[75px] rotate-135`}
                />
                <Planet
                  size="lg"
                  color="violet"
                  className={`-translate-y-[188px] translate-x-[334px] -rotate-135`}
                />
                <Planet
                  size="sm"
                  color="fuchsia"
                  className={`-translate-x-[508px] -translate-y-[372px] rotate-135`}
                />
                <Planet
                  size="md"
                  color="teal"
                  className={`-translate-y-[352px] translate-x-[490px] -rotate-135`}
                />
              </div>
              <div className="absolute left-0 top-[30%] z-10 -translate-x-10">
                <div
                  className={`
                    hidden w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4
                    backdrop-blur-md
                    lg:block
                  `}
                >
                  <div className="">
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className="text-right text-sm font-semibold text-gray-400">
                    1m ago
                  </div>
                </div>
              </div>
              <div className="absolute -right-10 top-1/2 z-10">
                <div
                  className={`
                    hidden w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4
                    backdrop-blur-md
                    lg:block
                  `}
                >
                  <div className="">
                    <strong>Brainwave:</strong> I created one based on videos
                    from FrontendTribe!
                  </div>
                  <div className="text-right text-sm font-semibold text-gray-400">
                    Just now
                  </div>
                </div>
              </div>
              <div
                className={`mt-20 overflow-hidden rounded-2xl border-2 border-gradient`}
              >
                <Image src={robotImg} alt="Robot" />
                <div
                  className={`
                    absolute bottom-2 left-1/2 w-full max-w-xs -translate-x-1/2 px-[15px]
                    lg:bottom-10
                    md:bottom-4
                  `}
                >
                  <div
                    className={`
                      flex w-[320px] max-w-full items-center gap-4 rounded-2xl bg-gray-950/80 px-4
                      py-2
                    `}
                  >
                    <Loader className="text-violet-400" />
                    <div className="text-xl font-semibold text-gray-100">
                      AI is generating<span>|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
