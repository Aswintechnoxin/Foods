import './Gallery.css';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  gallery_image: string;
  gallery_image_name: string;
  gallery_image_alt: string;
}

export default function Gallery({ data }: { data: GalleryItem[] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No gallery data available.</p>;
  }

  return (
    <section className="gallerySection space-top space-extra-bottom">
      <div className="mx-10">
        <div className="gallery-grid">
          {data.map((gallery) => (
            <div key={gallery.id} className="gallery-item">
              <div className="team-style1">
                <div className="team-img img-box5 mega-hover">
                  <Image
                    className="w-100"
                    src={`https://saddlebrown-stingray-368718.hostingersite.com/storage/${gallery.gallery_image}`}
                    alt={gallery.gallery_image_alt || gallery.gallery_image_name}
                    width={400}
                    height={300}
                    style={{
                      objectFit: 'cover',  
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
                <div className="team-content">
                  <h6 className="team-name">{gallery.gallery_image_name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
