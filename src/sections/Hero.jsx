import Button from '../components/Button';
import { cheveronRight } from '../assets/icons';
import { statistics } from '../constants';

const Hero = () => (
  <section
    id="home"
    className="max-container flex min-h-screen w-full justify-center gap-10 xl:flex-col"
  >
    <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
      <p className="font-montserrat text-xl text-coral-red">
        Our Summer Collections
      </p>
      <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
        <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
          The New Arrival
        </span>
        <br />
        <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
      </h1>
      <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
        Discover stylish Nike arrivals, quality comfort, and innovation for your
        active life.
      </p>
      <Button iconUrl={cheveronRight}>Shop now</Button>

      <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
        {statistics.map(({ value, label }) => (
          <div key={label}>
            <p className="font-palanquin text-4xl font-bold">{value}</p>
            <p className="font-montserrat leading-7 text-slate-gray">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
