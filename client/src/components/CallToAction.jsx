import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex   sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
          Want to see more my Portfolio?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout my portfolio for more projects and insights!
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a href="https://github.com/abhishekgurjar-in" target='_blank' rel='noopener noreferrer'>
            Visit My Portfolio
          </a>
        </Button>
      </div>
      {/* <div className="p-7 flex-1">
        <img className='w-300 h-300'
          src="" 
          alt=""
        />
      </div> */}
    </div>
  );
}
