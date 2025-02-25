import React from "react";
import "./TimbreRegistration.css";
import api from "../utils/api";



const TimbreRegistration: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget as HTMLFormElement);
    const jsonData = Object.fromEntries(data.entries());
    api().post("/timbre", jsonData).then((response) => {
      console.log(response);
      window.location.href = "/";
    }
    ).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="form-container">
      <h1>Cadastrar Timbre</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            name="description"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="iconUrl">Ícone URL</label>
          <input
            type="url"
            id="iconUrl"
            name="iconUrl"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="downloadUrl">Download URL</label>
          <input
            type="url"
            id="downloadUrl"
            name="downloadUrl"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="previewUrl">Preview URL</label>
          <input
            type="url"
            id="previewUrl"
            name="previewUrl"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <select
            id="category"
            name="category"
            required
          >
            <option value="synths">Synths</option>
            <option value="keys">Keys</option>
            <option value="organ">Organ</option>
            <option value="accordion">Accordion</option>
            <option value="brass">Brass</option>
            <option value="strings">Strings</option>
            <option value="drums">Drums</option>
            <option value="performance">Performance</option>
            <option value="loops">Loops</option>
            <option value="guitars">Guitars</option>
            <option value="bass">Bass</option>
            <option value="vocals">Vocals</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="type">Tipo</label>
          <select
            id="type"
            name="type"
            required
          >
            <option value="Patch">Patch</option>
            <option value="Performance">Performance</option>
            <option value="Loop">Loop</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default TimbreRegistration;
