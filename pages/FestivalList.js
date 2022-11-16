import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';
import Layout from '../components/Layout';

const FestivalList = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  const nextid = useRef(11);

  useEffect(() => {
    axios
      .get('http://localhost:4000/')
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSave = (data) => {
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                Content: data.Content,
                period: data.period,
                website: data.website,
              }
            : row
        )
      );
    } else {
      setInfo((info) =>
        info.concat({
          id: nextid.current,
          name: data.name,
          Content: data.Content,
          period: data.period,
          website: data.website,
        })
      );
      nextid.current += 1;
    }
  };

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      Content: item.Content,
      period: item.period,
      website: item.website,
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  };

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  };

  return (
    <Layout>
      <div className="container max-w-screen-lg mx-auto">
        <div className="text-xl font-bold mt-5 mb-3 text-center">
          축제 정보 리스트
        </div>
        <table className="min-w-full table-auto text-gray-800">
          <thead className="justify-between">
            <tr className="bg-gray-800">
              <th className="text-gray-300 px-4 py-3">순서</th>
              <th className="text-gray-300 px-4 py-3">축제 이름</th>
              <th className="text-gray-300 px-4 py-3">축제 내용</th>
              <th className="text-gray-300 px-4 py-3">축제 기간</th>
              <th className="text-gray-300 px-4 py-3">축제 사이트</th>
              <th className="text-gray-300 px-4 py-3">Edit</th>
              <th className="text-gray-300 px-4 py-3">Delete</th>
            </tr>
          </thead>
          <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
        </table>
        <Post onSaveData={handleSave} />
        {modalOn && (
          <Modal
            selectedData={selected}
            handleCancel={handleCancel}
            handleEditSubmit={handleEditSubmit}
          />
        )}
      </div>
    </Layout>
  );
};
export default FestivalList;
