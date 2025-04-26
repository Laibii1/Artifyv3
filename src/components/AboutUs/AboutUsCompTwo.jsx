import './AboutUsComp.css';

export const AboutUsCompTwo = () => {
  return (
    <div className="bg-white text-center p-6 mt-40">
    <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold font-outfit mb-2">What We Do</h1>
        <p className="text-xl font-semibold playpen-font mb-4">Empowering Creativity &amp; Build Connections</p>
        <p className="text-gray-700 mb-6 font-outfit ">
            At Artify platform, we offer a diverse collection of artworks, ranging from traditional to digital, abstract to realistic, and everything in between. Whether you're an artist looking to showcase your talent or an art lover searching for unique pieces, we provide a platform that celebrates creativity and expression.
        </p>
        <a href='https://artify-platform.mn.co/spaces/19108320/feed' target="_blank"
        className="bg-black text-white py-3 mt-5 px-6 rounded-full mb-8 
        font-outfit transition-all duration-300 font-bold hover:bg-[#D7521D] hover:scale-105">
            Join us in our mission</a>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            
            <div className="rounded-lg overflow-hidden">
                <img alt="Artistic portrait of a woman with a thoughtful expression, surrounded by abstract yellow and black elements" src="/AboutUs2.jpeg" 
                className="w-full rounded-lg  h-80 object-cover object-center" />
            </div>
            <div className="rounded-lg overflow-hidden">
                <img alt="Abstract artwork with blue and yellow geometric shapes and flowers" src="/AboutUs3.jpeg" 
                 className="w-full rounded-lg h-80 lg:mt-30 lg:h-50 object-cover object-center"/>
            </div>
            <div className="rounded-lg overflow-hidden">
                <img alt="Modern abstract art with yellow and gray tones, featuring birds and architectural elements" src="/AboutUs4.jpeg"
                 className="w-full rounded-lg h-80  lg:mt-30  lg:h-50 object-cover object-center" />
            </div>
            <div className="rounded-lg overflow-hidden">
                <img alt="Portrait of a woman in traditional attire with a colorful background" src="/AboutUs5.jpeg"
                className="w-full rounded-lg  h-80 object-cover object-center"  />
            </div>
        </div>
    </div>
</div>
  );
};








          