const Mark = [
  {
    id: 1,
    image: '/mark/versace.svg',
    desciption: 'Logo de la marca Versace'
  },
  {
    id: 2,
    image: '/mark/zara.svg',
    desciption: 'Logo de la marca Zara'
  },
  {
    id: 3,
    image: '/mark/gucci.svg',
    desciption: 'Logo de la marca Gucci'
  },
  {
    id: 4,
    image: '/mark/prada.svg',
    desciption: 'Logo de la marca Prada'
  },
  {
    id: 5,
    image: '/mark/calvinklein.svg',
    desciption: 'Logo de la marca Calvin Klein'
  }
]

export default function BannerMark() {
  return (
    <section className="bg-foreground p-5 md:p-10 flex justify-center lg:justify-between items-center flex-wrap gap-7">
      {
        Mark.map(mark => (
          <img className='object-fill max-h-6 md:max-h-full' src={ mark.image } alt={ mark.desciption } key={ mark.id } />
        ))
      }
    </section>
  )
}
