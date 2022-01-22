import {Link} from "react-router-dom";

const Landing = () => {
  return(
    <>
      <Link to={"/coins"}>
        See the coin List
      </Link>
    </>
  )
}

export default Landing;