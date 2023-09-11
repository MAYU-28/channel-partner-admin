import React from "react";
import { Table, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const Step1 = () => {
  return (
    <>
      <h5 className="font-20 text-uppercase mb-3">Step 1 Sowing Stage</h5>
      <ProgressBar
        now={60}
        label={60}
        style={{ height: "20px", marginBottom: "20px" }}
      />
      <p>
        First step will be to do the sowing of the farm and then after that do
        the watering in a small quantity Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-info">Stage Days </th>
            <th>4 Days</th>
          </tr>
          <tr>
            <th className="text-info">Method of Application </th>
            <th>Chemical Biological</th>
          </tr>
          <tr>
            <th className="text-info">Brand Name </th>
            <th></th>
          </tr>
          <tr>
            <th className="text-info">Chemical </th>
            <th>Saaf/ CarmaNova</th>
          </tr>
          <tr>
            <th className="text-info">Biological </th>
            <th>Rhizocare</th>
          </tr>
          <tr>
            <th className="text-info">Chemical Content </th>
            <th>
              Carbendazim 12% +Mencozeb 63% <br />
              Imidacloprid 48% FS
              <br />
              Trichoderma viride
            </th>
          </tr>
          <tr>
            <th className="text-info">Dose</th>
            <th>
              2.5 Gram/kg seed <br />
              0.5 ml /Kg seed
              <br />1 gm/100 gmseed
            </th>
          </tr>
          <tr>
            <th className="text-info">Benefits of Crops </th>
            <th>
              Protect from seed bron diseases
              <br />
              Protect from soil bron insects
              <br />
              Protect from seed bron diseases
            </th>
          </tr>
          <tr>
            <th className="text-info">Materials list </th>
            <th>
              1) Seeds: 5KG
              <br />
              2) Hammer: 2pcs
              <br />
              3) Bullock Cart: 1
            </th>
          </tr>
          <tr>
            <th className="text-info">Status </th>
            <th>Not Scheduled</th>
          </tr>
          <tr>
            <th className="text-info">Summary </th>
            <th>
              <Button className="btn btn-primary btn-sm"> View Summary</Button>
            </th>
          </tr>
        </thead>
      </Table>
      <h5 className="font-20 text-uppercase mb-3 mt-4 text-info">
        Details of Activities
      </h5>
      <h5 className="font-16 ">Lorem ipsum</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <h5 className="font-16 ">Lorem ipsum</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <h5 className="font-20 text-uppercase mb-3 mt-4 text-info">
        Required Material List
      </h5>
      <Table striped bordered hover>
        <thead>
          <tr className="bg-info text-white">
            <th>#</th>
            <th>Material List </th>
            <th>Qty Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Material 1</td>
            <td>500 kg</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Material 2</td>
            <td>100 kg</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Material 3</td>
            <td>300 kg</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Material 4</td>
            <td>400 kg</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Material 5</td>
            <td>100 kg</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Material 6</td>
            <td>200 kg</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Step1;
