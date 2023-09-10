//import Nav from './Nav';
// import About from './About';
// import Posts from './Posts';
// import Photo from './Photo';
// import image1 from '../../images/img1.png';

//Redux State Management & React
// import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getCurrentProfile } from '../../redux/actions/profileActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ getCurrentProfile, user, profile }) => {
  //Upon mount, execute getCurrentProfile
  useEffect(() => {
    getCurrentProfile();
  }, []);

  console.log(profile);
  return (
    <section className='container'>
      <div>
        <h1 className='large text-primary'>Dashboard</h1>
        {profile && profile.user && (
          <p>
            Name: {profile.user.firstname} {profile.user.lastname}
          </p>
        )}
        {profile && <p>Company: {profile.company}</p>}
        {profile && <p>Website: {profile.website}</p>}
        {profile && <p>Location: {profile.location}</p>}
        {profile && <p>Status: {profile.status}</p>}

        <h2>Skills</h2>
        <ul>
          {profile && profile.skills ? (
            profile.skills.map((skill, index) => <li key={index}>{skill}</li>)
          ) : (
            <li>No skills available</li>
          )}
        </ul>

        <h2>Bio</h2>
        {profile && <p>{profile.bio}</p>}

        <h2>Experience</h2>
        {profile && profile.experience ? (
          profile.experience.map((experience) => (
            <div key={experience._id}>
              <p>Title: {experience.title}</p>
              <p>Company: {experience.company}</p>
              <p>Location: {experience.location}</p>
              <p>From: {experience.from}</p>
              <p>To: {experience.to}</p>
              <p>Description: {experience.description}</p>
            </div>
          ))
        ) : (
          <p>No experience available</p>
        )}

        <h2>Education</h2>
        {profile && profile.education ? (
          profile.education.map((education) => (
            <div key={education._id}>
              <p>School: {education.school}</p>
              <p>Degree: {education.degree}</p>
              <p>Field of Study: {education.fieldofstudy}</p>
              <p>From: {education.from}</p>
              <p>To: {education.to}</p>
              <p>Description: {education.description}</p>
            </div>
          ))
        ) : (
          <p>No education available</p>
        )}
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userReducer,
  profile: state.profileReducer.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

// const Dashboard = () => {
//   const [about, setAbout] = useState(true);
//   const [post, setPost] = useState(false);
//   const [photos, setPhotos] = useState(false);

//   const postFunction = () => {
//     setAbout(false);
//     setPost(true);
//     setPhotos(false);
//   };

//   const aboutFunction = () => {
//     setAbout(true);
//     setPost(false);
//     setPhotos(false);
//   };

//   const photoFunction = () => {
//     setAbout(false);
//     setPost(false);
//     setPhotos(true);
//   };

//   return (
//     <>
//       <div className='bg-[#E8E7EF] pt-8 pb-5 lg:xl:py-9 px-16'>
//         <div className='flex items-center justify-center space-x-4'>
//           <img
//             src={image1}
//             className='w-[8rem] lg:w-[10rem] xl:w-[11rem]'
//             alt=''
//           />
//           <span className='font-[600] tracking-wide'>abc test</span>
//         </div>
//         <hr className='border border-[#BEBDC4] m-4' />
//       </div>

//       {about && <About postOpen={postFunction} photoOpen={photoFunction} />}

//       {post && <Posts aboutOpen={aboutFunction} photoOpen={photoFunction} />}

//       {photos && <Photo aboutOpen={aboutFunction} postOpen={postFunction} />}

//       {/* <div className="pt-8 pb-5 lg:xl:py-9 px-16 bg-[#DEDDE8]">
//                 <div className="bg-white flex flex-col md:flex-row rounded-[10px] ">
//                     <div className="flex md:flex-col py-4 px-6 justify-center space-x-6 text-sm xl:text-base md:items-start md:justify-start md:space-x-0 md:space-y-6 md:pt-14 xl:px-20 md:border-r border-[#B8B8B8]">
//                         <p>Overwiew</p>
//                         <p className="text-blue-500">Edit Profile</p>
//                     </div>
//                     <hr className="border mx-5 border-[#BEBDC4] mt-4"/>

//                     <div className="flex flex-col py-4 px-6 ">
//                         <label htmlFor="">Avatar</label>
//                         <input  type="text" name="" id=""
//                             className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
//                         <label htmlFor="" className="mt-4">Avatar</label>
//                         <input  type="text" name="" id=""
//                             className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
//                         <label htmlFor="" className="mt-4">Avatar</label>
//                         <input  type="text" name="" id=""
//                             className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
//                         <label htmlFor="" className="mt-4">Avatar</label>
//                         <input  type="text" name="" id=""
//                             className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
//                         <label htmlFor="" className="mt-4">Avatar</label>
//                         <input  type="text" name="" id=""
//                             className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
//                         <label htmlFor="" className="mt-4">Avatar</label>
//                         <input  type="text" name="" id=""
//                             className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
//                         <label htmlFor="" className="mt-4">Avatar</label>
//                         <input  type="text" name="" id=""
//                             className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
//                         <label htmlFor="" className="mt-4">Avatar</label>
//                         <input  type="text" name="" id=""
//                             className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />
//                         <label htmlFor="" className="mt-4">Avatar</label>
//                         <input  type="text" name="" id=""
//                             className="bg-[#E8E8E8] mt-3 md:w-[327px] md:h-[32px]" />

//                     </div>

//                 </div>
//             </div> */}

//       {/* {editprofile && (
//                 <EditProfile
//                     prof ={profile}
//                 />
//             )}

//             {overView && (
//                 <OverView
//                     over={overViewFunction}
//                 />
//             )} */}
//     </>
//   );
// };

// export default Dashboard;
