import ButtonLogin from "./components/buttonLogIn";
import FAQListitem from "./components/FAQListitem"; // ✅ Add this line
import Image from "next/image";
import productDemo from "@/public/assets/productDemo.jpeg";

export default function Home() {
  const isLoggedIn = true;
  const name = "Mehedi";

  const pricingFeaturesList = [
    "Collect Customer Feedback",
    "Unlimited Boards",
    "Admin Dashboard",
    "24/7 support",
  ];
  return (
    <main>
      {/* Header */}
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
          <div className="font-bold">CodeFastSaas</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* Hero */}
      <section className="p-8 text-center py-32 max-w-3xl mx-auto">
        <Image
          className=" max-auto text-center"
          src={productDemo}
          alt="Product Demo"
        />
        <h1 className="text-4xl font-bold p-4 mb-6">
          {" "}
          Collect customer feedback to build better products{" "}
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>

      {/* Pricing */}
      <section className="bg-base-200" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-center">A Pricing That Adapts To Your Needs</h2>
          <div className=" p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 item-base-line">
              <div className="text-4xl font-black">19$</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /Month
              </div>
            </div>
            <ul className="space-y-2">
              {pricingFeaturesList.map((priceItem) => {
                return (
                  <li className="flex gap-2 items-center" key={priceItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className=" text-green-600 size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {priceItem}
                  </li>
                );
              })}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-200" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center mx-auto">
            Frequently Asked Questions
          </h2>
          <ul className="max-w-lg max-auto">
            {[
              {
                question: "1. What is this platform, and how does it work?",
                answer:
                  "This is a cloud-based tool that helps you manage tasks and projects in one place. You can sign up, log in, and start using it instantly—no downloads required.",
              },
              {
                question:
                  "2. Do I need to install anything, or is it 100% online?",
                answer:
                  "No installation needed! Everything runs directly from your browser.",
              },
              {
                question: "3. Can I use this platform on my mobile device?",
                answer:
                  "Yes, our platform is fully responsive and works on all devices, including smartphones and tablets.",
              },
              {
                question: "4. How do I upgrade to a paid subscription?",
                answer:
                  "Simply go to your dashboard, click “Upgrade,” and choose a plan that fits your needs.",
              },
            ].map((qa) => (
              <FAQListitem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
