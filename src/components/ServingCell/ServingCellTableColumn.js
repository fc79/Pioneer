export const ServingCellTableColumns = [
  {
    title: 'TimeStamp',
    dataIndex: 'timestamp',
    render: (text, record) => {
      const splited = record?.timestamp.split('T');
      splited[1] = splited[1].split('.')[0];
      return {
        children: splited.join(' '),
      };
    },
    align: 'center',
    width: '250px',
  },
  {
    title: 'N',
    dataIndex: 'node_id',
    align: 'center',
    width: '50px',
  },
  {
    title: 'S',
    dataIndex: 'source',
    align: 'center',
    width: '50px',
  },
  {
    title: 'T',
    dataIndex: 'technology',
    align: 'center',
    width: '50px',
  },
  {
    title: 'Band',
    dataIndex: 'band',
    render: (text, record) => {
      return {
        children: record?.freq_info?.band,
      };
    },
    align: 'center',
    width: '150px',
  },
  {
    title: 'UL ARFCN',
    dataIndex: 'ul_arfcn',
    render: (text, record) => {
      return {
        children: record?.freq_info?.ul_arfcn,
      };
    },
    align: 'center',
    width: '50px',
  },
  {
    title: 'DL ARFCN',
    dataIndex: 'freq_info',
    render: (text, record) => {
      return {
        children: record?.freq_info?.dl_arfcn,
      };
    },
    align: 'center',
    width: '50px',
  },
  {
    title: 'DL BW',
    dataIndex: 'dl_bw',
    align: 'center',
    width: '250px',
  },
  {
    title: 'UL BW',
    dataIndex: 'ul_bw',
    align: 'center',
    width: '250px',
  },
  {
    title: 'PLMN Id',
    dataIndex: 'plmn_id',
    align: 'center',
    width: '250px',
  },
  {
    title: 'TAC/LAC',
    dataIndex: 'lac',
    align: 'center',
    width: '150px',
  },

  {
    title: 'RAC',
    dataIndex: 'rac',
    render: (text, record) => {
      return {
        children: record?.rac > 0 ? record?.rac : '',
      };
    },
    align: 'center',
    width: '150px',
  },
  {
    title: 'Cell Id',
    dataIndex: 'cell_id',
    align: 'center',
    width: '150px',
  },
  {
    title: 'Lifetime',
    dataIndex: 'lifetime',
    align: 'center',
    width: '150px',
  },
  {
    title: 'Info',
    dataIndex: 'info',
    align: 'center',
    width: '150px',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    align: 'center',
    width: '150px',
  },
];
