import Wellcome from "@/components/MainPage/Wellcome";
import Container from "@/components/Container";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex bg-white h-[200vh] flex-col items-center justify-start ">
      <Container>
        <Wellcome />
      </Container>
      <MdKeyboardDoubleArrowDown size={50} color="black" />
    </main>
  );
}
