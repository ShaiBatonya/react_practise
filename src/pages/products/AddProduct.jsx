import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CounterProducts from "../../components/CounterProducts";
import { Card } from "react-bootstrap";
import Propdriling2 from "../../components/Propdriling2";


function AddProduct() {
  const [example, setExample] = useState(true);

  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem("team_players")) || []
  );
  

  const [values, setValues] = useState({
    name: "",
    Materials: "",
    Design: "",
    Functionality: "",
    image: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlayer = {
      id: uuidv4(),
      name: values.name,
      Materials: values.Materials,
      Design: values.Design,
      Functionality: values.Functionality,
      image: values.image,
    };

    setPlayers([...players, newPlayer]);

    setValues({
      name: "",
      Materials: "",
      Design: "",
      Functionality: "",
      image: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("team_players", JSON.stringify(players));
  }, [players]);

  return (
    <>
      <Propdriling2 example={example} setExample={setExample} />

      {example ? (
        <div className="container_main">
          <div class="contact-form">
            <div className="container_add">
              <span class="heading">Add New Furniture</span>
              <form onSubmit={handleSubmit}>
                <div className="mb-1">
                  <label for="name">Name:</label>
                  <input
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-1">
                  <label for="Materials">Materials:</label>
                  <input
                    value={values.Materials}
                    onChange={handleChange}
                    name="Materials"
                    type="text"
                    className="form-control"
                    placeholder="Materials"
                  />
                </div>
                <div className="mb-1">
                  <label for="Design">Design:</label>
                  <input
                    value={values.Design}
                    onChange={handleChange}
                    name="Design"
                    type="text"
                    className="form-control"
                    placeholder="Design"
                  />
                </div>
                <div className="mb-1">
                  <label for="Functionality">Functionality:</label>
                  <input
                    value={values.Functionality}
                    onChange={handleChange}
                    name="Functionality"
                    type="text"
                    className="form-control"
                    placeholder="Functionality"
                  />
                </div>
                <div className="mb-1">
                  <label for="image">image:</label>
                  <input
                    value={values.image}
                    onChange={handleChange}
                    name="image"
                    type="text"
                    className="form-control"
                    placeholder="Image"
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          {players.length > 0 && <CounterProducts amount={players.length} />}{" "}
          <hr />
          <div className="mid_div">
            <button
              onClick={() => {
                setPlayers([]);
              }}
            >
              reset
            </button>
          </div>
          <div className="container_team">
            {players.map((player, index) => {
              return (
                <Card border="dark" style={{ width: "19rem" }}>
                  <Card.Header> {index + 1} </Card.Header>
                  <Card.Body key={player.id}>
                    <Card.Title> Furniture Name: {player.name} </Card.Title>
                    <Card.Title> Furniture Materials: {player.Materials} </Card.Title>
                    <Card.Title> Furniture Design: {player.Design} </Card.Title>
                    <Card.Title> Furniture Functionality: {player.Functionality} </Card.Title>
                    <Card.Img
                      variant="top"
                      src={player.image}
                      style={{
                        maxWidth: "130px",
                      }}
                    />
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <h1 className="container_main">
          {" "}
          <img
            alt="close"
            src="https://img.freepik.com/free-vector/neon-sorry-we-re-closed-sign_23-2148858281.jpg?w=740&t=st=1686150311~exp=1686150911~hmac=491faed00b0ff63f627b0937c7b64a8744821d31fd5727242ce886aa2801d84f.jpg"
            width={450}
          />
        </h1>
      )}
    </>
  );
}

export default AddProduct;
