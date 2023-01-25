import React from 'react';
import Skill from './Skill';

type Props = {};

function Skills({}: Props) {
  return (
    <div className="section">
      <h3 className="subTitle">Skills</h3>
      <h4 className="mt-5 tracking-[3px] text-sm uppercase text-gray-500">
        Hover a skill for current proficiency
      </h4>
      <div className="flex flex-col justify-center items-center h-[70vh] md:overflow-hidden overflow-scroll">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 p-2 ">
          <Skill avatar={'/skills/java-original-wordmark.svg'} percent={90} />
          <Skill avatar={'/skills/react-original.svg'} percent={80} />
          <Skill avatar={'/skills/typescript-original.svg'} percent={80} />
          <Skill avatar={'/skills/mysql-original-wordmark.svg'} percent={80} />
          <Skill avatar={'/skills/git-original.svg'} percent={80} />
          <Skill avatar={'/skills/spring-original-wordmark.svg'} percent={70} />
          <Skill avatar={'/skills/redis-original.svg'} percent={70} />
          <Skill avatar={'/skills/nodejs-original.svg'} percent={70} />
          <Skill avatar={'/skills/docker-original.svg'} percent={70} />
          <Skill avatar={'/skills/vuejs-original.svg'} percent={60} />
          <Skill avatar={'/skills/python-original.svg'} percent={60} />
          <Skill avatar={'/skills/php-original.svg'} percent={50} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
