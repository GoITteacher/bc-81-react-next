interface PageProps {
  params: Promise<{ filters: string[] }>;
}

const Page = async ({ params }: PageProps) => {
  const { filters } = await params;
  const model = filters[0];
  const year = filters[1];
  const engine = filters[2];
  const param1 = filters[3];
  const param2 = filters[4];

  return (
    <div>
      <h1>CAR BY MAKE</h1>
      <aside>Sidebar</aside>
      <ul>LIST</ul>

      {model && <p>Model: {model}</p>}
      {year && <p>year: {year}</p>}
      {engine && <p>engine: {engine}</p>}
    </div>
  );
};

export default Page;
