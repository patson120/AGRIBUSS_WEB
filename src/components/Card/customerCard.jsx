import { BsThreeDots } from "react-icons/bs";
import pers3 from '../../assets/images/boy8.png'
import {useState, useRef} from 'react'
import { OverlayPanel } from 'primereact/overlaypanel';
import { Toast } from 'primereact/toast';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';

export default function CustomerCard({image, name, speciality, location , destloc}){

	const op = useRef(null);
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

     const accept = () => {
        toast.current.show({ severity: 'info', summary: 'success', detail: `You accepted ${name}'s' request`, life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: `You rejected ${name}'s' request`, life: 3000 });
    };


	return(
			<div className="bg-white rounded-md border flex flex-col justify-between border-border p-4 w-[23%] h-[330px]">
			 <Toast ref={toast} />
				<div className="flex flex-row justify-between">
					<div style={{backgroundImage: `url(${image})`}} className="bg-cover bg-center w-20 shadow-lg h-20 rounded-full"></div>
					<div  onClick={(e) => op.current.toggle(e)} className="p-2 h-fit rounded-full bg-white hover:bg-green-100 shadow"><BsThreeDots/></div>
					<OverlayPanel ref={op}>
						<div className="flex flex-col gap-1">
							<p onClick={accept} className="cursor-pointer hover:text-black underline text-sm">View more</p>
						</div>
					</OverlayPanel>
				</div>
				<div className="flex flex-col gap-1">
					<p className="font-semibold py-4 text-lg">{name}</p>
					<p className="text-lightblack">Speciality: <span className="text-black">{speciality}</span></p>
					<p className="text-lightblack">Current location: <span className="text-black">{location}</span></p>
					<p className="text-lightblack">Destination: <span className="text-black">{location}</span></p>
				</div>
				<div className="flex flex-row gap-2">
					<div onClick={reject} className=" w-40 text-center text-red-500 text-sm py-1 mt-4 h-fit px-2 rounded-md border-2 cursor-pointer border-red-500">
						<p>Reject</p>
					</div>
					<div onClick={accept} className=" w-40 text-center text-white text-sm py-1 mt-4 h-fit px-2 rounded-md border-2 cursor-pointer bg-black border-black">
						<p>Accept</p>
					</div>
				</div>
			</div>
	)
}