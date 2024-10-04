import ContentCard from "../components/ContentCard";

const Home = () => {
  type Content = {
    title: string;
    platform: string;
    rating: number;
    imageUrl: string;
  };

  const categories = [
    { id: 0, name: "movie" },
    { id: 1, name: "drama" },
    { id: 2, name: "documentary" },
    { id: 3, name: "animation" },
  ];

  const recommendedContent: Content[] = [
    {
      title: "Stranger Things",
      platform: "Netflix",
      rating: 4.5,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "The Mandalorian",
      platform: "Disney+",
      rating: 4.7,
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const contents: { [key: string]: Content[] } = {
    movie: [
      {
        title: "Inception",
        platform: "Netflix",
        rating: 4.8,
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
    drama: [
      {
        title: "Breaking Bad",
        platform: "Netflix",
        rating: 4.9,
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
    documentary: [
      {
        title: "Planet Earth",
        platform: "Amazon Prime",
        rating: 4.6,
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
    animation: [
      {
        title: "Spirited Away",
        platform: "Netflix",
        rating: 4.8,
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  };
  console.log(contents);

  return (
    <div>
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Recommended Content</h2>
        <div className="grid grid-cols-2 gap-6">
          {recommendedContent.map((content, index) => (
            <ContentCard key={index} {...content} />
          ))}
        </div>
      </section>

      {Object.keys(contents).map((category) => (
        <section key={category} className="p-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-2 gap-6">
            {contents[category].map((content, index) => (
              <ContentCard key={index} {...content} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
