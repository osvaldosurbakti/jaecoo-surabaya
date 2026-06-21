import { salesProfile } from "@/data/sales";


export default function ContactCTA(){


return (

<section

className="
py-24
px-8
bg-black
"

>


<div

className="
max-w-5xl
mx-auto
text-center
rounded-3xl
bg-neutral-900
py-16
px-8
border
border-white/10
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

Ready To Drive Jaecoo?

</p>




<h2

className="
text-4xl
md:text-6xl
font-bold
mt-5
"

>

Let's Start Your Journey

</h2>





<p

className="
text-gray-400
mt-6
max-w-2xl
mx-auto
"

>

Have questions about our vehicles?
Contact our consultant and get the latest information,
promotion, and test drive schedule.

</p>





<a

href={salesProfile.whatsapp}

target="_blank"

className="
inline-flex
mt-10
bg-white
text-black
px-10
py-4
rounded-full
font-semibold
hover:scale-105
transition
"

>

Chat With {salesProfile.name}

</a>





</div>


</section>

)

}