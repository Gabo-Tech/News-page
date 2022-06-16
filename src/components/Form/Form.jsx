import styles from "./Form.module.sass";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const initialState = {
    title: "",
    article: ""
  };
  const [data, setData] = useState({ initialState });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const clearState = () => {
    setData({ ...initialState });
  };
  const handleInputChange = (event) => {
    if (data.title.length < 5) {
      setMessage("Title minimum of 6 characters.");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(data);
    clearState();
    setMessage("Form sent succesfully!");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  function saveData(data) {
    localStorage.setItem(
      "news",
      JSON.stringify({
        title: data.title,
        article: data.article
      })
    );
  }

  return (
    <div className={styles.form}>
      <h1>Submit here your article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={handleInputChange}
          name="title"
        />
        <textarea
          rows="10"
          cols="23"
          type="text"
          placeholder="New body"
          value={data.article}
          onChange={handleInputChange}
          name="date"
          min={new Date().toISOString().split("T")[0]}
        />
        <input
          type="date"
          placeholder="New body"
          onChange={handleInputChange}
          value={data.date}
          name="date"
          min={new Date().toISOString().split("T")[0]}
        />
        <button type="submit" disabled={btnDisabled}>
          Enviar
        </button>
        {message}
      </form>
    </div>
  );
}
