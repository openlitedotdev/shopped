const Categories = [
  {
    id: 1,
    image: '/category-casual.webp',
    alt: 'imagen de categoría casual',
  },
  {
    id: 2,
    image: '/category-formal.webp',
    alt: 'imagen de categoría formal',
  },
  {
    id: 3,
    image: '/category-party.webp',
    alt: 'imagen de categoría de fiesta',
  },
  {
    id: 4,
    image: '/category-gym.webp',
    alt: 'imagen de categoría deportiva',
  },
]

export default function CategoriesStyle() {
  return (
    <section className="px-5 lg:px-10">
      <div className="rounded-3xl bg-default-50 p-10 lg:p-20">
        <h2 className="pb-16 text-center text-2xl font-bold md:text-4xl lg:text-5xl">
          BROWSE BY dress STYLE
        </h2>
        <article className="grid grid-cols-1 gap-5 md:grid-cols-10 md:[&>img:first-child]:col-span-4 md:[&>img:last-child]:col-span-4">
          {Categories.map((category) => (
            <img
              key={category.id}
              src={category.image}
              alt={category.alt}
              className="container h-44 rounded-3xl object-cover object-left md:col-span-6 md:h-full"
            />
          ))}
        </article>
      </div>
    </section>
  )
}
