import { teamMembers } from '@/utils/data/team';

const Team = () => {
  return (
    <section className="py-12 overflow-hidden bg-base-900 sm:py-16 lg:py-20 xl:py-24 w-full m">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            The minds behind <span className='text-info'>Fast Solution</span>
          </h2>
          <p className="max-w-md mx-auto mt-6 text-lg font-normal text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
          </p>
        </div>

        <div className={`grid items-start grid-cols-${teamMembers.length} mt-12`}>
          {teamMembers.map((member, idx) => {
            return (<div className='relative group' key={member.name}>
              {idx % 2 == 0 ? <div className="relative group">
                <img className="w-full transition-all duration-200 filter grayscale group-hover:grayscale-0 bg-blend-multiply"
                  src={member.image_url} alt={member.name} />

                <div className="absolute bottom-0 left-0">
                  <svg className="w-[3px] h-60 md:h-80 lg:h-96 xl:h-auto" viewBox="0 0 3 453" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="-6.55671e-08" x2="1.50002" y2="453" stroke="url(#paint0_linear_534_2132)"
                      strokeWidth="3" />
                    <defs>
                      <linearGradient id="paint0_linear_534_2132" x1="0" y1="0" x2="-7.90673" y2="0.120584"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6DDCFF" stopOpacity="0" />
                        <stop offset="1" stopColor="#7F60F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div
                  className="absolute inset-x-0 bottom-0 origin-bottom-left transform scale-50 whitespace-nowrap sm:scale-75 lg:scale-100">
                  <div className="p-4 lg:py-8 lg:px-6">
                    <p className="text-xl font-semibold text-gray-400 transition-all duration-200 group-hover:text-white">
                      {member.name}
                    </p>
                    <p
                      className="text-base mt-0.5 font-normal text-gray-400 transition-all duration-200 group-hover:text-white">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div> : <div className="relative mt-8 group">
                <img className="w-full transition-all duration-200 filter grayscale group-hover:grayscale-0 bg-blend-multiply"
                  src={member.image_url} alt={member.name} />

                <div className="absolute bottom-0 left-0">
                  <svg className="w-[3px] h-60 md:h-80 lg:h-96 xl:h-auto" viewBox="0 0 3 453" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="-6.55671e-08" x2="1.50002" y2="453" stroke="url(#paint0_linear_534_2132)"
                      strokeWidth="3" />
                    <defs>
                      <linearGradient id="paint0_linear_534_2132" x1="0" y1="0" x2="-7.90673" y2="0.120584"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6DDCFF" stopOpacity="0" />
                        <stop offset="1" stopColor="#7F60F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div
                  className="absolute inset-x-0 bottom-0 origin-bottom-left transform scale-50 whitespace-nowrap sm:scale-75 lg:scale-100">
                  <div className="p-4 lg:py-8 lg:px-6">
                    <p className="text-xl font-semibold text-gray-400 transition-all duration-200 group-hover:text-white">
                      {member.name}
                    </p>
                    <p
                      className="text-base mt-0.5 font-normal text-gray-400 transition-all duration-200 group-hover:text-white">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>}
            </div>)
          })}
        </div>
      </div>
    </section>
  )
}
export default Team;