export default function HeroImage() {
  return (
    <div className="px-5 md:pt-5">
      <picture>
        <source type="image/avif" srcSet="heroImage.avif" />
        <img
          src="/heroImage.webp"
          alt="Imagen del hero"
          className="container m-auto aspect-auto"
          width="500"
          height="500"
        />
      </picture>
    </div>
  )
}
