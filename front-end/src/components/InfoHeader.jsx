import React from "react";

const InfoHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around bg-red-500 h-16 m-auto w-2/3 my-10 shadow-md">
      <div className="lg:w-1/2 lg:text-center">
        <h1 className="text-sm text-gray-200 font-thin">
          For the best experience use
          <span className="font-bold text-white"> inshorts</span> app on your
          smartphone
        </h1>
      </div>
      <div className="lg:w-1/2 flex justify-center mt-4 lg:mt-0">
        <img
          className="w-32 lg:mr-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFD6-oPW3sC6U2wJ_Iqeewu5aPuIxkaW3Rw&usqp=CAU"
          alt="Apple"
        />
        <img
          className="w-32"
          src="https://slwordpress.rutgers.edu/studenthealth/wp-content/uploads/sites/139/2017/02/app-store-android-download.png"
          alt="android"
        />
      </div>
    </div>
  );
};

export default InfoHeader;
