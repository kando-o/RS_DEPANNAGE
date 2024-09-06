
const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white border border-slate p-6 rounded-lg shadow-md flex flex-col items-start">
      <Icon className="w-10 h-10 text-indigo-500 mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

export default FeatureCard