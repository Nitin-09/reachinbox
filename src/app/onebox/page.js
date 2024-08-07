'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Asidebar from '../Components/Asidebar';
import Navbar from '../Components/Navbar';
import AllMails from '../Components/AllMails';
import OneBox from '../Components/OneBox';
import Detail from '../Components/Detail';
import ReplyModal from '../Components/ReplyModal';
import NoMails from '../Components/NoMails';

function Page() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [data, setData] = useState(null);
  const [threadData, setThreadData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedThreadId, setSelectedThreadId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        console.error('Token is missing');
        return;
      }

      try {
        const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
          const errorData = await response.json();
          console.error('Error response data:', errorData);
          return;
        }

        const data = await response.json();
        setData(data); // Store data in state
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [token]);

  const handleMailClick = async (threadId) => {
    if (!token) {
      console.error('Token is missing');
      return;
    }

    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        return;
      }

      const threadData = await response.json();
      setThreadData(threadData);
      setSelectedThreadId(threadId);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleDeleteThread = async () => {
    if (!token || !selectedThreadId) {
      console.error('Token or thread ID is missing');
      return;
    }

    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThreadId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        return;
      }

      // Refetch data after deletion
      const fetchData = async () => {
        if (!token) {
          console.error('Token is missing');
          return;
        }

        try {
          const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            const errorData = await response.json();
            console.error('Error response data:', errorData);
            return;
          }

          const data = await response.json();
          setData(data); // Store data in state
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };

      setThreadData(null);
      setSelectedThreadId(null);
      fetchData();
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    console.log(isModalVisible)
  }, [threadData,isModalVisible])
  

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'd' || event.key === 'D') {
        handleDeleteThread();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [selectedThreadId]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'r' || event.key === 'R') {
        toggleModalVisibility();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <div className='bg-white dark:bg-black w-screen h-screen flex overflow-hidden'>
      <ReplyModal isVisible={isModalVisible} onClose={toggleModalVisibility} threadId={selectedThreadId} />
      <Asidebar />
      <div className='bg-white dark:bg-black h-full w-full'>
        <Navbar />
        {data?.data?.length == 0 ?
        (
          <div className='w-full h-full'>
            <NoMails></NoMails>
          </div>
        ) :
        (
        <div className='flex w-full flex-4'>
          <AllMails  data={data} onMailClick={handleMailClick} />
          <OneBox threadData={threadData} toggleModalVisibility={toggleModalVisibility} />
          <Detail data={data} />
        </div>
        )}
      </div>
    </div>
  );
}

export default Page;
