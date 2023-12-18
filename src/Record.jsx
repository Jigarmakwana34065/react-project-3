import React from "react";

function Record({ btnclick, allRecordData }) {
    const category = ["mobile", "electronics", "cloth", "food", "all"];

    return (
        <>
            <br />

            <h1>All Record</h1>

            <br />

            {
                <div className="container">
                    <div className="all-btn d-flex justify-content-center">
                        {
                            category.map((cat, i) => {
                                return (
                                    <>
                                        <button key={i} onClick={() => btnclick(cat)}>{cat}</button>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            }

            <br /><br /><br /><br />

            <>
                {
                    <div className="container">
                        <div className="d-flex flex-wrap">
                            {
                                allRecordData.map((item) => {
                                    return (
                                        <div className="card m-2 pt-3 pb-2" style={{ width: "23%" }}>
                                            <div className="d-flex justify-content-center" style={{ width: "100%", height: "230px" }}>
                                                <img src={item.img} className="card-img-top" style={{ width: "53%", height: "100%" }} />
                                            </div>
                                            <h5 className="card-title f-2 mt-2">{item.id}</h5>
                                            <h2 className="card-title category" style={{ fontSize: "22PX" }}>category :-{item.category}</h2>
                                            <h2 className="card-title name" style={{ fontSize: "22PX" }}>{item.name}</h2>
                                            <h2 className="card-title" style={{ fontSize: "18PX" }}>Qty :- {item.qty}</h2>
                                            <h2 className="card-title price" style={{ fontSize: "22PX" }}>price :- {item.price}</h2>

                                            <div className="btn">
                                                <a href="">BUY NOW</a>
                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                }
            </>
        </>
    )
}

export default Record;