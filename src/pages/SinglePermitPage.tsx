import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { permitSelectors } from "../redux";

import { PermitInterface } from "./types";

const SinglePermitPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { selectAllPermits } = permitSelectors;

  const allPermits: PermitInterface[] = useSelector(selectAllPermits);

  const [filteredPermit] = allPermits.filter((permit) => permit.id === id);

  return (
    <>
      <div className="singlepermit__page-wrapper">
        <div className="page-header">{`Permit > ${id}`}</div>
        <Container>
          <div className="permitInfoContainer p-4">
            <div className="single-permit-card-header py-3">
              Permit Information
            </div>

            <p>
              Issue Date:{" "}
              {new Date(filteredPermit.issue_date).toLocaleDateString()}
            </p>
            <p>Permit Type: {filteredPermit.permit_type}</p>
            <p>Review Type: {filteredPermit.review_type} </p>
            <p>
              Application Start Date:{" "}
              {new Date(
                filteredPermit.application_start_date
              ).toLocaleDateString()}
            </p>
            <p>Processing Time: {filteredPermit.processing_time} </p>
            <p>Work Description: {filteredPermit.work_description}</p>
            <p>Total Fee: {filteredPermit.total_fee}</p>

            <p>Street Name: {filteredPermit.street_name} </p>
            <p>Street Number: {filteredPermit.street_number} </p>
            <p>Street Direction: {filteredPermit.street_direction}</p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SinglePermitPage;
