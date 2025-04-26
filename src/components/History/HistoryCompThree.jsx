import './HistoryComp.css';
import { useUploadedItems } from '../Contexts/UploadedItemsContext';

export const HistoryCompThree = () => {
  const { uploadedItems } = useUploadedItems();

  return (
    <div className="bg-white flex flex-col items-center mt-20 p-4">
      <h1 className="text-3xl font-bold font-outfit mb-10">View uploads</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {uploadedItems.map((item) => {
          const displayDate = item.uploadDate || "N/A";

          return (
            <div key={item.id} className="relative border-1 border-gray-400 rounded-lg">
              {item.fileType?.includes("video") ? (
                <video
                  src={item.fileUrl}
                  controls
                  className="w-[250px] h-[300px] rounded-lg"
                />
              ) : (
                <img
                  src={item.fileUrl}
                  alt={item.title}
                  className="w-[250px] h-[300px] object-cover rounded-lg"
                />
              )}
              <div className="absolute top-2 right-4">
                <div className="bg-black font-outfit text-lg text-white rounded-full px-2 py-1">
                   {item.uploadDate}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
