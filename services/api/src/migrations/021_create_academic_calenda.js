const events = [
  ["1st August 2026", "Launching of Admissions for the 2026-2027 Academic year"],
  ["2nd September 2026", "Opening of the 2026-2027 academic year and continuation of admissions"],
  ["3rd to 5th September 2026", "Departmental and Faculty Board meetings"],
  ["8th September to 14th October 2026", "Remedial Maths, Physics, Computer, French and English Classes for HND Year One (1) Students"],
  ["11th to 12th September 2026", "Academic planning workshop"],
  ["17th September 2026", "Committee of Deans and Directors and Presentation of Course Assignments by Directors of Schools"],
  ["29th September 2026", "Congregation"],
  ["30th September 2026", "Committee of Deans and Directors Budget Session"],
  ["5th October 2026", "Teachers' Day"],
  ["6th to 15th October 2026", "General Re-sit for HND Year 2 Level 300 students"],
  ["16th to 17th October 2026", "Orientation of Fresh Students"],
  ["20th October 2026", "Start of lectures for HND Year 1 and 2, and Direct Degree"],
  ["27th October 2026", "Start of lectures for Top-Up and Postgraduate Programs (MBA, MSc, M.Tech)"],
  ["28th November 2026", "Lifeline for submission of Continuous Assessment questions and 2 sets of HND Examination questions to the HODs"],
  ["28th November 2026", "Lifeline for Change of Specialty/Department for fresh students"],
  ["1st to 5th December 2026", "Period for Continuous Assessment and HND Pre-Mock"],
  ["2nd December 2026", "Control of records workbook by the Dean of Academic Affairs"],
  ["6th to 12th December 2026", "Shiloh"],
  ["15th December 2026", "Launching of Sporting Activities and the President's Sports Competition"],
  ["17th December 2026", "Matriculation and Graduation Ceremony"],
  ["21st December 2026", "Lifeline for HND Pre-Registration"],
  ["22nd December 2026 to March 2027", "Registration of Students for the HND Examination"],
  ["23rd December 2026 to 4th January 2027", "End of Lectures for First Half of the First Semester (Christmas Break)"],
  ["5th January 2027", "Resumption of Lectures (First Semester Continues)"],
  ["8th January 2027", "Post Graduate Colloquium (Proposal Presentation)"],
  ["14th January 2027", "Submission of first Semester examination questions to HoDs (HND, Direct Degree, Top Up and Masters)"],
  ["16th January 2027", "Publication of CA Marks for First Semester"],
  ["16th January 2027", "End of Lectures for First Semester"],
  ["21st January 2027", "Vetting of First Semester Examination in UB"],
  ["26th to 30th January 2027", "First Semester Examination for Direct Degree, Top Up and Masters"],
  ["2nd to 9th February 2027", "Cultural Week & Leisure Trip"],
  ["11th February 2027", "National Youth Day"],
  ["16th to 23rd February 2027", "First Semester Examination for HND Year 1, and Biomedical Sciences HND Year 1, 2 & 3"],
  ["23rd February to 29th March 2027", "First Semester Internship Biomedical Sciences (LSMBS)"],
  ["24th February to 15th March 2027", "First Semester Break"],
  ["9th March 2027", "First Semester Examination Senate and Release of Results"],
  ["12th March 2027", "Postgraduate Colloquium (Presentation of work in progress)"],
  ["16th March 2027", "Resumption of Lectures for the Second Semester for LSSET and LSBSS"],
  ["26th March 2027", "Post Graduate Colloquium (Presentation of work in progress)"],
  ["2nd April 2027", "Pre-Defenses of Internship Reports for HND Year 2"],
  ["6th to 10th April 2027", "Defense of Final Internship Reports for HND Year 2, Biomedical Sciences Year 3"],
  ["8th April 2027", "Start of Lectures for Second Semester for LSMBS"],
  ["13th April 2027", "Lifeline for Submission of Continuous Assessment questions to HODs"],
  ["20th to 24th April 2027", "Period for Continuous Assessment Second Semester & HND Mock"],
  ["21st April 2027", "Control of records workbook by the Dean of Academic Affairs"],
  ["28th to 30th April 2027", "Study Visits and End of the Sporting Season (Finals of the President's Sports Competition)"],
  ["1st May 2027", "Labour Day"],
  ["11th May to 12th June 2027", "Intensive Revision for HND Candidates 2027 session"],
  ["15th May 2027", "Submission of Second Semester examination questions to HoDs (HND, Direct Degree, Top Up and Masters)"],
  ["15th May 2027", "Publication of CA Marks for Second Semester"],
  ["17th May 2027", "Senate and Publication of HND Mock results"],
  ["18th May 2027", "Pre-Defenses for MBA, MSc, M-Tech Dissertations"],
  ["20th May 2027", "National Day"],
  ["25th May 2027", "Vetting of Second Semester Examination in UB"],
  ["28th May 2027", "End of Lectures for the Second Semester for LSSET and LSBSS"],
  ["1st to 5th June 2027", "Second Semester Examination for Direct Degree, Top Up and Masters students"],
  ["8th to 12th June 2027", "Second Semester Examination for HND Year 1, and Biomedical Sciences (LSMBS) HND Year 1 & 2 students"],
  ["15th to 22nd June 2027", "National HND Exams for all fields"],
  ["25th June 2027", "Pre-Defenses for Top-Up BSc and BTech Long Essays"],
  ["29th June 2027", "Final Defenses for MBA, MSc, M-Tech Dissertations"],
  ["30th June 2027", "Lifeline for submission of Dissertations for Top-Up & Masters students"],
  ["7th July 2027", "Second Semester Examination Senate and Release of Results"],
  ["13th to 17th July 2027", "Re-sit Examination for Direct Degree, Top-Up and Masters students"],
  ["22nd to 23rd July 2027", "Final Defenses for Top-Up BSc and BTech Long Essays"],
  ["27th July 2027", "Second Semester Re-sit Senate and Release of Results"],
  ["28th to 31st July 2027", "Final compilation and Submission of Results to UB"],
];

exports.up = async function (knex) {
  await knex.schema.createTable("academic_calenda", (table) => {
    table.integer("serial_number").primary();
    table.string("dates", 128).notNullable();
    table.text("events").notNullable();
  });

  await knex("academic_calenda").insert(
    events.map(([dates, description], index) => ({
      serial_number: index + 1,
      dates,
      events: description,
    })),
  );
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("academic_calenda");
};