import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/404.gif"

export default function NotFound({page}){

	return(
		<>
			<div className="flex items-center justify-center h-screen">
		        <div className="bg-white">
		          <div className="flex flex-col items-center">
		            <img src={img} className=""/>

		            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
		              <span className="text-red-500">Oops!</span> Page{" "}
		            </h6>

		            <p className="mb-4 text-center text-gray-500 md:text-lg">
		              The page you’re looking for doesn’t exist.
		            </p>

		            <Link
		              to={`/${page}`}
		              className="px-5 py-2 rounded-md text-white bg-primary hover:bg-green-700"
		            >
		              Go home
		            </Link>
		          </div>
		        </div>
		      </div>
		</>
	)
}