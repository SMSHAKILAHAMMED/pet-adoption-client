import { useEffect, useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { BiVerticalBottom } from "react-icons/bi";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../ImageHostingApi/ImageHostingApi";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UpdatePets = () => {
  const [prevData, setPrevData] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure(`https://pet-adoption-server-hazel.vercel.app//myAdded/?id=${params.id}`).then((res) => {
      setPrevData(res.data[0]);
    });
  }, [axiosSecure, params.id]);

  const { name, age, type, img, short, long, location } = prevData || {};
  const { register, reset, handleSubmit, formState: { errors }, control } = useForm();
  const { user } = useAuth();
  const [selectedOption, setSelectedOption] = useState(type);

  useEffect(() => {
    reset({
      name,
      age,
      type,
      location,
      short: short,
      long: long
    });
  }, [reset, name, age, type, location, short, long]);

  const onSubmit = async (data) => {
    let newImage = img;
    if (data.photo.length) {
      try {
        const imgData = await imageUpload(data.photo[0]);
        newImage = imgData;
      } catch (err) {
        console.error(err);
      }
    }

    const petDetails = {
      name: data.name || name,
      type: selectedOption || type,
      img: newImage,
      location: data.location || location,
      age: data.age || age,
      short: data.short || short,
      long: data.long || long,
    };

    axiosSecure.patch(`updateMyaddedPets/${params.id}`, petDetails).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/dashboard/myAddedPets");
      }
    });
  };

  const options = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Rabbit", label: "Rabbit" },
    { value: "Birds", label: "Birds" },
    { value: "Reptiles", label: "Reptiles" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
  };

  return (
    <div>
      <Helmet>
        <title>Pet Adoption | Update My Added Pets</title>
      </Helmet>
      <div className="relative">
        <div className="max-w-[900px] px-4 py- sm:px-6 lg:px-8 mx-auto">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="lg:max-w-[900px] lg:mx-auto ms-auto">
                <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                  <div className="text-center">
                    <h1 className="block text-4xl font-bold text-gray-800 dark:text-white">Update Pets</h1>
                  </div>

                  <div className="mt-5">
                    <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
                      <BiVerticalBottom />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Pet Name :</span>
                        </label>
                        <input
                          type="text"
                          {...register("name")}
                          defaultValue={name}
                          name="name"
                          placeholder="Name"
                          className="input input-bordered"
                        />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Pet Age :</span>
                        </label>
                        <input
                          type="text"
                          {...register("age")}
                          defaultValue={age}
                          name="age"
                          placeholder="Pet age"
                          className="input input-bordered"
                        />
                        {errors.age && <span className="text-red-600">Age is required</span>}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Pet Image :</span>
                        </label>
                        <input
                          type="file"
                          {...register("photo")}
                          name="photo"
                          placeholder="Photo"
                          className="input"
                        />
                        {errors.photo && <span className="text-red-600">Image is required</span>}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Category :</span>
                        </label>
                        <Controller
                          name="type"
                          control={control}
                          defaultValue={selectedOption}
                          render={({ field }) => (
                            <Select
                              {...field}
                              value={options.find(option => option.value === field.value) || options.find(option => option.value === type)}
                              onChange={(val) => {
                                field.onChange(val.value);
                                handleChange(val);
                              }}
                              options={options}
                              placeholder="Select for pet category"
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Pet Location :</span>
                      </label>
                      <input
                        type="text"
                        {...register("location")}
                        defaultValue={location}
                        name="location"
                        placeholder="Write your location"
                        className="input input-bordered"
                      />
                      {errors.location && <span className="text-red-600">Location is required</span>}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Short Description :</span>
                      </label>
                      <input
                        type="text"
                        {...register("short")}
                        defaultValue={short}
                        name="short"
                        placeholder="Pet short description"
                        className="input input-bordered"
                      />
                      {errors.short && <span className="text-red-600">Short Description is required</span>}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Long Description :</span>
                      </label>
                      <Controller
                        name="long"
                        control={control}
                        defaultValue={long}
                        render={({ field }) => (
                          <ReactQuill
                            {...field}
                            theme="snow"
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Pet long description"
                          />
                        )}
                      />
                      {errors.long && <span className="text-red-600">Long Description is required</span>}
                    </div>
                    <div className="mt-5 flex justify-center">
                      <button
                        type="submit"
                        className="rounded-md w-1/3 btn overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ff4880] text-[#1e847f] hover:text-white"
                      >
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ff4880] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative my-auto text-[#ff4880] transition duration-300 group-hover:text-white ease">Update</span>
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
  );
};

export default UpdatePets;
