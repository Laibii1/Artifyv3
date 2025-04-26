import { createContext, useContext, useState } from 'react';

// Create the context
const UploadedItemsContext = createContext();

// Provider component to wrap the app
export const UploadedItemsProvider = ({ children }) => {
  const [uploadedItems, setUploadedItems] = useState([]);

  // Function to delete an item by id
  const handleDeleteItem = (id) => {
    setUploadedItems((prev) => prev.filter(item => item.id !== id));
  };

  // Function to handle file selection/upload
  const handleFileSelect = (file, title = '', description = '') => {
    const fileUrl = URL.createObjectURL(file);

    // Format the date as M/D/YYYY
    const now = new Date();
  

    const fileType = file.type.startsWith('video') ? 'video' : 'image';

    setUploadedItems((prevItems) => [
      ...prevItems,
      {
        id: Date.now(),
        fileUrl,
        fileType,
        title,
        description,
       
      }
    ]);
  };

  return (
    <UploadedItemsContext.Provider
      value={{ uploadedItems, setUploadedItems, handleDeleteItem, handleFileSelect }}
    >
      {children}
    </UploadedItemsContext.Provider>
  );
};

// Hook to use the uploaded items context
export const useUploadedItems = () => useContext(UploadedItemsContext);
