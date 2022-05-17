import Image from "next/image";

const CEOImage = "/assets/ceo_image.jpg";
const CEODescription = "Liam O'Neill";

const EmployeeCard = ({ name, title, img }) => (
  <div className="card">
    <div>
      <Image src={CEOImage} alt={CEODescription} width={300} height={300} />
    </div>
    <h3 className="text-center">
      {name}, <span className="fst-italic">{title}</span>
    </h3>
  </div>
);

export default EmployeeCard;
