"use client"
import Link from "next/link";

const Payment: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Payment</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Card Number</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Expiration Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        // onClick={handleSubmit}
        >
          <Link href={"/get-started/success"}>
            Submit Payment
          </Link>

        </button>
      </form>
    </div>
  );
};

export default Payment;
