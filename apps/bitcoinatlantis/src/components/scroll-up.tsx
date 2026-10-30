import { ChevronUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

/** Keeps the button clear of the footer, which it would otherwise cover. */
const FOOTER_HEIGHT = 360;

interface ScrollUpProps {
  label: string;
}

/** Back to the top, once the reader is a screen down and above the footer. */
export function ScrollUp({ label }: ScrollUpProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastFirstScreen = window.scrollY > window.innerHeight;
      const aboveFooter =
        window.innerHeight + window.scrollY <
        document.body.offsetHeight - FOOTER_HEIGHT;
      setVisible(pastFirstScreen && aboveFooter);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed right-2 bottom-6 sm:right-6 lg:right-8 lg:bottom-8">
      <a
        href="#top"
        aria-label={label}
        className="text-basalt-medium inline-flex aspect-square items-center rounded-full bg-gray-200 px-3 py-1.5 text-sm font-medium opacity-50 hover:bg-yellow-200 hover:text-yellow-800"
      >
        <ChevronUpIcon className="inline size-3 md:size-6" strokeWidth={1.5} />
      </a>
    </div>
  );
}
