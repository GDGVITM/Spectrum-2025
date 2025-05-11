
import { Arrow, RegisterButton } from '../svg';

const CTFComponent = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold flex flex-row items-center">
        Capture The Flag
        <Arrow width={80} height={80}/>
      </h1>
      <p className="mt-4 max-w-full">
        need to be filed yet
      </p>
      <p className="mt-2 font-bold">DATE: 25th April 2024</p>
      <button 
          type="button" 
          className='ml-10 mt-4 cursor-pointer' 
          onClick={() => window.open('https://google.com', '_blank')}
        >
          <RegisterButton/>
        </button>
    </div>
  );
};

export default CTFComponent;