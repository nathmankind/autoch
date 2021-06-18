import React, { FC, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PermitCard } from "../components/PermitCard";
import { getPermits, permitSelectors } from "../redux/slice/permitslice";
import { PermitInterface } from "./types";

const PermitPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPermits());
  }, [dispatch]);

  const { selectAllPermits, selectPermitStatus } = permitSelectors;
  const allPermits: PermitInterface[] = useSelector(selectAllPermits);
  const status = useSelector(selectPermitStatus);

  if (status !== 200) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <>
      <div className="page-header">All Permit</div>
      <div className="permit__page-wrapper">
        <Container>
          <Row>
            {allPermits.map((permit) => {
              return (
                <Col md={4} lg={4} key={permit.id}>
                  <PermitCard
                    id={permit.id}
                    work_description={permit.work_description}
                    permit_type={permit.permit_type}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PermitPage;
