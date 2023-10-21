import Image from "next/image";

const Services = () => {
  return ( 
    <section className="max-w-7xl mx-auto pt-14 pb-20 flex flex-col items-center px-5 sm:px-10">
      <h2 className="text-2xl font-bold tracking-[0.72px] mb-4">My Services</h2>
      <p className="text-white opacity-30 text-sm tracking-[0.42px] mb-12">Services I offer to my clients</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-2/3 md:w-4/5">
        <div className="text-white text-sm pb-14 lg:pb-0 lg:pr-14 lg:border-r border-b lg:border-b-0 border-white border-opacity-10 flex flex-col items-center md:items-start">
          <Image src="/service1.svg" alt="service image" width={57} height={57} />
          <h3 className="text-lg mb-2 mt-[23px]">What I can do for you</h3>
          <p className="mb-[11px] opacity-70 text-center md:text-start">Bring products to life, using a user-centered design approach. Here are the services i provide:</p>
          <ul className="opacity-70 list-disc space-y-3 list-inside">
            <li>UI/UX Design</li>
            <li>Graphics Design</li>
            <li>Brand Design</li>
          </ul>
        </div>
        <div className="text-white text-sm py-14 md:pt-0 md:pb-14 md:pl-14 lg:px-14 lg:pb-0 lg:border-r border-b lg:border-b-0 border-white border-opacity-10 flex flex-col items-center md:items-start">
        <Image src="/service2.svg" alt="service image" width={55} height={55} />
          <h3 className="text-lg mb-2 mt-[23px]">Applications I am fluent in</h3>
          <p className="mb-[11px] opacity-70 text-center md:text-start">Every designer requires the right applications to bring their vision to life, and my go-to choices include</p>
          <ul className="opacity-70 list-disc space-y-3 list-inside">
            <li>Figma</li>
            <li>Adobe Creative Suite</li>
            <li>Canva</li>
          </ul>
        </div>
        <div className="text-white text-sm pt-14 lg:pt-0 lg:pl-14 flex flex-col items-center md:items-start">
        <Image src="/service3.svg" alt="service image" width={48} height={48} />
          <h3 className="text-lg mb-2 mt-[23px]">What you can expect</h3>
          <p className="mb-[11px] opacity-70 text-center md:text-start">My focus is on more than just creating stunning products; it&apos;s about prioritizing exceptional user experiences. Users first, design second</p>
          <ul className="opacity-70 list-disc space-y-3 list-inside">
            <li>Innovative and useable products</li>
            <li>Creative visual designs</li>
            <li>distinctive brand identities</li>
          </ul>
        </div>
      </div>
    </section>
   );
}
 
export default Services;