import React, { useState, useEffect } from 'react';
import { Dropdown, Menu, message, Tooltip } from 'antd';
import { useAxios } from '../../hooks/useAxios';
import 'antd/dist/antd.css';
import styles from './CustomDropDown.module.css';
import { useDispatch } from 'react-redux';
import { homePageMapActions } from '../../store/index';
const CustomDropDown = (props) => {
  const [item, setItem] = useState({
    index: 1,
    loading: true,
  });
  const httpRequest = useAxios();
  const dispatch = useDispatch();
  const items = [
    {
      label: 'Connection',
      key: '1',
    },
    {
      label: 'Sig_Power',
      key: '2',
    },
    {
      label: 'Sig_Quality',
      key: '3',
    },
    {
      label: 'Battery',
      key: '4',
    },
  ];
  const handleMenuClick = (e) =>
    setItem((prevState) => {
      return {
        index: +e?.key,
        loading: true,
      };
    });
  useEffect(() => {
    const apiCall = async () => {
      let nodes = [];
      try {
        let response = await httpRequest({
          method: 'GET',
          url: '/pioneer/nodes-tab-view',
          params: {
            page: 1,
            page_size: 100,
            map_field: items[item.index - 1].label.toLowerCase(),
          },
        });
        nodes = response?.data?.data?.nodes_info;
        while (response?.data?.data?.next) {
          response = await httpRequest({
            method: 'GET',
            url: response?.data?.data?.next,
            prefix: false,
          });
          nodes = [...nodes, ...response?.data?.data?.nodes_info];
        }
        dispatch(
          homePageMapActions.setData({
            loading: false,
            showOnMap: null,
            data: nodes,
          })
        );
        setItem((prevState) => {
          return {
            ...prevState,
            loading: false,
          };
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    item.loading && apiCall();
  }, [item.index, item.loading]);
  const menu = <Menu onClick={handleMenuClick} items={items} />;
  return (
    <Dropdown.Button
      className={`${props.className} ${styles.container}`}
      overlay={menu}
      buttonsRender={([leftButton, rightButton]) => [
        <Tooltip title="hover" key="leftButton">
          {leftButton}
        </Tooltip>,
        React.cloneElement(rightButton, {
          loading: item.loading,
        }),
      ]}
      style={{
        backgroundColor: '#dee1f9',
        height: '100%',
        flexBasis: '24.56%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: '4px',
      }}
    >
      {items[item.index - 1].label}
    </Dropdown.Button>
  );
};

export default CustomDropDown;
