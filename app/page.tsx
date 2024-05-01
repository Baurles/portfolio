import Wellcome from "@/components/MainPage/Wellcome";
import Container from "@/components/Container";
import { DownButton } from "@/components/MainPage/DownButton";
import Marquee from "@/components/MainPage/Marquee";
import Hero from "@/components/MainPage/Hero";
import MainPageStore from "@/stores/mainPage-store";

const Store = MainPageStore;

export default function Home() {
  const boilerPlateMarquee =
    "Typescript React.js Tailwind Next.js Scss Mobx/Redux Typescript React.js Tailwind Next.js Scss Mobx/Redux";
  return (
    <main className="flex snap-y snap-mandatory overflow-scroll h-[200vh] flex-col items-center justify-start ">
      <Container>
        <Marquee y={"98vh"} direction="left" deg={"3deg"}>
          {boilerPlateMarquee}
        </Marquee>

        <Marquee y={"-96vh"} direction="right" deg={"-6deg"}>
          {boilerPlateMarquee}
        </Marquee>
        <Wellcome />
      </Container>
      <DownButton />
      <Container>
        <Hero />
      </Container>
    </main>
  );
}
