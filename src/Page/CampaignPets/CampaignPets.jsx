import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const fetchCampaigns = async ({ pageParam = 1 }) => {
  const axiosPublic = useAxiosPublic();
  const res = await axiosPublic.get(`/campaignAllPeats?page=${pageParam}&limit=10`);
  return res.data;
};

const CampaignPets = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["campaigns"],
    queryFn: fetchCampaigns,
    getNextPageParam: () => {
    },
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div>
       <Helmet>
        <title>Pet Adoption | Donation Campaigns</title>
      </Helmet>
      <header>
        <div
          className={`max-w-7xl h-[200px] mx-auto rounded-b-md bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]`}
        >
          <div className="">
            <h1 className="text-5xl pt-24 text-center font-bold text-[#393d72] mt-">
             Donation Campaigns
            </h1>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2">
        {status === "loading" ? (
          // Render skeleton loaders while data is loading
          Array(6)
            .fill()
            .map((_, index) => (
              <div key={index}>
                <Skeleton width={300} height={10} count={5} style={{ marginBottom: '7px' }} />
              </div>
            ))
        ) : (
          // Render actual campaign data
          data?.pages.map((page) =>
            page.map((campaignItem) => (
              <div key={campaignItem._id}>
                <div className="px-0 border bg-[#fbebe2] rounded-xl">
                  <figure className="w-full bg-cover">
                    <img
                      src={campaignItem.image}
                      alt="No uploaded any image"
                      className="rounded-t-xl h-72 rounded-br-full bg-cover w-full"
                    />
                  </figure>
                  <div className="px-5">
                    <div className="flex justify-between">
                      <h2 className="card-title font-bold text-2xl">{campaignItem.name}</h2>
                      <h2 className="font-bold">{campaignItem.date}</h2>
                    </div>
                    <div className="text-sm font-bold text-gray-500">
                      <p>Max donat amount : {campaignItem.maxDonation} $</p>
                      <p> Donated amount : {campaignItem.donatedAmount} $</p>
                    </div>
                    <div className="w-full flex justify-end my-2 mb-3">
                      <Link to={`/campaignDetails/${campaignItem._id}`}>
                        <button className="btn btn-outline rounded-md btn-sm overflow-hidden relative group cursor-pointer border-2 font-medium border-sky-500 text-black hover:text-white">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
        )}
      </div>

    </div>
  );
};

export default CampaignPets;
