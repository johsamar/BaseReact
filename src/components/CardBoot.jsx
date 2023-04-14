import { BsFillAirplaneFill } from "react-icons/bs";

const CardBoot = () => {
  return (
    <div class="card" style={{width: "18rem"}}>
      <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/06/18/03/chalet-restaurante.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
        <BsFillAirplaneFill/>
      </div>
    </div>
  );
};

export default CardBoot;
