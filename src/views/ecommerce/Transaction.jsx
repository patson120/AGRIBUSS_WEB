import { EcommercenavLinks, transactionItem } from "../../constants/objects";
import AppNavbar from "../../partials/navBar/AppNavbar";

export default function Transactions(){

    const getStatusClass = (status) => {
        switch (status) {
            case 'Completed':
                return 'text-green-600';
            case 'Pending':
                return 'text-yellow-600';
            case 'Cancelled':
                return 'text-red-600';
            default:
                return '';
        }
    };
    return(
        
        <div className="bg-gray-50 h-screen">
            <AppNavbar array={EcommercenavLinks} see={true} />
            <div className="p-4">
                <p className="text-xl font-semibold text-green-800">Your Transactions</p>
                <div className="overflow-x-auto py-4">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="py-2 px-4 border-b">Transaction ID</th>
                                <th className="py-2 px-4 border-b">Date</th>
                                <th className="py-2 px-4 border-b">Amount (XAF)</th>
                                <th className="py-2 px-4 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionItem.map(transaction => (
                                <tr key={transaction.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b">{transaction.id}</td>
                                    <td className="py-2 px-4 border-b">{transaction.date}</td>
                                    <td className="py-2 px-4 border-b">{transaction.amount}</td>
                                    <td className={`py-2 px-4 border-b ${getStatusClass(transaction.status)}`}>
                                        {transaction.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}