import Banner from "./Components/Banner";
import Gallery from "./Components/Gallery";

async function getGalleryData() {
  const res = await fetch('https://saddlebrown-stingray-368718.hostingersite.com/api/imagegallery', {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch gallery data');
    return [];
  }

  const json = await res.json();
  return Array.isArray(json.data) ? json.data : [];
}

export default async function GalleryPage() {
  const galleryData = await getGalleryData();

  return (
    <>
      <Banner />
      <Gallery data={galleryData} />
    </>
  );
}
