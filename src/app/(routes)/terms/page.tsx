import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../../_components/container';
import { data } from '../../../constants/terms-data'

const Terms = () => {
  return (
    <div className="mt-[40px] flex flex-col gap-[50px] h-[1300px] w-full">
      <Container>
              <div className=" flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
              <div className="flex flex-row gap-2 justify-center items-center">
                <Link href="/" className="font-bold text-sm text-blue-600 hover:underline">
                 Home
                </Link>
              <FaArrowRight color='gray' size={10} />
              <p className="text-sm opacity-50">Terms</p>
              </div>
             </div>
      </Container>
      
      {/* Content Section */}
      <div className='px-6 sm:px-[50px] md:px-[120px] lg:px-[177px]'>
        <div className='flex flex-col gap-10 max-w-full'>
          {data.map((i, index) => (
            <p key={index} className='text-sm'>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;