import { useState } from "react";

// state leri tek bir obje icinde tanimlayabiliriz.bu bize efektiflik sağlar.cok sayida hook oldugu zaman ayri ayri tanimlamaık yerine tek bir statement üzerinden tanimlama imkina sunar
// 3 tane state'i bir objede birlestirdik
const FormObject = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  // asagida rahat kullanmak icin destr.. yapıyoruz.aksi takdirde "formValues.username" seklinde kullancaktık
  const { username, email, password } = formValues;

  const handleSubmit = (e) => {
    // form'un onSubmit metodu submitten sonra value'leri otomatik sildigi icin e.target'ı göremiyoruz.bu yüzden preventDefault kullanıyoruz.
    e.preventDefault();
    console.log(e.target);
    console.log("submitted");
    // alert'i sanki backend'e gönderiyormus gibi kullandik
    alert(`username :${username}`);
    // form resetleme
  };
  const handleForm = (e) => {
    // tek bir onChange parametresi yani handleForm oldugu icin formda bir degisiklik yapmak istedigimde ilgili degisikligin nerden geldigini anlamam gerekiyor.bunun icin e.target.name,value,id gibi propları kullanabilirim.
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.id);
    // setFormValues'in state'leri obje old.icin setFormValues'ün icinde süslü parantez aciyoruz
    // ... formValues obje icindeki arrayleri ayrı ayrı acmis oldu.burada tek bir array var bu yüzden burada obje icindeki keyleri acmis olduk.
    // setFormValues({ ...formValues, key: value });
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    // square-bracket kullanmanın avantaji icine degisken yazabilmemiz
    // "e.target.id" bir degisken old.icin yani "username","email" ya da bir baska key gelebilecegi icin square-bracket notasyonu kullanmam gerekiyor.cünkü bu notasyonda iceri degisken yazabiliyoruz
  };

  return (
    // onSubmit, form'un özelligi butonun degil.karistirma!!!
    <form onSubmit={handleSubmit}>
      <h1 className=" display-1 text-warning">FORMS</h1>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          User Name : <span className="text-success">{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={handleForm}
          value={username}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email : <span className="text-danger">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={handleForm}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handleForm}
          value={password}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormObject;
