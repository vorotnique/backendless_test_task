import './HomePage.scss';

export default function HomePage() {
  return (
    <section className="HomePage">
      <h1 className="HomePage__header">Raw Thoughts</h1>
      <p className="HomePage__info">
        This page is here just for the sake of existing, since something should
        be on the main route. If I understood the task correctly, the tabs
        content is completely random and the navigation links are downloaded
        from the external source, and that's a strange desicion, but whatever.
        If it's for REST API demonstration instead of simple local JSON import,
        let it be that way, but the JSON is hosted on a freemium online service
        and seems to have limited amount of queries. The number is about 10 000,
        but still.
      </p>
    </section>
  );
}
