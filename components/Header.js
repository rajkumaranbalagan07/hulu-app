/** @format */
import Image from 'next/image';
import React from 'react';
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon}></HeaderItem>
        <HeaderItem title="Trendind" Icon={LightningBoltIcon}></HeaderItem>
        <HeaderItem title="Verified" Icon={BadgeCheckIcon}></HeaderItem>
        <HeaderItem title="Collections" Icon={CollectionIcon}></HeaderItem>
        <HeaderItem title="Search" Icon={SearchIcon}></HeaderItem>
        <HeaderItem title="Account" Icon={UserIcon}></HeaderItem>
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        alt="img"
        height={100}></Image>
    </header>
  );
}
