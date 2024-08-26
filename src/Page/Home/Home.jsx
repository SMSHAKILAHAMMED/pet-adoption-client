import { Helmet } from "react-helmet-async";
import Banner2 from "../../Shared/Banner/Banner2";
import CallToAction from "./CallToAction";
import Testimonials from "./Testimonial";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import PetsCetegory from "./PetsCetegory";
import PetCare from "./PetCare";
import SocialMedia from "./SocialMedia";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div className="overflow-x-hidden ">
      <Helmet>
        <title>Pet Adoption | Home</title>
      </Helmet>
      <Banner2></Banner2>
      <Marquee className="container mx-auto mt-10 text-black bg-white border border-black p-3">
        <Link to="/">Pet adoption is the process of transferring responsibility for a pet that was previously owned by another party. Common sources for adoptable pets are animal shelters, rescue groups, or other pet owners. Some organizations give adopters ownership of the pet, while others use a guardianship model wherein the organization retains some control over the animal future use or care.Online pet adoption sites have databases, searchable by the public, of pets being housed by thousands of animal shelters and rescue groups.</Link>
      </Marquee>
      <PetsCetegory></PetsCetegory>
      <CallToAction></CallToAction>
      <PetCare></PetCare>
      <Testimonials></Testimonials>
      <AboutUs></AboutUs>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Home;
