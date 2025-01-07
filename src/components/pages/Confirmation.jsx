import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div className="bg-purple-300 h-screen flex flex-col items-center justify-center">
      {/* Order Confirmed Pill */}
      <div className="bg-purple-500 text-white rounded-full p-8 text-center mb-6">
        <h2 className="text-4xl font-bold">ORDER CONFIRMED</h2>
      </div>

      {/* Continue Shopping Button outside the pill */}
      <Link
        to="/"
        className="bg-white text-purple-500 font-semibold py-2 px-4 rounded-full"
      >
        Continue Shopping
      </Link>
    </div>
  );
}


