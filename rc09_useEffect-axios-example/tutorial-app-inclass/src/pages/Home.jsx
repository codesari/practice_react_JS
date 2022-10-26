import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// axios'u projeye eklemistik sadece import ediyoruz
// fetch yerine 3.parti uygulama olan axios kullandik

const Home = () => {
  // cektigimiz veri array tipinde old.icin state'i de array olarak tanimladik.
  const [tutorials, setTutorials] = useState([]);
  const url = " https://cw-axios-example.herokuapp.com/api/tutorials";
  const getTutorials = async () => {
    // havada destr..
    const { data } = await axios(url);
    // axios dogrudan veriyi alıp json'a ceviriyor.bu yüzden json islemi yapmadik
    // console.log(data);
    // data.data demek yerine data'yı destr..yaptık {data}
    setTutorials(data);
  };
  // ? didmount
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial />
      <TutorialList tutor={tutorials} />
    </>
  );
};

export default Home;
