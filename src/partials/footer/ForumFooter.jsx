export default function ForumFooter () {
    return(
        
        <footer className="bg-black p-4 text-gray-300 text-center">
            <p>&copy; 2024 Agri<span className='text-primary'>BUSS</span>. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
            </div>
        </footer>
    )
}