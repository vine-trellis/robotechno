import React, { useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { Instrument } from 'musical.js';

import './Notepicker.css';

const SEMITONES = ['A', '^A', 'B', 'C', '^C', 'D', '^D', 'E', 'F', '^F', 'G', '^G'];
const NUM_BEATS = 16;
const INITIAL_NOTES = new Array(NUM_BEATS).fill('z');

export default function Notepicker() {
  let inst = new Instrument();
  const [notes, setNotes] = useState(INITIAL_NOTES);
  const [bpm, setBpm] = useState(120);

  return (
    <>
      <Table bordered>
        <tbody>
          {
            SEMITONES.map((tone) => {
              return <tr key={tone}>
                {[...Array(NUM_BEATS).keys()].map((i) => {
                  return <td 
                    className={notes[i] === tone ? "selected-note" : "unselected" }
                    key={i + tone}
                    onClick={() => {
                      inst.tone(tone);
                      let temp_notes = notes.slice();
                      temp_notes[i] = tone;
                      setNotes(temp_notes);
                    }}>
                      {tone}
                    </td>
                })}
              </tr>
            })
          }
        </tbody>
      </Table>
      <Button onClick={() => {
        console.log(notes.join(""));
        inst.play({tempo: bpm},notes.join(""),);
      }}>
        Play
      </Button>
    </>
  )
}

// function Note({ inst, tone, setNote, selected }) {
//   return (
//     <td 
//     className={selected ? "selected-note" : ""}
//     onClick={() => {
//       inst.tone(tone);
//       setNote();
//     }}>
//       {tone}
//     </td>
//   )
// }
