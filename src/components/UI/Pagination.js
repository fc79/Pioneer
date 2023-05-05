import React, { useState, useEffect, useRef } from 'react';
import styles from './Pagination.module.css';
import { Dropdown, Space, Menu } from 'antd';
import { UpOutlined } from '@ant-design/icons';
const Pagination = (props) => {
  const visiblePages = 5;
  const count = props.count;
  const inputRef = useRef();
  const [pagination, setPagination] = useState({
    page: props.page ? props.page : 1,
    pageSize: props.pageSize ? props.pageSize : 30,
  });
  const items = [
    {
      key: '20',
      label: 20,
    },
    {
      key: '30',
      label: 30,
    },
    {
      key: '40',
      label: 40,
    },
    {
      key: '50',
      label: 50,
    },
    {
      key: '100',
      label: 100,
    },
  ];
  const onPageSizeSelect = ({ item, key, keyPath, selectedKeys, domEvent }) =>
    setPagination((prevState) => {
      return {
        page: 1,
        pageSize: +key,
      };
    });
  const onPageEntered = (event) => {
    const value = +inputRef.current.value;
    event.key === 'Enter' &&
      value >= 1 &&
      value <= Math.ceil(count / pagination.pageSize) &&
      setPagination((prevState) => {
        inputRef.current.value = '';
        return {
          ...prevState,
          page: value,
        };
      });
  };

  const menu = (
    <Menu
      items={items}
      selectable={true}
      defaultSelectedKeys={[`${pagination.pageSize}`]}
      onSelect={onPageSizeSelect}
    />
  );
  const pageClickHandler = (event) => {
    event.preventDefault();
    setPagination((prevState) => {
      return {
        ...prevState,
        page: +event.target.innerText,
      };
    });
  };
  const pages = Array.from(
    { length: Math.ceil(count / pagination.pageSize) },
    (_, i) => (
      <li
        onClick={pageClickHandler}
        key={i + 1}
        className={i + 1 === pagination.page ? styles.selected : ''}
      >
        {i + 1}
      </li>
    )
  );
  const dots = <li>...</li>;

  const page_number_renderer = (current, pages) => {
    if (pages.length <= visiblePages + 2) {
      return <React.Fragment>{pages}</React.Fragment>;
    } else if (current <= visiblePages - 1) {
      return (
        <React.Fragment>
          {pages.slice(0, visiblePages)}
          {dots}
          {pages[pages.length - 1]}
        </React.Fragment>
      );
    } else if (pages.length - current <= visiblePages - 2) {
      return (
        <React.Fragment>
          {pages[0]}
          {dots}
          {pages.slice(pages.length - visiblePages, pages.length)}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {pages[0]}
          {dots}
          {pages.slice(current - 2, current + 1)}
          {dots}
          {pages[pages.length - 1]}
        </React.Fragment>
      );
    }
  };
  useEffect(
    () => props.getPagination(pagination),
    [pagination.page, pagination.pageSize]
  );
  return (
    <div className={`${styles.container} ${props.className}`}>
      <div className={styles['page-size']}>
        <span>{pagination.pageSize}</span>
        <Dropdown menu={menu} overlay={menu}>
          <Space>
            <UpOutlined className={styles['page-size-arrow']} />
          </Space>
        </Dropdown>
      </div>
      <ul className={styles['pages']}>
        {page_number_renderer(pagination.page, pages)}
      </ul>
      <div className={styles['go-to-page']}>
        <span>Go to</span>
        <input
          type="number"
          min="1"
          max={pages.length}
          onKeyPress={onPageEntered}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default Pagination;
