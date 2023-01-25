import React from 'react';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
type Props = {};

function Contact({}: Props) {
  return (
    <div className=" section">
      <h3 className="z-10 subTitle">Contact</h3>
      <div className="flex flex-col space-y-5 h-[70vh] w-full justify-center items-center">
        <div className="z-10 text-xl font-bold text-white tracking-wider">
          Let's chat and get in touch 👊
        </div>
        <div className="z-10">
          <div className="flex flex-row justify-center items-center space-x-3">
            <AiFillPhone size={20} className="text-[#00ff41]" />
            <div>+1 437-324-5707</div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-3">
            <AiFillMail size={20} className="text-[#00ff41]" />
            <div>frankyiu1020111@gmail.com</div>
          </div>
        </div>

        <motion.div className="radial rounded-3xl w-[300px] h-[160px] md:w-[600px] md:h-[340px]"></motion.div>
      </div>
    </div>
  );
}

export default Contact;
