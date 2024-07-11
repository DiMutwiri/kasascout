import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-text-slate-200 shadow-md'>

      <div className='flex justify-between items-center max-w-6xl mx-auto'>

        <Link to='/'> {/* Link >> leads to the home page onclick*/}
          <h1 className='font-bold text-sm sm:text-xl '>
            <span className='text-slate-800'>CasaScout</span>
          </h1>
        </Link>

        <form className='bg-slate-100 p-3 flex  item-centre rounded-lg  '>
          <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 ' /> 
          <FaSearch className='text-slate-600'/>
        </form>

        <ul className='flex gap-4'>
          <Link to='/'> {/* Link to the home page */}
           <li className='hidden sm:inline text-slate-700 hover:underline '>Home</li> 
          </Link>

          <Link to='/about'> {/* Link to the about page */}
            <li className='hidden sm:inline text-slate-700 hover:underline '>About</li>
          </Link>

          <Link to='/sign-in'> {/* Link to the sign-in page */}
            <li className='sm:inline text-slate-700 hover:underline '>Sign In</li>
          </Link>          
        </ul>

      </div>

    </header>
  )
}
