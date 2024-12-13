
export default function Modal({open, onClose, children}){
	return(
		<div onClick={onClose}
			className={`fixed bg-black inset-0 flex-col h-full items-center transition-colors ${open ? "visible ng-black/20" : "invisible"} w-screen justify-center bg-opacity-50 backdrop-blur-[2px]`}
		>

		</div>
	)
}