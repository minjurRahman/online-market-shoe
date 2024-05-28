import React from "react";

const about = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/run-nike-running-shoes-646cdd1a19c41.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
          className="w-1/2 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold  mb-4">About Our Shoe Company</h1>
          <div className=" min-h-screen">
            <div className="container mx-auto py-8">
              <p className=" mb-4">
                At XYZ Shoes, we're passionate about providing comfortable,
                stylish footwear for every occasion. Our journey began over a
                decade ago with a mission to revolutionize the shoe industry by
                combining innovative design with the highest quality materials.
              </p>
              <p className=" mb-4">
                With a team of dedicated designers and craftsmen, we
                meticulously craft each pair of shoes to ensure optimal fit,
                durability, and style. From casual sneakers to formal dress
                shoes, our diverse collection caters to the needs of individuals
                from all walks of life.
              </p>
              <p className=" mb-4">
                Sustainability is at the core of our values. We strive to
                minimize our environmental footprint by using eco-friendly
                materials and ethical production practices. By choosing XYZ
                Shoes, you're not only investing in premium footwear but also
                contributing to a greener, more sustainable future.
              </p>
              <p className=" mb-4">
                Our commitment to customer satisfaction drives everything we do.
                Whether you're shopping online or visiting one of our retail
                stores, our friendly team is dedicated to providing exceptional
                service and helping you find the perfect pair of shoes.
              </p>
              <p className=" mb-4">
                Thank you for choosing XYZ Shoes. We look forward to being part
                of your journey, one step at a time.
              </p>
            </div>
          </div>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default about;
