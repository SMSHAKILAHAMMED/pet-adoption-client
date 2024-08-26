import "react-tabs/style/react-tabs.css";
import "../Home/Category.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const PetsCetegory = () => {
   
   
  return (
    <div className="">
      <SectionTitle heading={'Pets category section'} subHeading={'--FUNDRAISING CAMPAINGS--'}>
      </SectionTitle>
      <div className="flex justify-center items-center mx-auto px-4 my-10">
       {/* Card-section */}
       <section className=" dark:bg-gray-100 dark:text-gray-800">
                <div className="container text-center mx-auto">
                    <div className="space-y-2 text-center mb-20">
                        <p className="font-serif text-sm dark:text-gray-600">Common sources for adoptable pets are animal shelters, <br /> rescue groups, or other pet owners. Some organizations give adopters ownership of the pet...</p>
                    </div>
                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-8 gap-24 ">
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/2hkr3rZ/360-F-97589769-t45-Cq-Xyzjz0-KXwo-BZT9-PRa-WGHRk5h-Qq-Q.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Cat</h2>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/FxvvTZ6/taylor-kopel-WX4i1-Jq-o0-Y-unsplash.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Dog</h2>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/4pFzy0b/istockphoto-173893247-2048x2048.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Rabbit</h2>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/YXvwh8d/istockphoto-1269216880-2048x2048.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Fish</h2>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/HxcjWsX/istockphoto-629628952-2048x2048.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Monkey</h2>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/Sm72wD9/unnamed.webp" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Deer</h2>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
      </div>
    </div>
  );
};

export default PetsCetegory;
