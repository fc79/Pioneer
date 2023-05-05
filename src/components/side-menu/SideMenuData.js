import React from 'react';
import { default as ServingCell } from '../../Icons/MenuIcons/ServingCell.svg';
import { default as Map } from '../../Icons/MenuIcons/Map.svg';
import { default as Message } from '../../Icons/MenuIcons/Message.svg';
import { default as Scans } from '../../Icons/MenuIcons/Scans.svg';
import { default as States } from '../../Icons/MenuIcons/States.svg';
import { default as KPI } from '../../Icons/MenuIcons/KPI.svg';
import { default as DataTest } from '../../Icons/MenuIcons/DataTest.svg';
import { default as Extra } from '../../Icons/MenuIcons/Extra.svg';
import { default as Settings } from '../../Icons/MenuIcons/Settings.svg';
const size = Math.min(
  (32 / 1440) * window.innerWidth,
  (32 / 1024) * window.innerHeight
);
export const SideMenuData = [
  {
    key: '/home',
    label: 'Home',
    icon: (
      <img
        src={Map}
        alt=""
        data-key="/home"
        data-label="Home"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/map',
    label: 'Map',
    icon: (
      <img
        src={Map}
        alt=""
        data-key="/map"
        data-label="Map"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/messages',
    label: 'Messages',
    icon: (
      <img
        src={Message}
        alt=""
        data-key="/messages"
        data-label="Messages"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/scans',
    label: 'Scans',
    icon: (
      <img
        src={Scans}
        alt=""
        data-key="/scans"
        data-label="Scans"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/states',
    label: 'States',
    icon: (
      <img
        src={States}
        alt=""
        data-key="/states"
        data-label="States"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/kpi',
    label: 'KPI',
    icon: (
      <img
        src={KPI}
        alt=""
        data-key="/kpi"
        data-label="KPI"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/serving-cell',
    label: 'Serving Cell',

    icon: (
      <img
        src={ServingCell}
        alt=""
        data-key="/serving-cell"
        data-label="Serving Cell"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/data-test',
    label: 'Data Test',
    icon: (
      <img
        src={DataTest}
        alt=""
        data-key="/data-test"
        data-label="Data Test"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/extra1',
    label: 'Extra',
    icon: (
      <img
        src={Extra}
        alt=""
        data-key="/extra1"
        data-label="Extra"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/extra2',
    label: 'Extra',
    icon: (
      <img
        src={Extra}
        alt=""
        data-key="/extra2"
        data-label="Extra"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/extra3',
    label: 'Extra',
    icon: (
      <img
        src={Extra}
        alt=""
        data-key="/extra3"
        data-label="Extra"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/extra4',
    label: 'Extra',
    icon: (
      <img
        src={Extra}
        alt=""
        data-key="/extra4"
        data-label="Extra"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/extra5',
    label: 'Extra',
    icon: (
      <img
        src={Extra}
        alt=""
        data-key="/extra5"
        data-label="Extra"
        width={size}
        height={size}
      />
    ),
  },
  {
    key: '/settings',
    label: 'Settings',
    icon: (
      <img
        src={Settings}
        alt=""
        data-key="/settings"
        data-label="Settings"
        width={size}
        height={size}
      />
    ),
  },
];
