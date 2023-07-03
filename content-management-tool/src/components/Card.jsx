const Card = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <p className="text-4xl font-montserrat font-semibold text-[#fff]">
          All Blogs
        </p>
      </div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src="./src/assets/photo.jpg" alt="Card" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Title</div>
          <p className="text-gray-700 text-base">Description</p>
        </div>
        <div className="px-6 py-4 flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="./src/assets/photo.jpg"
            alt="User"
          />
          <div>
            <p className="text-gray-900 font-semibold">Jayanth</p>
            <p className="text-gray-700 text-sm">Date</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
