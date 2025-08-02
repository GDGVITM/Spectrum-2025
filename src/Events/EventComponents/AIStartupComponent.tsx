import { Arrow, RegisterButton } from '../svg';

const AIStartupComponent = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold flex flex-row items-center">
        AI for Startups
        <Arrow width={80} height={80}/>
      </h1>
      <p className="mt-4 max-w-full">
        need to be filed yet
      </p>
      <p className="mt-2 font-bold">DATE: 18th April 2024</p>
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

export default AIStartupComponent;