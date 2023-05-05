import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import styles from './NodeTabView.module.css';
import Loading from '../UI/Loading';
import Pagination from '../UI/Pagination';
import 'antd/dist/antd.css';
import { NodeTabViewColumns } from './NodeTabViewColumns';
import { useAxios } from '../../hooks/useAxios';
import { useDispatch, useStore } from 'react-redux';
import {
  homePageMapActions,
  homePageCurrentNodeActions,
} from '../../store/index';
import Popup from './Popup';
import LoadingSpinner from '../UI/LoadingSpinner';
const NodeTabView = (props) => {
  const dispatch = useDispatch();
  const httpRequest = useAxios();
  const store = useStore();
  const map = store.getState().homePageMap;
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0 });
  const [state, setState] = useState({
    pagination: {
      page: 1,
      pageSize: 30,
    },
    nodes: null,
    count: null,
    loading: true,
    tableLoading: false,
  });
  const contextMenuHandler = (node_id) => {
    dispatch(homePageCurrentNodeActions.setData({ data: null, loading: true }));
    const response = httpRequest({
      url: `/pioneer/nodes-info/${node_id}`,
      method: 'GET',
    });
    response.then((res) => {
      dispatch(
        homePageCurrentNodeActions.setData({ data: res, loading: false })
      );
    });
  };
  const showNodeOnMapHandler = (node_id) => {
    !map.loading &&
      dispatch(homePageMapActions.setData({ ...map, showOnMap: node_id }));
  };

  const onClickOutSide = () => {
    setPopup((prevState) => {
      return { visible: false };
    });
    document.removeEventListener('click', onClickOutSide);
  };
  const rowChangeHandler = (record) => ({
    onContextMenu: (event) => {
      event.preventDefault();
      if (!popup.visible) {
        document.addEventListener('click', onClickOutSide);
      }
      setPopup((prevState) => {
        return {
          record,
          visible: true,
          x: event.clientX,
          y: event.clientY,
          showOnMap: record?.lat && record?.lng,
        };
      });
    },
  });
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await httpRequest({
          url: '/pioneer/nodes-tab-view',
          method: 'GET',
          params: {
            page: state.pagination.page,
            page_size: state.pagination.pageSize,
          },
        });
        if (response.status === 200 && response.data.succeed)
          setState((prevState) => {
            return {
              ...prevState,
              nodes: response?.data?.data?.nodes_info.map((item) => {
                return {
                  ...item,
                  key: item.node_id,
                };
              }),
              count: response?.data?.data?.count,
              loading: false,
              tableLoading: false,
            };
          });
      } catch (error) {
      } finally {
      }
    };
    apiCall();
  }, [state.pagination]);
  const getPagination = (pagination) =>
    pagination.page !== state.pagination.page ||
    pagination.pageSize !== state.pagination.pageSize
      ? setState((prevState) => {
          return {
            ...prevState,
            pagination,
            tableLoading: true,
          };
        })
      : () => {};
  useEffect(() => {
    document.querySelector('.ant-table-measure-row')?.remove();
  });
  return (
    <div
      className={`${props.className} ${styles.container}`}
      id="node-tab-view-table"
    >
      {state.loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Table
            className={styles.table}
            dataSource={state.nodes}
            columns={NodeTabViewColumns}
            rowClassName={() => styles.row}
            onRow={rowChangeHandler}
            style={{
              boxShadow: 'none',
            }}
            loading={{
              size: 'large',
              indicator: <LoadingSpinner />,
              spinning: state.tableLoading,
            }}
            pagination={false}
            scroll={{
              x: 'max-content',
              y: '75vh',
            }}
          />

          <Pagination
            className={styles.pagination}
            getPagination={getPagination}
            page={state.pagination.page}
            pageSize={state.pagination.pageSize}
            count={state.count}
            // loading={state.loading}
          />

          <Popup
            {...popup}
            getCurrentNode={contextMenuHandler}
            getNodeOnMap={showNodeOnMapHandler}
          />
        </React.Fragment>
      )}
    </div>
  );
};
export default NodeTabView;

/*
const dispatch = useDispatch();
  const httpRequest = useAxios();
  const [nodes, setNodes] = useState(props?.nodes?.data?.data);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0 });
  const [tablePagination, setTablePagination] = useState({
    page: 1,
    pageSize: 50,
  });
  dispatch(homePageMapActions.setData({ data: nodes, loading: false }));
  if (loading) {
    dispatch(homePageMapActions.setData({ data: null, loading: true }));
    const response = httpRequest({
      url: '/pioneer/nodes-tab-view',
      method: 'GET',
      params: {
        page: tablePagination.page,
        page_size: tablePagination.pageSize,
      },
    });
    response
      .then((res) => {
        setNodes(res.data.data);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }
  const pageChangeHandler = (pagination) => {
    setTablePagination({
      page: pagination.current,
      pageSize: pagination.pageSize,
    });
    setLoading(true);
    dispatch(homePageShowOnMapActions.setData({ showOnMap: null }));
  };

  const contextMenuHandler = (node_id) => {
    dispatch(homePageCurrentNodeActions.setData({ data: null, loading: true }));
    const response = httpRequest({
      url: `/pioneer/nodes-info/${node_id}`,
      method: 'GET',
    });
    response.then((res) => {
      dispatch(
        homePageCurrentNodeActions.setData({ data: res, loading: false })
      );
    });
  };
  const showNodeOnMapHandler = (node_id) => {
    dispatch(homePageShowOnMapActions.setData({ showOnMap: node_id }));
  };

  const onClickOutSide = () => {
    setPopup({ visible: false });
    document.removeEventListener('click', onClickOutSide);
  };
  const rowChangeHandler = (record) => ({
    onContextMenu: (event) => {
      event.preventDefault();
      if (!popup.visible) {
        document.addEventListener('click', onClickOutSide);
      }
      console.log(event.clientX, event.clientY);
      setPopup({
        record,
        visible: true,
        x: event.clientX,
        y: event.clientY,
      });
    },
  });
*/

// <div className={`${styles.container} home-page-table`}>
// <Table
//   onRow={rowChangeHandler}
//   onChange={pageChangeHandler}
//   columns={NodeTabViewColumns}
//   dataSource={nodes?.nodes_info}
//   loading={{
//     size: 'large',
//     indicator: (
//       <Spin
//         tip="Loading..."
//         size="large"
//         style={{
//           position: 'absolute',
//           left: '50%',
//           top: '50%',
//           transform: 'translate(-50%, 0)',
//         }}
//       />
//     ),
//     spinning: loading,
//   }}
//   pagination={{
//     total: nodes.count,
//     style: {
//       justifyContent: 'center',
//     },
//     pageSizeOptions: ['20', '30', '50', '60', '70', '80', '90', '100'],
//     current: tablePagination.page,
//     pageSize: tablePagination.pageSize,
//     showLessItems: true,
//     showQuickJumper: true,
//   }}
//   scroll={{
//     x: 'max-content',
//     y: '60vh',
//   }}
//   bordered
// />

//   <Popup
//     {...popup}
//     getCurrentNode={contextMenuHandler}
//     getNodeOnMap={showNodeOnMapHandler}
//   />
// </div>
