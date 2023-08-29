import React from 'react';
import { Box, Button, Group, List, Text } from '@mantine/core';
import Link from 'next/link';

const Intership = () => {
  return (
    <>
      <Box className="mt-36 lg:pl-48 lg:pr-96 pl-10 pr-10 text-[#575a5c]">
        <Text className="text-4xl text-[#868e96] ">
          INTERNSHIP AT ETHIOPIAN SOFTWARE COMPANY
        </Text>
        <Text className="text-xl mt-5">
          PERAGO INFORMATION SYSTEMS INTERNSHIP PROGRAM
        </Text>
        <Text className=" text-sm mt-5 mb-3 leading-7 text-justify  ">
          Our software engineer internship program is a unique opportunity for
          students or recent graduates who are interested in pursuing a career
          in software engineering. As an intern, you will be part of our dynamic
          and innovative team, working on cutting-edge technologies and
          solutions that power our platform. You will also get to learn from our
          senior software engineers, who will mentor you and provide you with
          feedback and guidance throughout the program.
        </Text>
        <Text>During the program, you will:</Text>
        <List
          listStyleType="disc"
          className="text-sm ml-3 mt-3 mb-3 text-[#575a5c]"
        >
          <List.Item className="text-justify ">
            Work on one or more projects that align with your skills and
            interests, such as developing new features, improving performance,
            fixing bugs, or testing code.
          </List.Item>
          <List.Item className="text-justify ">
            Use various programming languages, frameworks, and tools, such as
            JavaScript, C#, React, Next, Angular, ASP.net core, Git, etc.
          </List.Item>
          <List.Item className="text-justify ">
            Follow agile software development methodologies, such as Scrum or
            Jira, and participate in daily stand-ups, sprint planning, code
            reviews, and demos.
          </List.Item>
          <List.Item className="text-justify ">
            Collaborate with other interns and software engineers across
            different teams and departments, such as product, design, QA, etc.
          </List.Item>
          <List.Item className="text-justify ">
            Showcase your work and achievements to the management and
            stakeholders at the end of the program.
          </List.Item>
        </List>
        <Text className=" text-xl mt-5">
          BENEFITS OF PERAGO INFORMATION SYSTEMS INTERNSHIPS
        </Text>
        <Text className="mt-5 text-sm leading-7 text-justify">
          The interns in a Perago Information systems will get to work closely
          with developers in an open and learning environment. Besides from
          working with the best software development team in Ethiopia, interns
          will get
        </Text>
        <List
          listStyleType="disc"
          className="text-sm ml-3 mt-3 mb-3 text-[#575a5c] "
        >
          <List.Item className="text-justify ">
            A certificate of completion and a letter of recommendation upon
            successful completion of the program.
          </List.Item>
          <List.Item className="text-justify ">
            A chance to network with other interns and software engineers from
            different backgrounds and cultures.
          </List.Item>
          <List.Item className="text-justify ">
            A potential opportunity to join our team as a full-time software
            engineer after the program.
          </List.Item>
          <List.Item className="text-justify ">
            Work on Unique and Interesting project
          </List.Item>
          <List.Item className="text-justify ">
            Learn new technologies and tools
          </List.Item>
          <List.Item className="text-justify ">
            Develop collaboration with the team
          </List.Item>
          <List.Item className="text-justify ">Creativity </List.Item>
        </List>
        <Text className="text-xl mt-5 mb-5">
          HOW TO JOIN OUR INTERNSHIP PROGRAM
        </Text>
        <Text className="text-sm leading-7 text-justify">
          Perago Information systems internship program accepts new interns by
          carefully evaluating and filtering out applicants. If you are a
          college/university student and are interested in our internship
          program, you can apply through our website or email
          Info@peragosystems.com Applicants will be filtered out based on their
          interests and will be contacted through their email to do a test
          project. After the test projects are submitted, we will go to the last
          step of evaluation; Interview. Applicants that passed both the test
          and interview successfully, will join our internship program according
          to our internship schedule. Due to the number of applicants, we advise
          you to apply two months before the internship period.
        </Text>
        <Text className="text-xl mt-5 mb-5">INTERNSHIP SCHEDULE </Text>
        <Text className="text-sm leading-7 text-justify">
          Perago Information systems Plc gives internships twice a year. The
          first round is from June to August and the second round is from
          October to December.
        </Text>
        <Text className="text-xl mt-5 mb-5">HOW TO APPLY </Text>
        <Text className="text-sm leading-7 text-justify">
          If you are interested in applying for our software engineer internship
          program, please fill the form. We look forward to hearing from you
          soon! For more information regarding our internship program contact us
          through our email (info@peragosystems.com) or our phone +251 114 701
          998 | +251 911 231 622
        </Text>
        <Group position="right">
          <Link
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLSeUAyein3D5Qk_E651vcHUqQhqpRIBVc5sUk1t_AUefFtZNpw/viewform'
            }
            target="https://docs.google.com/forms/d/e/1FAIpQLSeUAyein3D5Qk_E651vcHUqQhqpRIBVc5sUk1t_AUefFtZNpw/viewform"
            className={` hover:text-[#55ba4a] `}
          >
            <Button className="hover:bg-[#55ba4a] hover:text-[#fff] rounded-2xl border-[#55ba4a] text-[#575a5c] mt-12 pr-10 pl-10 ">
              Apply
            </Button>
          </Link>
        </Group>
      </Box>
    </>
  );
};

export default Intership;
