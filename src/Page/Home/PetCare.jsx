import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const PetCare = () => {
  return (
    <div>
      <SectionTitle
        subHeading={" Pet Care "}
        heading={"Extra Part Section"}
      ></SectionTitle>
      <div  className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
        <img  className="rounded-xl h-full"
          src="https://i.ibb.co/nCcQXrf/b2e02f-023629390e8f489b94ea7b60fe6f3e87-mv2.webp"
          alt="img"
        />
        </div>
        <img className="rounded-xl h-full"
          src=" https://i.ibb.co/X8xf7sy/gratisography-cool-cat.jpg "
          alt="img"
        />
        <img className="rounded-xl"
          src="https://kit.envalabdemos.com/peat/wp-content/uploads/2023/09/cute-little-kittens-crying-in-carrier-box-two-hun-2021-09-02-10-55-28-utc-1.jpg  "
          alt="img"
        />
        <img className="rounded-xl h-full"
          src="https://i.ibb.co/tDvsF1v/images-9.jpg"
          alt="img"
        />
        <img className="rounded-xl"
          src="https://kit.envalabdemos.com/peat/wp-content/uploads/2023/09/national-pet-adoption-day-2021-08-29-01-05-31-utc.jpg   "
          alt="img"
        />
        <img className="rounded-xl h-full" style={{ cursor: 'pointer' }}
          src="https://i.ibb.co/d2h73gv/adopt-gallery.png "
          alt="img"
        />
       
      </div>
    </div>
  );
};

export default PetCare;
