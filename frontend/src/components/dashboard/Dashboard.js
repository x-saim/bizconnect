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
import Spinner from '../layout/Spinner';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import EducationTable from './EducationTable';
import ExperienceTable from './ExperienceTable';
import { addEductionField } from '../../redux/actions/profileActions';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
} from 'mdb-react-ui-kit';

//Components

const Dashboard = ({
  getCurrentProfile,
  user: { user },
  profile: { profile, loading },
}) => {
  //Upon mount, execute getCurrentProfile
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const navigate = useNavigate();

  return (
    <section className='container'>
      {loading && profile === null ? (
        <Spinner />
      ) : profile !== null ? (
        <>
          <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className='py-5'>
              <h1 className='large text-primary'>Dashboard</h1>
              <MDBRow>
                <MDBCol>
                  <MDBRow>
                    <MDBCol lg='4'>
                      <MDBCard className='mb-4'>
                        <MDBCardBody className='text-center'>
                          <MDBCardImage
                            src={profile.user.avatar}
                            alt='avatar'
                            className='rounded-circle'
                            style={{ width: '150px' }}
                            fluid
                          />
                          <p className='text-muted mb-1'>{profile.status}</p>
                          <p className='text-muted mb-4'>{profile.location}</p>
                          <div className='d-flex justify-content-center mb-2'>
                            <button
                              onClick={() => navigate('/edit-profile')}
                              className='btn btn-dark'
                            >
                              Update Profile
                            </button>
                          </div>
                        </MDBCardBody>

                        {/* <MDBCardBody className='text-center'>
                          <div className='d-flex justify-content-center mb-2'>
                            <MDBBtn>Add Experience</MDBBtn>

                            <MDBBtn outline className='ms-1'>
                              Add Education
                            </MDBBtn>
                          </div>
                        </MDBCardBody> */}
                      </MDBCard>

                      <MDBCard className='mb-4 mb-lg-0'>
                        <MDBCardBody className='p-0'>
                          <MDBListGroup flush className='rounded-3'>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                              <MDBIcon fas icon='globe fa-lg text-warning' />
                              <span>{profile.website}</span>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                              <MDBIcon
                                fab
                                icon='github fa-lg'
                                style={{ color: '#333333' }}
                              />
                              <span>{profile.github}</span>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                              <MDBIcon
                                fab
                                icon='twitter fa-lg'
                                style={{ color: '#55acee' }}
                              />
                              <span>{profile.twitter}</span>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                              <MDBIcon
                                fab
                                icon='instagram fa-lg'
                                style={{ color: '#ac2bac' }}
                              />
                              <span>{profile.instagram}</span>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                              <MDBIcon
                                fab
                                icon='facebook fa-lg'
                                style={{ color: '#3b5998' }}
                              />
                              <span>{profile.facebook}</span>
                            </MDBListGroupItem>
                          </MDBListGroup>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol lg='8'>
                      <MDBCard className='mb-4'>
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol sm='3'>
                              <span>Full Name:</span>
                            </MDBCol>
                            <MDBCol sm='9'>
                              <span className='text-muted'>
                                {profile && profile.user.firstname}{' '}
                                {profile && profile.user.lastname}
                              </span>
                            </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                            <MDBCol sm='3'>
                              <span>Email:</span>
                            </MDBCol>
                            <MDBCol sm='9'>
                              <span className='text-muted'>
                                {profile && profile.user.email}
                              </span>
                            </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                            <MDBCol sm='3'>
                              <span>Phone:</span>
                            </MDBCol>
                            <MDBCol sm='9'>
                              <span className='text-muted'>(111) 222-3333</span>
                            </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                            <MDBCol sm='3'>
                              <span>Mobile</span>
                            </MDBCol>
                            <MDBCol sm='9'>
                              <span className='text-muted'>(111) 222-3333</span>
                            </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                            <MDBCol sm='3'>
                              <span>Address:</span>
                            </MDBCol>
                            <MDBCol sm='9'>
                              <span className='text-muted'>
                                {profile.location}
                              </span>
                            </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                            <MDBCol sm='3'>
                              <span>Company:</span>
                            </MDBCol>
                            <MDBCol sm='9'>
                              <span className='text-muted'>
                                {profile.company}
                              </span>
                            </MDBCol>
                          </MDBRow>
                          <h2 className='medium'>Bio</h2>
                          <p>{profile.bio}</p>
                          <h2 className='medium'>Skills</h2>
                          <ul>
                            {profile.skills ? (
                              profile.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                              ))
                            ) : (
                              <li>No skills available.</li>
                            )}
                          </ul>
                        </MDBCardBody>
                      </MDBCard>

                      {/* Rest of your profile information here */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      ></Box>
                      <h2>Education</h2>
                      <EducationTable
                        rows={
                          profile ? (
                            profile.education
                          ) : (
                            <p>No education available.</p>
                          )
                        }
                      />
                      <h2 className='medium'>Experience</h2>
                      <ExperienceTable
                        rows={
                          profile ? (
                            profile.experience
                          ) : (
                            <p>No experience available.</p>
                          )
                        }
                      />

                      {profile.experience ? (
                        profile.experience.map((experience) => (
                          <div key={experience._id}>
                            <p>Title: {experience.title}</p>
                            <p>Company: {experience.company}</p>
                            <p>Location: {experience.location}</p>
                            <p>Description: {experience.description}</p>
                          </div>
                        ))
                      ) : (
                        <p>No experience available.</p>
                      )}
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </>
      ) : (
        <>
          <h1 className='large text-dark'>Dashboard</h1>
          <Typography variant='p'>
            You have not currently set up your profile{' '}
          </Typography>
          <Typography variant='p'>Your profile shows up here </Typography>
          <Box sx={{ width: '100%', marginY: '12px' }}>
            <button
              onClick={() => navigate('/edit-profile')}
              className='btn btn-dark'
            >
              Set up Profile Now
            </button>
          </Box>
        </>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.authReducer,
  profile: state.profileReducer,
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
