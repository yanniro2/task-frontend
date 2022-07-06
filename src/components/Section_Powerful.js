import React from "react";
import { GiElephant, GiSpeaker } from "react-icons/gi";
import { BsShieldShaded, BsGraphUp } from "react-icons/bs";
import { RiLeafFill } from "react-icons/ri";

function Section_Powerful()
{
  return (
    <div className="Section_Powerful">
      <div className="icon-box">
        <div className="icons">
          <GiElephant />
          <p>powerfull</p>
        </div>
        <div className="icons">
          <BsShieldShaded />
          <p>Reliable</p>
        </div>
        <div className="icons">
          <BsGraphUp />
          <p>Efficient</p>
        </div>
        <div className="icons">
          <GiSpeaker />
          <p>Silent</p>
        </div>
        <div className="icons">
          <RiLeafFill />
          <p>Clean</p>
        </div>
      </div>

      <div className="details">
        <h3>Powerful</h3>
        <div className="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            <button>Button</button>

          </p>
        </div>


      </div>
      <div className="table">
        <h3>Powerful</h3>
        <table>
          <thead>
            <tr>
              <th>Table heading 1</th>
              <th>Table heading 2</th>
              <th>Table heading 3</th>
              <th>Table heading 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>lorem ipsum 1</td>
              <td>lorem ipsum i</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, deserunt.</td>
            </tr>
            <tr>
              <td>lorem ipsum 2</td>
              <td>lorem ipsum i</td>
              <td>Lorem ipsum </td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, deserunt.</td>
            </tr>
            <tr>
              <td>lorem ipsum 3</td>
              <td>lorem ipsum i</td>
              <td>Lorem ipsum dolor sit </td>
              <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab fugiat earum ea. Totam cupiditate id saepe alias iure. Earum corrupti corporis, sed expedita consectetur nisi necessitatibus praesentium provident facere mollitia reprehenderit, minus sequi quidem. Repudiandae repellat adipisci ipsum voluptatem reprehenderit praesentium? Blanditiis odio nemo porro quibusdam unde natus ad sunt.</td>
            </tr>
            <tr>
              <td>lorem ipsum 4</td>
              <td>lorem ipsum i</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, deserunt.</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Section_Powerful;
