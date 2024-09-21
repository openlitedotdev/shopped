export default function HeroImage() {
  return (
    <div className="px-5 md:pt-5">
      <img
        src="/heroImage.webp"
        alt="Imagen del hero"
        className="container m-auto aspect-auto"
        loading="lazy"
      />
    </div>
  )
}
