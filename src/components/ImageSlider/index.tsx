import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

interface ImageSliderData {
  imageUrl: string;
  title: string;
  link: string;
  slug: string;
}

interface ImageSliderProps {
  data: ImageSliderData[];
  hasNavigation?: boolean;
}

export function ImageSlider({ data, hasNavigation = true }: ImageSliderProps) {
  return (
    <div className='max-w-full overflow-x-hidden my-10'>
      <Swiper
        modules={[Navigation]}
        navigation={hasNavigation}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 30,
          }
        }}
      >
        {data.map(content => (
          <SwiperSlide key={content.slug}>
            <div className="group relative w-full">
              <div className="w-full min-h-72 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 lg:aspect-none">
                <img
                  src={content.imageUrl}
                  alt={content.title}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>

              <h3 className="text-lg text-center mt-4 text-primary">
                <a href={content.link}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {content.title}
                </a>
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
