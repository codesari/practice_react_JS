import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  //? react fragment --> <></>
  //? return nün yukarısı js alanidir.return ün ici JSX alanidir
  //? JSX alaninda js kod yazarken süslü parantez kullanmamız gerekir
  //? java in JSX --> {}
  //* map yerine foreach kullanamayız.çünkü foreach return etmiyor
  return (
    <>
      {data.map((item, index) => {
        const { id, language, img, btnName } = item;

        return <Card key={index} lang={language} img={img} btn={btnName} />;
      })}
      {/* <Card data={data} /> props ile Card componente gönderme yöntemi */}
    </>
  );
}

export default App;
