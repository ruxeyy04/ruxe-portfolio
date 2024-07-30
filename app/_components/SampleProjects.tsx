import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

function SampleProjects() {
  return (
<section>
        <div className="container mx-auto py-12 flex flex-col items-center">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Projects</h2>
            <p className="text-gray-400 mt-2">Check out some of our recent projects</p>
          </div>
          <Carousel className="w-full max-w-4xl">
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Project 1"
                    width={300}
                    height={300}
                    className="aspect-square object-cover rounded-md"
                  />
                  <img
                    src="/placeholder.svg"
                    alt="Project 2"
                    width={300}
                    height={300}
                    className="aspect-square object-cover rounded-md"
                  />
                  <img
                    src="/placeholder.svg"
                    alt="Project 3"
                    width={300}
                    height={300}
                    className="aspect-square object-cover rounded-md"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Project 4"
                    width={300}
                    height={300}
                    className="aspect-square object-cover rounded-md"
                  />
                  <img
                    src="/placeholder.svg"
                    alt="Project 5"
                    width={300}
                    height={300}
                    className="aspect-square object-cover rounded-md"
                  />
                  <img
                    src="/placeholder.svg"
                    alt="Project 6"
                    width={300}
                    height={300}
                    className="aspect-square object-cover rounded-md"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-3 gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Project 7"
                    width={300}
                    height={300}
                    className="aspect-square object-cover rounded-md"
                  />
                  <img
                    src="/placeholder.svg"
                    alt="Project 8"
                    width={300}
                    height={300}
                    className="aspect-square object-cover rounded-md"
                  />
                  <img
                    src="/placeholder.svg"
                    alt="Project 9"
                    width={300}
                    height={300}
                    className="aspect-square object-cover rounded-md"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='lg:block hidden'/>
            <CarouselNext className='lg:block hidden'/>
          </Carousel>
        </div>
      </section>
  )
}

export default SampleProjects
