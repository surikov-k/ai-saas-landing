import Button, { ButtonProps } from "@/components/Button";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

export const pricingTiers = [
  {
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "Free",
    buttonText: "Get Started",
    buttonVariant: "secondary",
    features: [
      "Access to AI chatbot for natural language conversations",
      "Basic task automation for simple workflows",
      "Limited message history storage",
    ],
    color: "amber",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "Premium",
    description: "Advanced AI capabilities for enhanced productivity",
    price: 99,
    buttonText: "Upgrade to Premium",
    buttonVariant: "secondary",
    features: [
      "All Basic features included",
      "Priority access to new AI features and updates",
      "Advanced automation tools for seamless task management",
      "Customizable chat templates for your specific workflows",
    ],
    color: "violet",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    buttonText: "Contact Us",
    buttonVariant: "primary",
    features: [
      "All Premium features included",
      "Dedicated account manager and priority customer support",
      "Enhanced security and compliance features for large teams",
      "Custom AI models tailored to your organization's needs",
      "API access for seamless integration with enterprise systems",
    ],
    color: "teal",
    className: "lg:py-12 lg:my-6",
  },
] satisfies {
  title: string;
  description: string;
  price: number | string | null;
  buttonText: string;
  features: string[];
  color: "violet" | "teal" | "amber";
  className: string;
  buttonVariant?: ButtonProps["variant"];
}[];

export const Pricing = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <h2
              className={`
                text-center text-3xl font-semibold leading-tight text-gray-200
                lg:text-5xl
                md:text-4xl
              `}
            >
              Flexible plans for every need
            </h2>
            <div
              className={`
                mt-12 flex flex-col gap-8
                lg:flex-row lg:items-start
              `}
            >
              {pricingTiers.map(
                ({
                  title,
                  description,
                  price,
                  buttonText,
                  buttonVariant,
                  features,
                  color,
                  className,
                }) => (
                  <div
                    key={title}
                    className={twMerge(
                      `
                        mx-auto max-w-sm flex-1 rounded-3xl border border-[var(--color-border)] px-6
                        py-12
                      `,
                      className,
                    )}
                  >
                    <h3
                      className={twMerge(
                        "text-4xl font-semibold",

                        color === "violet" && "text-violet-400",
                        color === "amber" && "text-amber-300",
                        color === "teal" && "text-teal-300",
                      )}
                    >
                      {title}
                    </h3>
                    <p className="mt-4 text-gray-400">{description}</p>
                    <div className="mt-8">
                      {typeof price === "number" && (
                        <span className="align-top text-2xl font-semibold text-gray-200">
                          $
                        </span>
                      )}
                      <span className="text-7xl font-semibold text-gray-200">
                        {price ? price : <>&nbsp;</>}
                      </span>
                    </div>
                    <Button
                      variant={buttonVariant ? buttonVariant : "secondary"}
                      className={`mt-8`}
                      block
                    >
                      {buttonText}
                    </Button>
                    <ul className="mt-8 flex flex-col gap-4">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className={`
                            flex items-start gap-4 border-t border-[var(--color-border)] pt-4
                          `}
                        >
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="size-6 flex-shrink-0 text-violet-400"
                          />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Pricing;
