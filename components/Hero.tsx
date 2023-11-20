import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'

type ProductType = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: number
}

async function getData() {
  const url = 'https://fakestoreapi.com/products'
  // const apiKey = 'a1orbn1Yuwrj5CYB3wdOQQ==LAO8Qz1xdJE43onJ'

  const res = await fetch(url)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Hero = async () => {
  const data: ProductType[] = await getData()
  console.log(data)

  return (
    <section className="body-fon text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="grid grid-cols-4 gap-3">
          {data.map((product) => (
            <Card key={product.id} className="rounded">
              <CardHeader>
                <Image
                  width={158}
                  height={164}
                  src={product.image}
                  alt="Card Image"
                />
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col">
                <span>Preço: {product.price}</span>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button className="flex-1">Ver mais..</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
