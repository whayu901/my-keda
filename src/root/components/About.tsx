import React, { memo } from "react";

const About = () => {
  return (
    <section id="about" className=" ">
      <div className="container">
        <h1 className="mb-3 text-xl font-bold">About Us</h1>
        <span className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quis.
          Ducimus sapiente eum, amet sequi omnis facere earum asperiores!
          Expedita corrupti dolorem inventore consectetur unde, <br /> sapiente
          rerum! Facere, aperiam quisquam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Architecto voluptates quam, cumque
          inventore facere nobis totam dolor, illum commodi rerum earum fugiat
          esse voluptatibus nemo rem optio doloribus enim officiis.
        </span>
      </div>
    </section>
  );
};

export default memo(About);
