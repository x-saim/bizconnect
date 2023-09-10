import React, { useState } from 'react';

import '../../assets/css/editprofiledashboard.css'
import { AddEduction } from './AddEducation';
import { AddExperience } from './AddExperience';


export const EditProfile = () => {
  const [current, setCurrent] = useState('overview')
  return (
    <>

      {/* <nav class="nav">
        <div class="navbar-brand">
          <h2>Navbar</h2>
        </div>
      </nav> */}

      <section class="flex-section">
        <div class="sidebar">
          {/* <div class="sidebar-heading">
            <h3>Dashboard</h3>
          </div> */}
          <div class="sidebar-item">
            <ul>
              <li><a onClick={() => setCurrent('overview')} href="#" class="links">Overview</a></li>
              <li><a onClick={() => setCurrent('edit-profile')} href="#" class="links">Edit Profile</a></li>
              <li><a onClick={() => setCurrent('add-experience')} href="#" class="links">Add Experience</a></li>
              <li><a onClick={() => setCurrent('add-education')} href="#" class="links">Add Education</a></li>
            </ul>
          </div>
        </div>

        <div class="main-section">
          {current === 'overview' ? <h1>Overview</h1> : current === 'edit-profile' ? <h1>Edit Profile</h1> : current === 'add-education' ? <AddEduction/> : current === 'add-experience' ? <AddExperience /> : null}
          </div>
      </section>

    </>
  )
}

// const EditProfile = (props) => {
//   return (
//     <div className='pt-8 pb-5 lg:xl:py-9 px-16 bg-[#DEDDE8]'>
//       <div className='bg-white flex flex-col md:flex-row rounded-[10px] '>
//         <div className='flex md:flex-col py-4 px-6 justify-center space-x-6 text-sm xl:text-base md:items-start md:justify-start md:space-x-0 md:space-y-6 md:pt-14 xl:px-20 md:border-r border-[#B8B8B8]'>
//           <p onClick={props.prof} className='cursor-pointer'>
//             Overwiew
//           </p>
//           <p className='text-blue-500 cursor-pointer'>Edit Profile</p>
//         </div>
//         <hr className='border mx-5 border-[#BEBDC4] mt-4' />

//         <div className='flex flex-col py-4 px-6 '>
//           <label htmlFor=''>Avatar</label>
//           <input
//             type='text'
//             name=''
//             id=''
//             className='bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]'
//           />
//           <label htmlFor='' className='mt-4'>
//             Avatar
//           </label>
//           <input
//             type='text'
//             name=''
//             id=''
//             className='bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]'
//           />
//           <label htmlFor='' className='mt-4'>
//             Avatar
//           </label>
//           <input
//             type='text'
//             name=''
//             id=''
//             className='bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]'
//           />
//           <label htmlFor='' className='mt-4'>
//             Avatar
//           </label>
//           <input
//             type='text'
//             name=''
//             id=''
//             className='bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]'
//           />
//           <label htmlFor='' className='mt-4'>
//             Avatar
//           </label>
//           <input
//             type='text'
//             name=''
//             id=''
//             className='bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]'
//           />
//           <label htmlFor='' className='mt-4'>
//             Avatar
//           </label>
//           <input
//             type='text'
//             name=''
//             id=''
//             className='bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]'
//           />
//           <label htmlFor='' className='mt-4'>
//             Avatar
//           </label>
//           <input
//             type='text'
//             name=''
//             id=''
//             className='bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]'
//           />
//           <label htmlFor='' className='mt-4'>
//             Avatar
//           </label>
//           <input
//             type='text'
//             name=''
//             id=''
//             className='bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]'
//           />
//           <label htmlFor='' className='mt-4'>
//             Avatar
//           </label>
//           <input
//             type='text'
//             name=''
//             id=''
//             className='bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;