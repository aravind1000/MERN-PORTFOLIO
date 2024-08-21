import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import Experience from './AdminExperiences';
import Project from './AdminProjects';
import Contact from './AdminContact';
import { useSelector } from 'react-redux';


const { TabPane } = Tabs;

function Admin() {
  const { portfolioData } = useSelector((state) => state.root)

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login"
    }
  }, []);

  return (
    <div>
      <Header />
      <div className='flex gap-10 items-center px-5 py-2 justify-between'>
        <div className='flex gap-10 items-center'>
          <h1 className='text-3xl text-primary'>Portfolio Admin</h1>
        </div>
        <h1 className='underline text-primary text-xl cursor-pointer' onClick={
          () => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login"
          }}>Logout</h1>
      </div>
      {portfolioData && <div className='mt-5 p-5'>
        <Tabs defaultActiveKey='1'>
          <TabPane tab="Intro" key="1">
            <AdminIntro />
          </TabPane>
          <TabPane tab="About" key="2">
            <AdminAbout />
          </TabPane>
          <TabPane tab="Experiences" key="3">
            <Experience />
          </TabPane>
          <TabPane tab="Projects" key="4">
            <Project />
          </TabPane>
          <TabPane tab="Contact" key="5">
            <Contact />
          </TabPane>
        </Tabs>
      </div>

      }
    </div>
  )
};

export default Admin
