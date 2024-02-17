import { Text, Separator } from "@radix-ui/themes";
import { useEffect, useRef } from "react";

const Home = () => {
  const reference = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft":
        case "PageUp": {
          e.preventDefault();
          reference?.current?.scrollBy({
            top: window.innerHeight * -1,
            behavior: "smooth",
          });
          break;
        }
        case "ArrowDown":
        case "ArrowRight":
        case "PageDown": {
          e.preventDefault();
          reference?.current?.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
          break;
        }
        case "Home": {
          reference?.current?.scrollBy({
            top: window.innerHeight * 100 * -1,
            behavior: "smooth",
          });
          break;
        }
        case "End": {
          reference?.current?.scrollBy({
            top: window.innerHeight * 100,
            behavior: "smooth",
          });
          break;
        }
        default: {
          break;
        }
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  return (
    <div
      className="snap-y snap-proximity h-screen overflow-y-scroll"
      ref={reference}
    >
      <div className="snap-start h-screen w-full">
        <div className="h-full w-full p-4 flex flex-col justify-center items-start gap-8">
          <Text size="9" weight="bold">
            i386g
          </Text>
          <Text size="8" weight="medium">
            better marketplaces.
          </Text>
        </div>
      </div>
      <div className="snap-start h-screen w-full">
        <div className="h-full w-full p-4 flex flex-col justify-center items-start gap-8">
          <Text size="8" weight="bold">
            Marketplaces are broken.
          </Text>
          <Text size="7" weight="medium">
            inaccurate. incomplete. inconsistent.
          </Text>
        </div>
      </div>
      <div className="snap-start h-screen w-full">
        <div className="h-full w-full p-4 flex flex-col justify-center items-start gap-8">
          <Text size="8" weight="bold">
            We try to fix that.
          </Text>
          <Text size="7" weight="medium">
            curated. moderated. enriched.
          </Text>
        </div>
      </div>
      <div className="snap-start h-screen w-full">
        <div className="h-full w-full p-4 flex flex-col justify-center items-start gap-8">
          <div className="flex flex-row justify-start items-center gap-4">
            <Text size="8" weight="bold">
              Lokal
            </Text>
            <Separator orientation="vertical" size="2" />
            <Text size="8" weight="light">
              lokal.com.ph
            </Text>
          </div>
          <Text size="7" weight="medium">
            businesses. careers.
          </Text>
        </div>
      </div>
      <div className="snap-start h-screen w-full">
        <div className="h-full w-full p-4 flex flex-col justify-center items-start gap-8">
          <div className="flex flex-row justify-start items-center gap-4">
            <Text size="8" weight="bold">
              Props
            </Text>
            <Separator orientation="vertical" size="2" />
            <Text size="8" weight="light">
              props.com.ph
            </Text>
          </div>
          <Text size="7" weight="medium">
            real estate properties.
          </Text>
        </div>
      </div>
      <div className="snap-start h-screen w-full">
        <div className="h-full w-full p-4 flex flex-col justify-center items-start gap-8">
          <Text size="8" weight="bold">
            Contact
          </Text>
          <Text size="7" weight="medium">
            josh.i386g@proton.me
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Home;
