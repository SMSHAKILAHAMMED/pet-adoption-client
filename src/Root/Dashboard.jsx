import {
  FaAd,
  FaAdn,
  FaCalendar,
  FaCampground,
  FaCanadianMapleLeaf,
  FaCreativeCommons,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,

} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin()
  // console.log(isAdmin);

  return (
    <div className=" bg-gradient-to-bl via-transparent ">
      <div className="flex bg-gradient-to-bl from-violet-400 via-transparent max-w-screen-xl mx-auto ">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen text-black bg-orange-500">
          <ul className="menu p-4">

            {/* shared nav links */}
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/listing">
                <FaSearch></FaSearch>
                Pet Listing
              </NavLink>
            </li>
            <li>
              <NavLink to="/campaign">
                <FaCampground></FaCampground>
                Donation Campaign
              </NavLink>
            </li>
            <div className="divider"></div>

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/fets">
                    <FaList></FaList>
                    All Pets
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/AllDonation">
                    <FaList></FaList>
                    All Donation
                  </NavLink>
                </li>

                <hr />

                <li>
                  <NavLink to="/dashboard/addPet">
                    <FaAd></FaAd>
                    Add a pet
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myAddedPets">
                    <FaCalendar></FaCalendar>
                    My added pets
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/adoptionRequest">
                    <FaAdn></FaAdn>
                    Adoption Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/CreateCampaign">
                    <FaCreativeCommons></FaCreativeCommons>
                    Create Donation Campaign
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myDonationCampaign">
                    <FaCanadianMapleLeaf></FaCanadianMapleLeaf>
                    My Donation Campaigns

                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myDonation">
                    <FaList></FaList>
                    My Donations
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/addPet">
                    <FaAd></FaAd>
                    Add a pet
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myAddedPets">
                    <FaCalendar></FaCalendar>
                    My added pets
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/adoptionRequest">
                    <FaAdn></FaAdn>
                    Adoption Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/CreateCampaign">
                    <FaCreativeCommons></FaCreativeCommons>
                    Create Donation Campaign
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myDonationCampaign">
                    <FaCanadianMapleLeaf></FaCanadianMapleLeaf>
                    My Donation Campaigns

                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myDonation">
                    <FaList></FaList>
                    My Donations
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8 pt-24">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
