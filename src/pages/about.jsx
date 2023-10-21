import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className='px-5 sm:px-10 mx-auto pt-[166px]'>
      <div className='grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto'>
        <div class='relative rounded-lg p-[2px] bg-animation h-[543px]'>
          <div className='relative bg-blend-luminosity bg-eche w-full bg-center bg-cover bg-no-repeat bg-primary rounded-lg animate-fade-up animate-duration-[2000ms] animate-ease-in-out z-20 h-full'></div>
        </div>

        <div className='animate-fade animate-duration-[2000ms] animate-ease-in'>
          <h3 className='text-accent mb-[14px]'>Who am i?</h3>
          <h3 className='mb-2 text-[28px] font-bold tracking-[0.84px]'>
            I&rsquo;m Echezona Oji, a Product designer
          </h3>
          <p className='leading-[150%] tracking-[0.48px] lg:w-[90%] mb-5'>
            As a passionate designer, my goal is to create exceptional designs
            that seamlessly merge functionality with aesthetics. I specialize in
            the unique fusion of product design and UI/UX design, allowing me to
            transform visions and ideas into tangible, user-friendly, and
            visually captivating products.
            <br />
            <br />
            With a keen eye for product evolution, I excel in prioritizing
            tasks, iterating rapidly, and delivering results efficiently.
            I&rsquo;m driven by the belief that the best designs not only look
            good but also enhance user experiences, and I&rsquo;m dedicated to
            crafting meaningful and useful solutions that delight both the eye
            and the end user.
          </p>
          <div className='flex gap-3 opacity-30 mb-10'>
            <div className='flex'>
              <Image width={16.2} height={16.2} src='/map.svg' alt='map pin' />
              <span className='text-sm ml-[6px]'>Abuja, Nigeria</span>
            </div>
            <div className='flex'>
              <Image
                width={16.2}
                height={16.2}
                src='/mail.svg'
                alt='mail icon'
              />
              <a
                href='mailto:Echezona2000@gmail.com'
                className='underline text-sm ml-[6px] hover:text-accent'>
                Echezona2000@gmail.com
              </a>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <Link
              href={
                'https://drive.google.com/file/d/1rB12Irl8TrAbVWUGrOKVDrf_wwPpluTm/view'
              }
              target='_blank'
              className='px-6 py-[17px] flex border border-accent rounded-lg hover:bg-accent transition-all ease-in w-max'>
              <Image
                width={20}
                height={20}
                src='/resume.svg'
                alt='resume icon'
                className='mr-3'
              />
              View resume
            </Link>
            <hr className='opacity-30 w-[50px] hidden sm:block' />
            <ul className='gap-4 hidden sm:flex'>
              <Link
                href={'https://www.linkedin.com/in/echezona-oji-263b1b148'}
                target='_blank'
                className='ease-in transition-all hover:scale-110'>
                <li className='tracking-[0.42px] text-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='group'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'>
                    <g id='Social' clip-path='url(#clip0_27_728)'>
                      <path
                        id='Vector'
                        d='M14.8189 0H1.18111C0.867861 0 0.567441 0.124438 0.34594 0.34594C0.124438 0.567441 0 0.867861 0 1.18111V14.8189C0 15.1321 0.124438 15.4326 0.34594 15.6541C0.567441 15.8756 0.867861 16 1.18111 16H14.8189C15.1321 16 15.4326 15.8756 15.6541 15.6541C15.8756 15.4326 16 15.1321 16 14.8189V1.18111C16 0.867861 15.8756 0.567441 15.6541 0.34594C15.4326 0.124438 15.1321 0 14.8189 0ZM4.76889 13.63H2.36333V5.98889H4.76889V13.63ZM3.56445 4.93C3.29158 4.92846 3.02528 4.84613 2.79916 4.69339C2.57304 4.54065 2.39723 4.32435 2.29392 4.07179C2.19061 3.81923 2.16443 3.54173 2.21869 3.2743C2.27294 3.00688 2.4052 2.76152 2.59877 2.56919C2.79234 2.37686 3.03854 2.24618 3.30631 2.19364C3.57408 2.1411 3.85141 2.16906 4.1033 2.27399C4.35519 2.37892 4.57036 2.55611 4.72164 2.78321C4.87293 3.01031 4.95355 3.27713 4.95333 3.55C4.95591 3.73269 4.92167 3.91403 4.85267 4.0832C4.78368 4.25238 4.68132 4.40593 4.55171 4.53471C4.42211 4.66349 4.2679 4.76486 4.09828 4.83277C3.92867 4.90068 3.74711 4.93375 3.56445 4.93ZM13.6356 13.6367H11.2311V9.46222C11.2311 8.23111 10.7078 7.85111 10.0322 7.85111C9.31889 7.85111 8.61889 8.38889 8.61889 9.49333V13.6367H6.21333V5.99445H8.52667V7.05333H8.55778C8.79 6.58333 9.60333 5.78 10.8444 5.78C12.1867 5.78 13.6367 6.57667 13.6367 8.91L13.6356 13.6367Z'
                        className='fill-white group-hover:fill-accent'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_27_728'>
                        <rect width='16' height='16' />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </Link>
              <Link
                href={'https://www.behance.net/echezonaoji'}
                target='_blank'
                className='ease-in transition-all hover:scale-110'>
                <li className='tracking-[0.42px] text-sm'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    className='group'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g id='Social'>
                      <path
                        id='Vector'
                        d='M4.96184 3.56665C5.38784 3.56665 5.78184 3.59998 6.14184 3.69865C6.5025 3.76465 6.79784 3.89665 7.05984 4.06132C7.3225 4.22665 7.51917 4.45732 7.64984 4.75398C7.78117 5.05065 7.84717 5.41398 7.84717 5.80932C7.84717 6.27132 7.7485 6.66665 7.51917 6.96332C7.3225 7.26065 6.9945 7.52398 6.60117 7.72198C7.1585 7.88732 7.5845 8.18398 7.84717 8.57998C8.10917 8.97532 8.27317 9.46998 8.27317 10.0306C8.27317 10.4926 8.1745 10.888 8.0105 11.218C7.84717 11.548 7.5845 11.8446 7.28917 12.0426C6.96835 12.2549 6.61372 12.4109 6.2405 12.504C5.84717 12.6033 5.45384 12.6693 5.0605 12.6693H0.666504V3.56665H4.96184ZM4.69917 7.25998C5.05984 7.25998 5.35517 7.16132 5.5845 6.99665C5.81384 6.83198 5.9125 6.53465 5.9125 6.17198C5.9125 5.97398 5.87917 5.77665 5.81384 5.64465C5.7485 5.51265 5.64984 5.41332 5.51917 5.31465C5.38784 5.24865 5.2565 5.18265 5.0925 5.14998C4.9285 5.11665 4.76517 5.11665 4.56784 5.11665H2.6665V7.26065H4.69984L4.69917 7.25998ZM4.79784 11.152C4.9945 11.152 5.19117 11.1186 5.35517 11.086C5.51917 11.0526 5.68317 10.9873 5.81384 10.888C5.94743 10.7915 6.05919 10.6679 6.14184 10.5253C6.20717 10.3606 6.27317 10.1627 6.27317 9.93198C6.27317 9.46998 6.14184 9.13998 5.87984 8.90932C5.61717 8.71132 5.2565 8.61265 4.8305 8.61265H2.6665V11.1526L4.79784 11.152ZM11.1258 11.1186C11.3878 11.3826 11.7812 11.5146 12.3058 11.5146C12.6665 11.5146 12.9945 11.416 13.2565 11.2513C13.5192 11.0533 13.6832 10.8553 13.7485 10.658H15.3552C15.0925 11.4487 14.6992 12.0093 14.1752 12.3726C13.6498 12.702 13.0272 12.9 12.2732 12.9C11.7907 12.9015 11.3124 12.8119 10.8632 12.636C10.459 12.4844 10.0985 12.2352 9.81384 11.9106C9.50937 11.607 9.28431 11.2331 9.1585 10.822C8.9945 10.3933 8.9285 9.93198 8.9285 9.40398C8.9285 8.90932 8.9945 8.44798 9.1585 8.01865C9.31646 7.60556 9.55 7.22552 9.84717 6.89798C10.1466 6.59055 10.5027 6.34401 10.8958 6.17198C11.3336 5.99603 11.8013 5.90638 12.2732 5.90798C12.8305 5.90798 13.3225 6.00732 13.7485 6.23798C14.1752 6.46865 14.5025 6.73265 14.7645 7.12865C15.0272 7.49132 15.2245 7.91998 15.3552 8.38198C15.4205 8.84332 15.4532 9.30532 15.4205 9.83265H10.6665C10.6665 10.3607 10.8632 10.8553 11.1258 11.1193V11.1186ZM13.1912 7.65598C12.9618 7.42532 12.6012 7.29332 12.1745 7.29332C11.8798 7.29332 11.6498 7.35998 11.4532 7.45865C11.2565 7.55732 11.1258 7.68932 10.9945 7.82132C10.8736 7.94876 10.7935 8.1094 10.7645 8.28265C10.7318 8.44798 10.6992 8.57998 10.6992 8.71132H13.6498C13.5845 8.21665 13.4205 7.88732 13.1912 7.65598ZM10.3058 4.19332H13.9778V5.08398H10.3065V4.19332H10.3058Z'
                        className='fill-white group-hover:fill-accent'
                      />
                    </g>
                  </svg>
                </li>
              </Link>
              <Link
                href={'https://wa.me/+2347085758177'}
                target='_blank'
                className='ease-in transition-all hover:scale-110'>
                <li className='tracking-[0.42px] text-sm'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    className='group'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g id='Social'>
                      <path
                        id='Vector'
                        d='M0.336337 7.90379C0.335965 9.2481 0.687221 10.5607 1.35513 11.7177L0.272461 15.6707L4.31786 14.61C5.43676 15.2191 6.69041 15.5383 7.96437 15.5383H7.96772C12.1733 15.5383 15.5967 12.1161 15.5985 7.9098C15.5993 5.87154 14.8063 3.95489 13.3654 2.51291C11.9248 1.07105 10.0088 0.276565 7.96741 0.275635C3.76133 0.275635 0.338135 3.69765 0.336399 7.90379'
                        fill='#161616'
                      />
                      <path
                        id='Vector_2'
                        d='M0.0663566 7.90177C0.0659225 9.29445 0.429767 10.654 1.12149 11.8524L0 15.9471L4.19045 14.8484C5.34505 15.4779 6.64502 15.8098 7.96781 15.8103H7.97122C12.3277 15.8103 15.8741 12.265 15.876 7.90809C15.8767 5.79659 15.0551 3.81104 13.5628 2.3174C12.0703 0.823938 10.0858 0.000868217 7.97122 0C3.61401 0 0.068093 3.54481 0.0663566 7.90177ZM2.56186 11.646L2.4054 11.3976C1.74766 10.3518 1.4005 9.14326 1.40099 7.90226C1.40242 4.28087 4.34964 1.33457 7.97371 1.33457C9.72874 1.33532 11.3781 2.01947 12.6187 3.26078C13.8592 4.5022 14.5418 6.15243 14.5413 7.9076C14.5397 11.529 11.5924 14.4757 7.97122 14.4757H7.96862C6.78952 14.475 5.63312 14.1584 4.62462 13.56L4.38462 13.4177L1.89792 14.0696L2.56186 11.646V11.646Z'
                        className='fill-white group-hover:fill-accent'
                      />
                      <path
                        id='Vector_3'
                        d='M5.99406 4.59831C5.84609 4.26944 5.69037 4.2628 5.54965 4.25704C5.43443 4.25208 5.30271 4.25245 5.17111 4.25245C5.03939 4.25245 4.82537 4.302 4.64447 4.49952C4.46339 4.69722 3.95312 5.17499 3.95312 6.14671C3.95312 7.11849 4.66091 8.05759 4.75957 8.1895C4.85837 8.32116 6.12596 10.3791 8.13353 11.1708C9.80199 11.8287 10.1415 11.6978 10.5036 11.6648C10.8658 11.632 11.6723 11.1872 11.8368 10.726C12.0014 10.2649 12.0014 9.86956 11.9521 9.78696C11.9027 9.70466 11.771 9.65524 11.5735 9.55651C11.3759 9.45772 10.4048 8.97989 10.2238 8.91397C10.0427 8.84811 9.91108 8.81524 9.77936 9.01301C9.64764 9.21046 9.2694 9.65524 9.15412 9.78696C9.03895 9.91899 8.92367 9.93542 8.72621 9.83663C8.52857 9.73753 7.89247 9.52922 7.13781 8.85642C6.55064 8.33288 6.15424 7.68637 6.03902 7.4886C5.92379 7.29115 6.02668 7.18411 6.12571 7.08569C6.21446 6.99719 6.3233 6.85505 6.42215 6.73977C6.52063 6.62442 6.5535 6.54212 6.61936 6.4104C6.68528 6.27856 6.65229 6.16321 6.60299 6.06442C6.5535 5.96563 6.16968 4.98882 5.99406 4.59831Z'
                        className='fill-white group-hover:fill-accent'
                      />
                    </g>
                  </svg>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
