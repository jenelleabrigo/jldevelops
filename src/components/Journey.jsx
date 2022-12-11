import React from "react";
import { journey } from "../data/journey";

const Journey = () => {
  return (
    <section className="p-index__journey" id="journey">
      <div className="u-layout">
        <h2 className="c-headline is-white u-font-serif">JOURNEY</h2>

        <div className="p-index__journey__inner">
          <table className="p-index__journey__inner__table">
            <tbody>
              {journey.map((item, index) => (
                <tr key={index} className="p-index__journey__inner__table__row u-text is-small">
                  <th className="p-index__journey__inner__table__date">{item.date}</th>
                  <td className="p-index__journey__inner__table__details">{item.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Journey;
