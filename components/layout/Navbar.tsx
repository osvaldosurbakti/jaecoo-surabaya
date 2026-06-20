export default function Navbar() {
  return (
    <nav className="
      fixed 
      top-0 
      left-0 
      w-full 
      z-50
      bg-black/30
      backdrop-blur-md
      px-8
      py-5
      flex
      justify-between
      items-center
    ">

      <h1 className="text-xl font-bold">
        JAECOO SURABAYA
      </h1>


      <div className="hidden md:flex gap-8 text-sm">

        <a href="/">
          Home
        </a>

        <a href="cars">
          Cars
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>


      <a
      href="https://wa.me/"
      className="
      bg-white
      text-black
      px-5
      py-2
      rounded-full
      text-sm
      font-semibold
      "
      >

      WhatsApp

      </a>


    </nav>
  )
}