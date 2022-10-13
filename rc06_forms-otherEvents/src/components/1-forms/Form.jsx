import { useState } from "react";

const Form = () => {
  // burada herbir form icin ayrı ayrı hook yazıyoruz.istersek tek bir obje icinde tüm hook'lari tutabiliriz
  const [username, setUsername] = useState("");
  // usestatesnipped + TAB(ikinci kelimenin büyük harfi icin)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // form'un onSubmit metodu submitten sonra value'leri otomatik sildigi icin e.target'ı göremiyoruz.bu yüzden preventDefault kullanıyoruz.
    e.preventDefault();
    console.log(e.target);
    console.log("submitted");
    // alert'i sanki backend'e gönderiyormus gibi kullandik
    alert(`username :${username}`);
    // form resetleme
    setUsername("");
    setEmail("");
    setPassword("");
  };
  const handleUserName = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  return (
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
          onChange={handleUserName}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
