import React from 'react';
import styles from './NodeTabView.module.css';
export const NodeTabViewColumns = [
  {
    title: 'Node ID',
    dataIndex: 'node_id',
    align: 'center',
    fixed: 'left',
    width: '8vw',
    key: 'node_id',
    onCell: (record, rowIndex) => {
      return {
        style: {
          backgroundColor: rowIndex % 2 === 0 ? '#f3f3f3' : '#FFFBFF',
        },
      };
    },
    render: (text, record) => <span>{text}</span>,
  },
  {
    title: 'C',
    dataIndex: 'status',
    // onCell: (record, rowIndex) => {
    //   return {
    //     style: {
    //       background: '#e2e2e2' && record.status.color,
    //       width: '10px',
    //       height: '10px',
    //       borderRadius: '50%',
    //     },
    //   };
    // },
    render: (text, record) => (
      <div
        className={styles.circle}
        style={{
          backgroundColor: text?.color,
        }}
      >
        {text?.state?.charAt(0) === 'D' ? 'D' : 'C'}
      </div>
    ),
    align: 'center',
    width: '2vw',
    key: 'status',
  },
  {
    title: 'R',
    dataIndex: 'register_status',
    align: 'center',
    render: (text, record) => (
      <div
        className={styles.circle}
        style={{
          backgroundColor: text?.color,
        }}
      >
        {text?.value}
      </div>
    ),
    width: '2vw',
  },
  {
    title: 'Battery',
    children: [
      {
        dataIndex: 'battery_charge_percentage',
        title: 'Status',
        align: 'center',
        width: '8vw',
        render: (text, record) => (
          <div
            className={styles.circle}
            style={{
              backgroundColor: text?.Color,
            }}
          >
            {text?.Name}
          </div>
        ),
      },
      {
        dataIndex: 'battery_charge_percentage',
        title: 'Value',
        align: 'center',
        width: '3vw',
        render: (text, record) => (
          <div
            className={styles.circle}
            style={{
              backgroundColor: text?.Color,
            }}
          >
            {text?.Value}
          </div>
        ),
      },
    ],
  },
  {
    title: 'Temperature',
    align: 'center',
    children: [
      {
        dataIndex: 'temperature',
        title: 'Status',
        align: 'center',
        width: '8vw',
        render: (text, record) => (
          <div
            className={styles.circle}
            style={{
              backgroundColor: text?.Color,
            }}
          >
            {text?.Name}
          </div>
        ),
      },
      {
        dataIndex: 'temperature',
        title: 'Value',
        align: 'center',
        width: '3vw',
        render: (text, record) => (
          <div
            className={styles.circle}
            style={{
              backgroundColor: text?.Color,
            }}
          >
            {text?.Value}
          </div>
        ),
      },
    ],
  },
  {
    title: 'T',
    dataIndex: 'technology',
    align: 'center',
    width: '3vw',
    render: (text, record) => (
      <div className={styles.circle}>{text ? `${text}G` : null}</div>
    ),
  },
  {
    title: 'Signal Power',
    children: [
      {
        dataIndex: 'sig_pow',
        title: 'Status',
        align: 'center',
        width: '8vw',
        render: (text, record) => (
          <div
            className={styles.circle}
            style={{
              backgroundColor: text?.Color,
            }}
          >
            {text?.Name}
          </div>
        ),
      },
      {
        dataIndex: 'sig_pow',
        title: 'Value',
        align: 'center',
        width: '4vw',
        render: (text, record) => (
          <div
            className={styles.circle}
            style={{
              backgroundColor: text?.Color,
            }}
          >
            {text?.Value}
          </div>
        ),
      },
    ],
  },
  {
    title: 'Signal Quality',
    align: 'center',
    children: [
      {
        dataIndex: 'sig_quality',
        title: 'Status',
        align: 'center',
        width: '8vw',
        render: (text, record) => (
          <div
            className={styles.circle}
            style={{
              backgroundColor: text?.Color,
            }}
          >
            {text?.Name}
          </div>
        ),
      },
      {
        dataIndex: 'sig_quality',
        title: 'Value',
        align: 'center',
        width: '4vw',
        render: (text, record) => (
          <div
            className={styles.circle}
            style={{
              backgroundColor: text?.Color,
            }}
          >
            {text?.Value}
          </div>
        ),
      },
    ],
  },
  {
    title: 'W',
    dataIndex: 'weather_condition',
    align: 'center',
    width: '2vw',
    render: (text, record) => <span>{text}</span>,
  },
  {
    title: 'IMSI',
    dataIndex: 'imsi',
    align: 'center',
    width: '8vw',
    render: (text, record) => <span>{text}</span>,
  },
  {
    title: 'IMEI',
    dataIndex: 'imei',
    align: 'center',
    width: '8vw',
    render: (text, record) => <span>{text}</span>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    align: 'center',
    width: '10vw',
    render: (text, record) => <span>{text}</span>,
  },
  {
    title: 'Updated At',
    dataIndex: 'updated_at',
    align: 'center',
    width: '10vw',
    render: (text, record) => <span>{text}</span>,
  },
  {
    title: 'Phone Type',
    dataIndex: 'phone_type',
    align: 'center',
    width: '22vw',
    render: (text, record) => <span>{text}</span>,
  },
  {
    title: 'App Version',
    dataIndex: 'app_version',
    align: 'center',
    width: '5vw',
    render: (text, record) => <span>{text}</span>,
  },
  {
    title: 'OS Version',
    dataIndex: 'os_version',
    align: 'center',
    width: '15vw',
    render: (text, record) => <span>{text}</span>,
  },
];
