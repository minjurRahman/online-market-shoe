const Banner = () => {
  const styles = {
    backgroundImage:
      'url("https://img.freepik.com/premium-photo/white-sports-shoes-heart-shape-from-laces-red-background-simple-flat-lay-banner-with-copy-space_313478-210.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // width: "100%",
    height: "70vh", // Adjust the height as needed
  };

  return (
    <div className="hero" style={styles}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
