import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { Link,useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpeg';
import {useSelector} from 'react-redux'
export default function Home() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate=useNavigate();
    const handleClick=()=>{
      if(authStatus){
         navigate("/Form");
      }else{
        navigate("/SignIn");
      }
  }
  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 w-screen">
      <div className="w-full px-6 lg:px-8">
        <div className="w-full grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="w-full h-screen">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get your #OOTD made!
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Simply click below to fill in the necessary details regarding design, size, and color. Once the details are filled, complete the payment and your order will be confirmed.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <button
                onClick={handleClick}
                className="flex-none rounded-md bg-customPurple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
              >
                Order Now
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">2 Weeks</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                It takes around 10-15 days to make each order. Hence it will be shipped after 2 weeks.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">No COD</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                All orders are prepaid only. We do not offer Cash On Delivery.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-screen bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={Logo} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">RIRA</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/contact" className="hover:underline mr-2">Contact</Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rishika-rakta/" className="hover:underline mr-2">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/r.rishikaaa/?__d=1" className="hover:underline mr-5">Instagram</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">RIRA™</a>. All Rights Reserved.</span>
        </div>
    </div>
    </>
  );
}
