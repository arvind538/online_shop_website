import React from 'react'

const Promotion = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-around text-sm border border-gray-300 rounded-md my-5 max-w-5xl w-full bg-white p-5 md:p-8">

        {/* Text + Buttons */}
        <div className="flex flex-col text-center md:text-left items-center md:items-start pt-10 md:pt-0">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
            Download Online_Shop App
          </h2>
          <p className="text-gray-700 mt-2 w-full md:w-3/4">
            Mobile banking app for iOS & Android to manage your online money.
          </p>

          <div className="flex items-center gap-4 mt-6 flex-wrap justify-center md:justify-start">
            <button
              aria-label="googlePlayBtn"
              className="active:scale-95 transition-all"
              type="button"
            >
              <img
                className="w-28 md:w-44"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
                alt="googlePlayBtn"
              />
            </button>
            <button
              aria-label="appleStoreBtn"
              className="active:scale-95 transition-all"
              type="button"
            >
              <img
                className="w-28 md:w-44"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
                alt="appleStoreBtn"
              />
            </button>
          </div>
        </div>

        {/* Image */}
        <img
          className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[375px] pt-10 md:pt-0"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png"
          alt="excitedWomenImage"
        />
      </div>
    </div>
  )
}

export default Promotion