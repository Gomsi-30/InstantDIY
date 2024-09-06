import Banner from '../../../_components/banner2/banner2';
import GridCard from '../../../_components/grid-cards/grid-cards';
import Header from '../../../_components/header';
import Container from '../../../_components/container';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { data2 } from '../../../_components/data'; // Adjust the path as needed

const DynamicArticle = ({ params }: any) => {
    const { id } = params; // Extract the ID from the URL

    // Filter data based on the ID
    const articleData = data2.find(item => item.id === parseInt(id));

    return (
        <div className="mt-[50px] flex flex-col gap-1 w-full">
            {/* Breadcrumb */}
            <Container>
              <div className=" flex flex-col gap-7 max-w-[550px] sm:max-w-full px-4">
              <div className="flex flex-row gap-2 justify-center items-center">
                <Link href="/" className="font-bold text-sm text-blue-600 hover:underline">
                 Home
                </Link>
              <FaArrowRight color='gray' size={10} />
              <p className="text-sm opacity-50">Article</p>
              </div>
             </div>
            </Container>

            {/* Banner Section */}
            <div className="w-full">
                <Banner
                    check="c"
                    headingText={articleData?.text || 'Default Heading'}
                    profileImage={articleData?.authorImage}
                    profileName={articleData?.author}
                    articleImage={articleData?.image}
                    profileReadTime={articleData?.readTime}
                    articleNumber={articleData?.articleNumber}
                />
            </div>

            {/* Content Section */}
            <Container>
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 mx-auto max-w-7xl">
                    <div className="flex flex-col gap-6 md:gap-10">
                        {articleData ? (
                            articleData.description.map((desc, index) => (
                                <p key={index} className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    {desc}
                                </p>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">Loading...</p>
                        )}
                    </div>
                </div>
            </Container>

            {/* Additional Section */}
          
                <Header label="WHAT's MORE" />
                <div className="mt-8">
                    <GridCard />
                </div>
          
        </div>
    );
};

export default DynamicArticle;
