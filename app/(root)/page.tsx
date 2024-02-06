import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Explore unforgettable events. Dive into exceptional moments.
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Elevate your experiences with seamless event navigation and
              unparalleled excitement. Join us!
            </p>
            <Button size={"lg"} asChild className="button w-full sm:w-fit">
              <Link href={"#events"}>Explore Now</Link>
            </Button>
          </div>
          <Image
            src={"/assets/images/event.png"}
            alt="Hero"
            width={1000}
            height={1000}
            className="object-contain object-center max-h-[95vh] 2xl:max-h-[90vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search Category
        </div>
      </section>
    </>
  );
}
