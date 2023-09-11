import React from "react";
import { Table } from "react-bootstrap";

const About = () => {
  return (
    <>
      <h5 className=" text-uppercase text-info">About Balaji Farm</h5>
      <p>
        Raw denim you probably haven't heard of them jean shorts Austin.
        Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
        cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
        butcher retro keffiyeh dreamcatcher synth.
      </p>

      <h5 className=" text-uppercase text-info mt-2">Biography</h5>
      <p>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus
      </p>
      <p>
        because it is pleasure, but because those who do not know how to pursue
        pleasure rationally encounter consequences that are extremely painful.
        Nor again is there anyone who loves or pursues or desires to obtain pain
        of itself, because it is pain, but because occasionally circumstances
        occur in which toil and pain can procure him some great pleasure.
      </p>
      <h5 className=" text-uppercase text-info mt-2">Farm Location</h5>
      <iframe
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14891.234426678757!2d74.77940797802455!3d21.08030514728668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bded75a721034a1%3A0xf4d25a7d818a6ace!2sSongir%2C%20Maharashtra%20424309!5e0!3m2!1sen!2sin!4v1660464762237!5m2!1sen!2sin"
      />
    </>
  );
};

export default About;
