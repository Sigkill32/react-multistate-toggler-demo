import React from "react";
import "./props.css";
const Props = () => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>buttonDesign</td>
        <td>string</td>
        <td>'rounded'</td>
        <td>specifies the style of the button.</td>
      </tr>
      <tr>
        <td>textData</td>
        <td>object</td>
        <td>{"{ stateOne : '1', stateTwo: '2', stateThree: '3' }"}</td>
        <td>Specifies the text data that will be displayed on the knob</td>
      </tr>
      <tr>
        <td>initState</td>
        <td>bool / number </td>
        <td></td>
        <td>Defines the initial state of the toggle switch in question</td>
      </tr>
      <tr>
        <td>onChange</td>
        <td>func</td>
        <td>null</td>
        <td>
          A callback function that is invoked every time a state change occurs{" "}
        </td>
      </tr>
      <tr>
        <td>classNames</td>
        <td>object</td>
        <td>null</td>
        <td>Classes for container and slider </td>
      </tr>
      <tr>
        <td>id</td>
        <td>string</td>
        <td>random id</td>
        <td>id of the toggle switch in question</td>
      </tr>
      <tr>
        <td>togglerWidth</td>
        <td>number</td>
        <td>30</td>
        <td>number that specifies the width of the switch knob</td>
      </tr>
      <tr>
        <td>buttonStates</td>
        <td>integer</td>
        <td>2</td>
        <td>Integer that specifies the number of states</td>
      </tr>
      <tr>
        <td>fontSize</td>
        <td>string</td>
        <td>'10px'</td>
        <td>string that specifies the fontSize of the data on the knob</td>
      </tr>
      <tr>
        <td>togglerTheme </td>
        <td>array</td>
        <td>
          {
            "[ { knob: '#03A9F4', bg: '#d7e3e3', color: 'white' }, { knob: '#f44336', bg: '#fcebeb', color: 'white' }, { knob: '#fcba03', bg: '#fff0c7', color: 'white'} ]"
          }
        </td>
        <td>
          An array of objects that determines the look of the switch in for each
          state
        </td>
      </tr>
      <tr>
        <td>buttonRadius</td>
        <td>object</td>
        <td>null</td>
        <td>Specifies container and slider radius</td>
      </tr>
      <tr>
        <td>overrideInternalStyles</td>
        <td>bool</td>
        <td>false</td>
        <td>
          Takes a boolean, passing false overrides all internal library styles
          and gives complete control to the user
        </td>
      </tr>
    </table>
  );
};

export default Props;
