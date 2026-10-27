import type { Locale } from "@freemadeira/i18n";

/** Photos are served from S3, at full size; the gallery lays them out by their size. */
export function photoUrl(asset: string): string {
  return `https://bitcoin-atlantis-assets.s3.eu-west-3.amazonaws.com/ba24/event-photos/${asset}`;
}

export interface GalleryPhoto {
  asset: string;
  height: number;
  width: number;
}

export interface GallerySection {
  photos: GalleryPhoto[];
  /** Event names stay in English; generic ones are translated. */
  topic: Record<Locale, string> | string;
}

export const conferencePhotos: GallerySection[] = [
  {
    photos: [
      {
        asset: "conference/satoshi-stage/satoshi_stage-01.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-02.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-03.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-04.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-05.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-06.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-07.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-08.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-09.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-10.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-11.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-12.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-13.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-14.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-15.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-16.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-17.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-18.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-19.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-20.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-21.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-22.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-23.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-24.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-25.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-26.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-27.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-28.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-29.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-30.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-31.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-32.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-33.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-34.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-35.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-36.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-37.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-38.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-39.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-40.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-41.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-42.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-43.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-44.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-45.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-46.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-47.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-48.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-49.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-50.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-51.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-52.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-53.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-54.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-55.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-56.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-57.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-58.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-59.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-60.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-61.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-62.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-63.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-64.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-65.jpg",
        height: 1800,
        width: 1350,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-66.jpg",
        height: 1350,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-67.jpg",
        height: 1800,
        width: 1350,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-68.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-69.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-70.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-71.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-72.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-73.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-74.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-75.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-76.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-77.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-78.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-79.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-80.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-81.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/satoshi-stage/satoshi_stage-82.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Satoshi Stage",
  },
  {
    photos: [
      {
        asset: "conference/open-source-stage/open_source_stage-01.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-02.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-08.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-09.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-10.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-11.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-12.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-13.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-14.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-15.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-16.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-17.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-18.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-19.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-20.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-21.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-22.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-23.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-24.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-25.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-26.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-27.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-28.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-29.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-30.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-31.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-32.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-33.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-34.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-35.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-36.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-37.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/open-source-stage/open_source_stage-38.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Open Source Stage",
  },
  {
    photos: [
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-01.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-02.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-03.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-04.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-06.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-07.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-08.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-09.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-10.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-11.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-12.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-13.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-14.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-15.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-16.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-17.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-18.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-19.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-20.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-21.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-22.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-23.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-24.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-25.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-26.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-27.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "conference/exhibition-hall-workshop-rooms/exhibition_hall_and_workshop_rooms-28.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: {
      en: "Exhibition Hall & Workshop Rooms",
      pt: "Área de Exposição e Salas de Workshop",
    },
  },
  {
    photos: [
      {
        asset: "conference/book-corner/book_corner-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/book-corner/book_corner-02.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "conference/book-corner/book_corner-03.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/book-corner/book_corner-04.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/book-corner/book_corner-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/book-corner/book_corner-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/book-corner/book_corner-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/book-corner/book_corner-08.jpg",
        height: 1201,
        width: 1800,
      },
    ],
    topic: { en: "Book Corner", pt: "Cantinho dos Livros" },
  },
  {
    photos: [
      {
        asset: "conference/art-gallery/art_gallery-01.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/art-gallery/art_gallery-02.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/art-gallery/art_gallery-03.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/art-gallery/art_gallery-04.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/art-gallery/art_gallery-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/art-gallery/art_gallery-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/art-gallery/art_gallery-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/art-gallery/art_gallery-08.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/art-gallery/art_gallery-09.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/art-gallery/art_gallery-10.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/art-gallery/art_gallery-11.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/art-gallery/art_gallery-12.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/art-gallery/art_gallery-13.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: { en: "Art Gallery", pt: "Galeria de Arte" },
  },
  {
    photos: [
      {
        asset: "conference/kids-block/kids_block-01.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/kids-block/kids_block-02.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/kids-block/kids_block-03.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "conference/kids-block/kids_block-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/kids-block/kids_block-05.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "conference/kids-block/kids_block-06.jpg",
        height: 1800,
        width: 1201,
      },
    ],
    topic: { en: "Kids Block", pt: "Espaço Crianças" },
  },
  {
    photos: [
      {
        asset: "conference/merch-store/merch_store-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "conference/merch-store/merch_store-02.jpg",
        height: 1800,
        width: 1201,
      },
      { asset: "conference/others/others-01.jpg", height: 1200, width: 1800 },
      { asset: "conference/others/others-02.jpg", height: 1200, width: 1800 },
      { asset: "conference/others/others-03.jpg", height: 1200, width: 1800 },
      { asset: "conference/others/others-04.jpg", height: 1201, width: 1800 },
      { asset: "conference/others/others-05.jpg", height: 1201, width: 1800 },
      { asset: "conference/others/others-06.jpg", height: 1200, width: 1800 },
      { asset: "conference/others/others-07.jpg", height: 1200, width: 1800 },
      { asset: "conference/others/others-08.jpg", height: 1800, width: 1201 },
      { asset: "conference/others/others-09.jpg", height: 1800, width: 1201 },
      { asset: "conference/others/others-10.jpg", height: 1200, width: 1800 },
      { asset: "conference/others/others-11.jpg", height: 1200, width: 1800 },
      { asset: "conference/others/others-12.jpg", height: 1201, width: 1800 },
      { asset: "conference/others/others-13.jpg", height: 1201, width: 1800 },
      { asset: "conference/others/others-14.jpg", height: 1200, width: 1800 },
      { asset: "conference/others/others-15.jpg", height: 1200, width: 1800 },
      { asset: "conference/others/others-16.jpg", height: 1200, width: 1800 },
    ],
    topic: { en: "Others", pt: "Outros" },
  },
];

export const satelliteEventPhotos: GallerySection[] = [
  {
    photos: [
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-02.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-08.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-09.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-10.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-11.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-12.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-13.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-14.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-15.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-16.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-17.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-18.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-19.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-20.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-21.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-22.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-23.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-24.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-25.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-26.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-27.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-28.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-29.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-30.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-31.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-32.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-33.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-34.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-35.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-36.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-37.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-38.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-39.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-40.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-41.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-42.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-43.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-44.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-45.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-46.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-47.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-48.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlas-music-festival/atlas_music_festival-49.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Atlas Music Festival",
  },
  {
    photos: [
      {
        asset: "satellite-events/holecoiner/holecoiner-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-02.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-03.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-04.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-05.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-06.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-07.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-08.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-09.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-10.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-11.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-12.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-13.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-14.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-15.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-16.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-17.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-18.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-19.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-20.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-21.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-22.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-23.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-24.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-25.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-26.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-27.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-28.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-29.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/holecoiner/holecoiner-30.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Holecoiner",
  },
  {
    photos: [
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-01.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-02.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-03.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-04.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-05.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-06.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-07.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-08.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-09.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-10.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-11.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-12.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-13.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-14.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-15.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-16.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-17.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-18.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-19.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-20.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-21.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-22.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-23.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-24.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-25.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-26.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-27.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-28.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-29.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-30.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-31.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-32.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-33.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-34.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-35.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-36.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-37.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/rise-of-atlantis/rise-of-atlantis-38.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Rise of Atlantis",
  },
  {
    photos: [
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-02.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-07.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-08.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-09.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-10.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-11.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-12.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-13.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-14.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-15.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-16.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-17.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-18.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-19.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-20.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-21.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-22.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-23.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-24.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-25.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-26.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/catamaran-trip/catamaran_trip-27.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: { en: "Catamaran Trip", pt: "Passeio de Catamarã" },
  },
  {
    photos: [
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-01.png",
        height: 566,
        width: 1080,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-02.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-08.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-09.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-10.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-11.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-12.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-13.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-14.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-15.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/mega-pleb-dinner/mega_pleb_dinner-16.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Mega Pleb Dinner",
  },
  {
    photos: [
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-02.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-08.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-09.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-10.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-11.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-12.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/special-meet-up-party/special_meet_up_party-13.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Special Meetup Party",
  },
  {
    photos: [
      {
        asset:
          "satellite-events/bemvindo-ao-bitcoin/bemvindo_ao_bitcoin-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bemvindo-ao-bitcoin/bemvindo_ao_bitcoin-02.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bemvindo-ao-bitcoin/bemvindo_ao_bitcoin-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bemvindo-ao-bitcoin/bemvindo_ao_bitcoin-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bemvindo-ao-bitcoin/bemvindo_ao_bitcoin-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bemvindo-ao-bitcoin/bemvindo_ao_bitcoin-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bemvindo-ao-bitcoin/bemvindo_ao_bitcoin-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bemvindo-ao-bitcoin/bemvindo_ao_bitcoin-08.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Bem-vindo ao Bitcoin",
  },
  {
    photos: [
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-01.jpg",
        height: 1350,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-02.jpg",
        height: 1350,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-07.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-08.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-09.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-10.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-11.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-12.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-13.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-14.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-15.jpg",
        height: 1800,
        width: 1200,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-16.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-17.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/women-of-bitcoin/women_of_bitcoin-18.jpg",
        height: 1800,
        width: 1200,
      },
    ],
    topic: "Women of Bitcoin",
  },
  {
    photos: [
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-02.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-05.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-06.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-07.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-08.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-09.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-10.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-11.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-12.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-13.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-14.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-15.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-16.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-17.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-18.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/my-first-bitcoin-unconference/my_first_bitcoin_unconference-19.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Mi Primer Bitcoin Unconference",
  },
  {
    photos: [
      {
        asset:
          "satellite-events/plan-b-network-exam/plan_b_network_exam-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/plan-b-network-exam/plan_b_network_exam-02.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/plan-b-network-exam/plan_b_network_exam-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/plan-b-network-exam/plan_b_network_exam-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/plan-b-network-exam/plan_b_network_exam-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/plan-b-network-exam/plan_b_network_exam-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/plan-b-network-exam/plan_b_network_exam-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/plan-b-network-exam/plan_b_network_exam-08.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/plan-b-network-exam/plan_b_network_exam-09.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "The PlanB Exam",
  },
  {
    photos: [
      {
        asset: "satellite-events/bitcoin-bar-cafe/bitcoin_bar_cafe-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/bitcoin-bar-cafe/bitcoin_bar_cafe-02.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/bitcoin-bar-cafe/bitcoin_bar_cafe-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/bitcoin-bar-cafe/bitcoin_bar_cafe-04.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Bitcoin Bar Café",
  },
  {
    photos: [
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-01.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-02.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-03.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-08.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-09.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-10.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-11.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-seaside-run/hal_finney_seaside_run-12.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Hal Finney Seaside Run",
  },
  {
    photos: [
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-01.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-02.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-03.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-04.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-05.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-07.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-08.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-09.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-10.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-11.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-12.jpg",
        height: 1201,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-13.png",
        height: 566,
        width: 1080,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-14.png",
        height: 566,
        width: 1080,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-15.png",
        height: 566,
        width: 1080,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-16.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-17.jpg",
        height: 1350,
        width: 1800,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-18.jpg",
        height: 1800,
        width: 1350,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-19.jpg",
        height: 1800,
        width: 1350,
      },
      {
        asset:
          "satellite-events/hal-finney-mountain-run/hal_finney_mountain_run-20.jpg",
        height: 1350,
        width: 1800,
      },
    ],
    topic: "Hal Finney Mountain Run",
  },
  {
    photos: [
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-02.png",
        height: 566,
        width: 1080,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-03.png",
        height: 566,
        width: 1080,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-04.png",
        height: 566,
        width: 1080,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-05.png",
        height: 566,
        width: 1080,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-06.png",
        height: 566,
        width: 1080,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-08.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-09.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-10.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-11.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-12.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-13.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-14.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-15.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-16.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/bitcoin-walk/bitcoin_walk-17.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Bitcoin Walk Madeira",
  },
  {
    photos: [
      {
        asset:
          "satellite-events/bitcoin-film-fest-mini/bitcoin_film_fest_mini-01.png",
        height: 566,
        width: 1080,
      },
      {
        asset:
          "satellite-events/bitcoin-film-fest-mini/bitcoin_film_fest_mini-02.png",
        height: 566,
        width: 1080,
      },
      {
        asset:
          "satellite-events/bitcoin-film-fest-mini/bitcoin_film_fest_mini-03.png",
        height: 566,
        width: 1080,
      },
      {
        asset:
          "satellite-events/bitcoin-film-fest-mini/bitcoin_film_fest_mini-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bitcoin-film-fest-mini/bitcoin_film_fest_mini-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bitcoin-film-fest-mini/bitcoin_film_fest_mini-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bitcoin-film-fest-mini/bitcoin_film_fest_mini-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/bitcoin-film-fest-mini/bitcoin_film_fest_mini-08.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Bitcoin FilmFest Mini",
  },
  {
    photos: [
      {
        asset:
          "satellite-events/no-more-inflation-screening/no_more_inflation_screening-01.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/no-more-inflation-screening/no_more_inflation_screening-02.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset:
          "satellite-events/no-more-inflation-screening/no_more_inflation_screening-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/no-more-inflation-screening/no_more_inflation_screening-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/no-more-inflation-screening/no_more_inflation_screening-05.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: {
      en: "No More Inflation Film Screening",
      pt: "Exibição do filme No More Inflation",
    },
  },
  {
    photos: [
      {
        asset:
          "satellite-events/atlantis-football-cup/atlantis_football_cup-01.png",
        height: 566,
        width: 1080,
      },
      {
        asset:
          "satellite-events/atlantis-football-cup/atlantis_football_cup-02.png",
        height: 566,
        width: 1080,
      },
      {
        asset:
          "satellite-events/atlantis-football-cup/atlantis_football_cup-03.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlantis-football-cup/atlantis_football_cup-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlantis-football-cup/atlantis_football_cup-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset:
          "satellite-events/atlantis-football-cup/atlantis_football_cup-06.jpg",
        height: 1200,
        width: 1800,
      },
    ],
    topic: "Atlantis Football Cup",
  },
  {
    photos: [
      {
        asset: "satellite-events/sato-boat/sato-boat-01.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/sato-boat/sato-boat-02.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/sato-boat/sato-boat-03.jpg",
        height: 1800,
        width: 1201,
      },
      {
        asset: "satellite-events/sato-boat/sato-boat-04.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/sato-boat/sato-boat-05.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/sato-boat/sato-boat-06.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/sato-boat/sato-boat-07.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/sato-boat/sato-boat-08.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/sato-boat/sato-boat-09.jpg",
        height: 1200,
        width: 1800,
      },
      {
        asset: "satellite-events/sato-boat/sato-boat-10.jpg",
        height: 1800,
        width: 1350,
      },
    ],
    topic: "Sato Boat",
  },
];
