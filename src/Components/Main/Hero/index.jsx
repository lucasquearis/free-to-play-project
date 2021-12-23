import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <article className="main-hero">
      <p className="text-hero">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        accusamus fugit, perspiciatis debitis nam explicabo voluptates, nostrum
        maxime tempore magni quia alias ea ad, id quis similique expedita minus
        nihil!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Natus, accusamus at accusantium et totam rem obcaecati voluptates iusto.
        Itaque reiciendis aperiam doloribus eos earum ducimus delectus ipsa
        impedit quas cum! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Enim adipisci delectus aut dolorem, repellendus eaque sed hic
        numquam eligendi ipsa saepe. Ut vel ipsa distinctio dolores, quo quod.
        Nulla, assumenda?
      </p>
      <form>
        <label htmlFor="">
          Nome:
          <input></input>
        </label>
        <label htmlFor="">
          <button>Procurar</button>
        </label>
      </form>
    </article>
  );
};

export default Hero;
