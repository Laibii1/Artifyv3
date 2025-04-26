import { FaPlus, FaTrash, FaEdit, FaUpload } from 'react-icons/fa';
import { useState } from 'react';
import './ProfileCreation.css';
import { ProfileForm } from './ProfileForm';
import { useUser } from '../Contexts/UserContext';
import { useUploadedItems } from '../Contexts/UploadedItemsContext';

export const Profile = ({ image, about, onEditClick }) => {
  const { user, setUser } = useUser();
  const { uploadedItems, setUploadedItems, handleDeleteItem } = useUploadedItems();
  const [savedItems, setSavedItems] = useState([]);
  const [profileImage, setProfileImage] = useState(image || user.image);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('uploaded');
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const profileUrl = window.location.href;

  const firstName = user.firstName || user.firstname;
  const lastName = user.lastName || user.lastname;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setProfileImage(imgURL);
      setUser((prevUser) => ({
        ...prevUser,
        image: imgURL,
      }));
    }
  };

  const handleShare = () => {
    const shareData = {
      title: `${firstName} ${lastName}'s Profile`,
      text: 'Check out this amazing profile!',
      url: profileUrl,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Profile shared successfully'))
        .catch((error) => console.error('Error sharing profile:', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleUploadItem = (item) => {
    if (editingItem) {
      setUploadedItems((prevItems) =>
        prevItems.map((i) => (i.id === editingItem.id ? { ...item, id: editingItem.id } : i))
      );
    } else {
      setUploadedItems((prevItems) => [...prevItems, { ...item, id: Date.now() }]);
    }
    setShowUploadForm(false);
    setEditingItem(null);
  };

  const handleEditItemClick = (item) => {
    setEditingItem(item);
    setShowUploadForm(true);
  };

  const UploadItemForm = ({ onUpload, onCancel }) => {
    const [title, setTitle] = useState(editingItem?.title || '');
    const [description, setDescription] = useState(editingItem?.description || '');
    const [artType, setArtType] = useState(editingItem?.artType || '');
    const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState(editingItem?.fileUrl || '');
    const [price, setPrice] = useState(editingItem?.price || '');
    const [discount, setDiscount] = useState(editingItem?.discount || '');
    const [notForSale, setNotForSale] = useState(editingItem?.price === null);
    const [errors, setErrors] = useState({});

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        setFileURL(URL.createObjectURL(selectedFile));
        setErrors((prev) => ({ ...prev, file: '' }));
      }
    };

    const validateForm = () => {
      const newErrors = {};
      if (!title.trim()) newErrors.title = 'Title is required';
      if (!description.trim()) newErrors.description = 'Description is required';
      if (!artType) newErrors.artType = 'Art type is required';
      if (!fileURL) newErrors.file = 'File is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
      if (!validateForm()) return;

      onUpload({
        title,
        description,
        artType,
        fileUrl: fileURL,
        fileType: file?.type || editingItem?.fileType || '',
        price: notForSale ? null : price,
        discount: notForSale ? null : discount,
      });
    };

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white border-2 border-black p-8 rounded-2xl w-full max-w-3xl shadow-2xl overflow-y-auto max-h-[95vh]">
          <h2 className="text-2xl font-outfit font-bold text-gray-800 mb-5">{editingItem ? 'Edit Item' : 'Upload New Item'}</h2>
          <input type="text" placeholder='Post Title*' className="w-full border px-3 py-2 bg-gray-100 rounded-2xl mb-2" value={title} onChange={(e) => { setTitle(e.target.value); if (errors.title) setErrors((prev) => ({ ...prev, title: '' })); }} />
          {errors.title && <p className="text-red-600 text-sm mb-2">{errors.title}</p>}

        
          <textarea placeholder='Description*' className="w-full border px-3 py-2 bg-gray-100 rounded-2xl mb-2" value={description} onChange={(e) => { setDescription(e.target.value); if (errors.description) setErrors((prev) => ({ ...prev, description: '' })); }} rows={2} />
          {errors.description && <p className="text-red-600 text-sm mb-2">{errors.description}</p>}

       
          <select  className="w-full bg-gray-100 rounded-2xl font-outfit font-medium border px-3 py-2 mb-2" value={artType} onChange={(e) => { setArtType(e.target.value); if (errors.artType) setErrors((prev) => ({ ...prev, artType: '' })); }}>
            <option value="">Select Art Type</option>
            <option value="Painting">Painting</option>
            <option value="Crafts">Crafts</option>
            <option value="Ceramics">Ceramics</option>
            <option value="Others">Others</option>
          </select>
          {errors.artType && <p className="text-red-600 text-sm mb-2">{errors.artType}</p>}

        
          <div className="relative bg-gray-100 rounded-2xl w-full p-6 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer">
         <input type="file" accept="image/*,video/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />

         {fileURL ? (
         file?.type?.startsWith('image/') || (!file && editingItem?.fileType?.startsWith('image/')) ? (
          <img src={fileURL} alt="Preview" className="max-h-60 object-contain z-0" />
          ) : (
           <video controls className="max-h-60 object-contain z-0">
          <source src={fileURL} type={file?.type || editingItem?.fileType} />
           Your browser does not support the video tag.
        </video>
         )
           ) : (
         <>
         <FaUpload className="w-8 h-5 text-black mb-2 z-0" />
         <p className="text-sm font-outfit font-bold text-gray-600 text-center z-0">Drag & drop files here or click to upload</p>
         <p className="text-xs font-outfit font-bold text-gray-400 mt-1 z-0">Accepted formats: .jpg, .png, .mp4</p>
        </>
        )}
       </div>

          {errors.file && <p className="text-red-600 text-sm mt-2">{errors.file}</p>}

          <div className="flex  mt-5">
          <input type="checkbox" className="accent-black " checked={notForSale} onChange={() => setNotForSale(!notForSale)} />
            <label className="ml-4 text-sm font-outfit font-bold text-gray-700">Not for Sale</label>
          </div>

          {!notForSale && (
           <>
           <div className="flex gap-4 mt-4">
             <div className="w-1/2">
              
               <input
                 type="number"
                 placeholder='Price PKR'
                 className="w-full border px-3 py-2 bg-gray-100 rounded-2xl"
                 value={price}
                 onChange={(e) => setPrice(e.target.value)}
               />
             </div>
             <div className="w-1/2">
             
               <input
                 type="number"
                 placeholder='Discount %'
                 className="w-full border px-3 py-2 bg-gray-100 rounded-2xl"
                 value={discount}
                 onChange={(e) => setDiscount(e.target.value)}
               />
             </div>
           </div>
         </>
         
          )}

          <div className="flex justify-end space-x-3 mt-4">
          {editingItem ? null : (
          <button
          onClick={onCancel}
            className="bg-gray-300 text-black font-outfit font-bold px-5 py-2 rounded-xl hover:bg-black hover:text-white hover:scale-105"
           >
          Cancel
           </button>
              )}
           
            <button onClick={handleSubmit} className="bg-black text-white w-[100px] px-5 py-2 font-outfit font-bold rounded-xl hover:bg-[#D7521D] hover:scale-105">{editingItem ? 'Save' : 'Upload'}</button>
          </div>
        </div>
      </div>
    );
  };

  if (isEditing) {
    return (
      <ProfileForm
        initialData={{ firstName, lastName, image: profileImage, about }}
        onSave={(updatedData) => {
          setUser({ ...user, ...updatedData });
          setIsEditing(false);
        }}
      />
    );
  }
  return (
    <div className="bg-white flex flex-col items-center justify-center px-8 lg:px-16 mt-30">
      {showUploadForm && <UploadItemForm onUpload={handleUploadItem} onCancel={() => setShowUploadForm(false)} />}

      <div className="text-center">
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full border-1 shadow-xl w-36 h-36 mx-auto"
            width="150"
            height="150"
          />
          <label htmlFor="profile-pic" className="absolute bottom-0 left-1/2 transform translate-x-1/2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer border-2 border-white shadow-lg ">
            <FaPlus />
          </label>
          <input
            type="file"
            id="profile-pic"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <h1 className="mt-4 text-xl font-semibold">{firstName} {lastName}</h1>
        <p className="mt-2 text-sm text-gray-700 max-w-3xl mx-auto w-full">
          {about || 'Add About Yourself'}
        </p>
        <div className="mt-15 flex justify-center space-x-10">
          <button className="bg-black w-50 text-white py-2 font-bold font-outfit px-6 rounded-full" onClick={handleShare}>Share</button>
          <button className="bg-black w-50 text-white py-2 font-outfit font-bold px-6 rounded-full" onClick={() => setIsEditing(true)}>Edit</button>
        </div>

        <div className="mt-15 flex justify-center space-x-20">
          <span className={`font-semibold font-outfit cursor-pointer ${activeTab === 'uploaded' ? 'border-b-2 border-black' : 'text-gray-500'}`} onClick={() => handleTabChange('uploaded')}>Uploaded Item</span>
          <span className={`font-semibold font-outfit cursor-pointer ${activeTab === 'saved' ? 'border-b-2 border-black' : 'text-gray-500'}`} onClick={() => handleTabChange('saved')}>Saved</span>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeTab === 'uploaded' && (
            <>
              <div className="col-span-full text-center text-gray-500">
              <div className="mt-4 flex justify-center">
                
                 <button onClick={() => setShowUploadForm(true)} className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
                  <FaPlus />
                </button>
              </div>
            </div>

            {uploadedItems.map((item) => (
  <div
    key={item.id}
    className="bg-white p-2 rounded-lg border-1 border-gray-300 relative group shadow"
  >
    {item.fileType?.includes("video") ? (
      <video
        src={item.fileUrl}
        controls
        className="w-[250px] h-[250px] rounded-lg"
      />
    ) : (
      <img
        src={item.fileUrl}
        alt={item.title}
        className="w-[250px] h-[250px] object-cover rounded-lg"
      />
    )}
    <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
    <p className="text-sm text-gray-600 truncate overflow-hidden whitespace-nowrap">
      {item.description}
    </p>

    {item.price ? (
      <div className="mt-2">
        {item.discount ? (
          <>
            <p>
             <span  className="text-xl font-bold text-[#008A77]"> PKR {parseInt(item.price - (item.price * item.discount) / 100)}</span> </p>
             <p> <span className="text-sm text-gray-500 line-through ">  PKR {item.price} </span>
              <span className="text-sm text-red-500 font-medium ml-2">   -{item.discount}%</span>
            </p>
          </>
        ) : (
          <p className="text-sm text-gray-800">
            Price: <span className="font-semibold">PKR {item.price}</span>
          </p>
        )}
      </div>
    ) : (
      <p className="text-sm italic text-gray-600">Not for sale</p>
    )}

    {/* Delete Button */}
    <button
      className="absolute top-4 right-2 bg-black text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
      onClick={() => handleDeleteItem(item.id)}
    >
      <FaTrash />
    </button>

    {/* Edit Button */}
    <button  
      className="absolute top-14 right-2 bg-black text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
      onClick={() => handleEditItemClick(item)}
    >
      <FaEdit />
    </button>
  </div>
))}

            </>
          )}

          {activeTab === 'saved' && savedItems.length > 0 ? (
            savedItems.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <img src={item} alt={`Saved Item ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
              </div>
            ))
          ) : activeTab === 'saved' && (
            <div className="col-span-full text-center text-gray-500">
              <p>No items are saved yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
