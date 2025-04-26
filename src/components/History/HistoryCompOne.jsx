import './HistoryComp.css';

export const HistoryCompOne = () => {
  return (
    <div className="flex items-center justify-center mt-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 w-full  max-w-6xl">
        {/* Text Container */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-bold font-outfit mb-4">
            Your Activity History
          </h1>
          <p className="text-lg FontoutfitLight mb-6">
            Track your journey on Artify Cloth! View past uploads, purchases, collaborations, and interactions—all in one place. Stay updated on your artistic milestones and never lose sight of your progress!
          </p>
        </div>
        
        {/* Image Container */}
        <div className="flex justify-center md:justify-start">
          <img 
            alt="Illustration of various digital elements representing activity history, including charts, graphs, and a hand interacting with them"
            className="rounded-4xl shadow-lg border-1" 
            src="/HistoryCompOneImg.png" 
          />
        </div>
      </div>
    </div>
  );
};
