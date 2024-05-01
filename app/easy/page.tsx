import Container from "@/components/Container";
import { Spinner } from "@/components/easy/Spinner";
import { EasyPageView } from "@/components/easy/easyPageView";
import { TODO } from "@/components/easy/examples/TODO";
import { DragNDrop } from "@/components/easy/examples/dragndrop";
import { TikTacToe } from "@/components/easy/examples/tickTackToe";
export default function Easy() {
  return (
    <main className="flex snap-y snap-mandatory bg-black overflow-scroll h-screen flex-col items-center justify-start ">
      <Container>
        <EasyPageView>
          <Spinner>
            <DragNDrop />
            <TODO />
            <TikTacToe />
          </Spinner>
        </EasyPageView>
      </Container>
    </main>
  );
}
