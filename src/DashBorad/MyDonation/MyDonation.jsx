import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const MyDonation = () => {
  const { user: authUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myDonatePets/${authUser.email}`);
      // console.log(res.data);
      return res.data;
    },
  });

  const handleRefundMoney = (user, amount) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to refund this amount: " + amount + " $",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(user, amount);
        axiosSecure
          .patch(`/refund/${user._id}/${authUser.email}`, { amount })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              // console.log(res.data);
              Swal.fire(
                "Refunded!",
                "Your money has been refunded.",
                "success"
              );
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
       <Helmet>
        <title>Pet Adoption | My Donations</title>
      </Helmet>
      <div>
        <h2 className="text-5xl text-center font-extrabold text-purple-600 mb-5">My Donations</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-sky-300">
              <th></th>
              <th className="text-sm font-bold text-black ">Pet image</th>
              <th className="text-sm font-bold text-black ">Pet name</th>
              <th className="text-sm font-bold text-black ">Donated amount</th>
              <th className="text-sm font-bold text-black ">Refund</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const donators = user.donators || [];
              const userDonations = donators.filter((p) => p.email === authUser.email);
              const totalDonated = userDonations.reduce((total, p) => total + p.donate, 0);

              return totalDonated > 0 ? (
                <tr key={user._id}>
                  <th></th>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={user.image} alt={user.name} />
                      </div>
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>
                    {(totalDonated / 100).toFixed(2)} $
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleRefundMoney(
                          user,
                          (totalDonated / 100).toFixed(2)
                        )
                      }
                      className="btn btn-outline btn-sm border-b-4 border-black rounded-b-lg"
                    >
                      Ask for refund
                    </button>
                  </td>
                </tr>
              ) : null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonation;
