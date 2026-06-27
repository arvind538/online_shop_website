import { useAuth } from "../Store/auth";

const Service = () => {
  const { services } = useAuth();

  if (!services || services.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <h2 className="text-xl font-medium text-gray-600">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="service">
      <div className="container max-w-7xl mx-auto px-4 text-center my-8 md:my-12">
        <h2 className="main-heading text-2xl md:text-4xl font-semibold">
          Service
        </h2>
      </div>

      {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="container max-w-7xl mx-auto px-4 service-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12">
        {services.map((curElem, _id) => {
          const { price, description, provider, service, image } = curElem;

          return (
            <div
              className="service-card cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              key={_id}
            >
              <div className="card-img w-full h-48 overflow-hidden bg-gray-100">
                <img
                  className="w-full h-full object-cover"
                  src={
                    image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlFDBtL382Hf9GvAVuT2VoSTl-SZQiZBY2A&s"
                  }
                  alt={service || "service"}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlFDBtL382Hf9GvAVuT2VoSTl-SZQiZBY2A&s";
                  }}
                />
              </div>

              <div className="card-details p-4">
                <div className="card-top flex items-center justify-between text-sm text-gray-500 mb-2">
                  <p className="font-medium">{provider}</p>
                  <p className="font-semibold text-orange-500">₹ {price}</p>
                </div>

                <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
                  {service}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;