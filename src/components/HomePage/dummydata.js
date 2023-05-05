 const data = {
  status: 'Nodes Information has loaded successfully. ',
  succeed: true,
  data: {
    count: 376,
    next: 'https://api.pestelecom.ir/v1/pioneer/nodes-tab-view?page=2&page_size=25',
    previous: null,
    nodes_info: [
      {
        node_id: 1302,
        battery_charge_percentage: null,
        register_status: {
          value: null,
          color: '#fa1505',
        },
        temperature: null,
        technology: 4,
        sig_pow: {
          Color: '#fa6400',
          Shape: 'diam',
          Value: -105,
          Name: 'Very Poor',
        },
        sig_quality: {
          Color: '#00d228',
          Shape: 'rect',
          Value: -12,
          Name: 'Good',
        },
        weather_condition: null,
        imsi: 432113971555608,
        imei: 862770042178421,
        name: null,
        updated_at: '2021-12-05 09:22:27',
        phone_type: 'Mi 9T',
        status: {
          state: 'Disconnected',
          color: '#fa1505',
        },
        app_version: '2.13 2021-09-01 00-31-24',
        os_version: '9',
        lat: 35.732668,
        lng: 51.344894,
      },

    ],
  },
};
  
export const nodes = data.data.nodes_info;