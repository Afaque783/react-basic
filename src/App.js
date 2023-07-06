import "./App.css";
import {BiLogoDigitalocean, BiSolidCarWash} from 'react-icons/bi';
import {MdOutlineCameraswitch} from 'react-icons/md'
import {AiFillRead} from 'react-icons/ai'

function App() {
  return (
    <div className=" flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 ">
      <div className="flex flex-col items-center pb-10">
          {/* logo */}

        <BiLogoDigitalocean className="mt-1 h-12 w-12 mb-3 text-red-500"/>
        <BiSolidCarWash className="mt-3 h-12 w-12 mb-3 text-red-500"/>

          {/* data */}

        <h1 className="mt-3 font-semibold text-md" > BEGIN </h1>
        <p className="mt-3 text-sm font-normal">tap the icon below to start capturing</p>

          {/* capture icon */}
        <MdOutlineCameraswitch className="mt-5 h-6 w-6 text-red-500 mb-5"/>

          {/* view details part */}

        <div className="bg-gray-700 h-[25px] w-3/5 mt-3 mx-auto flex flex-row border-solid rounded-md">
            <AiFillRead className="mt-1 ml-3 text-gray-300"/>
            <p className=" ml-1 text-gray-300">view claims</p>
        </div>
      </div>
    </div>
  );
}

export default App;
