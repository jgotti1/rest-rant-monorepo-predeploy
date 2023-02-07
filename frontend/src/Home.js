import image from "./images/rest.jpg";

function Home() {
  return (
    <main>
      <h1>HOME</h1>
      <div>
        <img height="500" width="800" src={image} alt="Restaurant" />
        <div>
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
        </div>
      </div>
    </main>
  );
}

export default Home;
