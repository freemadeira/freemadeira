import { Disclosure } from "./disclosure";

export interface GalleryIndexSection {
  pills: { id: string; label: string }[];
  title: string;
}

interface PhotoGalleryIndexProps {
  sections: GalleryIndexSection[];
}

/** Conference and satellite events, each opening onto links to its albums. */
export function PhotoGalleryIndex({ sections }: PhotoGalleryIndexProps) {
  return (
    <div className="mt-10 space-y-6 divide-y divide-gray-900/10">
      {sections.map(({ pills, title }) => (
        <Disclosure
          key={title}
          keepMounted
          panelClassName="pr-12"
          summary={
            <span className="text-xl leading-7 font-semibold">{title}</span>
          }
        >
          <ul className="my-16 flex list-none flex-wrap justify-center gap-4 text-lg font-semibold">
            {pills.map((pill) => (
              <li key={pill.id}>
                <a
                  href={`#${pill.id}`}
                  className="text-basalt-medium inline-flex items-center rounded-full bg-gray-200 px-3 py-1.5 text-sm font-medium whitespace-nowrap hover:bg-yellow-200 hover:text-yellow-800"
                >
                  {pill.label}
                </a>
              </li>
            ))}
          </ul>
        </Disclosure>
      ))}
    </div>
  );
}
