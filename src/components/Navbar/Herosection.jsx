import Bannerimage from '../../assets/banner.png';
import Badge from '../../assets/badge.png'
import Playicon from '../../assets/Play.png'


const Herosection = () => {
    const bannerImage = Bannerimage
    const badge = Badge
    const playIcon = Playicon
    return (
      <div className="hero container w-10/12 mx-auto py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImage} />
          <div>
            <div className="h-6 w-auto flex mb-6">
              <img src={badge} alt="" />
            </div>
            <h1 className="text-5xl font-bold">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            <p className="py-6 text-gray-500">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex gap-4">
              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
                Get Started
              </button>
              <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-purple-500">
                <img src={playIcon} alt="" /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Herosection;