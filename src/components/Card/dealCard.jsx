
export default function DealCard({image, percentage, oPrice, nPrice}){


    const formatCurrency = (value) => {
        return value.toLocaleString('de-DE', { style: 'currency', currency: 'XAF' });
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

	return(
		<>
			<div className="w-[15%] h-fit m-4 mb-10 absolute shadow-lg bg-white">
				<div className="bg-primary absolute w-10 h-fit p-1 text- text-white font-semibold rounded-br-md "><p className="text-xs">{percentage} %</p></div>
				<div style={{backgroundImage: `url(${image})`}} className="w-full h-40"></div>
				<div className="flex p-2 py-4 flex-row gap-5">
					<div><p className="text-primary font-bold">{oPrice} FCFA</p></div>
					<div><p className="line-through text-lightblack font-bold">{nPrice} FCFA</p></div>
				</div>
			</div>
		</>
	)
}
