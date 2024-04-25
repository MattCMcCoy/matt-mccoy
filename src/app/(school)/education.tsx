"use client";

import moment from "moment";
import { api } from "~/trpc/react";

export function Education() {
  const { data: schools } = api.education.getAll.useQuery();
  return (
    <div className="mx-10 mr-auto mt-20">
      <div className="mb-5  w-fit border-b border-yellow-300 font-titillium text-5xl font-extrabold text-white">
        Education.
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {schools?.map((school) => {
          return (
            <div
              key={school.id}
              className="flex w-full flex-col gap-2 text-white"
            >
              <div className="font-titillium text-3xl font-light">
                {school.school}
              </div>
              <div className="font-titillium text-base font-light">
                {school.degree}
              </div>
              <div className="font-titillium text-base font-light">
                {`${moment(school.endDate).isAfter(moment()) ? "Expected: " : ""} ${moment(school.endDate).format("MMM YYYY")}`}
              </div>
              <div className="font-titillium text-base font-light">
                {school.gpa ? `Overall GPA: ${school.gpa}` : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
