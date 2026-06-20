import { cars } from "@/data/cars";
import Image from "next/image";
import Link from "next/link";


export default function CarsPage(){


return (

<main
className="
bg-black
min-h-screen
py-32
px-8
"
>


<div
className="
max-w-7xl
mx-auto
"
>


{/* HEADER */}

<div
className="
max-w-3xl
mb-16
"
>

<p
className="
uppercase
tracking-[5px]
text-sm
text-gray-400
"
>
Our Vehicles
</p>


<h1
className="
text-5xl
md:text-6xl
font-bold
mt-4
"
>
Explore Jaecoo Models
</h1>


<p
className="
text-gray-400
mt-6
text-lg
"
>
Discover our premium SUV lineup with advanced technology and modern design.
</p>


</div>




{/* CARS GRID */}

<div
className="
grid
md:grid-cols-2
gap-8
"
>


{
cars.map((car)=>(


<div

key={car.id}

className="
bg-neutral-900
rounded-3xl
overflow-hidden
group
"


>


<div
className="
relative
h-112.5
"
>


<Image

src={car.image}

alt={car.name}

fill

className="
object-cover
group-hover:scale-105
transition
duration-700
"

/>


</div>




<div
className="
p-8
"
>


<p
className="
text-gray-400
text-sm
"
>
{car.category}
</p>



<h2
className="
text-3xl
font-bold
mt-3
"
>
{car.name}
</h2>



<p
className="
text-gray-400
mt-4
"
>
{car.shortDescription}
</p>



<Link

href={`/cars/${car.slug}`}

className="
inline-block
mt-6
border
border-white/30
px-6
py-3
rounded-full
hover:bg-white
hover:text-black
transition
"

>

Discover More

</Link>



</div>



</div>


))

}


</div>



</div>


</main>

)

}