import './App.scss';
import React, { useState, useEffect } from "react";
import AnfragenStyles from "./anfragen.scss"

const query = `
        query {anfragenDaten (id: "5Xo1E6cjgh2eFG7axhcFOk") {
            id
            erstelltAm2
            alter
            unternehmen
            produkt
            carePackage
            volumen
            status
        }
            
        anfragenDatenCollection {
            items {
            id
            erstelltAm2
            alter
            unternehmen
            produkt
            carePackage
            volumen
            status
            }
        }
            
        }
        `;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function Reporting() {

    let [data, setData] = useState(null);

    useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}?access_token=${REACT_APP_CDA_TOKEN}`, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({ query }),
    })
    .then((response) => response.json())
    .then((json) => setData(json.data));

    }, []);

    if (!data) return <span>Loading ...</span>;


  return (
    
    <div className={AnfragenStyles}>
        <h2>Reporting</h2>
        <div className="tabWrapper">
                <h3>Anfragen über Website1</h3>
                <div className="tabHead">
                    <div className="tabHeadItem tabID">
                        <h4>ID</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Datum</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Gemeldet</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Firma</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Produkt</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Angebot</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Kosten</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Status</h4>
                    </div>
                </div>
                
                {data.anfragenDatenCollection.items.map((item) => {
                    return (
                        <div  className="datarow">
                            <div className="dataitem">{item.id}</div>
                            <div className="dataitem">{item.erstelltAm2}</div>
                            <div className="dataitem">{item.alter}</div>
                            <div className="dataitem">{item.unternehmen}</div>
                            <div className="dataitem">{item.produkt}</div>
                            <div className="dataitem">{item.carePackage}</div>
                            <div className="dataitem">{item.volumen}</div>
                            <div className="dataitem">{item.status}</div>
                        </div>
                    )
                })}
                
            </div>

            <div className="tabWrapper">
                <h3>Anfragen über Website2</h3>
                <div className="tabHead">
                <div className="tabHeadItem tabID">
                        <h4>ID</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Datum</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Gemeldet</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Firma</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Produkt</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Angebot</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Kosten</h4>
                    </div>
                    <div className="tabHeadItem">
                        <h4>Status</h4>
                    </div>
                </div>
                
                {data.anfragenDatenCollection.items.map((item) => {
                    return (
                        <div  className="datarow">
                            <div className="dataitem">{item.id}</div>
                            <div className="dataitem">{item.erstelltAm2}</div>
                            <div className="dataitem">{item.alter}</div>
                            <div className="dataitem">{item.unternehmen}</div>
                            <div className="dataitem">{item.produkt}</div>
                            <div className="dataitem">{item.carePackage}</div>
                            <div className="dataitem">{item.volumen}</div>
                            <div className="dataitem">{item.status}</div>
                        </div>
                    )
                })}
                
            </div>
          </div>
  );
}

export default Reporting;