import React from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdGroups } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CardPersonalizada() {
  let getCurrentHour = new Date().getHours();
  let greatDependingHour;
  if (getCurrentHour > 3 && getCurrentHour < 12) {
    greatDependingHour = 'Good morning';
  } else if (getCurrentHour >= 12 && getCurrentHour < 20) {
    greatDependingHour = 'Good afternoon';
  } else if (getCurrentHour >= 20 && getCurrentHour <= 23) {
    greatDependingHour = 'Good evening';
  } else {
    greatDependingHour = 'Good day';
  }
  return (
    <div className=" p-4 bg-[#1F1154]">
      {' '}
      <BotonesHeader />
      <h1 className="mb-8 text-5xl text-white">
        {greatDependingHour}
      </h1>
      <div className="grid grid-cols-2 gap-6 2xl:grid-cols-3">
        {/* Likes */}
        <OneTargetMusic
          image={''}
          alt={'Likes'}
          name={'Likes'}
          tipo={''}
          route={'/profile/likes'}
        />
        {/* Artista */}
        <OneTargetMusic
          image={''}
          alt={'Gustavo Cerati'}
          name={'Gustavo Cerati'}
          tipo={'Mix'}
          route={'/dashboard/playlist'}
        />
        {/* Artista */}
        <OneTargetMusic
          image={''}
          alt={'Gustavo Cerati'}
          name={'Gustavo Cerati'}
          tipo={'Mix'}
          route={'/dashboard/playlist'}
        />
        {/* Artista */}
        <OneTargetMusic
          image={''}
          alt={'Gustavo Cerati'}
          name={'Gustavo Cerati'}
          tipo={'Mix'}
          route={'/dashboard/playlist'}
        />
        {/* Artista */}
        <OneTargetMusic
          image={''}
          alt={'Gustavo Cerati'}
          name={'Gustavo Cerati'}
          tipo={'Mix'}
          route={'/dashboard/playlist'}
        />
        {/* Artista */}
        <OneTargetMusic
          image={''}
          alt={'Gustavo Cerati'}
          name={'Gustavo Cerati'}
          tipo={'Mix'}
          route={'/dashboard/playlist'}
        />
      </div>
    </div>
  );
}

function BotonesHeader() {
  return (
    <div>
      <div className="flex justify-between mb-10 text-white">
        <div className="flex gap-5">
          <button className="p-1 scale-125 bg-[#130A32] rounded-full">
            <FaAngleLeft className="text-[25px]  " />
          </button>
          <button className="p-1 scale-125 bg-[#0A051A] rounded-full">
            <FaAngleRight className="text-[25px]   " />
          </button>
        </div>
        <div className="flex gap-3">
          <Link
            to={'/profile/notifications'}
            className="p-1 scale-125 bg-[#130A32] rounded-full"
          >
            <IoIosNotificationsOutline className="text-[30px]" />
          </Link>

          <button className="p-1 scale-125 bg-[#130A32] rounded-full">
            <MdGroups className="text-[30px]" />
          </button>

          <Link
            to={'/profile'}
            className="p-1 scale-125 bg-[#130A32] rounded-full"
          >
            <FaRegUserCircle className="text-[30px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function OneTargetMusic({ image, alt, name, tipo, route }) {
  return (
    <Link
      to={route}
      className="bg-[#322A53] flex items-center h-[4rem] rounded-[10px]"
    >
      <img src={image} alt={alt} className="h-[100%] w-[25%] bg-red-200" />
      <div>
        <div>
          <h3 className="px-4 font-bold text-white text-1xl p">{name}</h3>
          <h3 className="px-4 text-white text-1xl h3">{tipo}</h3>
        </div>
      </div>
    </Link>
  );
}
export default CardPersonalizada;