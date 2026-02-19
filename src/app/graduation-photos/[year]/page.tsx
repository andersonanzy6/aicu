import { fetchImages } from "@/lib/fetchImages";
import GraduationPhotosPage from "@/components/Pages/Gallery/GraduationPhotosPage";

export default async function GalleryPage({
   params,
}: {
   params: { year: string };
}) {
   const images = await fetchImages();

   return <GraduationPhotosPage year={params.year} images={images} />;
}
