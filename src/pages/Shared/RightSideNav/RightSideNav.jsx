
import { FaFacebook, FaGoogle, FaInstagram,  FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
            <h2 className="text-2xl">Login Now</h2>
            <button className='btn btn-outline w-full'>
                <FaGoogle></FaGoogle>
                Login With Google
                
                </button>
            <button className='btn btn-outline w-full'>
                <FaGoogle></FaGoogle>
                Login With Github
                </button>
        </div>
            <div className='p-4  mb-6'>
            <h2 className="text-2xl">Find Us on</h2>

            <a href="" className='p-4 flex text-lg rounded-t-lg items-center  border'>
                <FaFacebook className='mr-3'></FaFacebook>
               <span>Facebook</span>
            </a>
            <a href="" className='p-4 flex text-lg rounded-t-lg items-center  border-x'>
                <FaTwitter className='mr-3'></FaTwitter>
               <span>Twitter</span>
            </a>
            <a href="" className='p-4 flex text-lg rounded-b-lg items-center  border'>
                <FaInstagram className='mr-3'></FaInstagram>
               <span>Instagram</span>
            </a>
        </div>
        {/* Q zone */}
        <div className='p-4 space-y-3 mb-6'>
            <h2 className="text-2xl">Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone2} alt="" />
            
        </div>
        </div>
    );
};

export default RightSideNav;