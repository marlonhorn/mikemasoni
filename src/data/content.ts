export type GalleryCategory = "all" | "editorial" | "portrait" | "cinematic" | "events";

export type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  image: string;
  colSpan?: string;
};

export const navLinks = [
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "About + Contact", href: "/about-contact" },
];

export const galleryFilters: { label: string; value: GalleryCategory }[] = [
  { label: "All", value: "all" },
  { label: "Editorial", value: "editorial" },
  { label: "Portrait", value: "portrait" },
  { label: "Cinematic", value: "cinematic" },
  { label: "Events", value: "events" },
];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: "Midnight Frame", category: "editorial", image: "/media/gallery-01.svg", colSpan: "md:col-span-2" },
  { id: 2, title: "Analog Silence", category: "portrait", image: "/media/gallery-02.svg" },
  { id: 3, title: "Noir Motion", category: "cinematic", image: "/media/gallery-03.svg" },
  { id: 4, title: "House Lights", category: "events", image: "/media/gallery-04.svg", colSpan: "md:col-span-2" },
  { id: 5, title: "Soft Exposure", category: "portrait", image: "/media/gallery-05.svg" },
  { id: 6, title: "Street Ballet", category: "editorial", image: "/media/gallery-06.svg" },
  { id: 7, title: "Signal Cut", category: "cinematic", image: "/media/gallery-07.svg", colSpan: "md:col-span-2" },
  { id: 8, title: "Afterglow", category: "events", image: "/media/gallery-08.svg" },
];

export const services = [
  { title: "Editorial", description: "Fashion-forward visual storytelling for magazines, campaigns, and lookbooks." },
  { title: "Commercial", description: "Premium brand photography and video content for modern products and campaigns." },
  { title: "Portraits", description: "Refined portraits with cinematic lighting and expressive direction." },
  { title: "Events", description: "Elegant event coverage capturing energy, atmosphere, and key moments." },
];
