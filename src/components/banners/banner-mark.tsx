const Mark = [
  {
    id: 1,
    image: '/mark/versace.svg',
    desciption: 'Logo de la marca Versace',
  },
  {
    id: 2,
    image: '/mark/zara.svg',
    desciption: 'Logo de la marca Zara',
  },
  {
    id: 3,
    image: '/mark/gucci.svg',
    desciption: 'Logo de la marca Gucci',
  },
  {
    id: 4,
    image: '/mark/prada.svg',
    desciption: 'Logo de la marca Prada',
  },
  {
    id: 5,
    image: '/mark/calvinklein.svg',
    desciption: 'Logo de la marca Calvin Klein',
  },
]

export default function BannerMark() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-7 bg-foreground p-5 md:p-10 lg:justify-between">
      {Mark.map((mark) => (
        <img
          className="max-h-6 object-fill md:max-h-full"
          src={mark.image}
          alt={mark.desciption}
          key={mark.id}
        />
      ))}
    </section>
  )
}
