"use client";

import { useState } from "react";
import { cars } from "@/data/cars";
import { salesProfile } from "@/data/sales";


export default function TestDriveForm(){


const [form, setForm] = useState({

name:"",
phone:"",
car:"",
message:""

});



const handleChange = (
e: React.ChangeEvent<
HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>
)=>{

setForm({

...form,

[e.target.name]: e.target.value

});

};




const handleSubmit = (
e: React.FormEvent
)=>{

e.preventDefault();


const text = `
Halo ${salesProfile.name}, saya tertarik dengan Jaecoo.

Nama:
${form.name}

Nomor WhatsApp:
${form.phone}

Pilihan Mobil:
${form.car}

Pesan:
${form.message}
`;



const whatsappUrl = 
`${salesProfile.whatsapp}?text=${encodeURIComponent(text)}`;


window.open(
whatsappUrl,
"_blank"
);


};





return (

<section

id="test-drive"

className="
py-24
px-8
bg-black
"

>


<div

className="
max-w-4xl
mx-auto
"

>


<div
className="
text-center
mb-12
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

Test Drive

</p>



<h2

className="
text-4xl
md:text-5xl
font-bold
mt-4
"

>

Experience Jaecoo Yourself

</h2>



<p

className="
text-gray-400
mt-5
"

>

Schedule your test drive with our Jaecoo consultant.

</p>



</div>





<form

onSubmit={handleSubmit}

className="
bg-neutral-900
rounded-3xl
p-8
space-y-6
"

>





<input

required

name="name"

value={form.name}

onChange={handleChange}

placeholder="Nama Lengkap"

className="
w-full
bg-black
border
border-white/10
rounded-xl
px-5
py-4
outline-none
"

 />





<input

required

name="phone"

value={form.phone}

onChange={handleChange}

placeholder="Nomor WhatsApp"

className="
w-full
bg-black
border
border-white/10
rounded-xl
px-5
py-4
outline-none
"

 />





<select

required

name="car"

value={form.car}

onChange={handleChange}

className="
w-full
bg-black
border
border-white/10
rounded-xl
px-5
py-4
outline-none
"

>


<option value="">
Pilih Model Jaecoo
</option>


{
cars.map(car=>(

<option

key={car.id}

value={car.name}

>

{car.name}

</option>

))

}


</select>





<textarea

name="message"

value={form.message}

onChange={handleChange}

placeholder="Pesan tambahan"

rows={5}

className="
w-full
bg-black
border
border-white/10
rounded-xl
px-5
py-4
outline-none
"

/>





<button

type="submit"

className="
w-full
bg-white
text-black
py-4
rounded-full
font-semibold
hover:scale-[1.02]
transition
"

>

Book Test Drive

</button>





</form>


</div>


</section>


)

}