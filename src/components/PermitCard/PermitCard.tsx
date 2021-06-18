import React, { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router-dom";
import permitIcon from "../../assets/permit-icon.svg";
import { truncateString } from "../../utils/functions";

interface PermitProps {
  id: string;
  permit_type: string;
  work_description: string;
}

const PermitCard: FC<PermitProps> = ({ id, permit_type, work_description }) => {
  const history = useHistory();
  return (
    <>
      <div className="permit-card my-3 ">
        <div className="permit__card-main p-4">
          <div className="permit__card-top d-flex  mb-3">
            <img src={permitIcon} alt="" />
            <div className="permit-type mx-3 my-auto">
              <h6>permit type</h6>
              <h4>{permit_type}</h4>
            </div>
          </div>

          <div className="permit-description">
            <div className="description-header">Description</div>
            <p>{truncateString(work_description, 40)}</p>
          </div>
        </div>
        <div className="permit__card-footer p-4 d-flex justify-content-between">
          <div
            className="text my-auto"
            onClick={() => {
              history.push(`/permit/${id}`);
            }}
          >
            view details
          </div>
          <div
            className="icon-box px-2 py-1"
            onClick={() => {
              history.push(`/permit/${id}`);
            }}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </>
  );
};

export default PermitCard;
