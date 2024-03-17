import axios from "axios";
import "./Used.scss";
import React from "react";

function Used() {

    const [foods, setFoods] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setFoods(response.data.slice(0, 20));
                setLoading(false);
            })
            .catch(error => {
                console.error("Ma'lumotlarni olishda xatolik:", error);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <section className="used" /*data-aos="fade-right"*/ >
                <div className="container">
                    <h4 className="used__heading">
                        Used by 400,000+ developers.
                    </h4>
                    <ul className="used__list">
                        {foods.map(foodUser => (
                            <li key={foodUser.id} className="used__item">
                                <h2 className="used__title">{foodUser.body}</h2>
                                <p className="Used__p">{foodUser.title}</p>
                            </li>
                        ))}
                    </ul>

                </div>
            </section>
        </>
    )
}

export default Used;