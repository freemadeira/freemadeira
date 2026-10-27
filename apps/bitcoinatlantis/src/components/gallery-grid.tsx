import "react-photo-album/rows.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";

export interface GridPhoto {
  height: number;
  src: string;
  width: number;
}

interface GalleryGridProps {
  photos: GridPhoto[];
}

/** Photos in justified rows; a click opens them full screen. */
export function GalleryGrid({ photos }: GalleryGridProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        defaultContainerWidth={800}
        componentsProps={{ image: { decoding: "async", loading: "lazy" } }}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Counter]}
        counter={{ container: { style: { bottom: "unset", top: 0 } } }}
      />
    </>
  );
}
