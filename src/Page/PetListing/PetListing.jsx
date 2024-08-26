import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Helmet } from "react-helmet-async";


const PetListing = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [listingData, setListingData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  useEffect(() => {
    axiosPublic.get(`/allCategory?search=${search}`).then((res) => {
      setListingData(res.data);
      setSelectedData(res.data);
    });
  }, [axiosPublic, search]);
  console.log(selectedData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearch(form.serching.value);
  };
  const handleCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form.value);
    const selected = form.value;
    const remainingBySelected = selectedData.filter((s) => s.type === selected);
    console.log(remainingBySelected);
    setListingData(remainingBySelected);
  };
  return (
    <div className="mb-10">
      <Helmet>
        <title>Pet Adoption | Pet Listing</title>
      </Helmet>
      <header>
        <div
          className={`max-w-7xl h-[200px]  mx-auto rounded-b-md bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]
         `}
        >
          <div>
            <h1 className="text-5xl pt-24 text-center  font-bold mb-5 text-black ">
              Pets for Search field
            </h1>
            <p className="text-center">Add a search field on top of the cards where users can type and search for pets using name.</p>
          </div>
        </div>
      </header>
      <div
        className="md:px-32 p-5 rounded-3xl  w-full border
       mt-1 bg-slate-50  flex flex-col lg:flex-row items-center justify-between"
      >
        <form onSubmit={handleSubmit}>
          <div className="relative z-10 flex space-x-2 py-5 rounded-lg  text-neutral-200">
            <div>
              <input
                type="text"
                name="serching"
                className="py-2.5 md:w-96 px-4 block border-transparent rounded-lg bg-white border border-gray-600 text-black"
                placeholder="Search by pet name and get the pet details.!"
              />
            </div>

            <div className="flex-[0_0_auto] ">
              <button
                type="submit"
                className="btn btn-outline size-[46px] text-sm md:w-52 w-20 inline-flex justify-center items-center gap-x-2  font-semibold rounded-lg border border-transparent text-white bg-indigo-600 disabled:opacity-50 disabled:pointer-events-none"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="w-52">
          <select
            onChange={handleCategory}
            name="category"
            className="select select-secondary w-full max-w-xs"
          >
            <option disabled selected value="">
              Find By Category name
            </option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Birds">Birds</option>
            <option value="Reptiles">Reptiles</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {listingData.length === 0
          ?
          Array(9)
            .fill()
            .map((_, index) => (
              <div key={index}>
                <Skeleton width={300} height={10} count={5} style={{ marginBottom: 'px' }} />
              </div>
            ))
          : // Render actual data
          listingData.map((list) => (
            <div key={list._id}>
              <div className="card bg-base-100 w-96 h-max shadow-xl border-2 border-gray-200">
                <figure className="px-10 pt-10">
                  <img src={list.img} className=" h-64 w-80 rounded-xl" alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-3xl font-bold ">{list.name}</h2>
                  <h2 className=" font-bold ">{list.date}</h2>
                  <h3 className="text-lg font-light">Category : {list.category}</h3>
                  <h2 className="text-base font-light"> Age : {list.age}</h2>
                  <p className="text-xl font-semibold">Location : {list.location}</p>
                  <div className="card-actions">
                    <Link to={`/singlePage/${list._id}`}>
                      <button className="btn btn-outline border-b-2 rounded-b-md border-0 text-black font-bold">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PetListing;
