const Banner = () => {
  return (
    <div
      className="hero "
      style={{
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/2b8f/f4be/d57b5fb5ad84c9f6a9b1eb9782e9b11b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bL~VLdsv-hRuXW~LIvEdTJne2vh1Xx0I33l~ndKRnQxhJymvKrRGAQEFj6iMi9FKXYy9o~JO5tu7XLBaZFPOH4LqdB1ePmBMeVtBNrYLyHB9~tf-aR3ia965uDSadF8m9QECrpx5TnhX8FdpUEJK92nCiDnMD3qy4lc3GT8VZPqyjoSswP6pCW-3xicITpf8wMaczVaq21kbMm970QukhImhycQ6E1BO9yVxh~vqHAWU9ktR5r5JO0tZR35aCGjHhASku9FbOXKdua1Dr2f2fU1yvc6bpsvSBuAb7eW0xUG8Nh0g9HaMoRoyKbhbq~4~Nm9nUEObIm~wIKpDZdh4YA__)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "600px",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="text-center text-neutral-content">
        <div className="px-44 ">
          <h1 className="text-5xl font-bold mb-7">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-7">
            Uncover a bespoke culinary journey with our exclusive cooking
            classes, meticulously crafted to cater to your unique palate,
            preferences, and expertise. Delight in a personalized culinary
            adventure that promises an exceptional experience tailored precisely
            to your desires.
          </p>
          <div className="space-x-5">
            <button className="btn bg-[#0BE58A] btn-success text-black font-semibold">
              Explore Now
            </button>
            <button className="border border-white rounded-xl p-3 font-">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
