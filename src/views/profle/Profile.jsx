import image from "../../constants/images";
import { EmergencyContact, ProfileBankInfo, ProfilePersonalInfo } from "../../constants/objects";
import ProfileInfo from "./components/ProfileInfo";



export default function ProfilePage(){
  return (
      <div className="flex gap-4 py-4">
      		<div className="flex flex-col w-2/6 gap-4">
      			<div className="bg-white p-4 rounded-lg shadow">
      				<div className="flex gap-4">
      					<div className="bg-red-500 w-14 rounded-full h-14">
      						<img src={image.HERO_Driving} alt="pr0file-image" className="w-full rounded-full h-full"/></div>
      					<div className="flex flex-col gap-1">
      						<p className="font-semibold">Jhon Lever</p>
      						<p className="text-gray-400 text-sm">UI/UX Designer</p>
      					</div>
      				</div>
      				<div className="py-2 text-sm">
	      				<p className="font-medium">Employee Id: Ft-00001</p>
	      				<p className="text-gray-400">Date of join: 1st Jan 2023</p>
      				</div>
				    <div className="py-2">
				    	<button className=" md:block w-30 bg-primary text-white p-2 rounded font-semibold hover:scale-105 md:text-xs xl:text-md ">send Message</button>
				    </div>
				    <div className="w-full">
				    	<table className="w-full">
                        <thead className="">
                          <th className="text-gray-600  font-semibold text-left text-xs"></th>
                          <th className="text-gray-600 font-semibold text-right w-1/2 text-xs"></th>
                        </thead>
                        <tbody>
                          <tr className="text-sm">
                            <td className="flex gap-2 text-gray-500 pt-2">
                              Pnone:
                            </td>
                            <td className="text-right text-black-500 font-semibold pt-2">
                              655289433
                            </td>
                          </tr>
                          <tr className="text-sm">
                            <td className="flex gap-2 text-gray-500 pt-2">
                              Email:
                            </td>
                            <td className="text-right text-black-500 font-semibold pt-2">
                              text@gmail.com
                            </td>
                          </tr>
                          <tr className="text-sm">
                            <td className="flex gap-2 text-gray-500 pt-2">
                              Birthday
                            </td>
                            <td className="text-right text-black-500 font-semibold pt-2">
                              30 Nov 1990
                            </td>
                          </tr>
                          <tr className="text-sm">
                            <td className="flex gap-2 text-gray-500 pt-2">
                              	Address
                            </td>
                            <td className="text-right text-black-500 font-semibold pt-2">
                              Yaounde, Mokolo
                            </td>
                          </tr>
                          <tr className="text-sm">
                            <td className="flex gap-2 text-gray-500 pt-2">
                              	Gender
                            </td>
                            <td className="text-right text-black-500 font-semibold pt-2">
                              Male
                            </td>
                          </tr>
                        </tbody>
                      </table>
				    </div>
				</div>
      			<ProfileInfo array={ProfileBankInfo} title="Bank Information"/>
      		</div>
      		<div className="flex w-4/6 flex-col gap-4">
      			<ProfileInfo array={ProfilePersonalInfo} title="Personal Information's"/>
      			
      			<ProfileInfo array={EmergencyContact} title="Emergency Contact"/>
      		</div>
      </div>
  );
}
