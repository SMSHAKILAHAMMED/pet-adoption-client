import { useEffect, useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { BiVerticalBottom } from "react-icons/bi";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../ImageHostingApi/ImageHostingApi";
import { Helmet } from "react-helmet-async";

const AdminOnlyUpdate = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const loadedData = useLoaderData();
  // console.log(loadedData);

  const { _id, name, age, type, img, description, description2, location } = loadedData;
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const { user } = useAuth();
  const [selectedOption, setSelectedOption] = useState();
  const [fileInput, setFileInput] = useState(null);

  useEffect(() => {
    reset();
  }, [reset]);

  const onSubmit = async (data) => {
    let newImage = img;
    if (fileInput && fileInput.files.length) {
      try {
        const imgData = await imageUpload(fileInput.files[0]);
        newImage = imgData;
        // console.log(imgData);
      } catch (err) {
        // console.log(err);
      }
    }
    const petDetails = {
      name: data.name || name,
      type: selectedOption || type,
      img: newImage,
      location: data.location || location,
      age: data.age || age,
      description: data.note1 || description,
      description2: data.note2 || description2,
    };
    // console.log(petDetails);
    axiosSecure.patch(`updateMyaddedPets/${_id}`, petDetails).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/dashboard/fets");
      }
    });
  };

  const options = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Rabbit", label: "Rabbit" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
    // console.log(`Option selected:`, selectedOption);
  };

  return (
    <div>
       <Helmet>
        <title>Pet Adoption | Admin Pets Update </title>
      </Helmet>
      <div className="relative">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:max-w-lg lg:mx-auto ms-auto">
                  <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                    <div className="text-center">
                      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                        Update Pets By Admin
                      </h1>
                    </div>

                    <div className="mt-5">
                      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
                        <BiVerticalBottom />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            {...register("name")}
                            name="name"
                            defaultValue={name}
                            placeholder="Name"
                            className="input input-bordered"
                          />
                          {errors.name && (
                            <span className="text-red-600">
                              Name is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Age</span>
                          </label>
                          <input
                            type="text"
                            {...register("age")}
                            name="age"
                            defaultValue={age}
                            placeholder="peat age"
                            className="input input-bordered"
                          />
                          {errors.age && (
                            <span className="text-red-600">
                              Age is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Image</span>
                          </label>
                          <input
                            type="file"
                            ref={setFileInput}
                            name="photo"
                            placeholder="Photo"
                            className="input"
                          />
                          {errors.photo && (
                            <span className="text-red-600">
                              Image is required
                            </span>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Type</span>
                          </label>
                          <Select
                            value={selectedOption}
                            defaultValue={type}
                            onChange={handleChange}
                            options={options}
                            placeholder={selectedOption}
                          />
                        </div>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">location</span>
                        </label>
                        <input
                          type="text"
                          {...register("location")}
                          name="location"
                          defaultValue={location}
                          placeholder="write reciver location"
                          className="input input-bordered"
                        />
                        {errors.location && (
                          <span className="text-red-600">
                            Location is required
                          </span>
                        )}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Short Note</span>
                        </label>
                        <input
                          type="text"
                          {...register("note1")}
                          name="note1"
                          defaultValue={description}
                          placeholder="Note About Peat"
                          className="input input-bordered"
                        />
                        {errors.note1 && (
                          <span className="text-red-600">Note is required</span>
                        )}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Description</span>
                        </label>
                        <textarea
                          {...register("note2")}
                          defaultValue={description2}
                          className="textarea textarea-secondary"
                          placeholder="Write Above Peats"
                        ></textarea>

                        {errors.note1 && (
                          <span className="text-red-600">Note is required</span>
                        )}
                      </div>

                      <div className="mt-5 flex justify-center">
                        <button
                          type="submit"
                          value={""}
                          className="rounded-md w-1/3  btn  overflow-hidden relative group cursor-pointer border-2  font-medium border-[#ff4880] text-[#1e847f]hover:text-white"
                        >
                          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ff4880] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                          <span className="relative my-auto  text-[#ff4880] transition duration-300 group-hover:text-white ease">
                            Update
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOnlyUpdate;
